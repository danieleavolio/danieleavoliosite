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
					name
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

	export let projects;
	export let posts;

	let showEverything = false;
</script>

<Seo
	title={'Daniele Avolio - Web Developer'}
	metadescription={'Sono Daniele Avolio, sviluppatore specializzato nella programmazione lato Front-End, utilizzando le più aggiornate tecnologie e creando web application performanti.'}
/>

<section class="dark index">
	<ProfileCard />
	<a on:click={() => (showEverything = true)} href="#posts" class="material-icons expand">
		expand_more
	</a>
</section>

{#if showEverything}
	<section id="posts" class="light">
		<h1 class="dark-text">Posts</h1>
		<PostsList {posts} />
	</section>

	<section class="dark">
		<h1 class="light-text">Progetti</h1>
		<ProjectList {projects} />
	</section>

	<section id="languages" class="light">
		<h1 class="dark-text">Linguaggi e Strumenti</h1>
		<LanguagesList />
	</section>
{/if}

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
	.expand {
		color: var(--light);
		font-size: 2.5em;
		animation: down-indicator 1s ease-in-out alternate infinite;
		text-decoration: none;
	}

	.light {
		background-color: var(--light);
	}

	.dark {
		background-color: var(--dark);
	}

	.dark-text {
		color: var(--dark);
	}

	.light-text {
		color: var(--light);
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
