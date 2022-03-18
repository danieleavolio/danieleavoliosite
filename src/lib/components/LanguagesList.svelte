<script>
	import { linguaggi } from '$lib/stores/languages';
	import Linguaggio from './Linguaggio.svelte';
</script>

<div class="list">
	{#each $linguaggi as linguaggio}
		<Linguaggio icon={linguaggio.icon} name={linguaggio.name} />
	{/each}
</div>

<style>
	.list {
		width: 60vw;
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		gap: 3em;
		margin: 1em;
	}

	@media (max-width: 650px) {
		.list {
			grid-template-columns: 1fr;
		}
	}
</style>
