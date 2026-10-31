import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';

const About = lazy(() => import('./components/About'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const ModulesPage = lazy(() => import('./components/ModulesPage'));
const SolutionsPage = lazy(() => import('./components/SolutionsPage'));
const DemoPage = lazy(() => import('./components/DemoPage'));
const BlogsPage = lazy(() => import('./components/BlogsPage'));
const BlogPost = lazy(() => import('./components/BlogPost'));

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
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/book-a-demo" element={<DemoPage />} />
            <Route path="/request-access" element={<DemoPage />} />

            {/* Legacy URLs from the previous site (301s also live in vercel.json) */}
            <Route path="/about" element={<Navigate to="/about-scaleezy" replace />} />
            <Route path="/blog" element={<Navigate to="/blogs" replace />} />
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
