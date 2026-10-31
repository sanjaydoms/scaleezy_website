import React from 'react';
import HomeHero from './home/HomeHero';
import StaircaseIntro from './home/StaircaseIntro';
import CoreShowcase from './home/CoreShowcase';
import SizeMatrix from './home/SizeMatrix';
import FixesMosaic from './home/FixesMosaic';
import DevicesChapter from './home/DevicesChapter';
import ModuleRows from './home/ModuleRows';
import KurtaJourney from './home/KurtaJourney';
import WhyDifferent from './home/WhyDifferent';
import ResultsTiles from './home/ResultsTiles';
import BusinessBand from './home/BusinessBand';
import PricingSteps from './home/PricingSteps';
import CompareTable from './home/CompareTable';
import MobileChapter from './home/MobileChapter';
import Voices from './home/Voices';
import DemoChapter from './home/DemoChapter';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

// Each section is a chapter with its own flat colour, like the folded-colour wall of a saree shop
export default function Home() {
  usePageMeta("Scaleezy — The Intelligent Operating System for Apparel Commerce", "Scaleezy is the connected operating system built specifically for boutiques, fashion retailers, and apparel brands.");
  return (
    <div>
      <main>
        <HomeHero />
        <StaircaseIntro />
        <CoreShowcase />
        <SizeMatrix />
        <FixesMosaic />
        <DevicesChapter />
        <ModuleRows />
        <KurtaJourney />
        <WhyDifferent />
        <ResultsTiles />
        <BusinessBand />
        <PricingSteps />
        <CompareTable />
        <MobileChapter />
        <Voices />
        <DemoChapter />
      </main>
      <Footer />
    </div>
  );
}
