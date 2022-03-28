<script>
import { darkModeStore } from "$lib/stores/filters";


	export let href;
	export let text;

	export let handleClick;
</script>

<a on:click={handleClick} {href} class="{$darkModeStore == 'enabled' ? 'dark-text' : 'light-text'} link">{text}</a>

<style>
	.link {
		cursor: pointer;
		font-size: 2em;
		position: relative;
		z-index: 1;
		overflow: hidden;
		text-decoration: none;
		transition: all 0.2s ease;
		background-color: transparent;
	}

    .dark-text:hover {
		color: var(--light-text);
		background-color: var(--dark-primary);
	}

    .light-text:hover{
        color: var(--dark-text);
		background-color: var(--light-primary);
    }
</style>
