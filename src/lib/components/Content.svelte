<script>
	import { goto } from '$app/navigation';
	import { darkModeStore } from '$lib/stores/filters';
	import { fade } from 'svelte/transition';
	import NormalTag from './NormalTag.svelte';
	export let content;
	export let index;

	export let type = '';
</script>

{#if type == 'post'}
	<div
		in:fade={{ duration: 500, delay: 200 + index * 100 }}
		class="{$darkModeStore == 'enabled' ? 'dark-card' : 'light-card'} post"
	>
		<div class="img-div">
			<img
				on:click={() => goto(`posts/${content.slug}`)}
				class="cover"
				src={content.coverImage.url}
				alt=""
			/>
		</div>
		<div on:click={() => goto(`posts/${content.slug}`)} class="title">
			<h3>{content.title}</h3>
		</div>
		<div class="tags">
			{#each content.tags as tag}
				<NormalTag {tag} type="post" />
			{/each}
		</div>
	</div>
{:else if type == 'progetto'}
	<div
		in:fade={{ duration: 500, delay: 100 + index * 100 }}
		class="{$darkModeStore == 'enabled' ? 'dark-card' : 'light-card'} post"
	>
		<div class="img-div">
			<img
				on:click={() => goto(`progetti/${content.slug}`)}
				class="cover"
				src={content.image[0].url}
				alt=""
			/>
		</div>

		<div on:click={() => goto(`progetti/${content.slug}`)} class="title">
			<h3>{content.title}</h3>
		</div>
		<div class="tags">
			{#each content.tags as tag}
				<NormalTag {tag} type="progetto" />
			{/each}
		</div>
	</div>
{/if}

<style>
	.post {
		display: flex;
		flex-direction: column;
		white-space: break-spaces;
		max-width: 400px;
		height: 100%;
		overflow: hidden;
		position: relative;
		text-align: center;
		box-shadow: var(--light-shadow);
	}

	.dark-card {
		background-color: var(--dark-surface);
		color: var(--dark-text);
	}

	.light-card {
		background-color: var(--light-surface);
		color: var(--light-text);
	}

	.title {
		color: var(--light);
		padding: 0 1em;
		cursor: pointer;
		z-index: 2;
	}

	.img-div {
		overflow: hidden;
		height: 100%;
	}

	.cover:hover {
		transform: scale(1.2);
		filter: brightness(50%);
		z-index: 1;
	}
	.cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.2s ease;	
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.tags {
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
