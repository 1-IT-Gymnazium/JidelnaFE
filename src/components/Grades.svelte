<script>
	import Header from './AdminHeader.svelte';
	import RemoveGrade from './RemoveGrade.svelte';
</script>



<div class="container">
	<div class="item-1">
		<Header />
	</div>
	<div class="item-3">
		<RemoveGrade />
	</div>
</div>

<style>
    .container {
        margin: 4vh;
    }
    .item-3 {
				margin-top: 4vh;
        border-left: 2px solid #fa3054;
    }


</style>
