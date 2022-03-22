<script>
	import { cardOpened } from '$lib/stores/filters';

	import { fade } from 'svelte/transition';
	import Image from './Image.svelte';
</script>

<div
	in:fade={{ duration: 500, delay: 500 }}
	class="{$cardOpened == true ? 'bg-var(--light)' : ''}  profile-card"
>
	{#if !$cardOpened}
		<button class="to-click" on:click={() => cardOpened.set(true)}>&lt Hi /&gt </button>
	{:else}
		<div class="card">
			<div class="card-bg" />
			<Image />
			<div class="info">
				<div class="text">
					<p class="name">Daniele Avolio</p>
					<p class="descrizione">
						Studente di Informatica presso l'Università della Calabria. Sviluppatore <span
							class="evidenzia">FrontEnd</span
						>
						specializzato nell'utilizzo del framework
						<span class="evidenzia"> Svelte | SvelteKit</span>.
					</p>
				</div>
				<div class="socials">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a class=" link" target="_blank" href="https://www.linkedin.com/in/danieleavolio/"
						>Linkedin</a
					>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a class=" link" target="_blank" href="https://github.com/danieleavolio">Github</a>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a class=" link" target="_blank" href="https://twitter.com/avolio_daniele">Twitter</a>
				</div>
				<div class="buttons">
					<a
						class="button-link"
						target="_blank"
						href="https://drive.google.com/file/d/1g0BVkOf7vdwjki8_98OVv6eFKiNzaTK6/view?usp=sharing"
						>Visualizza CV <span class="click-after"
							><span class="material-icons cv">file_presents</span></span
						></a
					>
					<a href="/about" class="button-link about"
						>Su di me<span class="material-icons">person</span>
					</a>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.evidenzia {
		background-color: var(--dark);
		color: var(--light);
		padding: 0.2em;
	}
	.to-click {
		border: none;
		outline: solid #fff 1px;
		background-color: transparent;
		color: var(--light);
		mix-blend-mode: difference;
		padding: 0.2em;
		font-size: 2em;
		cursor: pointer;
		transition: all 0.2s ease-in;
		position: relative;
		overflow: hidden;
		z-index: 1;
	}

	a {
		mix-blend-mode: normal;
		color: var(--dark);
		text-decoration: none;
	}

	.to-click:hover {
		transform: scale(1.1);
		color: var(--dark);
	}

	.to-click:hover::after {
		transform: scaleY(100%);
	}

	.to-click::after {
		content: '';
		position: absolute;
		background-color: var(--light);
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		transition: all 0.3s ease;
		transform: scaleY(0%);
		transform-origin: bottom;
		z-index: -1;
	}

	.card-bg {
		background-color: var(--light);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: auto;
		transform: scaleY(-100%);
		transform-origin: bottom;
		animation: bg-build 0.5s linear forwards;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	}
	.profile-card {
		width: fit-content;
		text-align: center;
		height: fit-content;
		padding: 1em;
		border-radius: 0.1em;
		width: 80%;
		position: relative;
		overflow: hidden;
	}

	.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		position: relative;
		margin: 1em;
	}

	.text {
		color: var(--dark);
		font-weight: 600;
	}
	.descrizione {
		color: var(--dark);
		mix-blend-mode: darken;
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

	.link {
		font-size: clamp(1em, 1.2em, 1.1em);
		position: relative;
		overflow: hidden;
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
		background-color: var(--dark);
		transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	.link:hover::after {
		transform: scaleX(100%);
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
	}

	.button-link {
		text-decoration: none;
		width: 100%;
		height: 100%;
		color: var(--dark);
		background-color: var(--light);
		padding: 0.2em 0.5em;
		font-size: clamp(1em, 1.1em, 1.2em);
		outline: black solid 1px;
		position: relative;
		overflow: hidden;
		display: flex;
		width: fit-content;
		justify-content: center;
		align-items: center;
		transition: all 0.2s ease;
	}

	.about:hover {
		background-color: var(--dark);
		color: var(--light);
	}

	.click-after {
		overflow: hidden;
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		text-align: center;
		display: flex;
	}

	.button-link:hover .click-after::after {
		transform: translateX(0);
	}

	.button-link:hover .cv {
		transform: translateX(0);
		transition-delay: 200ms;
	}

	.click-after::after {
		content: '';
		background-color: rgb(0, 0, 0);
		width: 100%;
		height: 100%;
		position: absolute;
		text-align: center;
		top: 0;
		left: 0;
		transform: translateX(100%);
		transition: all 0.3s ease;
	}

	.cv {
		width: 100%;
		transform: translateX(100%);
		transition: all 0.2s ease;
		z-index: 1;
		font-size: 2em;
		color: var(--light);
		position: absolute;
		left: 10%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.name {
		font-size: clamp(1.7em, 4vw, 4em);
		color: var(--dark);
		font-weight: 600;
		position: relative;
		overflow: hidden;
		mix-blend-mode: difference;
		z-index: 1;
	}

	.name::before {
		width: 100%;
		height: 100%;
		content: '';
		background-color: var(--light);
		animation: coloring 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) backwards;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		transform-origin: left;
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
