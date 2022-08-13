<script>
	import Content from './Content.svelte';
import AnimationButton from './fundamentals/AnimationButton.svelte';
	export let posts;
</script>

<div class="lista-progetti">
	{#each posts as post, i}
		<Content content={post} index={i} type="post" />
	{/each}
</div>
<AnimationButton target='' icon='' href='/postslist' text='Tutti i Post' ></AnimationButton>


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
