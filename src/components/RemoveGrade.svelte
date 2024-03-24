<script>
	import '../styles/global.css';
	import { deleteGrade } from '$lib/ApiService.js';
	import Modal from './Modal.svelte';
	let showModal = false;


	let grade = '';

	let response = '';


	async function handleClick() {
		response = await deleteGrade(grade);
		console.log(response);
	}
</script>


<div class="grid-container">
	<div class="item-1 item">
		<p>Odebrat třídu</p>
	</div>
	<div class="item-2 item">
		<input placeholder="Třída" bind:value={grade}>
	</div>

	<div class="item-5 item">
		<button on:click={() => {showModal = true}}>
			<i class="fi fi-br-delete"></i>
			Odebrat</button>
	</div>
</div>

<Modal bind:showModal data={grade}>
	<p>Odstranit třídu: {grade}</p>
</Modal>

<style lang="scss">
  .grid-container {
    display: grid;
    align-items: center;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(8, 1fr);

    .item {
      width: 90%;
      justify-self: start;
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

    .item-5 {
      grid-column: 7;
      grid-row: 2;
      margin-left: 12vh;
      button {
        border-style: none;
        background-color: #fa3054;
        border-radius: 20px;
        height: 4vh;
        color: white;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1vh;
        .fi {
          color: white;
        }
      }
      button:hover {
        background-color: rgba(250, 48, 84, 0.76);
      }
    }
  }

</style>