<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';
	export async function load(page) {
		const slug = page.params.slug;
		// @ts-ignore
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
			headers: {}
		});
		const query = gql`
		query MyProject {
			project(where: {slug: "${slug}"}) {
				content{
          			html
        		}
				description
				slug
				tags
				title
				image{
					url
					fileName
				}
				createdAt
				github
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
	import NormalTag from '$lib/components/NormalTag.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import { darkModeStore } from '$lib/stores/filters';
	import { goto } from '$app/navigation';
	import BackTo from '$lib/components/fundamentals/BackTo.svelte';
	import AnimationButton from '$lib/components/fundamentals/AnimationButton.svelte';

	export let project;

	const backToProjects = () => {
		goto('/progetti');
	};
</script>

<Seo title={project.title} metadescription={project.description} imageUrl={project.image[0].url} />
<svelte:head>
	<meta property="og:type" content="article" />
</svelte:head>
<div
	in:fly={{ y: -100, duration: 1000, delay: 500 }}
	class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} project"
>
	{#if project}
		<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} container">
			<BackTo actionToDo={backToProjects} text="PROGETTI" />
			<h1>{project.title}</h1>
			<img
				width="700"
				height="400"
				loading="lazy"
				class="cover"
				src={project.image[0].url}
				alt={project.image[0].fileName}
			/>
			<p class="description">{project.description}</p>
			<div class="tags">
				{#each project.tags as tag}
					<NormalTag {tag} type="progetto" />
				{/each}
			</div>
			<div class="date">
				<p>Pubblicato il {new Date(project.createdAt).toLocaleDateString()}</p>
			</div>
		</div>

		<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} container">
			{#if project.content}
				<div class="content">
					<p loading="lazy">{@html project.content.html}</p>
				</div>
			{/if}

			{#if project.github}
				<AnimationButton href={project.github} text="Repository" icon="code" />
			{/if}
		</div>
	{/if}
</div>

<style>
	.container {
		padding: 1em;
		border-radius: 0.2em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 60%;
	}
	h1 {
		font-size: clamp(1.2em, 10vw, 4em);
		text-align: center;
	}

	.project {
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
		width: 90%;
	}
	.cover {
		max-width: 100%;
		height: 50vh;
		border-radius: 5px;
		object-fit: contain;
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
		max-width: 100%;
	}

	@media screen and (max-width: 800px) {
		.container {
			width: 90%;
		}
	}
</style>
