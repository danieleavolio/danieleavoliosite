<script>
	import { darkModeStore } from '$lib/stores/filters';

	export let name;
	export let href;
</script>

<a class="{$darkModeStore == 'enabled' ? 'dark-text' : 'light-text'} link" target="_blank" {href}
	>{name}</a
>

<style>
    .link {
        text-decoration: none;
		font-size: clamp(1em, 1.2em, 1.1em);
		position: relative;
		overflow: hidden;
		background-color: transparent;
	}


    .dark-text::after{
		background-color: var(--dark-primary);

    }

    .light-text::after{
		background-color: var(--light-primary-variant);

    }
	.link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		transform-origin: left;
		transform: scaleX(-100%);
		transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	.link:hover::after {
		transform: scaleX(100%);
	}
</style>


