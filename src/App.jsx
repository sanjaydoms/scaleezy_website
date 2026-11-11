import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';

const About = lazy(() => import('./components/About'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const ModulesPage = lazy(() => import('./components/ModulesPage'));
const ModuleDetailPage = lazy(() => import('./components/ModuleDetailPage'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const SolutionsPage = lazy(() => import('./components/SolutionsPage'));
const DemoPage = lazy(() => import('./components/DemoPage'));
const BlogsPage = lazy(() => import('./components/BlogsPage'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Drop movement-based animations for visitors who ask their device to reduce motion */}
      <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)]">
        <Header />
        <Suspense fallback={<div className="min-h-screen bg-[var(--color-warm-white)]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-scaleezy" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/modules/:slug" element={<ModuleDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/request-access" element={<DemoPage />} />
            <Route path="/book-a-demo" element={<Navigate to="/request-access" replace />} />
            <Route path="/demo" element={<Navigate to="/request-access" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/cookie-policy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/cookies" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
            <Route path="/terms-of-service" element={<Navigate to="/terms-and-conditions" replace />} />

            {/* Direct convenience shortcuts for modules */}
            <Route path="/inventory" element={<Navigate to="/modules/inventory" replace />} />
            <Route path="/crm" element={<Navigate to="/modules/crm" replace />} />
            <Route path="/boutique" element={<Navigate to="/modules/boutique" replace />} />
            <Route path="/tryon2buy" element={<Navigate to="/modules/tryon2buy" replace />} />
            <Route path="/tryon" element={<Navigate to="/modules/tryon2buy" replace />} />
            <Route path="/pos" element={<Navigate to="/modules/pos" replace />} />
            <Route path="/marketing" element={<Navigate to="/modules/marketing" replace />} />
            <Route path="/analytics" element={<Navigate to="/modules/analytics" replace />} />
            <Route path="/billing-desk" element={<Navigate to="/modules/billing-desk" replace />} />
            <Route path="/billing" element={<Navigate to="/modules/billing-desk" replace />} />
            <Route path="/finance" element={<Navigate to="/modules/billing-desk" replace />} />
            <Route path="/logistics" element={<Navigate to="/modules/logistics" replace />} />

            {/* Legacy URLs from the previous site (301s also live in vercel.json) */}
            <Route path="/about" element={<Navigate to="/about-scaleezy" replace />} />
            <Route path="/blog" element={<Navigate to="/blogs" replace />} />
            <Route path="/platform/:moduleId" element={<ModuleDetailPage />} />
            <Route path="/platform/*" element={<Navigate to="/modules" replace />} />
            <Route path="/industries" element={<Navigate to="/solutions" replace />} />
            <Route path="/stories" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
      </MotionConfig>
    </Router>
  );
}

export default App;
