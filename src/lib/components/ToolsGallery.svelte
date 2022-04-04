<script>
	import { darkModeStore } from '$lib/stores/filters';

	import ToolCard from './ToolCard.svelte';
	export let tools;
	let toolIndex = 0;
	let actualTool = tools[0];

	$: actualTool = tools[toolIndex];

	const nextTool = () => {
		toolIndex = (toolIndex + 1) % tools.length;
	};

	const precTool = () => {
		if (toolIndex - 1 == -1) {
			toolIndex = tools.length - 1;
			return;
		}
		toolIndex = (toolIndex - 1) % tools.length;
	};
</script>

<h1>Linguaggi e strumenti maggiormente utilizzati</h1>

<div class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} tools-gallery">
	<p
		on:click={precTool}
		class=" {$darkModeStore == 'enabled'
			? 'dark-container'
			: 'light-container'} augment left material-icons"
	>
		navigate_before
	</p>
	{#each tools as tool, i}
		<ToolCard {tool} index={i} bind:toolIndex />
	{/each}
	<p
		on:click={nextTool}
		class=" {$darkModeStore == 'enabled'
			? 'dark-container'
			: 'light-container'} augment right material-icons"
	>
		navigate_next
	</p>
</div>

<style>
	h1 {
		text-align: center;
	}
	.augment {
		font-size: 3em;
		cursor: pointer;
		border-radius: 0.1em;
	}
	.tools-gallery {
		width: 70vw;
		min-height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
	}
</style>
