<script>
	import { countOut, countRest } from '$lib/count.js';

	$: countLunchesRest = $countRest;
	$: countLunchesOut = $countOut;

</script>

<div class="flex-container">
	<div class="item">
		<p class="main-content">{countLunchesOut}</p>
		<p class="static">Vydaných <br> obědů</p>
	</div>

	<div class="item">
		<p class="main-content">{countLunchesRest}</p>
		<p class="static">Zbývajících <br> obědů</p>
	</div>
</div>

<style lang="scss">
  .flex-container {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;

		.item {
			width: 50%;
		}

    .main-content {
      font-size: 5vh;
      font-weight: 600;
    }

    .static {
      color: #535361;
      font-weight: 500;
      font-size: 2vh;
    }

    p {
      margin: 0;
      text-align: center;
    }
  }
</style>