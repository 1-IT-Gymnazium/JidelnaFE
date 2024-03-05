<script>
export let users
export let user

</script>

<table>
	<thead>
	<tr>
		<th>Jmeno</th>
		<th>Cislo obeda</th>
	</tr>
	</thead>
	<tbody>
	{#each users as user_}
		{#if user_.id == user.id}
			<tr>
				<td class="highlighted">{user.name}</td>
				<td class="highlighted">{user.lunches[0].type_of_lunch}</td>
			</tr>
		{:else}
			<tr>
				<td>{user_.name}</td>
				<td>{user_.lunches[0].type_of_lunch}</td>
			</tr>
		{/if}
	{/each}
	</tbody>
</table>

<style>
    table, th {
        border: 1px solid;
        border-collapse: collapse;
    }

    .highlighted {
        background: red; /* Change to whatever style you want */
    }
</style>