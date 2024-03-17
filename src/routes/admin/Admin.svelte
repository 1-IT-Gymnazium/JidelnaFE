<script>

	import { uploadUser } from '../ApiService.js';
	import user from './user.js';

	let id = ''
	let name = ''
	let response = ''

	async function handleClick () {
		response = await uploadUser(id, name)
	}
	const logout = () => {
		user.update(() => null);
	}
</script>


<div>
	<h1>Jmeno</h1>
	<input bind:value={name}>
	<h1>Isic</h1>
	<input bind:value={id}>
	<br>
	<button on:click={handleClick}>submit</button>
</div>

<input type="button" value="Logout" on:click={logout}>

<style>
    button {
        width: 100px;
        height: 100%;
    }
</style>