import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MotifCommerceThread } from './BackgroundMotifs';
import TypingHeading from './TypingHeading';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

const solutions = [
  {
    id: 'saree',
    name: 'Saree Stores',
    title: 'Intelligent commerce for saree stores.',
    challenges: ['Large product ranges', 'Seasonal demand', 'Category complexity', 'High-value inventory'],
    scaleezy: ['Category tracking', 'Inventory intelligence', 'CRM', 'Personalised marketing'],
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80'
  },
  {
    id: 'bridal',
    name: 'Bridal Boutiques',
    title: 'Built for high-value bridal commerce.',
    challenges: ['High-ticket products', 'Custom fittings', 'Long purchase cycles', 'Relationship-driven selling'],
    scaleezy: ['CRM', 'Inventory', 'Try-On', 'Personalised follow-ups'],
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80'
  },
  {
    id: 'ethnic',
    name: 'Ethnic Wear',
    title: 'Stay ready for every festive demand spike.',
    desc: 'Easily manage multi-piece sets and instantly adapt to festive demand spikes with intelligent inventory tracking.',
    img: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=800&q=80'
  },
  {
    id: 'retailers',
    name: 'Fashion Retailers',
    title: 'Connect every store, customer and channel.',
    focus: ['Omnichannel inventory', 'Real-time analytics', 'Automated marketing'],
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80'
  },
  {
    id: 'multibrand',
    name: 'Multi-Brand Stores',
    title: 'See which brands actually drive your business.',
    focus: ['Brand-wise profitability', 'Vendor relationships', 'Inventory', 'Analytics'],
    img: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&q=80'
  },
  {
    id: 'd2c',
    name: 'D2C Fashion',
    title: 'Own the customer relationship.',
    focus: ['Customer data', 'Behaviour-based campaigns', 'Returns', 'Personalisation'],
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80'
  },
  {
    id: 'wholesalers',
    name: 'Wholesalers',
    title: 'Bring intelligence to wholesale apparel commerce.',
    focus: ['Bulk orders', 'B2B CRM', 'Procurement planning'],
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80'
  }
];

export default function SolutionsPage() {
  usePageMeta("Scaleezy Solutions — For Boutiques, Saree Stores & Apparel Brands", "Scaleezy workflows tailored to boutiques, saree and ethnic wear stores, bridal studios, D2C brands, multi-brand stores, wholesalers and manufacturers.");
  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] pt-20">
      
      {/* HERO */}
      <section className="relative py-16 sm:py-24 md:py-40 px-4 sm:px-6 flex flex-col justify-center text-center">
        <MotifCommerceThread className="absolute inset-0 w-full h-full opacity-10 text-[var(--color-primary)] z-0" path="M 100,0 C 70,20 60,80 0,90" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase mb-4 sm:mb-8">
            05 — SOLUTIONS
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <TypingHeading
              line1="One connected platform,"
              line1Class="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-[var(--color-primary)] block text-center mb-1"
              line2Prefix="Tailored for "
              line2Words={[
                'Fashion Boutiques.',
                'Bridal Studios.',
                'Ethnic Stores.',
                'D2C Brands.',
                'Textile Wholesalers.'
              ]}
              line2Class="font-sans font-bold tracking-tight text-[var(--color-primary)] block text-center mt-1 sm:mt-2"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.06] tracking-tight text-center"
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2800}
              seoText="One connected platform, Tailored for every apparel business."
            />
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            From boutique stores and bridal businesses to D2C brands and wholesalers, Scaleezy adapts its connected intelligence to the way apparel businesses operate.
          </p>
        </div>
      </section>

      {/* BOUTIQUES FLAGSHIP SECTION */}
      <section className="py-14 sm:py-20 md:py-32 bg-[var(--color-charcoal)] text-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center">
            <div>
              <div className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[var(--color-accent)]">SOLUTION 01 — BOUTIQUES</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-4 sm:mb-6 text-balance">
                <span className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mb-1 text-[var(--color-accent)]">
                  For relationship-driven commerce,
                </span>
                <span className="font-sans font-bold tracking-tight text-white block">
                  software built for high-end boutiques.
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-lg leading-relaxed font-normal">
                High-ticket outfits, custom fittings and loyal clients deserve more than a billing app. Scaleezy tracks every piece, every measurement and every follow-up.
              </p>
              
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-300 mb-4 sm:mb-6">What boutiques get</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-6 sm:gap-x-8">
                  {['High-value inventory', 'Customer history', 'Preferences', 'Special dates', 'Virtual try-on', 'Festive campaigns', 'Anniversary campaigns', 'Revenue', 'Margins', 'Pending payments'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg text-white">
                      <span className="text-[var(--color-accent)] font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/modules" className="inline-block border-b-2 border-[var(--color-accent)] text-[var(--color-accent)] pb-1 font-bold tracking-wide uppercase hover:text-white hover:border-white transition-colors text-xs sm:text-sm">
                Explore For Boutiques →
              </Link>
            </div>
            
            <div className="w-full aspect-[4/5] bg-white/10 overflow-hidden relative border border-white/20 p-2 rounded-3xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" alt="Boutique" loading="lazy" decoding="async" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SOLUTIONS GRID */}
      <section className="py-14 sm:py-20 md:py-32 bg-[var(--color-soft-cream)] px-4 sm:px-6 border-t border-[var(--color-primary)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {solutions.map((sol, index) => (
              <motion.div 
                key={sol.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--color-primary)]/10 shadow-xl overflow-hidden flex flex-col group rounded-3xl transform-gpu will-change-transform hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-52 sm:h-64 overflow-hidden relative">
                  <img src={sol.img} alt={sol.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent transition-colors duration-500"></div>
                  <div className="absolute bottom-4 left-6 text-white font-bold tracking-widest uppercase text-xs sm:text-sm drop-shadow-md">
                    {sol.name}
                  </div>
                </div>
                
                <div className="p-5 sm:p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-[var(--color-primary)] mb-3 sm:mb-4 tracking-tight leading-snug text-balance">
                    {sol.title}
                  </h3>
                  
                  {sol.desc && (
                    <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed font-normal">{sol.desc}</p>
                  )}

                  {sol.challenges && sol.scaleezy && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 mt-auto">
                      <div>
                        <h4 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-3 sm:mb-4">Challenges</h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {sol.challenges.map(c => (
                            <li key={c} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-red-500 mt-0.5 font-bold">✕</span> {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3 sm:mb-4">Scaleezy</h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {sol.scaleezy.map(s => (
                            <li key={s} className="text-xs sm:text-sm text-gray-900 font-medium flex items-start gap-2">
                              <span className="text-emerald-700 mt-0.5 font-bold">✓</span> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {sol.focus && (
                    <div className="mt-auto">
                      <h4 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3 sm:mb-4">Core Focus</h4>
                      <div className="flex flex-wrap gap-2">
                        {sol.focus.map(f => (
                          <span key={f} className="px-3 py-1 bg-[var(--color-warm-white)] text-[var(--color-primary)] text-xs sm:text-sm font-semibold rounded-full border border-black/10 shadow-2xs">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-24 md:py-40 bg-[var(--color-primary)] text-white text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-balance mb-4 sm:mb-6">
            <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-[var(--color-accent)]">
              Find your fit,
            </span>
            <span className="font-sans font-bold tracking-tight text-white block">
              tailored to your store.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 font-normal max-w-2xl mx-auto leading-relaxed">
            See how Scaleezy can connect the systems that matter most to your apparel business.
          </p>
          <Link to="/book-a-demo" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 text-base font-bold rounded-full hover:bg-[var(--color-accent)] transition-all shadow-2xl hover:scale-105 active:scale-95">
            Book a Demo →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
