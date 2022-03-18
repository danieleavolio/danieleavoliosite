<script>
	export let tag;

    export let tagScelto;


</script>

<p on:click={() => tagScelto = tag} class="tag">
	{tag}
</p>

<style>
	.tag {
		border: black solid 1px;
        color: var(--dark);
		border-radius: 0.2em;
		padding: 0.1em 0.3em;
		cursor: pointer;
		transition: all 0.2s ease;
		font-size: clamp(1em, 1.2em, 1.5em);
	}

	.tag:hover {
		background-color: var(--dark);
		color: var(--light);
	}
</style>
