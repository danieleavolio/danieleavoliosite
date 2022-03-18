<script>
	import { goto } from '$app/navigation';
	import { postFilterStore } from '$lib/stores/filters';

	export let tag;

	const gotoFiltering = () => {
		postFilterStore.set(tag);
		goto(`/posts`);
	};
</script>

<p on:click={gotoFiltering} class="tag">
	{tag}
</p>

<style>
	.tag {
		border: white solid 1px;
		background-color: var(--dark);
		color: var(--light);
		border-radius: 0.2em;
		padding: 0.1em 0.3em;
		height: fit-content;
		cursor: pointer;
		transition: all 0.2s ease;
		z-index: 9;
        margin: 0.2em;
	}

	.tag:hover {
		background-color: var(--light);
		color: var(--dark);
	}
</style>
