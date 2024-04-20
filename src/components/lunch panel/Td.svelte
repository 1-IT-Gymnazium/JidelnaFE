<script>
	export let user;
	export let user_;
	export let userScaned;

	export let name;

	$: {
		const selectedRow = document.getElementById(user.id);

		if (selectedRow) {
			selectedRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

</script>

<td class:selectedOut={user_.id === user.id && userScaned === false}
		class:selected={userScaned === true && user_.id === user.id} id={user_.id}>
	{#if name}
		<p class="name">{user_.name}</p>
	{:else}
		<p class="lunch">{user_.lunches[0].type_of_lunch}</p>
	{/if}
</td>

<style>
    * {
        margin: 0;
    }

    .selectedOut {
        background-color: #fa2c55;
        color: white;
    }

    .selected {
        background-color: #bbeffa;
    }

    .name {
        margin-left: 2vh;
    }

    .lunch {
        text-align: end;
        margin-right: 2vh;
    }
</style>