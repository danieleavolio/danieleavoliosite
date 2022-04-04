<script>
	import { darkModeStore } from '$lib/stores/filters';

	export let icon;
	export let date;
	export let start = false;
</script>

<div class=" {$darkModeStore == 'enabled' ? 'dark' : 'light'} container">
	<div class=" {$darkModeStore == 'enabled' ? 'dark-primary-highlited' : 'light-primary-highlited'} icon">
		<span class="material-icons">{icon}</span>
	</div>
	<div class=" {$darkModeStore == 'enabled' ? 'dark-line' : 'light-line'} connect-line" />
	<p class="data">{date}</p>
	<div class="{$darkModeStore == 'enabled' ? 'dark-line' : 'light-line'} connect-line" />

	{#if start}
		<p class="{$darkModeStore == 'enabled' ? 'dark-primary-highlited' : 'light-primary-highlited'} start">START</p>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
	}
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.5em;
		padding: 0.5em;
	}

	span {
		font-size: 3em;
	}
	.data {
		margin: 0;
		padding: 0;
		font-size: 1.2em;
		font-weight: 600;
	}

	.start {
		margin: 0;
		padding: 0.5em;
		border-radius: 1em;
	}

	.connect-line {
		width: 3px;
		height: 100%;
	}

	.dark-line {
		background-color: var(--dark-text);
	}
	.light-line {
		background-color: var(--light-text);
	}
</style>
