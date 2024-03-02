<script>
import { userInfoStore } from './Store.js';
export let user

console.log(user)

</script>

<table>
	<thead>
	<tr>
		<th>Jmeno</th>
		<th>Cislo obeda</th>
	</tr>
	</thead>
	<tbody>
	{#each $userInfoStore as {name, lunch, id}}
		{#if user && user.id == id}
			<tr>
				<td class="highlighted">{name}</td>
				<td class="highlighted">{lunch}</td>
			</tr>
		{:else}
			<tr>
				<td>{name}</td>
				<td>{lunch}</td>
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