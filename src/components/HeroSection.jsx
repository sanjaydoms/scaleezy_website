import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shirt,
  Scissors,
  Store,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { BrandPatternAtelier } from './BrandPattern';
import TypewriterText from './TypewriterText';
import TypingHeading from './TypingHeading';

export default function HeroSection() {
  const showcaseScrollRef = useRef(null);

  useEffect(() => {
    const el = showcaseScrollRef.current;
    if (el) {
      // Smoothly center the 3D panorama on mobile load
      const targetScroll = (el.scrollWidth - el.clientWidth) / 2;
      el.scrollLeft = targetScroll;
    }
  }, []);

  return (
    <section className="relative w-full pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-28 bg-[var(--color-warm-white)] text-[var(--color-charcoal)] overflow-hidden flex flex-col items-center">

      {/* Exact Tailoring & Sewing Pattern Background across full Hero Section */}
      <BrandPatternAtelier opacity={0.20} size={420} vignette={false} />

      {/* Floating Animated Fashion & Commerce Motifs */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:flex absolute top-28 left-[6%] lg:left-[10%] w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 items-center justify-center text-[var(--color-primary)] shadow-[0_8px_20px_rgba(0,0,0,0.06)] z-20 pointer-events-none"
      >
        <Shirt size={22} className="text-[var(--color-primary)]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden md:flex absolute top-56 left-[4%] lg:left-[6%] w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 items-center justify-center text-[var(--color-deep-neutral)] shadow-[0_8px_20px_rgba(0,0,0,0.06)] z-20 pointer-events-none"
      >
        <Scissors size={20} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden md:flex absolute top-28 right-[6%] lg:right-[10%] w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 items-center justify-center text-[var(--color-primary)] shadow-[0_8px_20px_rgba(0,0,0,0.06)] z-20 pointer-events-none"
      >
        <Store size={22} className="text-[var(--color-primary)]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="hidden md:flex absolute top-56 right-[4%] lg:right-[6%] w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 items-center justify-center text-emerald-700 shadow-[0_8px_20px_rgba(0,0,0,0.06)] z-20 pointer-events-none"
      >
        <Sparkles size={20} />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">

        {/* ============================================================== */}
        {/* TOP EDITORIAL HEADLINE BLOCK                                    */}
        {/* ============================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-5 sm:mb-8 md:mb-14">

          {/* Eyebrow Pill with Sparkles Icon & Dynamic Typewriter Animation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[var(--color-primary)]/15 text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-primary)] mb-6 shadow-sm max-w-full"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
            <span className="font-medium text-gray-800">The Operating System for</span>
            <span className="font-bold text-emerald-950 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 inline-block min-w-[140px] sm:min-w-[175px] text-center sm:text-left">
              <TypewriterText
                words={[
                  'Fashion Boutiques',
                  'Saree & Ethnic Wear',
                  'Bridal & Couture Ateliers',
                  'D2C Apparel Brands',
                  'Multi-Store Retailers',
                  'Garment Manufacturers'
                ]}
                typingSpeed={65}
                deletingSpeed={30}
                pauseDuration={2400}
                cursorClassName="text-emerald-700 font-bold"
              />
            </span>
          </motion.div>

          {/* Dynamic Typographic Heading: Serif Line 1 + Modern Sans Line 2 with Live Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5 md:mb-6"
          >
            <TypingHeading
              line1="Total commerce,"
              line1Class="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] block text-center mb-1 text-[var(--color-primary)]"
              line2Prefix="Totally "
              line2Words={['different.', 'synchronized.', 'connected.', 'automated.']}
              line2Class="font-sans font-bold tracking-tighter block text-center text-emerald-700"
              wordClass="text-emerald-700"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight leading-[1.08] text-center"
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2800}
              seoText="Total commerce, Totally different."
            />
          </motion.div>

          {/* Subtitle formatted into two balanced lines with high readability */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[var(--color-charcoal)]/90 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-8 px-2 font-normal"
          >
            Best-in-class commerce is just the beginning. Now get real-time tracking,
            <br className="hidden sm:inline" />{" "}
            guided integrations, and a massive boost to your bottom line. All in one platform.
          </motion.p>

          {/* Primary Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <Link
              to="/book-a-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[var(--color-primary)] text-white pl-8 pr-3 py-3.5 rounded-full font-semibold text-base hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:scale-102 active:scale-98 group"
            >
              <span>Book a Demo</span>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={17} />
              </div>
            </Link>

            <Link
              to="/modules"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm border border-black/15 text-[var(--color-primary)] px-7 py-3.5 rounded-full font-semibold text-base hover:bg-white transition-all shadow-xs"
            >
              Explore Modules
            </Link>
          </motion.div>

          {/* Trust Badges with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-5 mt-6 sm:mt-7 text-xs sm:text-[13px] font-semibold text-[var(--color-charcoal)]"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-black/10 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Real-Time Inventory</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-black/10 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-emerald-700" />
              <span>Sub-20s Billing</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-black/10 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Multi-Store Ready</span>
            </span>
          </motion.div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* 3D CURVED CARDS PANORAMA (Clean Fashion Showcase)             */}
      {/* ============================================================== */}
      <div className="relative z-10 w-full select-none my-3 sm:my-6 md:my-8 py-1 sm:py-3 flex flex-col items-center">
        {/* Soft Ambient Depth Glow behind the 3D showcase */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-2xl h-36 bg-emerald-600/[0.08] blur-3xl rounded-full pointer-events-none" />

        {/* Soft Edge Gradient Fades on Mobile so curved sides recede gracefully */}
        <div className="md:hidden pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[var(--color-warm-white)] to-transparent z-10" />
        <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--color-warm-white)] to-transparent z-10" />

        {/* 3D Curved Track - Smoothly Swipeable on Mobile, Centered on Desktop */}
        <div
          ref={showcaseScrollRef}
          tabIndex={0}
          role="region"
          aria-label="Showroom gallery"
          className="w-full flex md:justify-center items-center overflow-x-auto md:overflow-hidden scrollbar-none touch-pan-x px-4 md:px-0"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <img
            src="/assets/hero-cards-clean.png"
            alt="Scaleezy Fashion Boutique Showrooms and Curated Designer Collections"
            width={2048}
            height={716}
            decoding="async"
            className="w-[180%] sm:w-[135%] md:w-full min-w-[700px] sm:min-w-[820px] md:min-w-full h-auto object-cover max-w-none filter drop-shadow-[0_22px_45px_rgba(0,0,0,0.13)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)] pointer-events-none scale-100 md:scale-[1.06] transform-gpu will-change-transform py-1"
            loading="eager"
          />
        </div>

        {/* Subtle Micro Swipe Cue Pill on Mobile */}
        <div className="md:hidden flex items-center justify-center gap-1.5 mt-2 px-3.5 py-1 rounded-full bg-white/90 border border-black/10 text-[11px] font-semibold text-[var(--color-charcoal)] select-none shadow-2xs">
          <Sparkles className="w-3 h-3 text-emerald-700" />
          <span>Swipe 3D showroom to explore</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* BOTTOM 3-COLUMN FEATURE SUMMARY WITH ICONS                     */}
      {/* ============================================================== */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-5 sm:mt-10 md:mt-16 pt-6 sm:pt-10 border-t border-black/10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left divide-y md:divide-y-0 divide-black/10">

          {/* Column 1 */}
          <div className="space-y-2.5 sm:space-y-3 pt-4 md:pt-0 group">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center mb-3.5 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-all duration-300 shadow-xs">
              <Shirt size={22} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-primary)]">
              Real-Time SKU Tracking
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Lift conversion and track high-velocity inventory with automated demand forecasting, fast-mover metrics, and instant restock alerts.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-2.5 sm:space-y-3 pt-6 md:pt-0 md:border-l md:border-black/10 md:pl-10 group">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center mb-3.5 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-all duration-300 shadow-xs">
              <Scissors size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-primary)]">
              Zero Dead-Stock Intelligence
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Reduce capital locked in unsold stock by 30% with smart reorder thresholds, size matrix analytics, and markdown risk prevention.
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-2.5 sm:space-y-3 pt-6 md:pt-0 md:border-l md:border-black/10 md:pl-10 group">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center mb-3.5 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-all duration-300 shadow-xs">
              <Store size={22} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-primary)]">
              Unified Omnichannel Sync
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Seamlessly unify physical boutiques, in-store billing POS, Shopify online stores, and B2B wholesale distribution in one platform.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
