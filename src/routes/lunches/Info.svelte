<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap">
</svelte:head>

<script>
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { loadUser, loadUsers, loadUsersWithLunchOut, getLunchesRest, getLunchesOut } from '../ApiService.js';
	import Table from './Table.svelte';
	import Count from './Count.svelte';
	import '../../styles/global.css';
	import { countOut, countRest } from './count.js';


	let isicId = '';
	let name = '';
	let lunch = '';
	let data = '';
	let typeOfLunch = '';
	let susUsers = '';
	let users = '';
	let susUser = '';
	let lunchOut = 0;
	let countR = 0;
	let countO = 0;
	let userScaned = false;



	onMount(() => {
		if (!browser) return;
		window.addEventListener('keydown', handleIsic);
		loadTableData()
	});

	onDestroy(() => {
		if (!browser) return;
		window.removeEventListener('keydown', handleIsic);
	});

	// onMount(loadTableData)
	async function loadTableData() {
		users = await loadUsers();
		countR = await getLunchesRest();
		countO = await getLunchesOut();
		countRest.set(countR);
		countOut.set(countO);
	}

	const handleIsic = async (e) => {
		if (e.key === 'Enter') {

			data = await loadUser(isicId);
			users = await loadUsers();
			susUsers = await loadUsersWithLunchOut();
			countR = await getLunchesRest();
			countO = await getLunchesOut();

			countRest.set(countR);
			countOut.set(countO);
			susUser = '';

			if (data !== 0) {

				// if user tries to scan isic second time, it will show in the table of scanned users
				if (susUsers.length > 0) {
					susUsers.forEach(user => {
						if (user.id === isicId) {
							susUser = user;
							userScaned = false;
						}
					});
				}
				if (susUser === '') {
					userScaned = true;
					susUser = data;
				}

				name = data.name;
				lunch = data.lunches[0];
				typeOfLunch = lunch.type_of_lunch;
				lunchOut = 0

				if (lunch.lunch_out === 2) {
					lunchOut = 1;
				}
				if (typeOfLunch === 0) {
					typeOfLunch = 'Nemá obědnaný oběd.';
					lunchOut = 0;
				}

				isicId = '';

			} else {
				isicId = '';
			}
		} else {
			isicId += e.key;
			console.log(isicId);
		}
	};
</script>


<div class="grid-container">

	<div class="item-1 item grid-container-info">
		{#if data}
			<div class="item-info-1 item-info">

				<div class="item-lunchout">
					<p class:selected={lunchOut===1} class="item-lunch">{typeOfLunch}</p>
					{#if (lunchOut === 1)}
						<p class="item-lunchout-1">Obed jiz vydan</p>
					{/if}
				</div>
				<p class="item-name">{name}</p>

			</div>
		{:else if data === 0}
			<div class="item-info-3 item-info">
				<p>Žák neexistuje</p>
			</div>
		{:else}
			<div class="item-info-2 item-info">
				<i class="fi fi-br-credit-card"></i>
				<p>Čeká se na přiložení ISIC karty.</p>
			</div>
		{/if}
	</div>

	<div class="item-2 item grid-container-table">
		<div class="item-table-1">
			<p>Již vydané obědy</p>
		</div>

		<div class="item-table-2">
			{#if data === 0 || data || users}
				<Table users={users} user={susUser} userScaned={userScaned} />
			{:else}
				<div class="static">
					<i class="fi fi-br-list"></i>
					<p>Seznam je prázdný</p>
				</div>
			{/if}
		</div>
	</div>

	<div class="item-3 item">
		<Count />
	</div>

</div>


<style lang="scss">

  * {
    margin: 0;
    padding: 0;
  }

  .grid-container {
    height: 100%;
    border-radius: 1vh;
    margin-right: 3vh;
    margin-left: 3vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);


    .item {
      background-color: white;
      border-radius: 1vh;
    }

    .item-1 {
      grid-column: span 2;
      grid-row: span 3;
      margin: 0 1.5vh 0 0;
    }

    .item-2 {
      grid-column: 3;
      grid-row: span 2;
      margin: 0 0 1.5vh 1.5vh;
    }

    .item-3 {
      grid-column: 3;
      grid-row: 3;
      margin: 1.5vh 0 0 1.5vh;

    }

    .grid-container-info {
      display: grid;

      .item-info-1 {
        .item-lunchout {
          margin-bottom: 2vh;
        }

        .item-lunchout-1 {
          font-weight: 500;
          color: #fa2c55;
        }

        .item-lunch {
          font-weight: 700;
          font-size: 10vh;
        }

        .item-name {
          font-size: 6vh;
          font-weight: 600;
          color: #535361;
        }

        p.selected {
          color: #fa2c55;
        }
      }

      .item-info-2 {
        font-weight: 600;
        font-size: 2vh;

        .fi, .fi::before {
          margin-bottom: 1vh;
          font-size: 4vh;
        }
      }
			.item-info-3 {
				font-size: 5vh;
				font-weight: 500;
			}

      .item-info {
        justify-self: center;
        align-self: center;
        text-align: center;
      }
    }

    .grid-container-table {
      display: grid;
      grid-template-rows: 6vh auto;

      .item-table-1 {
        margin: 0 2vh 0 2vh;
        border-bottom: 1px solid #58595a;
        padding: 2vh 0 2vh 0;
      }

      .item-table-2 {
        max-height: 100%;
        overflow-y: auto;

        .static {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .fi {
            margin-bottom: 1vh;
            font-size: 3vh;
            color: #01b1ef;
          }
        }
      }
    }

  }


</style>