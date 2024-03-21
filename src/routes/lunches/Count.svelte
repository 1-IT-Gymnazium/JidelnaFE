<script>
	import { countOut, countRest } from './count.js';

	$: countLunchesRest = $countRest
	$: countLunchesOut = $countOut

</script>

<div class="grid-container">
	<div class="item-1 item">
		<p class="main-content">{countLunchesOut}</p>
		<p class="static">Vydaných <br> obědů</p>
	</div>

	<div class="item-2 item">
		<p class="main-content">{countLunchesRest}</p>
		<p class="static">Zbývajících <br> obědů</p>
	</div>
</div>

<style lang="scss">
	.grid-container {
			display: grid;
			height: 100%;
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
			justify-content: center;
			.item {
					justify-self: center;
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
	}
</style>