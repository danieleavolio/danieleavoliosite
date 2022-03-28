<script>
	import Seo from '$lib/components/SEO.svelte';

	import Timeline from '$lib/components/Timeline.svelte';
	import { fade } from 'svelte/transition';
</script>

<Seo
	title={'Su di me'}
	metadescription={"Laurea Triennale in Informatica presso L'Università Della Calabria conseguita con progetto finale di Link4Students, un portale web per gli studenti della medesima università che permette agli studenti di connettersi tra loro"}
/>
<div class="about">
	<h1 in:fade={{ duration: 500, delay: 500 }}>Su di me</h1>
	<Timeline />
</div>

<style>
	h1 {
		color: var(--dark-bg);
		font-size: 3em;
	}
	.about {
		min-height: 100vh;
		background-color: var(--light);
		display: flex;
		flex-direction: column;
		gap: 1em;
		justify-content: center;
		align-items: center;
	}
</style>
