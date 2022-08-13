<script>
	import Content from './Content.svelte';
import AnimationButton from './fundamentals/AnimationButton.svelte';
	export let projects;
</script>

<div class="lista-progetti">
	{#each projects as project,i}
		<Content content={project} index={i}  type="progetto"/>
	{/each}
</div>
	<AnimationButton target='' icon='' href='/progetti' text='Tutti i Progetti' ></AnimationButton>

<style>

	.lista-progetti {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3em 1em;
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
