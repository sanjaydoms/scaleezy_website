import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  HelpCircle, 
  ArrowUpRight
} from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData';
import BookingFormCard from './BookingFormCard';
import Footer from './Footer';
import usePageMeta from './usePageMeta';
import { MotifCommerceThread } from './BackgroundMotifs';

// Mapping for aliases and legacy links
const SLUG_ALIASES = {
  'tryon': 'tryon2buy',
  'virtual-try-on': 'tryon2buy',
  'smart-pos': 'pos',
  'billing': 'billing-desk',
  'billing-desk': 'billing-desk',
  'finance': 'billing-desk',
  'stock': 'inventory'
};

export default function ModuleDetailPage() {
  const { slug } = useParams();
  
  const resolvedSlug = useMemo(() => {
    if (!slug) return 'inventory';
    const lower = slug.toLowerCase();
    return SLUG_ALIASES[lower] || lower;
  }, [slug]);

  const moduleData = useMemo(() => {
    return MODULES_DATA.find(m => m.slug === resolvedSlug || m.id === resolvedSlug);
  }, [resolvedSlug]);

  usePageMeta(
    moduleData ? `${moduleData.name} Module — ${moduleData.tagline} | Scaleezy` : 'Scaleezy Module',
    moduleData ? `${moduleData.heroHeadline} ${moduleData.heroDescription}` : 'Explore Scaleezy apparel commerce modules.'
  );

  // If slug is not valid, redirect to /modules
  if (!moduleData) {
    return <Navigate to="/modules" replace />;
  }

  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] pt-20">
      
      {/* 01 - BREADCRUMB & MODULE SWITCHER NAVIGATION */}
      <nav aria-label="Module navigation" className="bg-white border-b border-black/10 sticky top-18 sm:top-20 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium shrink-0 text-black/60">
            <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/modules" className="hover:text-[var(--color-primary)] transition-colors">Modules</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--color-primary)] font-semibold">{moduleData.name}</span>
          </div>

          {/* Quick Pill Switcher for All 9 Modules */}
          <div className="flex items-center gap-1.5 shrink-0">
            {MODULES_DATA.map((m) => {
              const isActive = m.slug === moduleData.slug;
              return (
                <Link
                  key={m.id}
                  to={`/modules/${m.slug}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[var(--color-primary)] text-[var(--color-accent)] font-semibold shadow-xs'
                      : 'bg-black/5 text-gray-700 hover:bg-black/10'
                  }`}
                  title={`View ${m.name} module details`}
                >
                  <span>{m.name}</span>
                  {!m.isLive ? (
                    <span className="text-[9px] uppercase font-bold tracking-wider px-1 py-0.5 rounded bg-amber-400 text-black leading-none">
                      Soon
                    </span>
                  ) : (
                    <ArrowUpRight size={11} className="opacity-40" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 02 - HERO SECTION */}
      <section 
        data-chapter-bg="var(--color-primary)" 
        data-chapter-ink="light"
        className="relative bg-[var(--color-primary)] text-[var(--color-paper)] py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
      >
        <MotifCommerceThread className="absolute -top-20 -right-20 w-[120%] opacity-10 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[var(--color-accent)] text-xs font-semibold tracking-wider uppercase mb-5 border border-white/15"
              >
                <Sparkles size={13} />
                <span>{moduleData.badge} • Scaleezy Module</span>
                {!moduleData.isLive && (
                  <span className="ml-1.5 px-2 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-bold tracking-wider uppercase leading-none">
                    Coming Soon
                  </span>
                )}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 text-balance"
              >
                {moduleData.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xl sm:text-2xl font-serif italic text-[var(--color-accent)] mb-4"
              >
                {moduleData.heroHeadline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-white/85 leading-relaxed font-normal mb-8 max-w-2xl"
              >
                {moduleData.heroDescription}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap items-center gap-4"
              >
                {moduleData.isLive ? (
                  <a
                    href={moduleData.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-xl active:scale-95"
                  >
                    <span>Open {moduleData.name}</span>
                    <ArrowUpRight size={17} />
                  </a>
                ) : (
                  <a
                    href="#request-access"
                    className="inline-flex items-center gap-2 bg-amber-400 text-black font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-amber-300 hover:scale-105 transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-xl active:scale-95"
                  >
                    <span>Join Waitlist</span>
                    <span className="text-[10px] font-bold bg-black text-amber-300 px-2 py-0.5 rounded-full uppercase">Coming Soon</span>
                  </a>
                )}

                <a
                  href="#request-access"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase text-white border border-white/25 hover:bg-white/10 transition-colors"
                >
                  <span>Request Access</span>
                  <ArrowRight size={15} />
                </a>

                <Link
                  to="/modules"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  <span>All modules</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Key Stats Card & Image */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src={moduleData.img}
                    alt={`${moduleData.name} interface preview`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium">
                    {moduleData.tagline}
                  </div>
                </div>

                {/* 3 Metric Tiles */}
                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/10 text-center">
                  {moduleData.stats.map((stat, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xl sm:text-2xl font-bold text-[var(--color-accent)]">{stat.value}</div>
                      <div className="text-[11px] sm:text-xs text-white/70 mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 - SIMPLE CAPABILITIES & FEATURES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 inline-block mb-3">
            Core Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-4">
            Built simple for your everyday retail operations
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            No bloated menus or confusing setup. {moduleData.name} gives your store team clear controls from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {moduleData.simpleFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-black/10 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[var(--color-primary)] font-mono font-bold flex items-center justify-center text-sm mb-5 border border-emerald-100">
                  0{idx + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)] mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <CheckCircle2 size={15} />
                <span>Included in {moduleData.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 - STORE WORKFLOW STEP-BY-STEP */}
      {moduleData.workflow && (
        <section className="py-16 sm:py-24 bg-[var(--color-soft-cream)] border-y border-black/10 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] font-mono mb-2 block">
                Store Workflow
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)]">
                {moduleData.workflow.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {moduleData.workflow.steps.map((step) => (
                <div key={step.step} className="bg-white p-8 rounded-3xl border border-black/5 shadow-xs relative">
                  <div className="text-3xl font-mono font-bold text-[var(--color-primary)]/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 - HOW IT CONNECTS WITH OTHER SCALEZY MODULES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="bg-[var(--color-primary)] text-white rounded-3xl p-8 sm:p-12 md:p-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
              Cross-Platform Synergy
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
              How {moduleData.name} works with the rest of Scaleezy
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              You can start with {moduleData.name} alone or combine it with other modules. They all share the same live customer, product, and stock database.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {moduleData.synergy.map((syn, idx) => (
              <div key={idx} className="bg-white/10 border border-white/15 p-6 rounded-2xl backdrop-blur-md">
                <div className="text-xs font-mono font-bold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                  Connected to {syn.module}
                </div>
                <p className="text-sm sm:text-base text-white/90">
                  {syn.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-white/70">
              Want to see all 9 modules side-by-side?
            </span>
            <Link
              to="/modules"
              className="text-xs sm:text-sm font-semibold text-[var(--color-accent)] hover:underline inline-flex items-center gap-1.5"
            >
              <span>View Full Modules Overview</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 06 - FREQUENTLY ASKED QUESTIONS */}
      {moduleData.faqs && moduleData.faqs.length > 0 && (
        <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-primary)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {moduleData.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 sm:p-7 rounded-2xl border border-black/10 shadow-2xs">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-primary)] mb-2 flex items-start gap-2.5">
                  <HelpCircle size={20} className="shrink-0 text-emerald-700 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-700 pl-7 leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 07 - DEDICATED REQUEST ACCESS SECTION (PRE-CONFIGURED FOR THIS MODULE) */}
      <section id="request-access" className="py-16 sm:py-24 bg-[var(--color-warm-white)] border-t border-black/10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 inline-block mb-3">
              Platform Access
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-3">
              Request access for <span className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl">{moduleData.name}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
              Request dedicated platform access customized for your boutique or brand. We will pre-configure {moduleData.name} for your daily store routine.
            </p>
          </div>

          <BookingFormCard 
            title={`Request Access for ${moduleData.name}`}
            subtitle={`Dedicated onboarding focused on ${moduleData.name}`}
            defaultModule={moduleData.name}
            source="request_access"
            className="shadow-xl rounded-3xl overflow-hidden border border-black/10"
          />
        </div>
      </section>

      {/* 08 - FOOTER */}
      <Footer />
    </div>
  );
}
