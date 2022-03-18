<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';

	export async function load() {
		// @ts-ignore
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
			headers: {}
		});

		const query = gql`
			query ProjectsIndex {
				projects(orderBy: createdAt_DESC) {
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

		const { projects } = await graphcms.request(query);

		return {
			props: { projects }
		};
	}
</script>

<script>
	import ProjectList from '$lib/components/ProjectList.svelte';
	import { fly } from 'svelte/transition';
	import ProjectFilterTag from '$lib/components/ProjectFilterTag.svelte';
	import { afterNavigate } from '$app/navigation';
	import { projectFilterStore } from '$lib/stores/filters';
import RemoveFilter from '$lib/components/RemoveFilter.svelte';
	export let projects;
	let progettiFiltrati = [];

	let tagScelto = '';
	// Gestione dei filtri
	let listaFiltri = [];

	// @ts-ignore
	projects.forEach((element) => {
		listaFiltri = [...listaFiltri, ...element.tags];
	});

	// I tags presenti nei progetti del sito
	let filtri = [...new Set(listaFiltri.map((item) => item))];

	// Filtra dei progetti con quel determinato tag

	const filtaProgetti = (tagScelto) => {
		return projects.filter((element) => element.tags.includes(tagScelto));
	};

	afterNavigate(() => {
		progettiFiltrati = filtaProgetti($projectFilterStore);
	});

	$: progettiFiltrati = filtaProgetti(tagScelto);
</script>
<svelte:head>
	<title>Progetti</title>
</svelte:head>

<div class="container">
	<h1 in:fly={{ y: -100, duration: 500 }}>Progetti</h1>
	<div class="tag-list">
		{#each filtri as tag}
			<ProjectFilterTag {tag} bind:tagScelto />
		{/each}
		<RemoveFilter />
	</div>
	<div class="progetti">
		{#if progettiFiltrati.length == 0}
			<ProjectList {projects} />
		{:else}
			<ProjectList projects={progettiFiltrati} />
		{/if}
	</div>
</div>

<style>
	.container {
		background-color: var(--dark);
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
	}
	.progetti {
		background-color: var(--dark);
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
		color: var(--light);
	}
</style>
