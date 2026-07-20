import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BusinessClarity } from './components/BusinessClarity';
import { Comparison } from './components/Comparison';
import { ConnectedBusiness } from './components/ConnectedBusiness';
import { ConnectionMap } from './components/ConnectionMap';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Industries } from './components/Industries';
import { Journey } from './components/Journey';
import { Nav } from './components/Nav';
import { Outcomes } from './components/Outcomes';
import { Platform } from './components/Platform';
import { Problem } from './components/Problem';
import { ScrollToTop } from './components/ScrollToTop';
import { SoftwareGap } from './components/SoftwareGap';
import { Stories } from './components/Stories';
import { TrustedBy } from './components/TrustedBy';
import { TryOn } from './components/TryOn';
import { BookDemoModal } from './components/BookDemoModal';
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
          <Route path="/" element={<HomePage />} />
          <Route path="/platform/:moduleId" element={<ModuleDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <BookDemoModal />
      </div>
    </BrowserRouter>);

}
function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Problem />
      <SoftwareGap />
      <ConnectionMap />
      <Journey />
      <Platform />
      <ConnectedBusiness />
      <TryOn />
      <BusinessClarity />
      <Outcomes />
      <Industries />
      <Comparison />
      <Stories />
      <FAQ />
      <FinalCTA />
    </main>);

}