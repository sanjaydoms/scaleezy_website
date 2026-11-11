import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  Tv,
  Rocket
} from 'lucide-react';
import { MotifCommerceThread } from './BackgroundMotifs';
import { BrandPatternAtelier } from './BrandPattern';
import TypingHeading from './TypingHeading';
import BookingFormCard from './BookingFormCard';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

export default function DemoPage() {
  usePageMeta(
    "Request Access — Scaleezy",
    "Request exclusive workspace access tailored to your boutique, ethnic wear store, D2C label or retail chain."
  );
  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] overflow-x-hidden selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
      
      {/* ============================================================== */}
      {/* 01 - HERO SECTION: form on the left, headline on the right      */}
      {/* ============================================================== */}
      <section id="request-access" className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#06180E] via-[#1C421D] to-[#0A2619] text-white overflow-hidden">
        
        {/* Background Visual Effects */}
        <BrandPatternAtelier mode="dark" opacity={0.08} size={360} />
        <MotifCommerceThread className="absolute top-1/4 -left-20 w-[140%] text-[var(--color-accent)] opacity-10 pointer-events-none" />
        
        {/* Ambient Radial Spotlight */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full pointer-events-none opacity-30 blur-3xl -z-0"
          style={{ background: 'radial-gradient(circle, rgba(184,212,50,0.3) 0%, rgba(10,47,29,0.2) 50%, transparent 75%)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left column: the form itself, so every Request Access click lands on it */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <BookingFormCard
              title="Request Access"
              subtitle="Fill in your boutique details to request platform access"
              source="request_access"
            />
          </div>

          {/* Right column: headline and context */}
          <div className="order-1 lg:order-2 lg:col-span-6 text-center lg:text-left">
          
          {/* Eyebrow Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-accent)] mb-6 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span>⚡ Request Exclusive Platform Access</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            <TypingHeading
              line1="Request access to Scaleezy,"
              line1Class="font-serif italic font-normal text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white/95 block text-center lg:text-left mb-1"
              line2Prefix="Built for "
              line2Words={[
                'Your Fashion Boutique.',
                'Your Ethnic Wear Store.',
                'Your Bridal Studio.',
                'Your D2C Fashion Brand.',
                'Your Retail Chain.'
              ]}
              line2Class="font-sans font-bold tracking-tight bg-gradient-to-r from-[var(--color-accent)] via-[#D4EE52] to-emerald-300 bg-clip-text text-transparent block text-center lg:text-left mt-1 sm:mt-2"
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-center lg:text-left leading-[1.06]"
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2800}
              seoText="Request access to Scaleezy tailored for your store."
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8"
          >
            Tell us about your brand. We will review your store requirements, pre-configure your requested modules, and grant exclusive platform access.
          </motion.p>

          {/* 3 Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm font-medium"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" /> 100% Free
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" /> No Obligation
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" /> Dedicated Onboarding
            </span>
          </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 03 - WHAT HAPPENS AFTER YOU REQUEST ACCESS SECTION             */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 bg-[var(--color-soft-cream)] border-t border-[var(--color-primary)]/10 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--color-primary)]/15 text-[var(--color-primary)] text-xs font-semibold tracking-wider uppercase mb-5 shadow-2xs">
            <Sparkles size={14} className="text-[var(--color-primary)]" />
            <span>3-Step Onboarding Process</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--color-primary)] mb-5 text-balance">
            What happens <span className="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl text-[var(--color-primary)] ml-2">after you request access</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed font-normal mb-14 sm:mb-18">
            From your request submission to full workspace activation, here is our simple zero-hassle onboarding journey.
          </p>

          {/* 3 Refined Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            
            {/* Step 1 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 sm:p-9 shadow-md hover:shadow-xl border border-black/5 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 shadow-2xs">
                    <Calendar size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    STEP 01
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#14263D] tracking-tight mb-3">
                  We Review Your Profile
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  Our retail specialist reviews your store requirements and confirms your access details via WhatsApp and email.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-medium">
                <span>Confirmation: Within 24h</span>
                <span className="text-emerald-700 font-semibold">✓ Direct Review</span>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 sm:p-9 shadow-md hover:shadow-xl border border-black/5 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center text-emerald-700 shadow-2xs">
                    <Tv size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    STEP 02
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#14263D] tracking-tight mb-3">
                  Pre-Configured Walkthrough
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  A tailored session pre-loaded with your chosen modules — boutique billing, inventory matrix, CRM, or virtual try-on.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-medium">
                <span>Format: 1-on-1 Session</span>
                <span className="text-emerald-700 font-semibold">✓ Pre-Configured</span>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 sm:p-9 shadow-md hover:shadow-xl border border-black/5 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100/80 flex items-center justify-center text-amber-700 shadow-2xs">
                    <Rocket size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    STEP 03
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#14263D] tracking-tight mb-3">
                  Complimentary Workspace Setup
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  We assist you with importing your SKUs, customer records, and barcode templates so you can launch with zero downtime.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-medium">
                <span>Setup: Complimentary</span>
                <span className="text-emerald-700 font-semibold">✓ White-Glove</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 05 - PREFER TO START RIGHT AWAY CTA STRIP                      */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 bg-[#071F13] text-white px-4 sm:px-6 relative overflow-hidden text-center">
        <BrandPatternAtelier mode="dark" opacity={0.06} size={320} />
        
        <div className="max-w-4xl mx-auto relative z-10">
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Prefer to Start{" "}
            <span className="text-[var(--color-accent)]">Right Away?</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed mb-10">
            Skip the wait — explore how Scaleezy connects your business today. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-[var(--color-primary)] px-8 py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white transition-all shadow-xl hover:scale-102 active:scale-98"
            >
              <span>Explore How It Works</span>
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
