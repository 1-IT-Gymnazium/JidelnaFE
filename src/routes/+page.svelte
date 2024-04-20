<script>
	import '../styles/global.css';
</script>

<div class="bg-image"></div>

<div class="flex-container">

	<div class="grid-container">
		<div class="header">
			<img class="item-1" src="../../../static/1itglogo.png" alt="ITlogo">
		</div>

		<div class="grid-container-2">
			<div class="item-1 item">
				<a href="/lunches">
					<i class="fi fi-br-grid"></i>
					VÝDEJOVÝ PANEL
				</a>
			</div>

			<div class="item-2 item">

				<a href="/admin">
					<i class="fi fi-br-pencil"></i>
					ADMINISTRÁTORKÁ<br>
					SEKCE
				</a>
			</div>
		</div>

	</div>

</div>

<style lang="scss">
  .bg-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url("../../static/1itBudova.jpeg");
    filter: blur(15px);
    z-index: -1;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .header {
      display: grid;
    }

    .grid-container {
      font-weight: 600;
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      width: 55vh;
      height: 40vh;
      border-radius: 5px;
      background-color: white;

      .grid-container-2 {
        grid-row: 2 span;
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(2, 1fr);

        .item {
          height: 80%;
          margin: 0 2vh 0 2vh;
          border-radius: 5px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          border: 2px solid #1eb6f1;

          text-align: center;

          i {
            margin-bottom: 1vh;
          }
					a:hover {
						background-color: #efefef;
					}

          a {
            text-decoration: none;
            color: #1eb6f1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }

      }

      .header {
        img {
          border-radius: 3px;
          height: 4vh;
          margin-top: 4vh;
          width: auto;
          justify-self: center;
          align-self: start;
        }
      }

    }

  }
</style>