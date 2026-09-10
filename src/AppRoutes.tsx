import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeEn } from './pages/HomeEn';
import { HomeId } from './pages/HomeId';
import { Mp3En } from './pages/Mp3En';
import { Mp3Id } from './pages/Mp3Id';
import { ThumbEn } from './pages/ThumbEn';
import { ThumbId } from './pages/ThumbId';
import { ProfileEn } from './pages/ProfileEn';
import { ProfileId } from './pages/ProfileId';
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
        path="/thumbnail"
        element={
          <AppShell lang="en" section="thumbnail">
            <ThumbEn />
          </AppShell>
        }
      />
      <Route
        path="/profile"
        element={
          <AppShell lang="en" section="profile">
            <ProfileEn />
          </AppShell>
        }
      />
      <Route
        path="/faq"
        element={
          <AppShell lang="en" section="faq">
            <FAQ lang="en" />
          </AppShell>
        }
      />
      <Route
        path="/contact"
        element={
          <AppShell lang="en" section="contact">
            <Contact lang="en" />
          </AppShell>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <AppShell lang="en" section="privacy-policy">
            <PrivacyPolicy lang="en" />
          </AppShell>
        }
      />
      <Route
        path="/terms-conditions"
        element={
          <AppShell lang="en" section="terms-conditions">
            <TermsConditions lang="en" />
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
        path="/id/thumbnail"
        element={
          <AppShell lang="id" section="thumbnail">
            <ThumbId />
          </AppShell>
        }
      />
      <Route
        path="/id/profile"
        element={
          <AppShell lang="id" section="profile">
            <ProfileId />
          </AppShell>
        }
      />
      <Route
        path="/id/faq"
        element={
          <AppShell lang="id" section="faq">
            <FAQ lang="id" />
          </AppShell>
        }
      />
      <Route
        path="/id/contact"
        element={
          <AppShell lang="id" section="contact">
            <Contact lang="id" />
          </AppShell>
        }
      />
      <Route
        path="/id/privacy-policy"
        element={
          <AppShell lang="id" section="privacy-policy">
            <PrivacyPolicy lang="id" />
          </AppShell>
        }
      />
      <Route
        path="/id/terms-conditions"
        element={
          <AppShell lang="id" section="terms-conditions">
            <TermsConditions lang="id" />
          </AppShell>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
