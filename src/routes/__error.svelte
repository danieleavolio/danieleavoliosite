<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
import Seo from "$lib/components/SEO.svelte";
	import { darkModeStore } from "$lib/stores/filters";


	export let error, status;
</script>

<svelte:head>
	<title>Ops.. Errore {status}</title>
</svelte:head>

<Seo title={"Ops.. Errore"} metadescription="Qualcosa è andato storto.." />
<div class="error-page ">
	<div class="{$darkModeStore ==
		'enabled'
			? 'dark-container'
			: 'light-container'} error w-screen h-screen flex flex-col justify-center items-center">
		<h1 class="text-5xl">Qualcosa è andato storto..</h1>
		<h2>Errore {status}: {error.message}</h2>
		<a href="/">Torna alla home</a>
	</div>
</div>

<style>
	.error-page {
		height: 100vh;
		display: grid;
		place-items: center;
	}

	.error {
		color: var(--light);
		padding: 1em;
		text-align: center;
	}
</style>
