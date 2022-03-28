<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';

	export async function load() {
		// @ts-ignore
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
			headers: {}
		});

		const query = gql`
			query Posts {
				posts(orderBy: publishedAt_DESC) {
					tags
					date
					id
					slug
					title
					coverImage {
						url
					}
				}
			}
		`;

		const { posts } = await graphcms.request(query);

		return {
			props: { posts }
		};
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import PostsList from '$lib/components/PostsList.svelte';
	import { darkModeStore, postFilterStore } from '$lib/stores/filters';
	import RemoveFilter from '$lib/components/RemoveFilter.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import FilterTag from '$lib/components/FilterTag.svelte';
	export let posts;

	let postsFiltrati = [];

	let tagScelto = '';
	// Gestione dei filtri
	let listaFiltri = [];

	// @ts-ignore
	posts.forEach((element) => {
		listaFiltri = [...listaFiltri, ...element.tags];
	});

	// I tags presenti nei post del sito
	let filtri = [...new Set(listaFiltri.map((item) => item))];

	// Filtra dei post con quel determinato tag

	const filtraPost = (tagScelto) => {
		return posts.filter((element) => element.tags.includes(tagScelto));
	};

	afterNavigate(() => {
		postsFiltrati = filtraPost($postFilterStore);
	});

	$: postsFiltrati = filtraPost(tagScelto);
</script>

<Seo
	title={'Post del sito'}
	metadescription={'Javascript, Svelte, HTML, CSS. Tutti i post riguardo i linguaggi di programmazione e gli strumenti utilizzati'}
/>
<div class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} container">
	<h1 in:fly={{ y: -100, duration: 500 }}>Posts</h1>
	<div class="tag-list">
		{#each filtri as tag}
			<FilterTag {tag} bind:tagScelto />
		{/each}
		<RemoveFilter theme={'posts'} />
	</div>
	<div class="post">
		{#if postsFiltrati.length == 0}
			<PostsList {posts} />
		{:else}
			<PostsList posts={postsFiltrati} />
		{/if}
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
	}
	.post {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}

	.tag-list {
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 50%;
	}

	h1 {
		font-size: 3em;
	}
</style>
