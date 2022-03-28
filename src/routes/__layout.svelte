<script>
	import { fly } from 'svelte/transition';
	import Navbar from '$lib/components/Navbar.svelte';

	import '../app.css';
	import { darkModeStore } from '$lib/stores/filters';
	import { onMount } from 'svelte';
import Footer from '$lib/components/Footer.svelte';
	let isShowing;
	const changeVisibility = () => {
		isShowing = !isShowing;
	};

	$: if ($darkModeStore) {
		localStorage.setItem('dark-mode', $darkModeStore);

		const htmlElement = document.firstElementChild;
		if ($darkModeStore == 'enabled') {
			htmlElement.classList.add('dark');
			htmlElement.classList.remove('light');
		} else {
			htmlElement.classList.add('light');
			htmlElement.classList.remove('dark');
		}
	}

	onMount(() => {
		if (localStorage.getItem('dark-mode') == null) darkModeStore.set('enabled');
		else darkModeStore.set(localStorage.getItem('dark-mode'));

		const htmlElement = document.firstElementChild;
		if ($darkModeStore == 'enabled') htmlElement.classList.add('dark');
		else htmlElement.classList.add('light');
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
	<Footer />
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
