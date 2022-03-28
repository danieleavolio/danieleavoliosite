<script>
	import { scale} from 'svelte/transition';
	let isLoaded = false;
</script>

<div class="image">
	<div transition:scale|local={{ duration: 1000, delay:500 }} class="picture">
		<img
			class={isLoaded ? 'show' : ''}
			on:load={() => (isLoaded = true)}
			src="pictures/me.jpg"
			alt=""
		/>
	</div>
	{#if !isLoaded}
		<div class="placeholder" />
	{/if}
</div>

<style>
	.placeholder {
		width: 100px;
		height: 100px;
		background: linear-gradient(90deg, hsl(0 0% 0% / 0), rgba(75, 75, 75, 0.3), rgb(97, 97, 97));
		border-radius: 0.2em;
		padding: 2em;
		background-position: left;
		background-size: 300%;
		animation: gradient 0.2s infinite alternate;
	}

	.image {
		z-index: 2;
		padding: 1em;
	}

	.picture{
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.picture > img {
		display: block;
		border-radius: 0.2em;
		object-fit: cover;
		max-width: 80%;
		min-height: 70%;
		display: none;
	}
	.show {
		display: inline-block !important;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 50% 0%;
		}
	}
</style>
