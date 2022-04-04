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
	{#each tools as tool, i}
		<ToolCard {tool} index={i} bind:toolIndex />
	{/each}

	<div class="navigate-div">
		<p
			on:click={precTool}
			class=" {$darkModeStore == 'enabled'
				? 'dark-container'
				: 'light-container'} augment left material-icons"
		>
			navigate_before
		</p>
		<p
			on:click={nextTool}
			class=" {$darkModeStore == 'enabled'
				? 'dark-container'
				: 'light-container'} augment right material-icons"
		>
			navigate_next
		</p>
	</div>
</div>

<style>
	h1{
		background-color: var(--dark-primary-variant);
		color: var(--dark-text);
		padding: 0 0.1em;
		text-align: center;
		margin: 1em;
	}
	.augment {
		font-size: 3em;
		cursor: pointer;
		border-radius: 0.1em;
		transition: all 0.2s ease
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

	.navigate-div{
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2em;
	}

	.augment:hover{
		background-color: var(--dark-primary-variant);
		color: var(--dark-onPrimaryVariant);
	}
</style>
