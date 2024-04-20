<script>
	import { getUsersCount } from '$lib/ApiService.js';
	import { onMount } from 'svelte';
	import '../../styles/global.css';

	let count = 0;


	onMount(() => {
		loadCount();
	});


	let currentDate = new Date();
	let [month, day, year] = currentDate.toLocaleDateString().split('/');
	currentDate = `${day}/${month}/${year}`;
	const loadCount = async () => {
		count = await getUsersCount();
		console.log(count)
	};
	$: {
		loadCount();
	}
</script>

<div class="flex-container">
	<div class="item-1 item">
		<p>Žáci v systému</p>
	</div>
	<div class="item-2 item">
		<p>•</p>
	</div>
	<div class="item-3 item">
		<p>{count}</p>
	</div>
	<div class="item-4 item">
		<div class="flex-container-2">
			<i class="fi fi-br-clock"></i>
			<p>{currentDate}</p>
		</div>
	</div>
</div>


<style lang="scss">
  .flex-container {
    display: flex;
    align-content: center;
    border: 1px solid #c5c5c5;
    border-radius: 10px;
    height: 8vh;

    .item {
      align-self: center;
      align-content: center;
      margin: 1vh 0 1vh 0;


      p {
        margin: 0;
        align-self: center;
      }
    }

    .item-1 {
      margin: 0 2vh 0 2vh;

      p {
        font-weight: 600;
        font-size: 2vh;
      }
    }

    .item-2 {
      margin-right: 2vh;

      p {
        margin: 0;
        color: #c5c5c5;
        font-size: 2vh;
      }
    }

    .item-3 {
      margin-right: 2vh;
    }

    .item-4 {
      margin-left: auto;
    }

    .flex-container-2 {
      display: flex;
      border-style: none;
      width: 20vh;
      align-items: center;
      justify-content: end;
      margin-right: 2vh;

      .fi {
        font-size: 3vh;
        width: 5vh;
      }
    }
  }
</style>
