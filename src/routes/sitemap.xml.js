import GhostContentAPI, { PostsOrPages } from '@tryghost/content-api'
import { API_URL, CONTENT_API_KEY } from '$lib/util/env'

export async function get() {
    const staticPages = Object.keys(
        import.meta.glob('/src/routes/**/!(_)*.svelte')).filter(page => {
        const filters: Array < string > = [
            'slug]',
            '_',
            'private',
            '/src/routes/index.svelte',
        ]

        return !filters.find(filter => page.includes(filter))
    }).map(page => {
        return page.replace('/src/routes', 'https://example.com').replace('/index.svelte', '').replace('.svelte', '')
    })

    const api = new GhostContentAPI({
        url: `${API_URL}`,
        key: `${CONTENT_API_KEY}`,
        version: 'v3',
    })

    const posts = await api.posts.browse({
        limit: 'all',
        fields: ['slug', 'updated_at'],
    })

    const pages = await api.pages.browse({
        limit: 'all',
        fields: ['slug', 'updated_at'],
    })

    const body = render(pages, staticPages, posts)

    const headers = {
        'Cache-Control': `max-age=0, s-max-age=${600}`,
        'Content-Type': 'application/xml',
    }

    return {
        body,
        headers,
    }
}

const render = (pages: PostsOrPages, staticPages: Array < string > , posts: PostsOrPages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>

${pages.map(page => `
  <url>
    <loc>https://example.com/${page.slug !== 'homepage' ? page.slug : ''}</loc>
    <lastmod>${new Date(page.updated_at).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
`)}

${staticPages.map(staticPage => `
  <url>
    <loc>${staticPage}</loc>
    <lastmod>${`${process.env.VITE_BUILD_TIME}`}</lastmod>
    <changefreq>monthly</changefreq>
  </url>
`)}

  ${posts.map((post) => `
    <url>
      <loc>https://example.com/posts/${post.slug}</loc>
      <lastmod>${new Date(post.updated_at).toISOString()}</lastmod>
      <changefreq>daily</changefreq>
    </url>
  `)}
</urlset>
`