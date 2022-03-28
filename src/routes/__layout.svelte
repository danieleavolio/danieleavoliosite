<script>
	import { fly } from 'svelte/transition';
	import Navbar from '$lib/components/Navbar.svelte';

	import '../app.css';
	import { darkModeStore } from '$lib/stores/filters';
	import { beforeNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	let isShowing;
	const changeVisibility = () => {
		isShowing = !isShowing;
	};

	$: if ($darkModeStore) {
		localStorage.setItem('dark-mode', $darkModeStore);
	}

	onMount(() => {
		if (localStorage.getItem('dark-mode') == null) darkModeStore.set('enabled');
		else darkModeStore.set(localStorage.getItem('dark-mode'));
	});
</script>

{#if isShowing}
	<Navbar {changeVisibility} />
{:else}
	<button
		in:fly={{ x: -100, delay: 500 }}
		class="{$darkModeStore == 'enabled' ? 'dark-text' : 'light-text'} bottone material-icons"
		on:click={changeVisibility}>menu</button
	>
	<slot />
{/if}

<style>
	.bottone {
		max-width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		outline: none;
		background-color: transparent;
		border-radius: 100%;
		font-size: 2em;
		cursor: pointer;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
</style>
