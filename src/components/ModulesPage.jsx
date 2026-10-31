import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MotifCommerceThread } from './BackgroundMotifs';
import TypingHeading from './TypingHeading';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

const modules = [
  {
    num: '01',
    id: 'inventory',
    title: 'Inventory Intelligence',
    subtitle: 'Know what is selling, what is stuck and what to reorder.',
    capabilities: ['Real-time stock monitoring', 'Fast-moving detection', 'Dead-stock tracking', 'AI forecasting', 'Procurement recommendations', 'Stock intake', 'SKU intelligence'],
    img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80', // Clothing racks/inventory
    bg: 'bg-[var(--color-charcoal)]',
    text: 'text-white'
  },
  {
    num: '02',
    id: 'crm',
    title: 'Hyper-Personalised Customer Intelligence',
    subtitle: 'Track every detail of your customer relationship.',
    capabilities: ['Purchase history', 'Lifecycle', 'Behaviour', 'Preferences', 'Follow-ups', 'Abandoned try-ons', 'Segments'],
    img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80', // Associate helping customer with iPad
    bg: 'bg-[var(--color-primary)]',
    text: 'text-white'
  },
  {
    num: '03',
    id: 'marketing',
    title: 'AI-Driven Marketing Automation for Apparel',
    subtitle: 'Automate campaigns that convert.',
    capabilities: ['Campaign creation', 'CRM targeting', 'AI social content', 'Website builder', 'QR generator'],
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80', // Customer shopping on a mobile app (marketing endpoint)
    bg: 'bg-[var(--color-soft-cream)]',
    text: 'text-[var(--color-charcoal)]'
  },
  {
    num: '04',
    id: 'tryon',
    title: 'AI Virtual Try-On Studio for Apparel',
    subtitle: 'Let customers visualize before buying.',
    capabilities: ['Try-on rendering', 'Model/consumer visualisation', 'Product previews', 'Try-on analytics', 'Conversion tracking'],
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80', // Person holding a phone showing clothes/AR style
    bg: 'bg-[var(--color-warm-white)]',
    text: 'text-[var(--color-primary)]'
  },
  {
    num: '05',
    id: 'pos',
    title: 'Smart Point of Sale (POS)',
    subtitle: 'Seamless in-store billing and checkout.',
    capabilities: ['Fast checkout', 'Barcode scanning', 'Inventory sync', 'Customer profiles at checkout', 'Multi-store support'],
    comingSoon: ['AI-powered upselling', 'Mobile POS integration', 'Advanced loyalty point tracking'],
    img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80', // Luxury fashion boutique checkout and payment terminal
    bg: 'bg-[var(--color-charcoal)]',
    text: 'text-white'
  },
  {
    num: '06',
    id: 'finance',
    title: 'Know the financial health of your business.',
    subtitle: 'Finance Dashboard',
    capabilities: ['Revenue', 'Net margins', 'Pending payments', 'Alerts'],
    img: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&q=80', // Apparel collection pricing, fabric costing, and margin specs
    bg: 'bg-[var(--color-primary)]',
    text: 'text-white'
  },
  {
    num: '07',
    id: 'analytics',
    title: 'See the business behind the numbers.',
    subtitle: 'Analytics Hub',
    desc: 'Combine data from every Scaleezy module into an executive command centre.',
    capabilities: [],
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80', // Fashion merchandising analytics and apparel sales data
    bg: 'bg-[var(--color-soft-cream)]',
    text: 'text-[var(--color-charcoal)]'
  },
  {
    num: '08',
    id: 'logistics',
    title: 'Multi-Carrier Logistics Intelligence',
    subtitle: 'Move every order intelligently.',
    capabilities: ['Multiple carriers', 'Smart selection', 'Pincode routing', 'Efficiency analytics'],
    comingSoon: ['AI courier selection', 'RTO prediction', 'Carrier scoring', 'Regional delivery insights'],
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80', // Luxury fashion apparel packaging and boutique parcel dispatch
    bg: 'bg-white',
    text: 'text-[var(--color-primary)]'
  }
];

export default function ModulesPage() {
  usePageMeta("Scaleezy Modules — Inventory, CRM, Virtual Try-On, Marketing & More", "Explore the Scaleezy modules for apparel businesses: inventory, CRM, virtual try-on, marketing, finance, analytics and logistics on one data layer.");
  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] pt-20">
      
      {/* HERO */}
      <section className="relative py-16 sm:py-24 md:py-40 px-4 sm:px-6 flex flex-col justify-center text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <TypingHeading
              line1={<><span className="font-serif italic text-[1.22em] leading-none inline-block">8</span> Core systems,</>}
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
              seoText="8 Core systems, 1 Unified Apparel Platform."
            />
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Every Scaleezy module feeds a shared intelligence data layer, so insights in one area trigger smart actions in another.
          </p>
        </div>
      </section>

      {/* MODULES LIST */}
      <div>
        {modules.map((mod, index) => {
          const isDark = mod.text === 'text-white';
          return (
            <section key={mod.id} className={`py-14 sm:py-20 md:py-32 px-4 sm:px-6 ${mod.bg} ${mod.text} border-t border-black/5 relative overflow-hidden`}>
              {index % 3 === 0 && <MotifCommerceThread className="absolute inset-0 w-full h-full opacity-5" path="M 0,50 C 50,0 100,100 150,50" />}
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 relative z-10 items-center">
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="mb-4 sm:mb-6">
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
                  
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
                    <Link 
                      to="/book-a-demo" 
                      className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-primary)] font-bold px-7 sm:px-9 py-3.5 sm:py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-xl hover:shadow-2xl active:scale-95"
                    >
                      Book a Demo
                    </Link>
                  </div>
                </div>
                
                <div className={`flex items-center justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  {mod.img ? (
                    <div className="w-full aspect-[4/3] bg-black/10 overflow-hidden rounded-2xl sm:rounded-3xl relative shadow-2xl">
                      <img src={mod.img} alt={mod.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
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
      <section className="py-16 sm:py-24 md:py-40 bg-[var(--color-primary)] text-white text-center px-4 sm:px-6">
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
            <div className="px-4 py-6 sm:px-5 sm:py-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-xl hover:border-white/30 transition-colors flex flex-col items-center justify-center">
              <div className="text-[var(--color-accent)] font-mono font-bold mb-2 uppercase text-xs tracking-widest">CRM informs</div>
              <div className="text-lg sm:text-xl font-bold tracking-tight">Marketing</div>
            </div>
            <div className="px-4 py-6 sm:px-5 sm:py-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-xl hover:border-white/30 transition-colors flex flex-col items-center justify-center">
              <div className="text-[var(--color-accent)] font-mono font-bold mb-2 uppercase text-xs tracking-widest">Inventory informs</div>
              <div className="text-lg sm:text-xl font-bold tracking-tight">Promotions</div>
            </div>
            <div className="px-4 py-6 sm:px-5 sm:py-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-xl hover:border-white/30 transition-colors flex flex-col items-center justify-center">
              <div className="text-[var(--color-accent)] font-mono font-bold mb-2 uppercase text-xs tracking-widest">Try-On informs</div>
              <div className="text-lg sm:text-xl font-bold tracking-tight">Recommendations</div>
            </div>
            <div className="px-4 py-6 sm:px-5 sm:py-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-xl hover:border-white/30 transition-colors flex flex-col items-center justify-center">
              <div className="text-[var(--color-accent)] font-mono font-bold mb-2 uppercase text-xs tracking-widest">Finance informs</div>
              <div className="text-lg sm:text-xl font-bold tracking-tight">Procurement</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
