<script>
import { goto } from "$app/navigation";
import { projectFilterStore } from "$lib/stores/filters";


	export let tag;

	const gotoFiltering = () =>{
		projectFilterStore.set(tag);
		goto(`/progetti`)

	}


</script>

<p on:click={gotoFiltering} class="tag">
	{tag}
</p>

<style>
	.tag {
		border: black solid 1px;
		color: var(--dark);
		border-radius: 0.2em;
		background-color: var(--light);
		border-radius: 0.2em;
		padding: 0.1em 0.3em;
		height: fit-content;
		cursor: pointer;
		transition: all 0.2s ease;
		z-index: 9;
        margin: 0.2em;
	}

	.tag:hover {
		background-color: var(--dark);
		color: var(--light);
	}
</style>
