<script>
	import TimelineIcon from './TimelineIcon.svelte';
	import { fly } from 'svelte/transition';
	import AnimationButton from './fundamentals/AnimationButton.svelte';
	import { darkModeStore } from '$lib/stores/filters';
</script>

<div in:fly={{ y: -100, duration: 500, delay: 500 }} class=" timeline">
	<h1 class={$darkModeStore == 'enabled' ? 'dark-primary-highlited' : 'light-primary-highlited'}>
		Resumé
	</h1>
	<div class="timeline-section">
		<div class="icon-text">
			<TimelineIcon icon="computer" date={'Maggio 2022 - Agosto 2022'} />
			<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} text">
				<h2>Frontend Developer</h2>
				<h4>IET - INFOEDGE TECHNOLOGY SRL</h4>
				<p>
					Ho svolto un periodo di lavoro nell'azienda IET da Frontend developer. Ho utilizzato 
					<b>Angular</b> come Framework principale di sviluppo. Le task principali riguardavano lo sviluppo di un
					applicativo interno per l'azienda <b>Poste Italiane</b>.
				</p>
				<div class="buttons-div">
					<AnimationButton href="https://iet.it/home" text="IET Website" icon="language" />
				</div>
			</div>
		</div>
	</div>
	<div class="timeline-section">
		<div class="icon-text">
			<TimelineIcon icon="school" date={'2018-2022'} />
			<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} text">
				<h2>Laurea Triennale in Informatica</h2>
				<h4>Università della Calabria, Unical, DeMaCS,</h4>
				<p>
					Dal 2017 al 2022 ho svolto il mio percorso Universitario ottenendo la Laurea Triennale in
					Informatica, sviluppando come Tesi un sito per collegare gli studenti di tutto l'Ateneo.
					E' possibile visionare la pagina del progetto.
				</p>
				<div class="buttons-div">
					<AnimationButton href="/progetti/link4students" text="Link4Students" icon="build" />
					<AnimationButton href="resource/bachelor-thesis.pdf" text="Tesi" icon="article" />
				</div>
			</div>
		</div>
	</div>

	<div class="timeline-section">
		<div class="icon-text">
			<TimelineIcon icon="history_edu" date={'1999-2017'} start={true} />
			<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} text">
				<h2>Diploma Liceo Scientifico</h2>
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
		padding: 0 0.1em;
	}
	h2 {
		font-size: clamp(1em, 2vw + 1em, 3em);
	}
	.timeline {
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

	.buttons-div {
		display: flex;
		gap: 1em;
		justify-content: left;
		align-items: center;
	}

	@media (max-width: 600px) {
		.icon-text {
			display: flex;
			flex-direction: column-reverse;
		}

		.icon-text h2,
		h4 {
			text-align: center;
		}

		.buttons-div {
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
