<script>
	import user from '$lib/user.js';

	let name = '';
	let password = '';
	let currentError = null;

	const login = async () => {
		await fetch(`http://127.0.0.1:8000/admins/login`, {
			method: 'POST',
			headers: {
				'accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name: name, password: password })
		})
			.then((res) => {
				if (res.status < 299) return res.json();
				if (res.status > 299) currentError = 'Something went wrong with the server';
			})
			.then((data) => {
				if (data) user.update(function(val) {
					return { ...val, ...data };
				});
			})
			.catch((error) => {
				currentError = error;
				console.log('Error loggin in: ', currentError);
			});
	};

</script>


<div class="bg-image"></div>

<div class="flex-container">

	<div class="flex-container-2">

		<div class="header">
			<img class="item-1" src="/1itglogo.png" alt="ITlogo">
			<p class="item-2">Přihlášení do <br> administrátorské sekce</p>
		</div>

		<form on:submit|preventDefault={login}>

			<div class="content">
				<div class="username">
					<input type="text" id="name" placeholder="Uživatelské jméno" bind:value={name}>
				</div>

				<div class="password">
					<input type="password" id="password" placeholder="Heslo" bind:value={password}>
				</div>
			</div>

			<div class="submit">
				<button type="submit">Přihlásit se</button>
			</div>

		</form>

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
    background-image: url("/1itBudova.jpeg");
    filter: blur(15px);
    z-index: -1;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .flex-container-2 {
      width: 45vh;
      height: 50vh;
      background: white;
      border-radius: 5px;

      .header {
        display: grid;
        grid-template-rows: repeat(1, 2fr);
        align-items: center;
        justify-content: center;
        margin-top: 3vh;
        margin-bottom: 4vh;


        .item-1 {
          border-radius: 3px;
          height: 3vh;
          width: auto;
          justify-self: center;
          margin: 2vh 0 2vh 0;
        }

        .item-2 {
          text-align: center;
					font-weight: 600;
        }

      }
      .content {
				display: grid;
				justify-content: center;
				grid-template-rows: (2, 1fr);
				height: 100%;
				.username {
					margin-bottom: 2vh;
				}
				input::placeholder {
          color: #27292e;
				}
				input:hover {
					background-color: rgba(224, 232, 236, 0.61);
				}
				input {
					background-color: #e0e8ec;
					border: 1px solid #cdcfd0;
					border-radius: 20px;
					height: 4vh;
					width: 35vh;
					padding-left: 2vh;

				}
      }
			.submit {
				display: grid;
				margin-top: 8vh;
				justify-content: center;
				button {
					border: none;
					height: 4vh;
					width: 37vh;
					border-radius: 20px;
					background-color: #00afef;
          color: white;
				}
				button:hover {
					background-color: rgba(0, 175, 239, 0.8);
				}
			}
    }
  }
</style>