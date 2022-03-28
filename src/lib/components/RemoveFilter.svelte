<script>
import { goto } from "$app/navigation";

import { darkModeStore, postFilterStore, projectFilterStore } from "$lib/stores/filters";




	export let theme="";
	const removeFilter = () => {
        postFilterStore.set('');
        projectFilterStore.set('');
        
        if (theme == 'posts')
            goto("/posts")
        else
            goto("/progetti")
	};
</script>

<p on:click={removeFilter} class="{$darkModeStore == 'enabled' ? 'dark-tag' : 'light-tag'} tag">Tutti</p>

<style>
	.tag {
		color: var(--dark-bg);
		border-radius: 0.2em;
		background-color: var(--light);
		border-radius: 0.2em;
		padding: 0.1em 0.3em;
		height: fit-content;
		cursor: pointer;
		transition: all 0.2s ease;
		z-index: 9;
		margin: 0.2em;
		font-size: 1.1em;
	}

	.tag:hover{
		background-color: var(--dark-primary-variant);
		color: var(--dark-text);
	}

	.dark-tag{
		background-color: var(--dark-primary);
		color: var(--light-text);
	}

	.light-tag{
		background-color: var(--light-primary);
		color: var(--light-onPrimary);
	}

</style>
