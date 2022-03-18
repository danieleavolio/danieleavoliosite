<script>
	import { goto } from '$app/navigation';
	export let post;
	export let index;
	import { fade } from 'svelte/transition';
	import PostTag from './PostTag.svelte';
</script>

<div in:fade={{ duration: 500, delay: 200 + index * 100 }} class="post">
	<img on:click={() => goto(`posts/${post.slug}`)} class="cover" src={post.coverImage.url} alt="" />
	<div on:click={() => goto(`posts/${post.slug}`)} class="title">
		<h3>{post.title}</h3>
	</div>
	<div class="tags">
		{#each post.tags as tag}
			<PostTag {tag} />
		{/each}
	</div>
</div>

<style>
	.post {
		color: var(--dark);
		display: flex;
		flex-direction: column;
		white-space: break-spaces;
		max-width: 400px;
		height: 100%;
		overflow: hidden;
		position: relative;
		text-align: center;
	}

	.title {
		background-color: var(--dark);
		color: var(--light);
		padding: 0 1em;
		cursor: pointer;
	}

	.post:hover .cover {
		filter: blur(2px);
		transform: scale(1.1);
	}
	.cover {
		width: 100%;
		height: 200px;
		object-fit: cover;
		transition: all 0.2s ease;
		cursor: pointer;
	}

	.tags {
		background-color: var(--dark);
		z-index: 10;
		height: 100%;
		display: flex;
		gap: 0.5em;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 0 1em;
	}
</style>
