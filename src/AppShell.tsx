import { useEffect, type ReactNode } from 'react';
import { Navigator } from './components/Navigator';
import { Footer } from './components/Footer';
import type { Lang, Section } from './App';
import { getSeoMeta, SITE_URL } from './seo';
import { buildJsonLd } from './schema';

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

    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: seo.canonical });
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    });
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: seo.ogImage });
    ensureMeta('meta[property="og:locale"]', { property: 'og:locale', content: seo.ogLocale });
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seo.description,
    });
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: seo.ogImage });

    // Client-side route changes must swap the JSON-LD too, otherwise an in-app
    // navigation leaves the previous page's schema in the document.
    let script = document.head.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"][data-app-schema]'
    );
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-app-schema', '');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(
      buildJsonLd({
        lang,
        section,
        siteUrl: SITE_URL,
        canonical: seo.canonical,
        title: seo.title,
        description: seo.description,
      })
    );
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
      <Footer lang={lang} />
    </div>
  );
}
