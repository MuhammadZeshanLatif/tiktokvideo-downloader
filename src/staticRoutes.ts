import type { Lang, Section } from './App';

export type StaticRoute = {
  path: string;
  lang: Lang;
  section: Section;
};

export const STATIC_ROUTES: StaticRoute[] = [
  { path: '/', lang: 'en', section: 'home' },
  { path: '/mp3', lang: 'en', section: 'mp3' },
  { path: '/faq', lang: 'en', section: 'faq' },
  { path: '/contact', lang: 'en', section: 'contact' },
  { path: '/privacy-policy', lang: 'en', section: 'privacy-policy' },
  { path: '/terms-conditions', lang: 'en', section: 'terms-conditions' },
  { path: '/id', lang: 'id', section: 'home' },
  { path: '/id/mp3', lang: 'id', section: 'mp3' },
  { path: '/id/faq', lang: 'id', section: 'faq' },
  { path: '/id/contact', lang: 'id', section: 'contact' },
  { path: '/id/privacy-policy', lang: 'id', section: 'privacy-policy' },
  { path: '/id/terms-conditions', lang: 'id', section: 'terms-conditions' },
];
