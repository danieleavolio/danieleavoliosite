<script>
	export let tag;

    export let tagScelto;


</script>

<p on:click={() => tagScelto = tag} class="tag">
	{tag}
</p>

<style>
	.tag {
		border: white solid 1px;
        color: var(--light);
		border-radius: 0.2em;
		padding: 0.1em 0.3em;
		cursor: pointer;
		transition: all 0.2s ease;
		font-size: clamp(1em, 1.2em, 1.5em);
	}

	.tag:hover {
		background-color: var(--light);
		color: var(--dark);
	}
</style>
