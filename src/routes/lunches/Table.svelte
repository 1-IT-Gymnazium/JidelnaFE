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
		<tr>
			<td class:selected={user_.id === user.id}>{user_.name}</td>
			<td class:selected={user_.id === user.id}>{user_.lunches[0].type_of_lunch}</td>
		</tr>
	{/each}
	</tbody>
</table>

<style>
    table, th {
        border: 1px solid;
        border-collapse: collapse;
    }

    td.selected {
        background: red;
    }
</style>