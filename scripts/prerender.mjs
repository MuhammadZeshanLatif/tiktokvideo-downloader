import path from 'path';
import fs from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const serverEntry = path.resolve(distDir, 'server', 'entry-server.js');

function routeOutputPath(routePath) {
  if (routePath === '/') {
    return path.join(distDir, 'index.html');
  }

  return path.join(distDir, routePath.slice(1), 'index.html');
}

function extractBuiltAssets(template) {
  const css = [...template.matchAll(/<link rel="stylesheet"[^>]+>/g)].map((match) => match[0]);
  const scripts = [...template.matchAll(/<script type="module"[^>]+><\/script>/g)].map(
    (match) => match[0]
  );

  return { css, scripts };
}

// Canonicals end in a slash, so sitemap URLs must match them exactly or the two
// signals disagree about which URL is the real one.
function canonicalFor(siteUrl, routePath) {
  return `${siteUrl}${routePath === '/' ? '/' : `${routePath}/`}`;
}

function writeSitemap(routes, siteUrl, buildLocalizedPath) {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = routes
    .map((route) => {
      const loc = canonicalFor(siteUrl, route.path);
      // Every URL declares the full hreflang cluster, which is what Google expects
      // for a two-language site.
      const alternates = ['en', 'id']
        .map(
          (lang) =>
            `    <xhtml:link rel="alternate" hreflang="${lang}" href="${canonicalFor(
              siteUrl,
              buildLocalizedPath(lang, route.section)
            )}" />`
        )
        .join('\n');

      const priority = route.section === 'home' ? '1.0' : route.path.includes('privacy') || route.path.includes('terms') ? '0.3' : '0.8';

      return `  <url>
    <loc>${loc}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
  console.log(`wrote sitemap.xml (${routes.length} urls)`);
}

function writeRobots(siteUrl) {
  // AI answer engines are named explicitly: this is a free public tool that wants
  // to be quoted, so nothing here is worth blocking.
  const robots = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
  console.log('wrote robots.txt');
}

async function prerender() {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  const { css, scripts } = extractBuiltAssets(template);
  const { render, STATIC_ROUTES, renderHeadHtml, SITE_URL, buildLocalizedPath } = await import(
    pathToFileURL(serverEntry).href
  );

  for (const route of STATIC_ROUTES) {
    const appHtml = render(route.path);
    const headHtml = renderHeadHtml(route.lang, route.section);
    const html = `<!doctype html>
<html lang="${route.lang}">
  <head>
    ${headHtml}
    ${css.join('\n    ')}
  </head>
  <body>
    <div id="root">${appHtml}</div>
    ${scripts.join('\n    ')}
  </body>
</html>
`;

    const outputPath = routeOutputPath(route.path);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html);
    console.log(`prerendered ${route.path} -> ${path.relative(rootDir, outputPath)}`);
  }

  writeSitemap(STATIC_ROUTES, SITE_URL, buildLocalizedPath);
  writeRobots(SITE_URL);
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
