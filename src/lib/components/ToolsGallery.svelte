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

<div class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} tools-gallery">
	<h1 class="{$darkModeStore == 'enabled' ? 'dark-primary-highlited' : 'light-primary-highlited'}" >Linguaggi e strumenti maggiormente utilizzati</h1>
	{#each tools as tool, i}
		<ToolCard {tool} index={i} bind:toolIndex />
	{/each}

	<div class="navigate-div">
		<p
			on:click={precTool}
			class=" {$darkModeStore == 'enabled'
				? 'dark-container dark-augment'
				: 'light-container light-augment'} augment left material-icons"
		>
			navigate_before
		</p>
		<p
			on:click={nextTool}
			class=" {$darkModeStore == 'enabled'
				? 'dark-container dark-augment'
				: 'light-container light-augment'}  augment right material-icons"
		>
			navigate_next
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 0 0.1em;
		text-align: center;
	}
	.augment {
		font-size: 3em;
		cursor: pointer;
		border-radius: 0.1em;
		transition: all 0.2s ease;
	}
	.tools-gallery {
		width: 90vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 1em;
	}

	.navigate-div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2em;
	}

	.light-augment:hover {
		background-color: var(--light-primary);
		color: var(--dark-onPrimaryVariant);
	}
	.dark-augment:hover {
		background-color: var(--dark-primary);
		color: var(--dark-onPrimaryVariant);
	}
</style>
