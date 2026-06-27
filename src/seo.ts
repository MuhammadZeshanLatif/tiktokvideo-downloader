import type { Lang, Section } from './App';

export const SITE_URL = 'https://tiktokvideosdownloader.com';

export function buildLocalizedPath(lang: Lang, section: Section) {
  const prefix = lang === 'id' ? '/id' : '';

  switch (section) {
    case 'home':
      return prefix || '/';
    case 'mp3':
      return `${prefix}/mp3`;
    case 'faq':
      return `${prefix}/faq`;
    case 'contact':
      return `${prefix}/contact`;
    case 'privacy-policy':
      return `${prefix}/privacy-policy`;
    case 'terms-conditions':
      return `${prefix}/terms-conditions`;
    default:
      return prefix || '/';
  }
}

function canonicalUrl(path: string) {
  return `${SITE_URL}${path === '/' ? '/' : `${path}/`}`;
}

export function getSeoMeta(lang: Lang, section: Section) {
  const metaBySection: Record<Section, { title: string; description: string }> = {
    home:
      lang === 'id'
        ? {
            title: 'TikTok Downloader — Download Video TikTok Tanpa Watermark HD',
            description:
              'Gunakan TikTok Downloader gratis untuk download video TikTok tanpa watermark HD, Android, iPhone, dan PC tanpa APK atau login.',
          }
        : {
            title: 'TikTok Downloader — Download TikTok Videos Without Watermark',
            description:
              'Use a free TikTok Downloader to save TikTok videos without watermark on iPhone, Android, or PC.',
          },
      mp3:
        lang === 'id'
          ? {
              title: 'TikTok MP3 Downloader – Download MP3 TikTok Gratis & Cepat',
              description:
                'Download MP3 TikTok gratis tanpa aplikasi atau login. Tempel link TikTok, unduh audio, lagu, dan sound berkualitas tinggi dengan cepat di Android, iPhone, PC, dan Mac.',
            }
          : {
              title: 'TikTok MP3 Downloader – Download TikTok Audio for Free',
              description:
                'Free TikTok MP3 Downloader to convert TikTok videos into MP3. Download TikTok audio online in seconds without apps or sign-up.',
            },
    faq:
      lang === 'id'
        ? {
            title: 'FAQ TikTok Downloader',
            description: 'Pertanyaan umum seputar TikTok Downloader dan cara menggunakannya.',
          }
        : {
            title: 'TikTok Downloader FAQ',
            description: 'Common questions about using the TikTok downloader and downloads.',
          },
    contact:
      lang === 'id'
        ? {
            title: 'Kontak TikTok Downloader',
            description: 'Hubungi tim support TikTok Downloader.',
          }
        : {
            title: 'Contact TikTok Downloader',
            description: 'Get in touch with the TikTok downloader support team.',
          },
    'privacy-policy':
      lang === 'id'
        ? {
            title: 'Privacy Policy TikTok Downloader',
            description: 'Kebijakan privasi untuk TikTok Downloader.',
          }
        : {
            title: 'TikTok Downloader Privacy Policy',
            description: 'Privacy policy for TikTok Downloader.',
          },
    'terms-conditions':
      lang === 'id'
        ? {
            title: 'Terms and Conditions TikTok Downloader',
            description: 'Syarat dan ketentuan penggunaan TikTok Downloader.',
          }
        : {
            title: 'TikTok Downloader Terms and Conditions',
            description: 'Terms and conditions for using TikTok Downloader.',
          },
  };

  const current = metaBySection[section];
  const canonicalPath = buildLocalizedPath(lang, section);
  const alternateEn = buildLocalizedPath('en', section);
  const alternateId = buildLocalizedPath('id', section);

  return {
    lang,
    title: current.title,
    description: current.description,
    canonical: canonicalUrl(canonicalPath),
    alternateEn: canonicalUrl(alternateEn),
    alternateId: canonicalUrl(alternateId),
    xDefault: `${SITE_URL}/`,
    ogLocale: lang === 'id' ? 'id_ID' : 'en_US',
    ogLocaleAlternate: lang === 'id' ? 'en_US' : 'id_ID',
  };
}

export function renderHeadHtml(lang: Lang, section: Section) {
  const seo = getSeoMeta(lang, section);

  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="TikTok Downloader" />
    <link rel="canonical" href="${seo.canonical}" />
    <link rel="alternate" hreflang="en" href="${seo.alternateEn}" />
    <link rel="alternate" hreflang="id" href="${seo.alternateId}" />
    <link rel="alternate" hreflang="x-default" href="${seo.xDefault}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${seo.ogLocale}" />
    <meta property="og:locale:alternate" content="${seo.ogLocaleAlternate}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${seo.canonical}" />
    <meta property="twitter:title" content="${seo.title}" />
    <meta property="twitter:description" content="${seo.description}" />
  `.trim();
}
