<script>
	import { deletUser, deleteGrade } from '$lib/ApiService.js';
	import '../styles/global.css';
	import page from '$lib/page.js';
	import Notification from './Notification.svelte'
	import { writable } from 'svelte/store';


	$: whatPage = $page
	export let showModal; // boolean
	export let data;
	export let name;

	let response = '';

	async function clickDeleteUser() {
		response = await deletUser(data);
		addNotification(`${name} úspěšně odebrán`, 'success')
		console.log(response);
	}
	async function clickDeleteGrade() {
		response = await deleteGrade(data);
		addNotification(`třída ${data}, byla úspěšně odebrána`, 'success')
		console.log(response);
	}

	const notifications = writable([]);

	function addNotification(message, type) {
		notifications.update(arr => [...arr, { message, type }]);
	}

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="grid-container">
		<div class="item-1 item">
			<slot />
		</div>
		<div class="item-2 item">
			<button on:click={() => dialog.close()}>Zrušit</button>
		</div>
		<div class="item-3 item">
			{#if whatPage === "Žáci"}
				<button on:click={() => dialog.close()} on:click={clickDeleteUser}>
					<i class="fi fi-br-delete"></i>
					Odebrat
				</button>
				{:else}
				<button on:click={() => dialog.close()} on:click={clickDeleteGrade}>
					<i class="fi fi-br-delete"></i>
					Odebrat
				</button>
				{/if}
		</div>

	</div>
</dialog>

{#each $notifications as notification, index}
	<Notification
		key={index}
		message={notification.message}
		type={notification.type}
		on:remove={() => notifications.update(arr => arr.filter((_, i) => i !== index))}
	/>
{/each}

<style lang="scss">
  dialog {
    max-width: 32em;
    border-radius: 1vh;
    border: none;
    padding: 0;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  .grid-container {
    margin: 2vh;
    width: 30vh;
    height: 20vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

		.item {
      align-self: center;
      justify-self: center;
		}
		button {
			width: 12vh;
			height: 4vh;
      display: flex;
      align-items: center;
      justify-content: center;
			border-radius: 20vh;
      border: none;
		}

    .item-1 {
			margin-top: 3vh;
			grid-row: 1;
			grid-column: span 2;
    }
		.item-2 {
			margin-top: 3vh;
			grid-row: 2;
			grid-column: 1;

			button {
				background-color:  #e1e9ec;
				color: #525254;
			}
			button:hover {
        background-color: rgba(225, 233, 236, 0.51);
			}
		}
		.item-3 {
			margin-top: 3vh;
			grid-row: 2;
			grid-column: 2;

			button {
        background-color: #fa3054;
        color: white;
        .fi {
          margin-right: 1vh;
					color: white;
        }
			}
			button:hover {
        background-color: rgba(250, 48, 84, 0.78);
			}
		}
  }

  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  button {
    display: block;
  }
</style>
