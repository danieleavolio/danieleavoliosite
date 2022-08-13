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
					content{
						html
					}
					introduction
					coverImage {
						url
						fileName
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
	export let post;

	import Seo from '$lib/components/SEO.svelte';
	import NormalTag from '$lib/components/NormalTag.svelte';
	import { darkModeStore } from '$lib/stores/filters';
	import { goto } from '$app/navigation';
	import BackTo from '$lib/components/fundamentals/BackTo.svelte';
	const backToPost = () => {
		goto('/postslist');
	};
</script>

<Seo title={post.title} metadescription={post.introduction} imageUrl={post.coverImage.url} />
<svelte:head>
	<meta property="og:type" content="article" />
</svelte:head>
<div
	in:fly={{ y: -100, duration: 1000, delay: 500 }}
	class="{$darkModeStore == 'enabled' ? 'dark' : 'light'} project"
>
	{#if post}
		<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} container">
			<BackTo actionToDo={backToPost} text="POSTS" />
			<h1>{post.title}</h1>
			<h3>{post.introduction}</h3>
			<img
				width="700"
				height="400"
				loading="lazy"
				class="cover"
				src={post.coverImage.url}
				alt={post.coverImage.fileName}
			/>
			<div class="author">
				<img
					width="80"
					height="80"
					loading="lazy"
					class="avatar"
					src={post.authors[0].picture.url}
					alt=""
				/>
				<div class="name-date">
					<p>{post.authors[0].name}</p>
					<p>{post.date}</p>
				</div>
			</div>
			<div class="tags">
				{#each post.tags as tag}
					<NormalTag {tag} type="post" />
				{/each}
			</div>
		</div>
		<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} container">
			{#if post.content}
				<div class="content">
					<p loading="lazy">{@html post.content.html}</p>
				</div>
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
	h3 {
		font-size: clamp(1em, 2vw, 1.5em);
		text-align: center;
		font-style: italic;
		font-weight: 500;
	}

	.avatar {
		object-fit: cover;
		width: 80px;
		height: 80px;
		border-radius: 0.3em;
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

	.author {
		display: flex;
		gap: 0.5em;
		justify-content: center;
		align-items: center;
	}

	.name-date {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
