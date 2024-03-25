<script>
	import Header from './AdminHeader.svelte';
	import RemoveGrade from './RemoveGrade.svelte';
	import FileDrop from './FileDrop.svelte';
</script>



<div class="container">
	<div class="item-1">
		<Header />
	</div>
	<div class="item-2">

		<FileDrop />
	</div>
	<hr>
	<div class="item-3">
		<RemoveGrade />
	</div>
</div>

<style>
    .container {
        margin: 4vh;
    }

    .item-2 {
        margin-top: 4vh;
        border-left: 2px solid #46bf7f;
    }

    .item-3 {
        border-left: 2px solid #fa3054;
    }
    hr {
        margin: 3vh;
        border: 1px solid #c5c5c5;
    }


</style>
