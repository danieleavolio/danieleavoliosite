<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';
	export async function load(page) {
		const slug = page.params.slug;

		// @ts-ignore
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
			headers: {}
		});

		const query = gql`
			query SinglePost {
				post(where: { slug: "${slug}" }) {
					authors {
						name
						picture{
							url
						}
					}
					content
					coverImage {
						url
					}
					date
					tags
					title
					slug
				}
			}
		`;

		const { post } = await graphcms.request(query);

		return {
			props: { post }
		};
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	import { marked } from 'marked';
	export let post;

	import PostTag from '$lib/components/PostTag.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/SEO.svelte';
</script>

<Seo title={post.title} metadescription={post.content} />
<svelte:head>
	<meta property="og:type" content="article">
</svelte:head>
<div in:fly={{ y: -100, duration: 1000, delay: 500 }} class="project">
	{#if post}
		<h1>{post.title}</h1>
		<div class="tags">
			{#each post.tags as tag}
				<PostTag {tag} />
			{/each}
		</div>
		<div class="author">
			<img class="avatar" src={post.authors[0].picture.url} alt="" />

			<div class="name-date">
				<p>{post.authors[0].name}</p>
				<p>{post.date}</p>
			</div>
		</div>
		<img class="cover" src={post.coverImage.url} alt="" />

		{#if post.content}
			<div class="content">
				<p>{@html marked(post.content)}</p>
			</div>
		{/if}
	{/if}
	<Footer />
</div>

<style>
	h1 {
		font-size: clamp(1.2em, 15vw, 4em);
		text-align: center;
		color: var(--light);
	}

	.avatar {
		object-fit: cover;
		width: 80px;
		height: 80px;
		border-radius: 0.3em;
	}

	.project {
		background-color: var(--dark);
		padding: 1em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		gap: 1em;
		white-space: break-spaces;
	}

	.author {
		color: var(--light);
		display: flex;
		gap: 0.5em;
		justify-content: center;
		align-items: center;
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
		color: var(--light);
	}

	
	
</style>
