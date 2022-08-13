<script>
	import { darkModeStore } from '$lib/stores/filters';
	import { onMount, tick } from 'svelte';

	import { fly,fade } from 'svelte/transition';
	let isShowing = false;
	export let tool;
    export let index;
    export let toolIndex;
    
	
</script>

{#if index == toolIndex}
	<div
		in:fly={{ x: -100, duration: 300 }}
		class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} tool"
	>
		<div class="icon">
			<img loading="lazy" src={tool.icon.url} alt="" />
		</div>
		<div class="text">
			<p class="title">{tool.name}</p>
			<p class="description">{tool.usage}</p>
		</div>
	</div>
{/if}

<style>
	.tool {
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
		padding: 1em;
		border-radius: 0.1em;
	}
    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
    }
	.title {
		font-size: 2em;
		font-weight: 600;
	}
	img {
		padding: 0.5em;
		max-width: 80%;
		object-fit: cover;
	}

    @media (max-width: 900px){
        .tool{
            grid-template-columns: 1fr;
        }
        .title{
            text-align: center;
        }

		img{
			max-width: 50%;
		}
    }
</style>
