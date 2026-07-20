import React from 'react';
import { Nav } from '../components/landing/Navbar';
import { Hero } from '../components/landing/Hero';
import { TrustedBy } from '../components/landing/TrustedBy';
import { Problem } from '../components/landing/Problem';
import { SoftwareGap } from '../components/landing/SoftwareGap';
import { ConnectionMap } from '../components/landing/ConnectionMap';
import { Journey } from '../components/landing/Journey';
import { Platform } from '../components/landing/Platform';
import { ConnectedBusiness } from '../components/landing/ConnectedBusiness';
import { TryOn } from '../components/landing/TryOn';
import { BusinessClarity } from '../components/landing/BusinessClarity';
import { Outcomes } from '../components/landing/Outcomes';
import { Industries } from '../components/landing/Industries';
import { Comparison } from '../components/landing/Comparison';
import { Stories } from '../components/landing/Stories';
import { FAQ } from '../components/landing/FAQ';
import { FinalCTA } from '../components/landing/FinalCTA';

/**
 * LandingPage — assembles all landing sections in order.
 * The Nav is included here so it renders as part of the page layout.
 * Footer and BookDemoModal are rendered globally in App.tsx.
 */
export function LandingPage() {
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
    </main>
  );
}
