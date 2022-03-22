<script>
	import { fly } from 'svelte/transition';
	import Navbar from '$lib/components/Navbar.svelte';

	import '../app.css';
	let isShowing;
	const changeVisibility = () => {
		isShowing = !isShowing;
	};
</script>

{#if isShowing}
	<Navbar {changeVisibility} />
{:else}
	<button
		in:fly={{ x: -100, delay: 500 }}
		class="bottone material-icons"
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
		color: white;
		mix-blend-mode: difference;
		border-radius: 100%;
		font-size: 2em;
		cursor: pointer;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
</style>
