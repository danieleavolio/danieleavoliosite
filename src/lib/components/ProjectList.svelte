<script>
	import Progetto from './Progetto.svelte';

	export let projects;
</script>

<div class="lista-progetti">
	{#each projects as project,i}
		<Progetto {project} index={i}/>
	{/each}
</div>
{#if projects.length == 3}
	<a class="dark-button" href="/progetti">Altri progetti</a>
{/if}

<style>

	a{
		margin: 1em;
	}
	.lista-progetti {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
		gap: 5em 1em;
		flex-wrap: wrap;
		margin: 1em;
	}

	@media (max-width: 1000px) {
		.lista-progetti {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
		}
	}
</style>
