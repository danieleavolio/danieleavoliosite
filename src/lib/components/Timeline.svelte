<script>
	import TimelineIcon from './TimelineIcon.svelte';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: -100, duration: 500, delay: 500 }} class="timeline">
	<h1>Resumé</h1>
	<div class="timeline-section">
		<div class="icon-text">
			<TimelineIcon icon="question_mark" date={'2022-Futuro'} />
			<div class="text">
				<h1>Il futuro</h1>
				<h4>Un'incognita</h4>
				<p>Lavoro? Continuazione degli studi? Chi lo sa.</p>
			</div>
		</div>
	</div>
	<div class="timeline-section">
		<div class="icon-text">
			<TimelineIcon icon="school" date={'2018-2022'} />
			<div class="text">
				<h1>Laurea Triennale in Informatica</h1>
				<h4>Università della Calabria, Unical, DeMaCS,</h4>
				<p>
					Dal 2017 al 2022 ho svolto il mio percorso Universitario ottenendo la Laurea Triennale in
					Informatica, sviluppando come Tesi un sito per collegare gli studenti di tutto l'Ateneo.
					E' possibile visionare la pagina del progetto.
				</p>
				<a href="/progetti/link4students" class="dark-button project-link">Progetto</a>
			</div>
		</div>
	</div>

	<div class="timeline-section">
		<div class="icon-text">
			<TimelineIcon icon="history_edu" date={'1999-2017'} start={true} />
			<div class="text">
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
		color: var(--dark-bg);
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



	.project-link {
		text-decoration: none;
		border: black solid 1px;
		color: black;
		font-size: 1.1em;
	}
</style>
