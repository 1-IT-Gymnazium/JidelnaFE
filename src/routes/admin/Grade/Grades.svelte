<script>
	import Header from '../Header.svelte';
	import RemoveGrade from './RemoveGrade.svelte';

</script>



<div class="container">
	<div class="item-1">
		<Header state="Student" />
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
    .item-3 {
        border-left: 2px solid #fa3054;
    }
    hr {
        margin: 3vh;
        border: 1px solid #c5c5c5;
    }

</style>
