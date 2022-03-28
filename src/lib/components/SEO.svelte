<script>

    export let siteTitle = "Daniele Avolio";
	export let metadescription;
	export let title;

	console.log(metadescription);
	
</script>

<svelte:head>
	<title>{siteTitle} - {title}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang={'it'} />
</svelte:head>
