<script>
import Admin from './Admin.svelte';
import Login from './Login.svelte';
import user from './user.js';

$: isLoggedIn = $user === null ? false : true;

</script>

{#if isLoggedIn}
	<Admin />
	{:else}
	<Login />
{/if}

