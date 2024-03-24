<script>

	import Td from './Td.svelte';

	export let users;
	export let user;
	export let userScaned;

</script>




<table>
	<tbody>
	{#if users}
		{#each users as user_, index}
			<tr class:alternate={(index % 2) === 0}>
				<Td user={user} user_={user_} userScaned={userScaned} name={true} />
				<Td user={user} user_={user_} userScaned={userScaned} name={false} />
			</tr>
		{/each}
	{/if}
	</tbody>
</table>


<style lang="scss">
  * {
    font-size: 2.2vh;
    font-weight: 500;
  }

  table {
    margin-top: 2vh;
    border-collapse: collapse;
    width: 100%;
    color: #212129;

    tr {
      font-weight: 400;
      width: 100%;
      height: 4vh;
    }

    .alternate {
      background-color: #eef2f3;
    }
  }
</style>