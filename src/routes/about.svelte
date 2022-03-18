<script>
	import Timeline from '$lib/components/Timeline.svelte';
    import { fade } from "svelte/transition";
</script>

<svelte:head>
	<title>Su di me</title>
</svelte:head>
<div class="about">
    <h1 in:fade={{duration:500, delay:500}} >Su di me</h1>
	<Timeline />
</div>

<style>

    h1{
        color: var(--dark);
        font-size: 3em;
    }
	.about {
		width: 100vw;
		min-height: 100vh;
		background-color: var(--light);
		display: flex;
		flex-direction: column;
		gap: 1em;
		justify-content: center;
		align-items: center;
	}
</style>
