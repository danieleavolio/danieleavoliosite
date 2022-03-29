<script>
	import TimelineIcon from './TimelineIcon.svelte';
	import { fly } from 'svelte/transition';
	import AnimationButton from './fundamentals/AnimationButton.svelte';
	import { darkModeStore } from '$lib/stores/filters';
</script>

<div in:fly={{ y: -100, duration: 500, delay: 500 }} class=" timeline">
	<h1>Resumé</h1>
	<div class="timeline-section">
		<div class="icon-text">
			<TimelineIcon icon="question_mark" date={'2022-Futuro'} />
			<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} text">
				<h1>Il futuro</h1>
				<h4>Un'incognita</h4>
				<p>Lavoro? Continuazione degli studi? Chi lo sa.</p>
			</div>
		</div>
	</div>
	<div class="timeline-section">
		<div class="icon-text">
			<TimelineIcon icon="school" date={'2018-2022'} />
			<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} text">
				<h1>Laurea Triennale in Informatica</h1>
				<h4>Università della Calabria, Unical, DeMaCS,</h4>
				<p>
					Dal 2017 al 2022 ho svolto il mio percorso Universitario ottenendo la Laurea Triennale in
					Informatica, sviluppando come Tesi un sito per collegare gli studenti di tutto l'Ateneo.
					E' possibile visionare la pagina del progetto.
				</p>
				<AnimationButton href="/progetti/link4students" text="Link4Students" icon="build" />
			</div>
		</div>
	</div>

	<div class="timeline-section">
		<div class="icon-text">
			<TimelineIcon icon="history_edu" date={'1999-2017'} start={true} />
			<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} text">
				<h1>Diploma Liceo Scientifico</h1>
				<h4>Liceo Scientifico Vittorio Bachelet, Spezzano Albanese</h4>
				<p>
					Ho ottenuto il diploma scientifico frequentando il corso di Scienze Applicate del Liceo
					Scientifico di Spezzano Albanese Vittorio Bachelet.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: clamp(1em, 2vw + 1em, 3em);
	}
	.timeline {
		width: 100vw;
		border-radius: 0.1em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1em;
		position: relative;
	}

	.icon-text {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
		width: 80vw;
	}

	.timeline-section {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.text {
		margin: 1em;
		border-radius: 0.3em;
		padding: 1em;
	}

	@media (max-width: 600px){
		.icon-text{
			display: flex;
			flex-direction: column-reverse;
			
		}
	}
</style>
