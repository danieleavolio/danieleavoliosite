<script>
	import { fly, fade } from 'svelte/transition';
	import { darkModeStore } from '$lib/stores/filters';
	import Seo from '$lib/components/SEO.svelte';
	import Triennale from '$lib/components/Triennale.svelte';
</script>

<Seo
	title={'Appunti di Informatica Triennale e Magistrale'}
	metadescription={"Appunti presi a lezione e curati personalmente da me, riguardandi i corsi svolti durante il Corso di Laurea Triennale e Magistrale presso l'Università della Calabria"}
	imageUrl="https://www.danieleavolio.it/pictures/me.jpg"
/>
<div
	class="{$darkModeStore == 'enabled'
		? 'dark'
		: 'light'} container m-auto grid grid-cols-1 place-items-center"
>
	<h1 in:fly={{ y: -100, duration: 1000 }}>Appunti di Informatica</h1>
	<div in:fade={{ duration: 1000 }} id="disclaimer" class="font-mono w-2/3 h-fit">
		Sezione dedicata agli appunti presi durante il corso della mia <span class="underline"
			>carrier0a universitaria</span
		>
		Triennale e Magistrale. I corsi seguiti sono stati erogati dal
		<span class="underline font-semibold">2018-2021</span>
		per quanto riguarda la Triennale, mentre dal
		<span class="underline font-semibold">2022-????</span> per quanto riguarda la Magistrale. Qui troverete
		appunti sia a lezione che integrati successivamente con esempi personali e dal libro.
	</div>
	<div class="flex flex-col items-center min-h-screen">
		<Triennale />
	</div>
</div>

<style>
</style>
