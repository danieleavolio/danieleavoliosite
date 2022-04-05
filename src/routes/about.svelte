<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';

	export async function load() {
		// @ts-ignore
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
			headers: {}
		});

		const query = gql`
			query ToolsIndex {
				tools {
					id
					name
					icon {
						url
					}
					usage
				}
			}
		`;

		const { tools } = await graphcms.request(query);

		return {
			props: { tools }
		};
	}
</script>

<script>
	import Seo from '$lib/components/SEO.svelte';
	import SkillsContainer from '$lib/components/SkillsContainer.svelte';

	import Timeline from '$lib/components/Timeline.svelte';
	import ToolsGallery from '$lib/components/ToolsGallery.svelte';
	import { darkModeStore } from '$lib/stores/filters';
	import { fade } from 'svelte/transition';

	export let tools;
</script>

<Seo
	title={'Su di me'}
	metadescription={"Laurea Triennale in Informatica presso L'Università Della Calabria conseguita con progetto finale di Link4Students, un portale web per gli studenti della medesima università che permette agli studenti di connettersi tra loro"}
	imageUrl={"https://www.danieleavolio.it/pictures/me.jpg"}
	/>
<div class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} about">
	<h1 in:fade={{ duration: 500, delay: 500 }}>Su di me</h1>
	<Timeline />
	<ToolsGallery {tools} />
	<SkillsContainer />
</div>

<style>
	h1 {
		font-size: 3em;
	}
	.about {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 1em;
		justify-content: center;
		align-items: center;
	}
</style>
