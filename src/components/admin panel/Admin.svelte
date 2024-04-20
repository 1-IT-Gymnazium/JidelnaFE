<script>
	import SideBar from './SideBar.svelte';
	import Student from './Student.svelte';
	import Grades from './Grade.svelte';
	import page from '$lib/page.js';

	$: whatPage = $page;

</script>


<div class="grid-container">
	<div class="item-1">
		<SideBar />
	</div>
	{#if whatPage === "Žáci"}
		<div class="item-2">
			<Student />
		</div>
	{:else }
		<div class="item-2">
			<Grades />
		</div>
	{/if}
</div>


<style>
    .grid-container {
        display: flex;
        height: 100vh;
    }

    .item-1 {
        width: 35vh;
    }

    .item-2 {
        animation: 0.3s ease-in-out 0s 1 slideInBottomPartially;
        width: 100%;
        background-color: white;
    }
    @keyframes slideInBottomPartially {
        0% {
            transform: translateY(0.5rem);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 100%;
        }
    }
</style>