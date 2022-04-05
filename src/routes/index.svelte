<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';

	export async function load() {
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
			headers: {}
		});

		const query = gql`
			query ProjectsIndex {
				projects(orderBy: createdAt_DESC, first: 3) {
					slug
					description
					id
					tags
					title
					image {
						url
					}
				}
			}
		`;

		const queryPost = gql`
			query PostsQuery {
				posts(orderBy: publishedAt_DESC, first: 3) {
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

		const { projects } = await graphcms.request(query);
		const { posts } = await graphcms.request(queryPost);

		return {
			props: { projects, posts }
		};
	}
</script>

<script>
	// @ts-nocheck

	import LanguagesList from '$lib/components/LanguagesList.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import { darkModeStore } from '$lib/stores/filters';

	export let projects;
	export let posts;

</script>

<Seo
	title={'Web Developer'}
	metadescription={'Sono Daniele Avolio, sviluppatore specializzato nella programmazione lato Front-End, utilizzando le più aggiornate tecnologie e creando web application performanti.'}
	imageUrl="https://www.danieleavolio.it/pictures/me.jpg"
	/>

<section class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} index">
	<ProfileCard />
</section>

<section id="posts" class={$darkModeStore == 'enabled' ? 'dark' : 'light'}>
	<h1>Posts</h1>
	<PostsList {posts} />
</section>

<section class={$darkModeStore == 'enabled' ? 'dark' : 'light'}>
	<h1>Progetti</h1>
	<ProjectList {projects} />
</section>

<section id="languages" class={$darkModeStore == 'enabled' ? 'dark' : 'light'}>
	<h1>Linguaggi e Strumenti</h1>
	<LanguagesList />
</section>

<style>
	h1 {
		font-size: clamp(2.5em, 8vw, 5em);
		text-align: center;
	}
	section {
		max-width: 100vw;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1em;
	}

	.index {
		display: grid;
		place-items: center;
		grid-template-rows: 1fr;
	}

	@keyframes down-indicator {
		0% {
			transform: translateY(-20%);
		}
		100% {
			transform: translateY(0%);
		}
	}
</style>
