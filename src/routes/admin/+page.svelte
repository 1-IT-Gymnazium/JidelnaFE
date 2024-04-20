<script>
import Admin from '../../components/admin panel/Admin.svelte';
import Login from '../../components/admin panel/Login.svelte';
import user from '$lib/user.js';

$: isLoggedIn = $user === null ? false : true;

</script>

{#if isLoggedIn}
	<Admin />
	{:else}
	<Login />
{/if}



