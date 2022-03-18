<script>
import { goto } from "$app/navigation";

import { postFilterStore, projectFilterStore } from "$lib/stores/filters";




	export let theme="";
	const removeFilter = () => {
        postFilterStore.set('');
        projectFilterStore.set('');
        console.log(theme);
        
        if (theme == 'posts')
            goto("/posts")
        else
            goto("/progetti")
	};
</script>

<p on:click={removeFilter} class="{theme=='posts'? "dark":''} tag material-icons">delete</p>

<style>
	.tag {
		border: white solid 1px;
		border-radius: 0.2em;
		padding: 0.1em 0.3em;
		cursor: pointer;
		transition: all 0.2s ease;
		color: var(--light);
	}

	.tag:hover {
		background-color: var(--light);
		color: var(--dark);
	}

	.dark {
		border: black solid 1px;
		color: var(--dark);
	}

	.dark:hover {
		background-color: var(--dark);
		color: var(--light);
	}
</style>
