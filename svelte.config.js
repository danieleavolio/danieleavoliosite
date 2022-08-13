import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ postcss: true }),
	kit: {
		adapter: vercel(),
		// the combination of these options
		// disables JavaScript
		browser: {
			hydrate: false,
			router: false
		},
		// since <link rel="stylesheet"> isn't
		// allowed, inline all styles
		inlineStyleThreshold: Infinity
	}
};

export default config;
