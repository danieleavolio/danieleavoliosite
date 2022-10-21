<script>
	import { cardOpened, darkModeStore } from '$lib/stores/filters';
	import { onMount } from 'svelte';

	import { fade, fly } from 'svelte/transition';
	import AnimationButton from './fundamentals/AnimationButton.svelte';
	import Link from './fundamentals/Link.svelte';
	import Image from './Image.svelte';

	let isBuilt = false;

	onMount(() => {
		isBuilt = true;
	});

	const openWindow = (link) =>{
		window.open(link, '_blank')
	}

</script>

<div class="profile-card">
	{#if !$cardOpened}
		{#if isBuilt}
			<button
				in:fade={{ delay: 500, duration: 500 }}
				class="{$darkModeStore == 'enabled' ? 'light-click' : 'dark-click'} to-click"
				on:click={() => cardOpened.set(true)}
				>&lt Hi /&gt
			</button>
			<p class="expand" in:fly={{ duration: 2000, delay: 500, y: 500 }}>
				Espandi <span class="material-icons">north</span>
			</p>
		{/if}
	{:else}
		<div
			in:fade={{ duration: 500, delay: 500 }}
			class=" {$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} card"
		>
			<Image />
			<div class="info">
				<div class="text">
					<p class=" {$darkModeStore == 'enabled' ? 'evidenzia-dark' : 'evidenzia-light'} name">
						Daniele Avolio
					</p>
					<p class="descrizione">
						Dottore in Informatica presso l'Università della Calabria. Ho esperienza come
						sviluppatore 
						<span
							class={$darkModeStore == 'enabled' ? 'evidenzia-dark' : 'evidenzia-light'}
							>FrontEnd</span>
						specializzato nell'utilizzo del framework
						<span on:click={() => openWindow('http://kit.svelte.dev')} class="{$darkModeStore == 'enabled' ? 'evidenzia-dark' : 'evidenzia-light'} cursor-pointer" >
							Svelte | SvelteKit</span>
						in autonomia e del Framework
						<span on:click={() => openWindow('https://angular.io/')} class="{$darkModeStore == 'enabled' ? 'evidenzia-dark' : 'evidenzia-light'} cursor-pointer" >
							Angular</span
						> in ambito aziendale.
					</p>
				</div>
				<div class="socials">
					<Link name="Linkedin" href="https://www.linkedin.com/in/danieleavolio/" />
					<Link name="Github" href="https://github.com/danieleavolio" />
					<Link name="Twitter" href="https://twitter.com/avolio_daniele" />
				</div>
				<div class="buttons">
					<AnimationButton
						href="resource/Daniele-Avolio-Resume.pdf"
						text="Visualizza CV"
						icon="file_present"
					/>
					<AnimationButton href="/about" text="Su di me" icon="person" target="" />
					<AnimationButton
						href="resource/bachelor-thesis.pdf"
						text="Tesi Triennale"
						icon="article"
					/>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.evidenzia-dark {
		background-color: var(--dark-primary);
		color: var(--light-text);
		padding: 0.1em;
		margin: 0.2em;
	}

	.expand {
		display: flex;
		justify-content: center;
		align-items: center;
		animation: moving 1s ease infinite alternate;
	}

	@keyframes moving {
		0% {
			transform: translateY(10px);
		}
		100% {
			transform: translateY(0px);
		}
	}
	.evidenzia-light {
		padding: 0.1em;
		margin: 0.2em;
		color: var(--dark-text);
		background-color: var(--light-primary);
	}
	.to-click {
		border: var(--dark-primary-variant) solid 1px;
		padding: 0.2em;
		font-size: 2em;
		cursor: pointer;
		transition: all 0.2s ease-in;
		position: relative;
		overflow: hidden;
		z-index: 1;
		background-color: transparent;
	}

	.to-click:hover {
		background-color: var(--dark-primary-variant);
		color: var(--dark-text);
	}

	.dark-click {
		color: var(--light-text);
	}
	.light-click {
		color: var(--dark-text);
	}

	.to-click:hover {
		transform: scale(1.1);
	}

	.to-click:hover::after {
		transform: scaleY(100%);
	}

	.profile-card {
		width: fit-content;
		text-align: center;
		height: fit-content;
		padding: 1em;
		border-radius: 0.1em;
		position: relative;
		overflow: hidden;
	}

	.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		position: relative;
		margin: 1em;
		box-shadow: var(--light-shadow);
	}

	.text {
		font-weight: 500;
	}

	.socials {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5em;
		justify-content: center;
		align-content: center;
		margin: 0.5em;
	}

	.info {
		text-align: center;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 1em 0.3em;
	}
	.buttons {
		display: flex;
		gap: 1em;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.name {
		font-size: clamp(1.7em, 4vw, 4em);
		font-weight: 600;
		position: relative;
		overflow: hidden;
		z-index: 1;
	}

	@keyframes coloring {
		0% {
			transform: scaleX(0%);
		}
		100% {
			transform: scaleX(100%);
		}
	}

	@keyframes bg-build {
		0% {
			transform: scaleY(0%);
		}
		100% {
			transform: scaleY(100%);
		}
	}

	@media (max-width: 660px) {
		.card {
			display: grid;
			grid-template-columns: 1fr;
		}
		.info {
			padding: 0.5em;
			margin: 0;
		}
	}
</style>
