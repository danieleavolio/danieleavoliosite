<script>
	export let changeVisibility;
	import { fly } from 'svelte/transition';
</script>

<div on:wheel|preventDefault|stopPropagation class="navbar">
	<nav>
		<div class="logo">
			<h1>Daniele Avolio - Portfolio</h1>
		</div>
		<div transition:fly class="list-of-content">
			<a on:click={changeVisibility} href="/" class="link">Home</a>
			<a on:click={changeVisibility} href="/about" class="link">Su di me</a>
			<a on:click={changeVisibility} href="/progetti" class="link">Progetti</a>
			<a on:click={changeVisibility} href="/posts" class="link">Posts</a>
			<button on:click={changeVisibility} class="material-icons bottone link">close</button>
		</div>
	</nav>
</div>

<style>
	nav {
		background-color: var(--dark);
		color: var(--light);
		display: grid;
		grid-template-rows: 0fr 2fr;
		place-items: center;
		width: 100vw;
		height: 100vh;
		text-align: center;
	}

	.logo{
		font-family:  monospace;
	}

	.list-of-content {
		justify-content: space-around;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.link {
		cursor: pointer;
		font-size: 2em;
		color: var(--light);
		mix-blend-mode: difference;
		position: relative;
		z-index: 1;
		overflow: hidden;
		text-decoration: none;
	}

	.link:hover {
		transition: all 0.5s ease;
		color: var(--dark);
	}

	.link:hover::after {
		transform: scaleX(100%);
	}

	.link::after {
		width: 100%;
		height: 100%;
		content: '';
		background-color: var(--light);
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		transform: scaleX(-100%);
		transform-origin: left;
		transition: all 0.2s ease;
	}

	.bottone {
		font-size: 3em;
		cursor: pointer;
		color: var(--light);
		border: none;
		background-color: transparent;
	}
</style>
