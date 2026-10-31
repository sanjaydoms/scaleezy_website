import React from 'react';
import HeroSection from './HeroSection';
import Marquee from './Marquee';
import SectionStickyScroll from './SectionStickyScroll';
import Section2 from './Section2';
import Section3 from './Section3';
import SectionDashboardPreview from './SectionDashboardPreview';
import Section4 from './Section4';
import SectionJourney from './SectionJourney';
import SectionWhy from './SectionWhy';
import SectionPricing from './SectionPricing';
import SectionSolutions from './SectionSolutions';
import SectionMobileApp from './SectionMobileApp';
import SectionTestimonials from './SectionTestimonials';
import SectionCTA from './SectionCTA';
import SectionResults from './SectionResults';
import SectionComparison from './SectionComparison';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

export default function Home() {
  usePageMeta("Scaleezy — The Intelligent Operating System for Apparel Commerce", "Scaleezy is the connected operating system built specifically for boutiques, fashion retailers, and apparel brands.");
  return (
    <div>
      <main className="pt-20">
        {/* Modern 3D Panoramic Curved Hero Section */}
        <HeroSection />

        <Marquee />
        
        <SectionStickyScroll />

        <Section2 />
        <Section3 />
        <SectionDashboardPreview />
        <Section4 />
        <SectionJourney />
        <SectionWhy />
        <SectionPricing />
        <SectionResults />
        <SectionSolutions />
        <SectionComparison />
        <SectionMobileApp />
        <SectionTestimonials />
        <SectionCTA />

      </main>
      <Footer />
    </div>
  );
}
