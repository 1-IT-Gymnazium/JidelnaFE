<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap">
</svelte:head>

<script>
	let currentDate = new Date()
	let [month, day, year] = currentDate.toLocaleDateString().split('/')
	currentDate = `${day}/${month}/${year}`
</script>


<div class="grid-container">

	<div class="item-1">
		<p>Výdejový systém bědů</p>
	</div>

	<div class="item-2">
		<i class="fi fi-br-clock"></i>
		<p>{currentDate}</p>
	</div>

	<div class="grid-end">
			<img class="item-3" src="../../../static/1itglogo.png" alt="ITlogo">
	</div>

</div>

<style lang="scss">
  * {
    margin: 0;
  }

  .grid-container {
    height: 6vh;
    display: grid;
    grid-template-columns:repeat(5, minmax(100px, 1fr)); /* Adjust width as needed */
    grid-template-rows: 6vh; /* Adjust height as needed */
    gap: 1vh; /* Adjust gap between items */
    background-color: white;
    border-radius: 5px;
    align-items: center;
    margin: 3vh;
    color: #212129;
    font-weight: 400;

    .item-1 {
      grid-column: 1;
      font-weight: 600;
      grid-row: 1;
      margin-left: 2vh;
      border-right: 1px solid #e3e3e3;
    }

    .item-2 {
      grid-column: span 2;
      grid-row: 1;
			display: flex;
			align-items: center;
			height: 100%;
      .fi, .fi::before{
        font-size: 3vh;
				margin: 0 1.2vh 0 1vh;
      }
    }

    .grid-end {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column: 5;
      align-items: center;

      .item-3 {
        grid-column: 2;
        grid-row: 1;
        height: 3vh;
        width: auto;
        object-fit: fill;
				margin-left: 5vh;
      }
    }
  }


</style>