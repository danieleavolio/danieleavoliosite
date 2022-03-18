<script>
	import Post from './Post.svelte';
	export let posts;
</script>

<div class="lista-progetti">
	{#each posts as post, i}
		<Post {post} index={i} />
	{/each}
</div>
{#if posts.length == 3}
	<a class="dark-button" href="/posts">Altri post</a>
{/if}

<style>
	a {
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
