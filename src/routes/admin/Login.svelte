<script>
	import user from './user.js';

	let name = ''
	let password = ''
	let currentError = null

	const login = async () => {
		await fetch(`http://127.0.0.1:8000/login`, {
			method: 'POST',
			headers: {
				'accept' : 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({name:name, password:password})
		})
			.then( (res) => {
				if (res.status < 299) return res.json()
				if (res.status > 299) currentError = "Something went wrong with the server"
			})
			.then((data) => {
				if(data) user.update(function(val) {
					return {...val, ...data}
				})
			})
			.catch((error) => {
				currentError = error
				console.log("Error loggin in: ", currentError)
			})
	}
</script>

<form on:submit|preventDefault={login}>
	<div>
		<label for="name">Username</label>
		<input type="text" id="name" bind:value={name}>
	</div>
	<div>
		<label for="password">Password</label>
		<input type="password" id="password" bind:value={password}>
	</div>
	<button type="submit">Submit</button>
</form>