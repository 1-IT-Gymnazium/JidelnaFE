<script>
	import '../../../styles/global.css';
	import { uploadUser } from '../../ApiService.js';

	let id = '';
	let name = '';
	let grade = '';
	let response = '';


	async function handleClick() {
		response = await uploadUser(id, name, grade);
		console.log(response);
	}
</script>


<div class="grid-container">
	<div class="item-1 item">
		<p>Přidat uživatele</p>
	</div>
	<div class="item-2 item">
		<input bind:value={name} placeholder="Jméno">
	</div>

	<div class="item-3 item">
		<input bind:value={id} placeholder="Isic">
	</div>
	<div class="item-4 item">
		<input bind:value={grade} placeholder="Třída">
	</div>
	<div class="item-5 item">
		<button on:click={handleClick}>
			<i class="fi fi-br-add"></i>
			Přídat</button>
	</div>
</div>


<style lang="scss">
  .grid-container {
    display: grid;
		align-items: center;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(8, 1fr);

    .item {
      width: 90%;
			justify-self: start;
			//height: 10vh;
			input {
				width: 100%;
				border-radius: 20px;
				height: 4vh;
				border: 1px solid #c5c5c5;
				background-color: #e1e9ec;
				padding-left: 3vh;
			}
			input:hover {
        background-color: rgba(225, 233, 236, 0.59);
			}
    }

    .item-1 {
			margin-left: 3vh;
      grid-column: span 2;
      grid-row: 1;
			p {
				font-weight: 500;
			}
    }

    .item-2 {
      grid-row: 2;
      grid-column: span 2;
			margin-left: 3vh;
    }

    .item-3 {
      grid-column: span 2;
      grid-row: 2;
			margin-left: 6vh;
    }

    .item-4 {
      grid-column: span 2;
      grid-row: 2;
			margin-left: 9vh;
    }

    .item-5 {
      grid-column: 7;
      grid-row: 2;
			margin-left: 12vh;
			button {
        border-style: none;
				background-color: #46bf7f;
				border-radius: 20px;
				height: 4vh;
				color: white;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1vh;
				.fi {
					width: 3vh;
					color: white;
				}
			}
			button:hover {
        background-color: rgba(70, 191, 127, 0.66);
			}
    }
  }

</style>