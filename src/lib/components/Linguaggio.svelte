<script>
	export let icon;
	export let name;
</script>

<div class="linguaggio">
	<svg class="pog">{@html icon}</svg>
	<p class="nome">{name}</p>
</div>

<style>
	.linguaggio {
		width: 100%;
		background-color: var(--dark);
		padding: 0.5em;
		border-radius: 1em;
		transition: all 0.5s ease;
		display: grid;
		grid-template-columns: 2fr 1fr;
		place-items: center;
		overflow: hidden;
	}

	.pog {
		height: 20vh;
		width: 130px;
		transform: rotate(-10deg);
		margin-left: -20vw;
		transition: all 0.5s ease;
	}

	.nome {
		opacity: 0;
		transition: all 500ms ease;
		text-transform: uppercase;
		font-size: 1.3em;
		color: var(--light);
		text-align: center;
		position: relative;
		width: 100%;
		transform: translateX(100%);
	}

	.linguaggio:hover .nome::after {
		transform: scaleX(1);
		transition-delay: 400ms;
	}

	.linguaggio:hover .pog {
		transform: rotate(0);
		margin-left: 0;
	}

	.linguaggio:hover .nome {
		transform: translateX(0%);
		transition-delay: 50ms;
	}

	.nome::after {
		content: '';
		height: 3px;
		width: 100%;
		background-color: var(--light);
		position: absolute;
		bottom: 0;
		left: 0;
		transform: scaleX(0);
		transform-origin: right;
		transition: all 0.5s ease;
	}

	.linguaggio:hover .nome {
		opacity: 1;
	}

	@media (max-width: 950px) {
		.linguaggio {
			grid-template-columns: 1fr;
		}
		.pog {
			margin-left: 0;
			margin-top: -10vh;
		}
		.linguaggio:hover .pog {
			margin-top: 0vh;
		}
	}
</style>
