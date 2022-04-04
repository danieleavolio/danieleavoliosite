<script>
	import { darkModeStore } from '$lib/stores/filters';

	export let text;
	export let icon;
	export let href;
	export let target = "_blank";
</script>

<a class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} button-link" target={target} {href}>
	{text}<span class="material-icons cv">{icon}</span></a
>

<style>
	.button-link {
		text-decoration: none;
		padding: 0.2em 0.5em;
		font-size: clamp(1em, 1.1em, 1.1em);
		position: relative;
		overflow: hidden;
		display: flex;
		width: fit-content;
		justify-content: center;
		align-items: center;
		transition: all 0.2s ease;
		border-radius: 0.1em;
	}

	.dark {
		background-color: var(--dark-primary);
		color: var(--light-text);
		transition: all 0.2s ease;
	}

	.dark:hover {
		color: var(--dark-text);
		background-color: var(--dark-primary-variant);
	}

	.light {
		background-color: var(--light-primary);
		color: var(--dark-text);
		transition: all 0.2s ease;
	}
	.light:hover {
		color: var(--dark-text);
		background-color: var(--dark-primary-variant);
	}
</style>
