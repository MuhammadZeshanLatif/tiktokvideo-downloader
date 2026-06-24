import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeEn } from './pages/HomeEn';
import { HomeId } from './pages/HomeId';
import { Mp3En } from './pages/Mp3En';
import { Mp3Id } from './pages/Mp3Id';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { AppShell } from './AppShell';

export function AppRoutes() {
  return (
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
  );
}
