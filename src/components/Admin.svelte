<script>
	import '../styles/global.css';
	import SideBar from './SideBar.svelte';
	import Student from './Student.svelte';
	import page from '$lib/page.js';
	import Grades from './Grades.svelte';

	$: whatPage = $page

</script>


<div class="grid-container">
	<div class="item-1"><SideBar/></div>
	{#if whatPage === "Žáci"}
	<div class="item-2"><Student/></div>
		{:else }
		<div class="item-2"><Grades/></div>
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
        height: 100vh;
        width: 100%;
        background-color: white;
    }
</style>