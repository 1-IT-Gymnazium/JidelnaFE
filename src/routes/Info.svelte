<script>
	import {onDestroy, onMount} from 'svelte'
	import {browser} from '$app/environment'
	import { loadUser, loadUsers, loadUsersWithLunchOut } from './ApiService.js';
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
			console.log(susUsers.length)
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

				if (lunch.lunch_out === 2) {
					typeOfLunch = typeOfLunch + ', obded byl vsak jiz vydan.'
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



<div>
	<h1>Jmeno: {name}</h1>
	<h2>Cislo obeda: {typeOfLunch}</h2>
</div>

{#if data}
<Table users={users} user={susUser}/>
{/if}