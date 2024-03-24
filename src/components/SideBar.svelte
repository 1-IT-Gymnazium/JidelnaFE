<script>
	import user from '$lib/user.js';
	import page from '$lib/page.js';

	const logout = () => {
		user.update(() => null);
	};

	const changePageToStudents = () => {
		page.update(() =>"Žáci")
	}
	const changePageToGrades = () => {
		page.update(() => "Třídy")
	}
</script>

<div class="flex-container">

	<div class="grid-container-1">
		<div class="item-1-1">
			<img src="../../static/1itglogo.png" alt="ITlogo">
		</div>
		<div class="item-1-2">
			<p>Administrátorská <br> sekce</p>
		</div>

	</div>

	<div class="grid-container-2">
		<div class="item-2-1 item-2">
			<button on:click={changePageToStudents}>Žáci</button>
		</div>
		<div class="item-2-2 item-2">
			<button on:click={changePageToGrades}>Třídy</button>
		</div>
	</div>

	<div class="grid-container-3">
		<div class="item-3-1">
			<button value="Logout"  on:click={logout}>
				<i class="fi fi-br-sign-out-alt"></i>
				ODHLÁSIT SE</button>
		</div>

	</div>

</div>

<style lang="scss">
		.flex-container {
			background-color: #202d33;
			display: flex;
			flex-direction: column;
			justify-content: start;
			align-items: center;
			height: 100%;
			width: 100%;

			.grid-container-1 {
				height: 20vh;
				display: grid;
				align-items: center;
				justify-content: center;
				margin-bottom: 3vh;
          .item-1-1 {
            margin-top: 3vh;
						justify-self: center;
            img {
              height: 3.5vh;
              width: auto;
              object-fit: fill;
            }
          }
				.item-1-2 {
					p {
						color: white;
						text-align: center;
						font-weight: 500;
						font-size: 2vh;
					}
				}
			}

			.grid-container-2 {
				height: 60vh;
				display: flex;
				flex-direction: column;
				width: 80%;
				border-top: 1px solid #353d45;
				border-bottom: 1px solid #353d45;
				//grid-row-gap: 2vh;

				.item-2 {
					height: 5vh;
				}

				.item-2-1 {
					margin-top: 5vh;
				}
				.item-2-2 {
					margin-top: 3vh;
				}
				button {
					width: 100%;
					height: 100%;
					color: white;
					background-color: #202d33;
					border: 1px solid #949798;
					border-radius: 5px;
					//background-color: 0;
				}
				button:hover {
          background-color: #2b3841;
				}
			}

			.grid-container-3 {
				height: 20vh;
				display: flex;
				width: 100%;
				justify-content: center;
				align-content: center;

				.item-3-1 {
					width: 80%;
					margin-top: 6vh;

          button {
            height: 4vh;
            width: 100%;
						background-color: #fa3054;
						border-style: none;
						border-radius: 20px;
						display: flex;
            align-items: center;
						color: white;
						.fi {
							width: 7vh;
							color: white;
							//margin: 0 2vh 0 2vh;
						}
          }
          button:hover {
            background-color: rgba(250, 48, 84, 0.74);
          }
				}

			}
		}

</style>