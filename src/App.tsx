import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/landing/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BookDemoModal } from './components/BookDemoModal';
import { LandingPage } from './pages/LandingPage';
import { ModuleDetailPage } from './pages/ModuleDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutPage } from './pages/AboutPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogDetailPage } from './pages/BlogDetailPage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full bg-cream text-forest">
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/platform/:moduleId" element={<ModuleDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <BookDemoModal />
      </div>
    </BrowserRouter>
  );
}