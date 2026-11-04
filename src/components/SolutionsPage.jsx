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
    categoryTag: 'Traditional & Silk',
    badge: 'High-Value SKU',
    title: 'Intelligent inventory and billing for high-value saree commerce.',
    desc: 'Effortlessly manage complex weaves, zari variants, matching blouses, and festive wedding rush with automated stock intake.',
    highlights: ['Zari & Silk Matrix', 'Festive Rush Forecasting', 'Dead-Stock Tracking', 'Weaver Line Sync'],
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85',
    link: '/book-a-demo'
  },
  {
    id: 'bridal',
    name: 'Bridal Boutiques',
    categoryTag: 'High-Value Couture',
    badge: 'Custom Fitting',
    title: 'Built for high-ticket bridal wear and multi-stage fittings.',
    desc: 'Empower brides to visualize custom lehengas with AI try-on, coordinate delivery dates, and automate follow-ups.',
    highlights: ['AI Virtual Try-On', 'Fitting Milestones', 'Lehenga Customizer', 'Follow-up Automation'],
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85',
    link: '/book-a-demo'
  },
  {
    id: 'ethnic',
    name: 'Ethnic Wear',
    categoryTag: 'Festive & Occasion',
    badge: 'Multi-Piece Sets',
    title: 'Stay ready for every festive demand spike and wedding season.',
    desc: 'Easily manage multi-piece kurti sets, dupattas, and seasonal surges with real-time stock and automated reordering.',
    highlights: ['Multi-Piece SKUs', 'Festive Demand Surge', 'Smart Size Breakdown', 'Catalog Broadcast'],
    img: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=900&q=85',
    link: '/book-a-demo'
  },
  {
    id: 'retailers',
    name: 'Fashion Retailers',
    categoryTag: 'Multi-Store Chains',
    badge: 'Omnichannel POS',
    title: 'Connect every physical store, warehouse, and online channel.',
    desc: 'Synchronize multi-location inventory in real time, provide lightning-fast POS checkout, and unify customer loyalty points.',
    highlights: ['Multi-Store POS', 'Central Inventory', 'Fast Barcode Billing', 'Loyalty & Points'],
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&q=85',
    link: '/book-a-demo'
  },
  {
    id: 'multibrand',
    name: 'Multi-Brand Stores',
    categoryTag: 'Vendor Consignment',
    badge: 'Vendor Margins',
    title: 'See which brands and designer racks actually drive your profit.',
    desc: 'Track vendor settlements, consignment stock, brand-wise margins, and automated restocking without spreadsheet chaos.',
    highlights: ['Brand Profitability', 'Consignment Ledgers', 'Automated Restocking', 'Vendor Telemetry'],
    img: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=900&q=85',
    link: '/book-a-demo'
  },
  {
    id: 'd2c',
    name: 'D2C Fashion Brands',
    categoryTag: 'E-Commerce & Social',
    badge: 'Customer LTV',
    title: 'Own your customer relationships and scale drop collections.',
    desc: 'Convert social traffic with behaviour-based campaigns, minimize return rates with AI sizing, and drive repeat purchases.',
    highlights: ['WhatsApp Automation', 'Return Minimisation', 'Drop Launch Telemetry', 'AI Segment Targeting'],
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85',
    link: '/book-a-demo'
  },
  {
    id: 'wholesalers',
    name: 'Apparel Wholesalers',
    categoryTag: 'B2B Distribution',
    badge: 'Bulk B2B Orders',
    title: 'Bring intelligent order routing to wholesale apparel trade.',
    desc: 'Manage bulk buyer catalogs, custom price tiers, mill cutting queues, credit terms, and multi-location dispatch seamlessly.',
    highlights: ['B2B Buyer Portal', 'Price Tier Matrix', 'Production Telemetry', 'Credit & Ledgers'],
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85',
    link: '/book-a-demo'
  },
  {
    id: 'boutiques',
    name: 'Fashion Boutiques',
    categoryTag: 'Haute Couture',
    badge: 'Bespoke CRM',
    title: 'Relationship-driven software built for high-end fashion boutiques.',
    desc: 'High-ticket outfits, custom measurements, and loyal clientele. Track client history, styling preferences, and fittings.',
    highlights: ['VIP Client Profiles', 'Measurement History', 'Custom Alterations', 'Exclusive Previews'],
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=85',
    link: '/book-a-demo'
  }
];

export default function SolutionsPage() {
  usePageMeta("Solutions for Apparel & Boutiques — Scaleezy", "Discover Scaleezy solutions for saree stores, bridal studios, ethnic wear, multi-store retail and apparel brands.");
  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] pt-20">
      
      {/* HERO */}
      <section className="relative py-16 sm:py-24 md:py-40 px-4 sm:px-6 flex flex-col justify-center text-center">
        <MotifCommerceThread className="absolute inset-0 w-full h-full opacity-10 text-[var(--color-primary)] z-0" path="M 100,0 C 70,20 60,80 0,90" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 sm:mb-8 max-w-5xl mx-auto flex flex-col justify-start"
          >
            <TypingHeading
              line1="One connected platform,"
              line1Class="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5.25rem] text-[var(--color-primary)] block text-center mb-1"
              line2Prefix="Tailored for "
              line2Words={[
                'Fashion Boutiques.',
                'Bridal Studios.',
                'Ethnic Stores.',
                'D2C Brands.',
                'Wholesalers.'
              ]}
              line2Class="font-sans font-bold tracking-tight text-[var(--color-primary)] block text-center mt-1 sm:mt-2"
              line2MinHeight="min-h-[1.2em]"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5.25rem] font-bold leading-[1.08] tracking-tight text-center"
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
            
            <div className="w-full aspect-[4/5] bg-white/10 overflow-hidden relative border border-white/20 p-2 rounded-2xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" alt="Boutique" loading="lazy" decoding="async" className="w-full h-full object-cover rounded-xl" />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SOLUTIONS GRID */}
      <section className="py-14 sm:py-20 md:py-32 bg-[var(--color-soft-cream)] px-4 sm:px-6 border-t border-[var(--color-primary)]/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase mb-3 sm:mb-4">
              SPECIALIZED ARCHITECTURES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-charcoal)] leading-tight text-balance">
              Tailored for every segment of modern apparel.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed">
              Explore purpose-built workflows engineered for saree stores, bridal ateliers, omnichannel retail chains, and wholesale trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {solutions.map((sol, index) => (
              <motion.div 
                key={sol.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-end min-h-[520px] sm:min-h-[580px] border border-black/10 hover:-translate-y-1.5"
              >
                {/* Background Image with Gentle Zoom on Hover */}
                <img 
                  src={sol.img} 
                  alt={sol.name} 
                  loading="lazy" 
                  decoding="async" 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                />

                {/* Deep Ambient Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/25 group-hover:via-black/55 transition-colors duration-500"></div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col">
                  {/* Header Row: Title & Scaleezy OS Pill */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-3xl sm:text-4xl font-serif italic font-normal tracking-wide text-white leading-tight">
                      {sol.name}
                    </h3>
                    <span className="backdrop-blur-md bg-black/40 border border-white/15 text-[var(--color-accent)] font-semibold text-xs px-3 py-1 rounded-full whitespace-nowrap mt-1">
                      Scaleezy OS
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 line-clamp-2">
                    {sol.desc}
                  </p>

                  {/* Frosted Feature Highlights Row */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sol.highlights.map(h => (
                      <span 
                        key={h} 
                        className="backdrop-blur-md bg-black/40 hover:bg-black/60 border border-white/15 text-white/95 text-xs font-medium px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Full-Width Action Button (matching reference) */}
                  <Link 
                    to={sol.link || "/book-a-demo"} 
                    className="w-full py-3.5 sm:py-4 bg-white text-[var(--color-primary)] font-bold text-sm sm:text-base rounded-full shadow-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 text-center flex items-center justify-center gap-2 group/btn active:scale-98"
                  >
                    <span>Explore Boutiques</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
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
