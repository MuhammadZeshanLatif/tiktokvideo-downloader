import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

export type Lang = 'en' | 'id';
export type Page = 'home' | 'mp3';
export type Section = Page | 'faq' | 'contact' | 'privacy-policy' | 'terms-conditions';

export function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
