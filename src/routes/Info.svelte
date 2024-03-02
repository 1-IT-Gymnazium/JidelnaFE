<script>
	import {onDestroy, onMount} from 'svelte'
	import {browser} from '$app/environment'
	import { load } from './ApiService.js';
	import Table from './Table.svelte';
	import { userInfoStore } from './Store.js';
	import { addUserAndLunch, getUserById } from './Store.js';

	let isicId = ''
	let name = ''
	let lunch = ''
	let data = ''
	let userExists = false
	let userWithLunchOut = ''


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
			data = await load(isicId)

			if (data) {
				name = data.name;
				lunch = data.lunches[0].type_of_lunch

				$userInfoStore.forEach(user => {
					if(user.id === isicId) {
						userExists = true
					}
				})

				if (userExists === false) {
					addUserAndLunch(name, lunch, isicId, userExists)
					userWithLunchOut = null
				} else {
					lunch = lunch + ', obded byl vsak jiz vydan.'
					userWithLunchOut =  getUserById(isicId)
					console.log(userWithLunchOut)
				}
				userExists = false
				isicId = ''
			}
		} else {
			isicId += e.key
			console.log(isicId)
		}
	}
</script>



<div>
	<h1>Jmeno: {name}</h1>
	<h2>Cislo obeda: {lunch}</h2>
</div>

{#if data}
<Table user={userWithLunchOut}/>
{/if}