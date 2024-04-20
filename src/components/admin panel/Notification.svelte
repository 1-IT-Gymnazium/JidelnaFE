<script>
	import { onMount } from 'svelte';
	export let message
	export let type

	let duration = 3000
	let isVissbile = true

	onMount(() => {
		setTimeout(() => {
			isVissbile = false
		}, duration)
	})
</script>

{#if isVissbile}
	<div class="notification {type}">
		{message}
	</div>
{/if}

<style>
	.notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 10px;
      border-radius: 4px;
      color: #fff;
      z-index: 1000;
	}

	.success {
			background-color: #46bf7f;
	}

	.wrong {
      background-color: #fb2d55;
	}

</style>