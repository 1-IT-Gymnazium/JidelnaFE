<script>
	export let users;
	export let user;
	export let userScaned;


	// Define a reactive statement that runs whenever the user prop changes
	$: {
		const selectedRow = document.getElementById(user.id);

		if (selectedRow) {
			selectedRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<table>
	<tbody>
	{#if users}
	{#each users as user_, index}
		<tr class:alternate={(index % 2) === 0}>
			<td class:selectedOut={user_.id === user.id && userScaned === false}
					class:selected={userScaned === true && user_.id === user.id} id={user_.id} class="item-name item">
				<p>{user_.name}</p>
			</td>
			<td class:selectedOut={user_.id === user.id && userScaned === false}
					class:selected={userScaned === true && user_.id === user.id} class="item-lunch item">
				<p>{user_.lunches[0].type_of_lunch}</p>
			</td>
		</tr>
	{/each}
	{/if}
	</tbody>
</table>


<style lang="scss">
  * {
    margin: 0;
    font-size: 2.2vh;
    font-weight: 500;
  }

  table {
    margin-top: 2vh;
    border-collapse: collapse;
    width: 100%;
    color: #212129;
  }


  tr {
    font-weight: 400;
    width: 100%;
    height: 4vh;

    .item-name p {
      margin-left: 2vh;
    }

    .item-lunch p {
      text-align: end;
      margin-right: 2vh;
    }
  }

  .selectedOut {
    background-color: #fa2c55;
    color: white;
  }

  .selected {
    background-color: #bbeffa;
  }

  .alternate {
    background-color: #eef2f3;
  }
</style>