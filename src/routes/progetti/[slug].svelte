<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';
	export async function load(page) {
		const slug = page.params.slug;

		// @ts-ignore
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
			headers: {}
		});

		const query = gql`
		query project {
			project(where: {slug: "${slug}"}) {
				content
				description
				slug
				tags
				name
				image{
					url
				}
			}
		}

		`;

		const { project } = await graphcms.request(query);

		return {
			props: { project }
		};
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	import { marked } from 'marked';
	export let project;

	import ProjectTag from '$lib/components/ProjectTag.svelte';
import Seo from '$lib/components/SEO.svelte';
</script>

<Seo title={project.name} metadescription={project.description} />
<svelte:head>
	<meta property="og:type" content="article" />
</svelte:head>
<div in:fly={{ y: -100, duration: 1000, delay: 500 }} class="project">
	{#if project}
		<h1>{project.name}</h1>
		<p class="description">{project.description}</p>
		<img class="cover" src={project.image[0].url} alt="" />
		<div class="tags">
			{#each project.tags as tag}
				<ProjectTag {tag} />
			{/each}
		</div>

		{#if project.content}
			<div class="content">
				<p>{@html marked(project.content)}</p>
			</div>
		{/if}
	{/if}
</div>

<style>
	h1 {
		font-size: clamp(1.2em, 15vw, 4em);
		text-align: center;
		color: var(--dark);
	}

	.project {
		background-color: var(--light);
		padding: 1em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		gap: 1em;
		white-space: break-spaces;
	}

	.description {
		text-align: center;
	}
	.cover {
		max-width: 100%;
		height: 50vh;
		border-radius: 5px;
		object-fit: cover;
	}

	.tags {
		z-index: 2;
		display: flex;
		gap: 0.5em;
		flex-wrap: wrap;
		padding: 0 1em;
		justify-content: center;
		align-items: center;
	}

	.content {
	}
</style>
