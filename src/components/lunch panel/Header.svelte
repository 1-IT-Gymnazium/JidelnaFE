<script>
	import '../../styles/global.css';

	let currentDate = new Date();
	let [month, day, year] = currentDate.toLocaleDateString().split('/');
	currentDate = `${day}/${month}/${year}`;
</script>


<div class="flex-container">
	<div class="item-1">
		<p>Výdejový systém bědů</p>
	</div>

	<div class="item-2">
		<i class="fi fi-br-clock"></i>
		<p>{currentDate}</p>
	</div>

	<div class="item-3">
		<img src="../../../static/1itglogo.png" alt="ITlogo">
	</div>
</div>

<style lang="scss">
  * {
    margin: 0;
  }

  .flex-container {
    height: 6vh;
    background-color: white;
    color: #212129;
    font-weight: 400;
    border-radius: 5px;
    margin: 3vh;

    display: flex;
    align-items: center;

    .item-1 {
      p {
        width: 100%;
      }

      margin-left: 2vh;
      padding-right: 2vh;
      font-weight: 600;
      border-right: 1px solid #e3e3e3;
    }

    .item-2 {
      display: flex;
      align-items: center;

      .fi, .fi::before {
        font-size: 3vh;
        margin: 0 1.2vh 0 1vh;
      }
    }

    .item-3 {
      margin-left: auto;
      margin-right: 2vh;
      display: flex;

      img {
        height: 3vh;
      }
    }
  }

</style>