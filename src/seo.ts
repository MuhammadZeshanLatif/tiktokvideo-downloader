import type { Lang, Section } from './App';
import { renderJsonLdHtml } from './schema';

export const SITE_URL = 'https://alltiktokdownloader.com';
export const SITE_NAME = 'All TikTok Downloader';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export function buildLocalizedPath(lang: Lang, section: Section) {
  const prefix = lang === 'id' ? '/id' : '';

  switch (section) {
    case 'home':
      return prefix || '/';
    case 'mp3':
      return `${prefix}/mp3`;
    case 'thumbnail':
      return `${prefix}/thumbnail`;
    case 'profile':
      return `${prefix}/profile`;
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

// Titles target 51-59 chars and descriptions 151-159 so Google rarely truncates them.
// Indonesian copy leads with the phrases that actually carry volume in the ID database:
// "download video tiktok tanpa watermark", "download mp3 tiktok", "download foto tiktok".
const META: Record<Lang, Record<Section, { title: string; description: string }>> = {
  en: {
    home: {
      title: 'TikTok Downloader - TikTok to MP4 Without Watermark',
      description:
        'Free TikTok downloader and TikTok to MP4 tool. Paste a public TikTok link to save videos without watermark, MP4, MP3, photos, stories, and thumbnails.',
    },
    mp3: {
      title: 'TikTok MP3 Downloader - Convert TikTok Video to MP3',
      description:
        'Convert any public TikTok video to MP3 and download the audio free. Paste a TikTok link, pick MP3, and save the sound on iPhone, Android, or PC. No app needed.',
    },
    thumbnail: {
      title: 'TikTok Thumbnail Downloader - Save Video Cover in HD',
      description:
        'Download the thumbnail or cover image of any public TikTok video in HD. Paste the video link and save the full size cover free, with no app install or login.',
    },
    profile: {
      title: 'TikTok Profile Picture Downloader - Save Avatar in HD',
      description:
        'Download any public TikTok profile picture in full HD size. Enter a TikTok username or profile link and save the avatar free, with no app install or sign up.',
    },
    faq: {
      title: 'TikTok Downloader FAQ - Answers to Common Questions',
      description:
        'Answers to common questions about our TikTok downloader: HD quality, watermark removal, MP3 audio, mobile support, download limits, safety, and legal use.',
    },
    contact: {
      title: 'Contact TikTok Downloader - Get Help From Our Support',
      description:
        'Contact the All TikTok Downloader team about a failed download, a bug, a feature request, or a copyright question. We read every message that comes in.',
    },
    'privacy-policy': {
      title: 'Privacy Policy - How TikTok Downloader Handles Data',
      description:
        'Read how All TikTok Downloader handles your data. We do not require login, do not store the TikTok links you paste, and do not sell personal information.',
    },
    'terms-conditions': {
      title: 'Terms and Conditions - TikTok Downloader Usage Rules',
      description:
        'The terms for using All TikTok Downloader, including permitted personal use, copyright responsibilities, service limits, and what we do not allow on the site.',
    },
  },
  id: {
    home: {
      title: 'Download Video TikTok Tanpa Watermark HD dan Gratis',
      description:
        'Download video TikTok tanpa watermark kualitas HD secara gratis. Tempel link TikTok, lalu simpan MP4 atau MP3 di Android, iPhone, dan PC tanpa aplikasi.',
    },
    mp3: {
      title: 'Download MP3 TikTok - Ubah Video TikTok Jadi Audio MP3',
      description:
        'Download MP3 TikTok gratis tanpa aplikasi atau login. Tempel link video TikTok, pilih format MP3, lalu simpan audio, lagu, dan sound di HP, tablet, maupun PC.',
    },
    thumbnail: {
      title: 'Download Foto TikTok - Simpan Cover Video TikTok HD',
      description:
        'Download foto TikTok tanpa watermark dalam kualitas HD secara gratis. Tempel link video TikTok, lalu simpan gambar covernya tanpa aplikasi dan tanpa login.',
    },
    profile: {
      title: 'Download Foto Profil TikTok - Simpan Avatar HD Gratis',
      description:
        'Download foto profil TikTok ukuran penuh secara gratis. Masukkan username atau link profil TikTok, lalu simpan avatar HD tanpa aplikasi dan tanpa login.',
    },
    faq: {
      title: 'FAQ TikTok Downloader - Pertanyaan yang Sering Muncul',
      description:
        'Jawaban untuk pertanyaan umum seputar TikTok downloader: kualitas HD, hapus watermark, audio MP3, dukungan HP, batas download, keamanan, dan sisi legalnya.',
    },
    contact: {
      title: 'Kontak TikTok Downloader - Hubungi Tim Dukungan Kami',
      description:
        'Hubungi tim All TikTok Downloader untuk melaporkan download yang gagal, bug, permintaan fitur, atau pertanyaan hak cipta. Semua pesan kami baca satu per satu.',
    },
    'privacy-policy': {
      title: 'Kebijakan Privasi - Cara Kami Menangani Data Pengguna',
      description:
        'Baca cara All TikTok Downloader menangani data Anda. Kami tidak meminta login, tidak menyimpan link TikTok yang Anda tempel, dan tidak menjual data pribadi.',
    },
    'terms-conditions': {
      title: 'Syarat dan Ketentuan TikTok Downloader - Aturan Pakai',
      description:
        'Syarat penggunaan All TikTok Downloader, mencakup penggunaan pribadi yang diizinkan, tanggung jawab hak cipta, batasan layanan, dan hal yang kami larang.',
    },
  },
};

export function getSeoMeta(lang: Lang, section: Section) {
  const current = META[lang][section];
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
    ogImage: OG_IMAGE,
    siteName: SITE_NAME,
  };
}

function escapeAttr(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function renderHeadHtml(lang: Lang, section: Section) {
  const seo = getSeoMeta(lang, section);
  const title = escapeAttr(seo.title);
  const description = escapeAttr(seo.description);

  const jsonLd = renderJsonLdHtml({
    lang,
    section,
    siteUrl: SITE_URL,
    canonical: seo.canonical,
    title: seo.title,
    description: seo.description,
  });

  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="theme-color" content="#010101" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="canonical" href="${seo.canonical}" />
    <link rel="alternate" hreflang="en" href="${seo.alternateEn}" />
    <link rel="alternate" hreflang="id" href="${seo.alternateId}" />
    <link rel="alternate" hreflang="x-default" href="${seo.xDefault}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${escapeAttr(seo.siteName)}" />
    <meta property="og:locale" content="${seo.ogLocale}" />
    <meta property="og:locale:alternate" content="${seo.ogLocaleAlternate}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${seo.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeAttr(seo.siteName)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${seo.canonical}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${seo.ogImage}" />
    ${jsonLd}
  `.trim();
}
