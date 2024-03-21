<script>
	import Info from './Info.svelte';
	import Header from './Header.svelte';
</script>

<body>
	<div class="flex-container">
		<div class="item-1">
			<Header />
		</div>
		<div class="item-2">
			<Info/>
		</div>
</div>

</body>


<style>
    .flex-container {
        display: flex;
        flex-flow: column;
        row-gap: 20px;
        height: 100%;
    }

    .item-2 {
        flex-grow: 1;
        position: absolute;
        margin-bottom: 3vh;
        top: 100px;
        bottom: 0;
        width: 100%;
    }
</style>
