import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

export function App({ lang, page = 'home' }: { lang: Lang; page?: Page }) {
  const landing =
    page === 'mp3'
      ? lang === 'id'
        ? <Mp3Id />
        : <Mp3En />
      : lang === 'id'
        ? <HomeId />
        : <HomeEn />;

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigator lang={lang} page={page} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={landing} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
