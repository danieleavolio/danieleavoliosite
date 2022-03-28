<script>
	import { darkModeStore } from '$lib/stores/filters';

	export let text;
	export let actionToDo;
</script>

<button
	on:click={actionToDo}
	class="{$darkModeStore == 'enabled' ? 'dark-text' : 'light-text'} material-icons bottone"
>
	{#if text == 'enabled'}
		dark_mode
	{:else}
		light_mode
	{/if}
</button>

<style>
	.bottone {
		font-size: 3em;
		cursor: pointer;
		border: none;
		background-color: transparent;
        transition: all 0.3s ease;
	}

	.dark-text:hover {
		color: var(--light-text);
		background-color: var(--dark-primary);
	}

	.light-text:hover {
		color: var(--dark-text);
		background-color: var(--light-primary);
	}
</style>
