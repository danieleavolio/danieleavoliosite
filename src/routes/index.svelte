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

<script lang="ts">
	// @ts-nocheck
	import LanguagesList from '$lib/components/LanguagesList.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import { darkModeStore } from '$lib/stores/filters';
	import { fade } from 'svelte/transition';
	export let projects;
	export let posts;

	let showing = 0;
	let actualScroll = 1;
	let lastScroll = -1;

	let scrollTop = false;

	enum ENUMERATE_THINGS {
		POST,
		PROJECTS,
		LANGUAGES
	}

	$: actualScroll, checkScroll();
	const changeShowing = (show) => {
		showing = show;
		setTimeout(() => {
			const el = document.getElementById(show);
			el.scrollIntoView({
				behavior: 'smooth'
			});
		}, 500);
	};

	const checkScroll = () => {
		scrollTop = actualScroll < lastScroll;
		lastScroll = actualScroll;
	};
</script>

<Seo
	title={'Web Developer'}
	metadescription={'Sono Daniele Avolio, sviluppatore specializzato nella programmazione lato Front-End, utilizzando tecnologie aggiornate e creando web application performanti.'}
	imageUrl="https://www.danieleavolio.it/pictures/me.jpg"
/>

<svelte:window bind:scrollY={actualScroll} />

<div class="relative">
	<section class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} index">
		<ProfileCard />
	</section>
	{#if scrollTop}
		<div
			transition:fade
			class="
		flex   m-auto fixed z-20 barrona  h-100vh  "
		>
			<div
				class="{$darkModeStore == 'enabled'
					? 'dark-container'
					: 'light-container'} grid grid-cols-3 gap-3 text-center items-center px-10 py-6 m-6 rounded-lg justify-evenly relative"
			>
				<div
					on:click={() => {
						changeShowing(ENUMERATE_THINGS.POST);
					}}
					class="square flex flex-col justify-center items-center text-center"
				>
					<div
						class="flex cursor-pointer p-2 md:p-5 rounded-lg material-icons textl-xl md:text-4xl {$darkModeStore ==
						'enabled'
							? 'dark-primary-highlited'
							: 'light-primary-highlited'}"
					>
						pages
					</div>
				</div>

				<div
					on:click={() => {
						changeShowing(ENUMERATE_THINGS.PROJECTS);
					}}
					class="square flex flex-col justify-center items-center text-center"
				>
					<div
						class="flex cursor-pointer p-2 md:p-5 rounded-lg material-icons textl-xl md:text-4xl {$darkModeStore ==
						'enabled'
							? 'dark-primary-highlited'
							: 'light-primary-highlited'}"
					>
						code
					</div>
				</div>

				<div
					on:click={() => {
						changeShowing(ENUMERATE_THINGS.LANGUAGES);
					}}
					class="square flex flex-col justify-center items-center text-center"
				>
					<div
						class="flex cursor-pointer p-2 md:p-5 rounded-lg material-icons textl-xl md:text-4xl {$darkModeStore ==
						'enabled'
							? 'dark-primary-highlited'
							: 'light-primary-highlited'}"
					>
						terminal
					</div>
				</div>
				<p class="md:text-xl hidden md:block">Posts</p>
				<p class="md:text-xl hidden md:block">Progetti</p>
				<p class="md:text-xl hidden md:block">Linguaggi</p>

				<div
					class="md:w-10 md:h-10 rounded-full flex justify-center items-center self-start cursor-pointer absolute top-0 right-0 {$darkModeStore ==
					'enabled'
						? 'dark-primary-highlited'
						: 'light-primary-highlited'}"
						on:click={()=>{scrollTop = false}}
				>
					<span class="material-icons">visibility_off</span>
				</div>
			</div>
		</div>
	{/if}

	{#if showing == ENUMERATE_THINGS.POST}
		<section id={ENUMERATE_THINGS.POST} class={$darkModeStore == 'enabled' ? 'dark' : 'light'}>
			<h1>Posts</h1>
			<PostsList {posts} />
		</section>
	{:else if showing == ENUMERATE_THINGS.PROJECTS}
		<section id={ENUMERATE_THINGS.PROJECTS} class={$darkModeStore == 'enabled' ? 'dark' : 'light'}>
			<h1>Progetti</h1>
			<ProjectList {projects} />
		</section>
	{:else if showing == ENUMERATE_THINGS.LANGUAGES}
		<section id={ENUMERATE_THINGS.LANGUAGES} class={$darkModeStore == 'enabled' ? 'dark' : 'light'}>
			<h1>Linguaggi e Strumenti</h1>
			<LanguagesList />
		</section>
	{/if}
</div>

<style>
	p {
		margin: 0;
	}
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
	.barrona {
		left: 50%;
		transform: translate(-50%, -100%);
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
