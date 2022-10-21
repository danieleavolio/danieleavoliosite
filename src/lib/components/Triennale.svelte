<script>
	// @ts-ignore
	import Appunto from './Appunto.svelte';
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 1000 }} id="Triennale" class="flex flex-col p-5 ">
	<div id="lista-triennale">
		<h1 class="text-center flex flex-col">
			Work in Progress
			<span class="material-icons text-6xl animate-spin">cached</span>
		</h1>
		<!--
	<h2 class="text-3xl">Triennale</h2>

			<Appunto />
		-->
	</div>
</div>

<style>

</style>
