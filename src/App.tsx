import { useEffect, type ReactNode } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Navigator } from './components/Navigator';
import { Footer } from './components/Footer';
import { HomeEn } from './pages/HomeEn';
import { HomeId } from './pages/HomeId';
import { Mp3En } from './pages/Mp3En';
import { Mp3Id } from './pages/Mp3Id';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';

export type Lang = 'en' | 'id';
export type Page = 'home' | 'mp3';
export type Section = Page | 'faq' | 'contact' | 'privacy-policy' | 'terms-conditions';

const SITE_URL = 'https://tiktokvideosdownloader.com';

function buildLocalizedPath(lang: Lang, section: Section) {
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
              title: 'Download TikTok MP3, Sound, Audio, and Music',
              description:
                'Selain video, kamu juga bisa mengambil audio dari TikTok untuk menyimpan sound, musik, voiceover, atau lagu TikTok tanpa videonya.',
            }
          : {
              title: 'Download TikTok MP3, Sound, Audio, and Music',
              description:
                'Extract and download MP3 audio, sound, and music from public TikTok videos.',
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

    document.title = current.title;
    document.documentElement.lang = lang;

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: current.description,
    });

    ensureLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: `${SITE_URL}${canonicalPath === '/' ? '/' : `${canonicalPath}/`}`,
    });

    ensureLink('link[rel="alternate"][hreflang="en"]', {
      rel: 'alternate',
      hreflang: 'en',
      href: `${SITE_URL}${alternateEn === '/' ? '/' : `${alternateEn}/`}`,
    });

    ensureLink('link[rel="alternate"][hreflang="id"]', {
      rel: 'alternate',
      hreflang: 'id',
      href: `${SITE_URL}${alternateId}/`,
    });

    ensureLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${SITE_URL}/`,
    });
  }, [lang, section]);
}

function AppShell({
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

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppShell lang="en" section="home">
              <HomeEn />
            </AppShell>
          }
        />
        <Route
          path="/mp3"
          element={
            <AppShell lang="en" section="mp3">
              <Mp3En />
            </AppShell>
          }
        />
        <Route
          path="/faq"
          element={
            <AppShell lang="en" section="faq">
              <FAQ />
            </AppShell>
          }
        />
        <Route
          path="/contact"
          element={
            <AppShell lang="en" section="contact">
              <Contact />
            </AppShell>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <AppShell lang="en" section="privacy-policy">
              <PrivacyPolicy />
            </AppShell>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <AppShell lang="en" section="terms-conditions">
              <TermsConditions />
            </AppShell>
          }
        />
        <Route
          path="/id"
          element={
            <AppShell lang="id" section="home">
              <HomeId />
            </AppShell>
          }
        />
        <Route
          path="/id/mp3"
          element={
            <AppShell lang="id" section="mp3">
              <Mp3Id />
            </AppShell>
          }
        />
        <Route
          path="/id/faq"
          element={
            <AppShell lang="id" section="faq">
              <FAQ />
            </AppShell>
          }
        />
        <Route
          path="/id/contact"
          element={
            <AppShell lang="id" section="contact">
              <Contact />
            </AppShell>
          }
        />
        <Route
          path="/id/privacy-policy"
          element={
            <AppShell lang="id" section="privacy-policy">
              <PrivacyPolicy />
            </AppShell>
          }
        />
        <Route
          path="/id/terms-conditions"
          element={
            <AppShell lang="id" section="terms-conditions">
              <TermsConditions />
            </AppShell>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
