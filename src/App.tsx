import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Nav } from './components/landing/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BookDemoModal } from './components/BookDemoModal';
import { LandingPage } from './pages/Landing/LandingPage';
import { ModuleDetailPage } from './pages/ModuleDetail/ModuleDetailPage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import { AboutPage } from './pages/About/AboutPage';
import { BlogListPage } from './pages/Blog/BlogListPage';
import { BlogDetailPage } from './pages/Blog/BlogDetailPage';
import { InventoryPage } from './pages/Inventory/InventoryPage';

// Routes where the global Nav, Footer, and BookDemoModal should be hidden.
// The Inventory workspace is a self-contained dashboard with its own sidebar + header.
const STANDALONE_ROUTES = ['/platform/inventory/workspace'];

function AppShell() {
  const { pathname } = useLocation();
  const isStandalone = STANDALONE_ROUTES.includes(pathname);

  return (
    <>
      <ScrollToTop />
      {isStandalone ? (
        // Standalone dashboard — render ONLY the page, no global chrome
        <Routes>
          <Route path="/platform/inventory/workspace" element={<InventoryPage />} />
        </Routes>
      ) : (
        // Normal site layout — global Nav, page content, Footer, and modal
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
      )}
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}