<script>
	import { darkModeStore } from '$lib/stores/filters';

	export let changeVisibility;
	import { fly } from 'svelte/transition';
	import DarkModeSwitcher from './fundamentals/DarkModeSwitcher.svelte';
	import NavLink from './fundamentals/NavLink.svelte';
	import UtilButton from './fundamentals/UtilButton.svelte';

	const changeDarkMode = () => {
		if ($darkModeStore == 'enabled') darkModeStore.set('disabled');
		else darkModeStore.set('enabled');
	};
</script>

<div on:wheel|preventDefault|stopPropagation class="navbar">
	<nav class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} ">
		<div class="logo">
			<h1>Daniele Avolio - Portfolio</h1>
		</div>
		<div transition:fly class="list-of-content">
			<NavLink href="/" text="Home" handleClick={changeVisibility} />
			<NavLink href="/about" text="Su di me" handleClick={changeVisibility} />
			<NavLink href="/progetti" text="Progetti" handleClick={changeVisibility} />
			<NavLink href="/postslist" text="Posts" handleClick={changeVisibility} />
			<UtilButton actionToDo={changeVisibility} text="close" isMaterial={true} />
			<DarkModeSwitcher actionToDo={changeDarkMode} text={$darkModeStore} />
		</div>
	</nav>
</div>

<style>
	nav {
		display: grid;
		grid-template-rows: 0fr 2fr;
		place-items: center;
		width: 100vw;
		height: 100vh;
		text-align: center;
		transition: all 0.2s ease;
	}

	.logo {
		font-family: monospace;
	}

	.list-of-content {
		justify-content: space-around;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

</style>
