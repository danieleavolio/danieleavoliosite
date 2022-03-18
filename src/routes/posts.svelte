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
					content
					date
					id
					slug
					title
					authors {
						name
						picture {
							url
						}
					}
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
	import { postFilterStore } from '$lib/stores/filters';
	import PostFilterTag from '$lib/components/PostFilterTag.svelte';
	import RemoveFilter from '$lib/components/RemoveFilter.svelte';
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
		postFiltrati = filtraPost($postFilterStore);
	});

	$: postFiltrati = filtraPost(tagScelto);
</script>
<svelte:head>
	<title>Posts</title>
</svelte:head>
<div class="container">
	<h1 in:fly={{ y: -100, duration: 500 }}>Posts</h1>
	<div class="tag-list">
		{#each filtri as tag}
			<PostFilterTag {tag} bind:tagScelto />
		{/each}
		<RemoveFilter theme={"posts"} />
	</div>
	<div class="post">
		{#if postFiltrati.length == 0}
			<PostsList {posts} />
		{:else}
			<PostsList posts={postFiltrati} />
		{/if}
	</div>
</div>

<style>
	.container {
		background-color: var(--light);
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
	}
	.post {
		background-color: var(--light);
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
		color: var(--dark);
	}
</style>
