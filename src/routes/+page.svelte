<script>
	import {onDestroy, onMount} from 'svelte'
	import {browser} from '$app/environment'

	let name = ''
	let lunch = ''

	const load = async (id) => {
		try {
			const response = await fetch(`http://127.0.0.1:8000/users/${id}`)
			return await response.json()
		} catch (error) {
			console.error('Error fetching data:', error)
			return null
		}
	}

	onMount(() => {
		if(!browser) return
		window.addEventListener('keydown', handeKeyDown)
	})

	onDestroy(() =>{
		if(!browser) return
		window.removeEventListener('keydown', handeKeyDown)
	})

	const handeKeyDown = async (e) => {
		console.log(e.key)
		const data = await load(e.key)
		if (data) {
			// If data is retrieved successfully, update the name variable
			name = data.name;
			lunch = data.lunches[0].type_of_lunch

		} else {
			name = ''
			lunch = ''
		}
	}
</script>



<div>
	<h1>Jmeno: {name}</h1>
	<h2>Cislo obeda: {lunch}</h2>
</div>
