export async function get() {
    return {
        headers: {
            'Content-Type': 'application/xml'
        },
        body: `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
          xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="https://www.w3.org/1999/xhtml"
          xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
          xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
          xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
          xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
        <!-- <url> elements go here -->
        <url>
            <loc>https://www.danieleavolio.it/about</loc>
            <lastmod>2022-19-04</lastmod>
        </url>
        <url>
            <loc>https://www.danieleavolio.it</loc>
            <lastmod>2022-19-04</lastmod>
        </url>
        <url>
            <loc>https://www.danieleavolio.it/posts</loc>
            <lastmod>2022-19-04</lastmod>
        </url>
        <url>
            <loc>https://www.danieleavolio.it/progetti</loc>
            <lastmod>2022-19-04</lastmod>
        </url>
        
        <url>
            <loc>https://www.danieleavolio.it/posts/sveltekit-seo-component</loc>
            <lastmod>2022-19-04</lastmod>
        </url>

        <url>
            <loc>https://www.danieleavolio.it/posts/lavori-in-corso</loc>
            <lastmod>2022-19-04</lastmod>
        </url>
        <url>
            <loc>https://www.danieleavolio.it/posts/da-cosi-a-cosi</loc>
            <lastmod>2022-19-04</lastmod>
        </url>
        <url>
            <loc>https://www.danieleavolio.it/progetti/personal-portfolio</loc>
            <lastmod>2022-19-04</lastmod>
        </url>
        <url>
            <loc>https://www.danieleavolio.it/progetti/link4students</loc>
            <lastmod>2022-19-04</lastmod>
        </url>
        </urlset>
      `.trim()
    };
}