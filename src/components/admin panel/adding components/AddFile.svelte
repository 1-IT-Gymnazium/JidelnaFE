<script>
	import { FileDrop } from 'svelte-droplet';
	import * as XLSX from 'xlsx';
	import { uploadUser } from '$lib/ApiService.js';
	import Notification from '../Notification.svelte';
	import { writable } from 'svelte/store';

	const notifications = writable([]);
	let grade = 0
	let response = '';
	function addNotification(message, type) {
		notifications.update(arr => [...arr, { message, type }]);
	}

	function handleFiles(files) {
		const reader = new FileReader();
		reader.onload = async function(e) {
			const data = new Uint8Array(e.target.result);
			const workbook = XLSX.read(data, { type: 'array' });
			const sheet = workbook.Sheets[workbook.SheetNames[0]];

			let jsonData = XLSX.utils.sheet_to_json(sheet);
			for (let entry of jsonData) {
				entry.id = String(entry.id);
				grade = entry.grade
				try {
					response = await uploadUser(entry.id, entry.name, entry.grade);
					console.log(response);
				} catch (error) {
					console.error('Upload failed for:', entry.id, error);
				}
			}
			if (response) {
				addNotification(`Ročník ${grade} úspěšně přidána.`, 'success')
			} else {
				addNotification(`Ročník ${grade} se nepodařilo přidat.`, 'wrong')
			}

		};

		reader.readAsArrayBuffer(files[0]);
	}
</script>
<FileDrop {handleFiles} let:droppable class="container">
	<div class="zone" class:droppable>
		<div class="flex-container">
			<i class="fi fi-br-upload"></i>
			<p class="header">Zde nahrajte tabulku žáků</p>
			<p>(přetáhněte soubor, nebo klikněte pro výběr - *xlxs)</p>
		</div>
	</div>
</FileDrop>
{#each $notifications as notification, index}
	<Notification
		key={index}
		message={notification.message}
		type={notification.type}
		on:remove={() => notifications.update(arr => arr.filter((_, i) => i !== index))}
	/>
{/each}

<style lang="scss">
  .zone {
    background-color: #e1e9ec;
    padding: 1vh;
    border: 2px dotted #9f9f9f;
    border-radius: 0.5rem;
    margin: 3vh;

    .flex-container {
      display: flex;
      border-style: none;
      align-items: center;
      flex-direction: column;
      justify-content: end;

      p {
        font-weight: 400;
        font-size: 1.5vh;
        color: #535361;
      }
      .header {
				color: #27262c;
        font-weight: 500;
        font-size: 2vh;
      }


      .fi {
        color: #27262c;
        font-size: 2.5vh;
      }
    }
  }


  .zone:hover {
    background-color: rgba(238, 238, 238, 0.69);
  }

  .droppable {
    border: 1px dotted red;
  }
</style>