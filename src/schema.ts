import type { Lang, Section } from './App';
import { homeFaqsEn, homeFaqsId, faqPageEn, faqPageId, type Faq } from './data/faqs';
import { thumbFaqsEn, thumbFaqsId, profileFaqsEn, profileFaqsId } from './data/toolFaqs';

// JSON-LD builders. Every value here must be backed by something a visitor can
// actually see on the page — no invented ratings, authors, logos, or profiles.

const SITE_NAME = 'All TikTok Downloader';

type SchemaCtx = {
  lang: Lang;
  section: Section;
  siteUrl: string;
  canonical: string;
  title: string;
  description: string;
};

const sectionLabel: Record<Section, { en: string; id: string }> = {
  home: { en: 'Home', id: 'Beranda' },
  mp3: { en: 'TikTok MP3 Downloader', id: 'Download MP3 TikTok' },
  thumbnail: { en: 'TikTok Thumbnail Downloader', id: 'Download Thumbnail TikTok' },
  profile: { en: 'TikTok Profile Picture Downloader', id: 'Download Foto Profil TikTok' },
  faq: { en: 'FAQ', id: 'FAQ' },
  contact: { en: 'Contact', id: 'Kontak' },
  'privacy-policy': { en: 'Privacy Policy', id: 'Kebijakan Privasi' },
  'terms-conditions': { en: 'Terms and Conditions', id: 'Syarat dan Ketentuan' },
};

function faqPageSchema(faqs: Faq[], id: string) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

function breadcrumbSchema({ lang, section, siteUrl, canonical }: SchemaCtx) {
  if (section === 'home') return null;

  const homeUrl = lang === 'id' ? `${siteUrl}/id/` : `${siteUrl}/`;

  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: sectionLabel.home[lang],
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: sectionLabel[section][lang],
        item: canonical,
      },
    ],
  };
}

// The four tool routes are genuinely browser-based applications, so WebApplication
// is the honest type. Price 0 matches the "free, no login" copy on every page.
function webApplicationSchema({ lang, section, canonical, title, description }: SchemaCtx) {
  const toolSections: Section[] = ['home', 'mp3', 'thumbnail', 'profile'];
  if (!toolSections.includes(section)) return null;

  return {
    '@type': 'WebApplication',
    '@id': `${canonical}#app`,
    name: title,
    url: canonical,
    description,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Android, iOS, Windows, macOS, Linux',
    browserRequirements: 'Requires JavaScript. Works in any modern browser.',
    inLanguage: lang === 'id' ? 'id-ID' : 'en',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

// Mirrors the visible "How to Download TikTok Videos" 4-step section on the home pages.
function howToSchema({ lang, section, canonical }: SchemaCtx) {
  if (section !== 'home') return null;

  const steps =
    lang === 'id'
      ? [
          ['Salin link video TikTok', 'Buka TikTok, pilih video, lalu ketuk Share dan salin linknya.'],
          ['Tempel link di downloader', 'Kembali ke halaman ini dan tempel link TikTok ke kotak downloader.'],
          ['Pilih format download', 'Pilih MP4, MP3, foto, story, atau opsi tanpa watermark sesuai kebutuhan.'],
          ['Simpan file ke perangkat', 'Ketuk tombol download dan simpan file ke Android, iPhone, atau PC.'],
        ]
      : [
          ['Copy the TikTok video link', 'Open TikTok, find the video, tap Share and copy the link.'],
          ['Paste the URL into the downloader', 'Return to this page and paste the TikTok link into the downloader box.'],
          ['Choose MP4, MP3, or watermark option', 'Pick the format you need, such as a video without watermark or MP3 audio.'],
          ['Save the file to your device', 'Tap the download button and save the file to your iPhone, Android, or PC.'],
        ];

  return {
    '@type': 'HowTo',
    '@id': `${canonical}#howto`,
    name: lang === 'id' ? 'Cara Download Video TikTok' : 'How to Download TikTok Videos',
    inLanguage: lang === 'id' ? 'id-ID' : 'en',
    step: steps.map(([name, text], index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name,
      text,
    })),
  };
}

function pageSchema(ctx: SchemaCtx) {
  const { section, canonical, title, description, lang } = ctx;

  const type =
    section === 'contact'
      ? 'ContactPage'
      : section === 'faq'
        ? 'FAQPage'
        : section === 'privacy-policy' || section === 'terms-conditions'
          ? 'WebPage'
          : 'WebPage';

  // /faq and /id/faq get their FAQ entities from the dedicated FAQ list instead.
  if (section === 'faq') {
    return faqPageSchema(lang === 'id' ? faqPageId : faqPageEn, `${canonical}#faq`);
  }

  return {
    '@type': type,
    '@id': `${canonical}#page`,
    url: canonical,
    name: title,
    description,
    inLanguage: lang === 'id' ? 'id-ID' : 'en',
    isPartOf: { '@id': `${ctx.siteUrl}/#website` },
  };
}

export function buildJsonLd(ctx: SchemaCtx) {
  const graph: unknown[] = [];

  graph.push({
    '@type': 'WebSite',
    '@id': `${ctx.siteUrl}/#website`,
    name: SITE_NAME,
    url: `${ctx.siteUrl}/`,
    inLanguage: ['en', 'id-ID'],
  });

  const page = pageSchema(ctx);
  if (page) graph.push(page);

  const app = webApplicationSchema(ctx);
  if (app) graph.push(app);

  const howTo = howToSchema(ctx);
  if (howTo) graph.push(howTo);

  // Every tool page renders its own FAQ accordion, so each one carries FAQPage
  // built from the exact list the page displays.
  const isId = ctx.lang === 'id';
  // The MP3 pages are intentionally absent: their answers are JSX rather than plain
  // strings, so there is no text version that provably matches what renders.
  const pageFaqs: Partial<Record<Section, Faq[]>> = {
    home: isId ? homeFaqsId : homeFaqsEn,
    thumbnail: isId ? thumbFaqsId : thumbFaqsEn,
    profile: isId ? profileFaqsId : profileFaqsEn,
  };
  const faqs = pageFaqs[ctx.section];
  if (faqs?.length) {
    graph.push(faqPageSchema(faqs, `${ctx.canonical}#faq`));
  }

  const crumbs = breadcrumbSchema(ctx);
  if (crumbs) graph.push(crumbs);

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function renderJsonLdHtml(ctx: SchemaCtx) {
  // </script> inside JSON would close the tag early; escaping the slash is the standard fix.
  const json = JSON.stringify(buildJsonLd(ctx)).replace(/</g, '\\u003c');
  // data-app-schema lets the client reuse this node on route changes instead of
  // appending a second, conflicting graph after hydration.
  return `<script type="application/ld+json" data-app-schema>${json}</script>`;
}
