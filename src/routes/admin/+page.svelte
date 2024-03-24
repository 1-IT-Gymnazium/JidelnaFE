<script>
import Admin from '../../components/Admin.svelte';
import Login from '../../components/Login.svelte';
import user from '$lib/user.js';
import '../../styles/global.css';

$: isLoggedIn = $user === null ? false : true;

</script>

{#if isLoggedIn}
	<Admin />
	{:else}
	<Login />
{/if}



