<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap">
</svelte:head>

<script>
	import {onDestroy, onMount} from 'svelte'
	import {browser} from '$app/environment'
	import { loadUser, loadUsers, loadUsersWithLunchOut } from '../ApiService.js';
	import Table from './Table.svelte';

	let isicId = ''
	let name = ''
	let lunch = ''
	let data = ''
	let typeOfLunch = ''
	let susUsers = ''
	let users = ''
	let susUser = ''


	onMount(() => {
		if(!browser) return
		window.addEventListener('keydown', handleIsic)
	})

	onDestroy(() =>{
		if(!browser) return
		window.removeEventListener('keydown', handleIsic)
	})

	const handleIsic = async (e) => {
		if (e.key === 'Enter') {

			data = await loadUser(isicId)
			users = await loadUsers()
			susUsers = await loadUsersWithLunchOut()
			susUser = ''

			// if user tries to scan isic second time, it will show in the table of scanned users
			if (susUsers.length > 0) {
				susUsers.forEach(user => {
					if (user.id === isicId) {
						susUser = user
					}
				})
			}

			if (data) {

				name = data.name;
				lunch = data.lunches[0]
				typeOfLunch = lunch.type_of_lunch

				if (lunch.lunch_out === 2 && typeOfLunch > 0) {
					typeOfLunch ='Oběd byl již vydán.'
				}
				if (typeOfLunch === 0){
					typeOfLunch = 'Nemá obědnaný oběd.'
				}

				isicId = ''

			} else {

				name = ''
				lunch = ''
				typeOfLunch = ''

			}
		} else {
			isicId += e.key
			console.log(isicId)
		}
	}
</script>



<div class="grid-container">
	<div class="item-1 item">
		<h1>Jmeno: {name}</h1>
		<h2>Cislo obeda: {typeOfLunch}</h2>
	</div>
	<div class="item-2 item">
		<h1>jiz vydane obedy</h1>
		{#if data}
			<Table users={users} user={susUser}/>
		{/if}
	</div>
	<div class="item-3 item">
		<h1>vydanych obedu</h1>
	</div>
</div>


<style>
		* {
        font-family: 'Maven Pro', sans-serif;
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
	.item {
			background-color: white;
			border-radius: 1vh;
	}


</style>