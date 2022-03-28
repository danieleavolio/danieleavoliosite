<script>
	import { darkModeStore } from '$lib/stores/filters';

	export let text;
	export let actionToDo;
</script>

<button
	on:click={actionToDo}
	class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} bottone" >{text}</button
>

<style>
	.bottone {
		font-size: 1.3em;
		cursor: pointer;
		border: none;
        transition: all 0.3s ease;
        border-radius: 0.2em;
        margin: 1em;
        align-self: flex-start;
        font-weight: 500;
        padding: 0.2em;
        background-color: var(--dark-primary-variant);
        color: var(--dark-text);
	}

    
	.dark:hover {
		color: var(--light-text);
		background-color: var(--dark-primary);
	}

	.light:hover {
		color: var(--dark-text);
		background-color: var(--light-primary);
	}
</style>
