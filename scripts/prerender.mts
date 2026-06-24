import path from 'path';
import fs from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const serverEntry = path.resolve(distDir, 'server', 'entry-server.js');

function routeOutputPath(routePath: string) {
  if (routePath === '/') {
    return path.join(distDir, 'index.html');
  }

  return path.join(distDir, routePath.slice(1), 'index.html');
}

function extractBuiltAssets(template: string) {
  const css = [...template.matchAll(/<link rel="stylesheet"[^>]+>/g)].map((match) => match[0]);
  const scripts = [...template.matchAll(/<script type="module"[^>]+><\/script>/g)].map(
    (match) => match[0]
  );

  return { css, scripts };
}

async function prerender() {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  const { css, scripts } = extractBuiltAssets(template);
  const { render, STATIC_ROUTES, renderHeadHtml } = await import(pathToFileURL(serverEntry).href);

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
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
