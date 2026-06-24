import { useEffect, type ReactNode } from 'react';
import { Navigator } from './components/Navigator';
import { Footer } from './components/Footer';
import type { Lang, Section } from './App';
import { getSeoMeta } from './seo';

function ensureMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function ensureLink(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function useSeo(lang: Lang, section: Section) {
  useEffect(() => {
    const seo = getSeoMeta(lang, section);

    document.title = seo.title;
    document.documentElement.lang = lang;

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    });

    ensureLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: seo.canonical,
    });

    ensureLink('link[rel="alternate"][hreflang="en"]', {
      rel: 'alternate',
      hreflang: 'en',
      href: seo.alternateEn,
    });

    ensureLink('link[rel="alternate"][hreflang="id"]', {
      rel: 'alternate',
      hreflang: 'id',
      href: seo.alternateId,
    });

    ensureLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: seo.xDefault,
    });
  }, [lang, section]);
}

export function AppShell({
  lang,
  section,
  children,
}: {
  lang: Lang;
  section: Section;
  children: ReactNode;
}) {
  useSeo(lang, section);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigator lang={lang} section={section} />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
}
