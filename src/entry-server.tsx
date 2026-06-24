import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

export { STATIC_ROUTES } from './staticRoutes';
export { renderHeadHtml } from './seo';

export function render(url: string) {
  const normalized = url === '/' ? '/' : url.replace(/\/$/, '') || '/';

  return renderToString(
    <MemoryRouter initialEntries={[normalized]}>
      <AppRoutes />
    </MemoryRouter>
  );
}
