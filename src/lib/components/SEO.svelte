<script>
	let siteTitle = 'Daniele Avolio';
	export let metadescription;
	export let title;
	export let imageUrl = '';
</script>

<svelte:head>
	<title>{siteTitle} - {title}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:url" content="www.danieleavolio.it" />
	<meta property="og:description" content={metadescription} />
	<meta property="og:image" content={imageUrl} />

	<html lang={'it'} />
</svelte:head>
