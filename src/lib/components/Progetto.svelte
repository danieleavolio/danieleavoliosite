<script>
	import { goto } from '$app/navigation';
	export let project;
	export let index;
	import { fade } from 'svelte/transition';
	import ProjectTag from './ProjectTag.svelte';
</script>

<div in:fade={{ duration: 500, delay: 100 + index * 100 }} class="progetto">
	<img
		on:click={() => goto(`progetti/${project.slug}`)}
		class="cover"
		src={project.image[0].url}
		alt=""
	/>

	<div on:click={() => goto(`progetti/${project.slug}`)} class="title">
		<h3>{project.name}</h3>
	</div>
	<div class="tags">
		{#each project.tags as tag}
			<ProjectTag {tag} />
		{/each}
	</div>
</div>

<style>
	.progetto {
		color: var(--light);
		display: flex;
		flex-direction: column;
		white-space: break-spaces;
		max-width: 400px;
		max-height: 350px;
		overflow: hidden;
		position: relative;
	}
	
	
	.title {
		background-color: var(--light);
		color: var(--dark);
		padding: 0 1em;
		cursor: pointer;
	}

	.progetto:hover .cover {
		filter: blur(5px);
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
		background-color: var(--light);
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
