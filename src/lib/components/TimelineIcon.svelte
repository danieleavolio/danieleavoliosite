<script>
	export let icon;
	export let date;
	export let start = false;
</script>

<div class="container">
	
	<div class="icon">
		<span class="material-icons">{icon}</span>
	</div>
	<div class="connect-line" />
	<p class="data">{date}</p>
	<div class="connect-line" />

	{#if start}
		<p class="start">START</p>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
	}
	.icon {
		background-color: var(--dark-bg);
		color: var(--light);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.5em;
		padding: 0.5em;
	}
	span {
		font-size: 3em;
	}
	.data {
		margin: 0;
		padding: 0;
		font-size: 1.2em;
		font-weight: 600;
	}

	.start {
		margin: 0;
		padding: 0.5em;
		border-radius: 1em;
		background-color: var(--dark-bg);
		color: var(--light);
	}

	.connect-line {
		width: 3px;
		height: 100%;
		background-color: var(--dark-bg);
	}
</style>
