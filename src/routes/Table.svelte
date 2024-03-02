<script>
import { userInfoStore } from './Store.js';

	// userInfo.subscribe((data) => {
	// 	users = data
	// 	console.log(users)
	// })
	// let users = $userInfo
</script>

<table>
	<thead>
	<tr>
		<th>Jmeno</th>
		<th>Cislo obeda</th>
	</tr>
	</thead>
	<tbody>
	{#each Object.values($userInfoStore) as row}
		<tr>
			{#each Object.values(row) as cell}
				<td>{cell}</td>
			{/each}
		</tr>
	{/each}
	</tbody>
</table>

<style>
    table, th {
        border: 1px solid;
        border-collapse: collapse;
    }
</style>