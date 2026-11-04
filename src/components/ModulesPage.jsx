import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { MotifCommerceThread } from './BackgroundMotifs';
import TypingHeading from './TypingHeading';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

const modules = [
  {
    num: '01',
    id: 'inventory',
    slug: 'inventory',
    name: 'Inventory',
    isLive: true,
    externalUrl: 'https://inventory.scaleezy.com/',
    title: 'Scaleezy Inventory',
    subtitle: 'Stock Intelligence & Demand Forecasting',
    desc: 'Know what is selling, what is stuck, and what to reorder across apparel sizes, fabrics, and colors.',
    capabilities: ['Real-time stock monitoring', 'Fast-moving detection', 'Dead-stock tracking', 'AI forecasting', 'Procurement recommendations', 'Stock intake', 'SKU intelligence'],
    img: '/card-inventory-b2b.jpg',
    bg: 'bg-[var(--color-charcoal)]',
    text: 'text-white'
  },
  {
    num: '02',
    id: 'crm',
    slug: 'crm',
    name: 'CRM',
    isLive: false,
    externalUrl: null,
    title: 'Scaleezy CRM',
    subtitle: 'Clienteling & VIP Profiles',
    desc: 'Remember every client’s sizes, preferences, anniversary dates, and past purchases on a single screen.',
    capabilities: ['Purchase history', 'Lifecycle', 'Behaviour', 'Preferences', 'Follow-ups', 'Abandoned try-ons', 'Segments'],
    img: '/crm-module.jpg',
    bg: 'bg-[var(--color-primary)]',
    text: 'text-white'
  },
  {
    num: '03',
    id: 'boutique',
    slug: 'boutique',
    name: 'Boutique',
    isLive: true,
    externalUrl: 'https://boutique.scaleezy.com/',
    title: 'Scaleezy Boutique (POS)',
    subtitle: 'Counter POS & Alterations',
    desc: 'Lightning-fast barcode checkout with custom tailor measurements, advance deposits, and offline billing mode.',
    capabilities: ['Fast checkout', 'Barcode scanning', 'Inventory sync', 'Customer profiles at checkout', 'Multi-store support', 'Alteration slips'],
    comingSoon: ['AI-powered upselling', 'Mobile POS integration', 'Advanced loyalty point tracking'],
    img: '/smart-pos.jpg',
    bg: 'bg-[#082216]',
    text: 'text-white'
  },
  {
    num: '04',
    id: 'tryon2buy',
    slug: 'tryon2buy',
    name: 'TRYON2BUY',
    isLive: true,
    externalUrl: 'https://www.tryon2buy.com/',
    title: 'Scaleezy TRYON2BUY',
    subtitle: 'AI Virtual Try-On Studio',
    desc: 'Let customers visualize apparel realistically on diverse body models or their own photo before buying.',
    capabilities: ['Try-on rendering', 'Model/consumer visualisation', 'Product previews', 'Try-on analytics', 'Conversion tracking', 'In-store kiosk mode'],
    img: '/virtual-tryon.jpg',
    bg: 'bg-[var(--color-warm-white)]',
    text: 'text-[var(--color-primary)]'
  },
  {
    num: '05',
    id: 'marketing',
    slug: 'marketing',
    name: 'Marketing',
    isLive: true,
    externalUrl: 'https://marketing.scaleezy.com/',
    title: 'Scaleezy Marketing',
    subtitle: 'Automated WhatsApp & Campaigns',
    desc: 'Automate segmented WhatsApp collection drops, festive alerts, and in-store QR code lead capture.',
    capabilities: ['Campaign creation', 'CRM targeting', 'AI social content', 'Website builder', 'QR generator', 'WhatsApp broadcasts'],
    img: '/marketing-hub.jpg',
    bg: 'bg-[var(--color-soft-cream)]',
    text: 'text-[var(--color-charcoal)]'
  },
  {
    num: '06',
    id: 'analytics',
    slug: 'analytics',
    name: 'Analytics',
    isLive: false,
    externalUrl: null,
    title: 'Scaleezy Analytics',
    subtitle: 'Merchandising & Sales Dashboard',
    desc: 'Combine data from every Scaleezy module into clear, actionable numbers you can review every Monday morning.',
    capabilities: ['Sell-through rates', 'Top category velocity', 'Staff billing performance', 'Dead-stock aging', 'WhatsApp daily closing report'],
    img: '/analytics-hub.jpg',
    bg: 'bg-white',
    text: 'text-[var(--color-charcoal)]'
  },
  {
    num: '07',
    id: 'finance',
    slug: 'finance',
    name: 'Finance',
    isLive: false,
    externalUrl: null,
    title: 'Scaleezy Finance',
    subtitle: 'Costing, Margins & Cash Flow',
    desc: 'Track raw fabric costs, tailor piece-rates, counter discounts, and net margins per collection.',
    capabilities: ['Revenue', 'Net margins', 'Pending payments', 'Alerts', 'Tailor ledger', 'GST-compliant exports'],
    img: '/finance-dashboard.jpg',
    bg: 'bg-[var(--color-primary)]',
    text: 'text-white'
  },
  {
    num: '08',
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics',
    isLive: false,
    externalUrl: null,
    title: 'Scaleezy Logistics',
    subtitle: 'Multi-Carrier Courier Dispatch',
    desc: 'Auto-select lowest-cost couriers, print bulk thermal labels, and reduce COD returns with WhatsApp verification.',
    capabilities: ['Multiple carriers', 'Smart selection', 'Pincode routing', 'Efficiency analytics', 'WhatsApp tracking links'],
    comingSoon: ['AI courier selection', 'RTO prediction', 'Carrier scoring', 'Regional delivery insights'],
    img: '/logistics-hub.jpg',
    bg: 'bg-[#DEDED9]',
    text: 'text-[var(--color-primary)]'
  }
];

export default function ModulesPage() {
  usePageMeta("Scaleezy Modules — Inventory, CRM, Boutique, TRYON2BUY & More", "Explore the Scaleezy modules for apparel businesses: Inventory, CRM, Boutique POS, TRYON2BUY virtual try-on, Marketing, Analytics, Finance, and Logistics.");
  
  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] pt-20">
      
      {/* HERO */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 flex flex-col justify-center text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <TypingHeading
              line1={<><span className="font-serif italic text-[1.22em] leading-none inline-block">8</span> Core modules,</>}
              line1Class="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl block text-center mb-1 text-[var(--color-primary)]"
              line2Prefix="1 Unified "
              line2Words={[
                'Apparel Platform.',
                'Commerce Engine.',
                'Retail Ecosystem.',
                'Operations Layer.',
                'Telemetry Network.'
              ]}
              line2Class="font-sans font-bold tracking-tight text-emerald-700 block text-center mt-1 sm:mt-2"
              wordClass="text-emerald-700"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-center"
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2800}
              seoText="8 Core modules, 1 Unified Apparel Platform."
            />
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            Every Scaleezy module is designed in simple words and feeds a shared intelligence layer. Click any module below to open it in a separate tab.
          </p>

          {/* Dedicated Module Quick Launch Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {modules.map(m => (
              m.isLive ? (
                <a
                  key={m.id}
                  href={m.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[var(--color-primary)] border border-black/15 text-xs sm:text-sm font-semibold hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all shadow-2xs hover:scale-102"
                >
                  <span>{m.name}</span>
                  <ArrowUpRight size={14} className="text-black/50" />
                </a>
              ) : (
                <Link
                  key={m.id}
                  to={`/modules/${m.slug}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/5 text-gray-700 border border-black/10 text-xs sm:text-sm font-semibold hover:bg-black/10 transition-all shadow-2xs"
                >
                  <span>{m.name}</span>
                  <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-400 text-black">Soon</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* MODULES LIST */}
      <div>
        {modules.map((mod, index) => {
          const isDark = mod.text === 'text-white';
          return (
            <section 
              id={mod.id} 
              key={mod.id} 
              className={`py-14 sm:py-20 md:py-28 px-4 sm:px-6 ${mod.bg} ${mod.text} border-t border-black/5 relative overflow-hidden`}
            >
              {index % 3 === 0 && <MotifCommerceThread className="absolute inset-0 w-full h-full opacity-5" path="M 0,50 C 50,0 100,100 150,50" />}
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 relative z-10 items-center">
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="mb-4 sm:mb-6">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest opacity-80 mb-2">
                      <span>Module {mod.num}</span>
                      <span>•</span>
                      <span>{mod.name}</span>
                      {!mod.isLive && (
                        <span className="ml-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-bold tracking-wider uppercase">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    {mod.subtitle && (
                      <span className="font-serif italic font-normal text-xl sm:text-2xl md:text-3xl block mb-1 opacity-95">
                        {mod.subtitle}
                      </span>
                    )}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight text-balance">
                      {mod.title}
                    </h2>
                  </div>
                  {mod.desc && <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 sm:mb-8 font-normal leading-relaxed">{mod.desc}</p>}

                  {mod.capabilities.length > 0 && (
                    <div className="mb-8 sm:mb-12">
                      <h3 className="text-xs sm:text-sm font-bold mb-4 sm:mb-6 uppercase tracking-wider opacity-80">Capabilities</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {mod.capabilities.map(cap => (
                          <li key={cap} className="flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base font-medium">
                            <span className={`${isDark ? 'text-[var(--color-accent)]' : 'text-emerald-700'} font-bold`}>✓</span> {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {mod.comingSoon && mod.comingSoon.length > 0 && (
                    <div className={`p-4 sm:p-6 ${isDark ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'} border backdrop-blur-sm rounded-2xl mt-6 sm:mt-8`}>
                      <h3 className={`text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-widest ${isDark ? 'text-[var(--color-accent)]' : 'text-amber-700'}`}>Coming Soon</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 opacity-90">
                        {mod.comingSoon.map(cap => (
                          <li key={cap} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
                            <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-[var(--color-accent)]' : 'bg-amber-600'}`}></span> {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Action Buttons: Open App, Dedicated Page & Request Access */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
                    {mod.isLive ? (
                      <a 
                        href={mod.externalUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-primary)] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-xl hover:shadow-2xl active:scale-95 gap-2"
                      >
                        <span>Open {mod.name}</span>
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <Link 
                        to={`/request-access?module=${mod.slug}`} 
                        className="inline-flex items-center justify-center bg-amber-400 text-black font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-amber-300 hover:scale-105 transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-xl hover:shadow-2xl active:scale-95 gap-2"
                      >
                        <span>Join Waitlist</span>
                        <span className="text-[10px] font-bold bg-black text-amber-300 px-2 py-0.5 rounded-full uppercase">Coming Soon</span>
                      </Link>
                    )}

                    <Link 
                      to={`/modules/${mod.slug}`} 
                      className={`inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors gap-1.5 ${
                        isDark ? 'text-white/90 hover:text-white border border-white/20 hover:bg-white/10' : 'text-[var(--color-primary)] border border-black/20 hover:bg-black/5'
                      }`}
                    >
                      <span>Module Info</span>
                      <ChevronRight size={14} />
                    </Link>

                    <Link
                      to={`/request-access?module=${mod.slug}`}
                      className={`inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors ${
                        isDark ? 'text-white/70 hover:text-white hover:underline' : 'text-[var(--color-primary)]/70 hover:text-[var(--color-primary)] hover:underline'
                      }`}
                    >
                      Request Access
                    </Link>
                  </div>
                </div>
                
                <div className={`flex items-center justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  {mod.img ? (
                    <div className="w-full aspect-[4/3] bg-black/10 overflow-hidden rounded-2xl sm:rounded-3xl relative shadow-2xl group">
                      <img src={mod.img} alt={mod.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                        {mod.isLive ? (
                          <a
                            href={mod.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full hover:bg-black/75 transition-colors"
                          >
                            <span>Open {mod.name} ↗</span>
                          </a>
                        ) : (
                          <div className="text-white text-xs sm:text-sm font-semibold flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/30">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span className="text-amber-300 font-bold uppercase text-[11px] tracking-wider">Coming Soon</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-black/5 to-black/20 rounded-2xl sm:rounded-3xl shadow-inner flex items-center justify-center border border-black/5">
                      <span className="opacity-40 font-bold tracking-widest uppercase text-xs sm:text-sm">Mock Interface Preview</span>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* FINAL MODULE SECTION */}
      <section className="py-16 sm:py-24 md:py-36 bg-[var(--color-primary)] text-white text-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 md:mb-16 leading-[1.08] tracking-tight text-balance">
            <span className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mb-1 text-[var(--color-accent)]">
              Cross-system synergy,
            </span>
            <span className="font-sans font-bold tracking-tight text-white block">
              one shared intelligence layer.
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Link to="/modules/crm" className="px-4 py-6 sm:px-5 sm:py-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-xl hover:border-white/30 hover:bg-white/10 transition-all flex flex-col items-center justify-center group">
              <div className="text-[var(--color-accent)] font-mono font-bold mb-2 uppercase text-xs tracking-widest flex items-center gap-1">
                <span>CRM informs</span>
                <span className="opacity-60 group-hover:opacity-100">→</span>
              </div>
              <div className="text-lg sm:text-xl font-bold tracking-tight">Marketing</div>
            </Link>
            <Link to="/modules/inventory" className="px-4 py-6 sm:px-5 sm:py-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-xl hover:border-white/30 hover:bg-white/10 transition-all flex flex-col items-center justify-center group">
              <div className="text-[var(--color-accent)] font-mono font-bold mb-2 uppercase text-xs tracking-widest flex items-center gap-1">
                <span>Inventory informs</span>
                <span className="opacity-60 group-hover:opacity-100">→</span>
              </div>
              <div className="text-lg sm:text-xl font-bold tracking-tight">Boutique POS</div>
            </Link>
            <Link to="/modules/tryon2buy" className="px-4 py-6 sm:px-5 sm:py-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-xl hover:border-white/30 hover:bg-white/10 transition-all flex flex-col items-center justify-center group">
              <div className="text-[var(--color-accent)] font-mono font-bold mb-2 uppercase text-xs tracking-widest flex items-center gap-1">
                <span>TRYON2BUY informs</span>
                <span className="opacity-60 group-hover:opacity-100">→</span>
              </div>
              <div className="text-lg sm:text-xl font-bold tracking-tight">Recommendations</div>
            </Link>
            <Link to="/modules/finance" className="px-4 py-6 sm:px-5 sm:py-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-xl hover:border-white/30 hover:bg-white/10 transition-all flex flex-col items-center justify-center group">
              <div className="text-[var(--color-accent)] font-mono font-bold mb-2 uppercase text-xs tracking-widest flex items-center gap-1">
                <span>Finance informs</span>
                <span className="opacity-60 group-hover:opacity-100">→</span>
              </div>
              <div className="text-lg sm:text-xl font-bold tracking-tight">Procurement</div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
