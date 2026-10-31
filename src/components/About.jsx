import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Database, 
  BrainCircuit, 
  ShoppingBag, 
  TrendingUp, 
  CheckCircle2, 
  Layers, 
  Users, 
  Shirt, 
  Compass, 
  SplitSquareVertical,
  Unlink,
  BarChart3,
  Truck,
  Boxes,
  Megaphone,
  Glasses,
  Activity
} from 'lucide-react';
import { MotifCommerceThread, MotifFashionSketch, MotifDataAnnotation } from './BackgroundMotifs';
import { BrandPatternAtelier, BrandPatternMonogram, BrandPatternWeave, BrandWatermark } from './BrandPattern';
import TypingHeading from './TypingHeading';
import SectionSolutions from './SectionSolutions';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

export default function About() {
  usePageMeta("About Scaleezy — One Connected System for Apparel Commerce", "Why we built Scaleezy: inventory, CRM, try-on, marketing, finance, analytics and logistics working as one system for fashion businesses.");
  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] overflow-x-hidden selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
      
      {/* ============================================================== */}
      {/* 01 - HERO SECTION: Editorial High-Fashion Header & Gallery     */}
      {/* ============================================================== */}
      <section className="relative pt-28 sm:pt-36 md:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden flex flex-col items-center">
        {/* Ambient Atelier Texture & Glows */}
        <BrandPatternAtelier opacity={0.12} size={360} vignette={true} />
        <MotifFashionSketch className="absolute -top-[10%] -right-[10%] w-[100%] h-[100%] text-[var(--color-primary)] opacity-[0.035] rotate-12 pointer-events-none" />
        <MotifCommerceThread className="absolute top-1/3 -left-20 w-[150%] text-[var(--color-primary)] opacity-15 pointer-events-none" />
        
        {/* Soft Radial Ambient Spotlight */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full pointer-events-none opacity-40 blur-3xl -z-10"
          style={{ background: 'radial-gradient(circle, rgba(184,212,50,0.18) 0%, rgba(10,47,29,0.05) 50%, transparent 75%)' }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10 text-center mb-12 sm:mb-20">
          
          {/* Eyebrow Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[var(--color-primary)]/15 shadow-xs mb-5 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase">
              ABOUT SCALEEZY
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 sm:mb-8 max-w-5xl mx-auto"
          >
            <TypingHeading
              line1="Apparel commerce"
              line1Class="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-[var(--color-primary)] block text-center mb-1"
              line2Prefix="should work "
              line2Words={[
                'as one system.',
                'without dead stock.',
                'with sub-second sync.',
                'with effortless billing.',
                'with connected intelligence.'
              ]}
              line2Class="font-bold tracking-tight text-[var(--color-primary)] block text-center mt-1 sm:mt-2"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.06] tracking-tight text-center"
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2800}
              seoText="Apparel commerce should work as one system."
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-normal px-2"
          >
            Today's apparel businesses manage products, customers, marketing, finance and fulfilment across disconnected workflows. Scaleezy brings those functions together through one connected apparel commerce ecosystem.
          </motion.p>
        </div>

        {/* Hero Imagery Showcase: Asymmetric Editorial Gallery */}
        <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 px-2 sm:px-4">
          
          {/* Left Panel: Atelier Craftsmanship */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="md:col-span-4 h-72 sm:h-80 md:h-[430px] rounded-3xl overflow-hidden relative shadow-2xl border border-black/10 group cursor-default"
          >
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80" 
              alt="Textile Sourcing & Atelier Materials" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider border border-white/20">
                <Shirt className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Material Sourcing
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-bold block mb-1">ATELIER TELEMETRY</span>
              <div className="text-sm sm:text-base font-bold leading-snug drop-shadow-md">
                Verified fabric mills, custom weave matrices & digital tech packs.
              </div>
            </div>
          </motion.div>

          {/* Center Main Panel: Flagship Luxury Boutique */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="md:col-span-5 h-80 sm:h-96 md:h-[430px] rounded-3xl overflow-hidden relative shadow-2xl border border-black/10 group cursor-default"
          >
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=85" 
              alt="Luxury Fashion Boutique Showroom" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-primary)]/90 backdrop-blur-md text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-wider border border-[var(--color-accent)]/30 shadow-lg">
                <Sparkles className="w-3.5 h-3.5" /> Flagship Boutique
              </span>
            </div>

            {/* Floating Live Telemetry Badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-mono text-white/95 border border-white/20">
                <Activity className="w-3 h-3 text-[var(--color-accent)] animate-pulse" /> 99.4% SYNC
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-bold block mb-1">OMNICHANNEL ENVIRONMENT</span>
              <div className="text-base sm:text-lg font-bold leading-snug drop-shadow-md">
                Connected showroom floor, real-time inventory sync & customer clienteling.
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Client Experience & Point of Sale */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="md:col-span-3 h-72 sm:h-80 md:h-[430px] rounded-3xl overflow-hidden relative shadow-2xl border border-black/10 group cursor-default"
          >
            <img 
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80" 
              alt="Boutique Clienteling & Customer Experience" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider border border-white/20">
                <Users className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Clienteling POS
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-bold block mb-1">CRM INTELLIGENCE</span>
              <div className="text-sm sm:text-base font-bold leading-snug drop-shadow-md">
                VIP profiles, sizing history & instant checkout.
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 02 - THE OLD WAY: Contrast Breakdown with Inventory Visual     */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 md:py-36 bg-[var(--color-soft-cream)] border-t border-[var(--color-primary)]/10 px-4 sm:px-6 relative overflow-hidden">
        <BrandPatternWeave opacity={0.035} color="var(--color-primary)" size={52} />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center relative z-10">
          
          {/* Left Column: Content Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/90 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-6 w-max shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              The Industry Challenge
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-[var(--color-primary)] mb-6 sm:mb-8 text-balance">
              <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl block mb-1">
                Too many systems,
              </span>
              <span className="font-sans font-bold tracking-tight block">
                too much guesswork.
              </span>
            </h2>
            
            {/* The Disconnected Software Islands */}
            <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-sm mb-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600">
                  Siloed Tools in Traditional Retail:
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-red-600 font-bold bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                  <Unlink size={12} /> UNCONNECTED
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {['INVENTORY', 'CRM', 'MARKETING', 'FINANCE', 'POS', 'TRY-ON', 'LOGISTICS'].map((tag) => (
                  <motion.div 
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 border border-gray-300 bg-white px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wider text-gray-700 rounded-xl shadow-xs transition-colors hover:border-red-300 hover:text-red-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {tag}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <p className="text-2xl sm:text-3xl font-extrabold text-red-600/90 tracking-widest uppercase">
                Disconnected.
              </p>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-red-300 via-gray-300 to-transparent" />
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] backdrop-blur-xs">
              <h3 className="text-2xl sm:text-3xl font-serif italic font-normal text-[var(--color-primary)]">
                What if they worked together?
              </h3>
            </div>
          </div>

          {/* Right Column: Visual of Complex Apparel Inventory & Racks */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 h-[380px] sm:h-[480px] md:h-[530px] rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white group"
          >
            <img 
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80" 
              alt="High-Density Apparel Inventory Racks" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/95 via-black/35 to-black/10" />
            
            {/* Telemetry Annotation Floating HUD */}
            <div className="absolute top-5 left-5 right-5 flex flex-wrap justify-between items-center gap-2 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wider">
                DIAGNOSTIC: UNALIGNED DATA
              </span>
              <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                30% Margin Leak
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1.5">
                <SplitSquareVertical className="w-4 h-4 text-red-500" />
                Fragmented Data Architecture
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                Independent spreadsheets and billing apps create dead stock, blind reorders, and lost lifetime customer value.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 03 - THE SCALEEZY IDEA: Connected Intelligence Ecosystem       */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 md:py-40 bg-[var(--color-charcoal)] text-white px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle Watermarks */}
        <BrandWatermark className="-left-40 top-1/4 text-white" opacity={0.018} size={850} />
        <BrandWatermark className="-right-40 bottom-10 text-[var(--color-accent)]" opacity={0.015} size={750} />
        <BrandPatternMonogram opacity={0.03} color="var(--color-accent)" size={75} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            Connected Intelligence Layer
          </motion.div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 sm:mb-16 md:mb-20 leading-[1.08] tracking-tight text-balance max-w-4xl mx-auto">
            <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-[var(--color-accent)]">
              One intelligence layer,
            </span>
            <span className="font-sans font-bold tracking-tight text-white block">
              connects everything.
            </span>
          </h2>

          {/* Futuristic Interactive Stepper Track with Connected Line */}
          <div className="max-w-5xl mx-auto mb-16 sm:mb-20 md:mb-24 relative">
            
            {/* Desktop Connected SVG Line */}
            <div className="hidden sm:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-[2px] bg-gradient-to-r from-white/10 via-[var(--color-accent)]/40 to-[var(--color-accent)] -z-0 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-5 relative z-10">
              {[
                { step: '01', label: 'DATA', desc: 'Raw touchpoints & inventory SKUs' },
                { step: '02', label: 'INTELLIGENCE', desc: 'Cross-module predictive models' },
                { step: '03', label: 'ACTION', desc: 'Automated campaigns & alerts' },
                { step: '04', label: 'RESULT', desc: 'Higher margins & repeat sales', highlight: true }
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`p-5 sm:p-6 rounded-2xl border text-center flex flex-col items-center justify-between transition-all duration-300 backdrop-blur-md ${
                    item.highlight 
                      ? 'bg-[var(--color-primary)] border-[var(--color-accent)] shadow-[0_0_35px_rgba(184,212,50,0.22)]' 
                      : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3 text-xs font-mono text-gray-300">
                    <span>STEP</span>
                    <span className="font-bold">{item.step}</span>
                  </div>
                  <div className={`text-xl sm:text-2xl font-bold tracking-wider mb-1.5 ${
                    item.highlight ? 'text-[var(--color-accent)]' : 'text-white'
                  }`}>
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-200 font-normal leading-snug">
                    {item.desc}
                  </div>
                  {idx < 3 && (
                    <div className="text-[var(--color-accent)] text-lg mt-3 sm:hidden font-bold">
                      ↓
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* 4 Connected Module Cards with High-Resolution Photography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left">
            
            {/* Card 1: CRM -> Marketing */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden h-80 sm:h-96 border border-white/15 p-6 sm:p-7 flex flex-col justify-end group shadow-2xl cursor-default"
            >
              <img 
                src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&q=80" 
                alt="CRM and Marketing Synchronization" 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              
              <div className="absolute top-5 left-5">
                <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[var(--color-accent)] shadow-md">
                  <Users size={18} />
                </span>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-4">
                <div className="text-gray-300 font-bold mb-1 uppercase text-xs tracking-widest">CRM</div>
                <div className="text-[var(--color-accent)] text-2xl font-bold mb-1 group-hover:translate-x-1.5 transition-transform inline-block">→</div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Marketing</div>
                <div className="text-xs text-gray-200 mt-2 font-normal leading-relaxed">
                  Turn past purchases and client preferences into automated VIP lookbooks.
                </div>
              </div>
            </motion.div>

            {/* Card 2: Inventory -> Promotions */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden h-80 sm:h-96 border border-white/15 p-6 sm:p-7 flex flex-col justify-end group shadow-2xl cursor-default"
            >
              <img 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80" 
                alt="Inventory and Targeted Promotions" 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              
              <div className="absolute top-5 left-5">
                <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[var(--color-accent)] shadow-md">
                  <Shirt size={18} />
                </span>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-4">
                <div className="text-gray-300 font-bold mb-1 uppercase text-xs tracking-widest">Inventory</div>
                <div className="text-[var(--color-accent)] text-2xl font-bold mb-1 group-hover:translate-x-1.5 transition-transform inline-block">→</div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Promotions</div>
                <div className="text-xs text-gray-200 mt-2 font-normal leading-relaxed">
                  Detect slow movers early and clear stock with targeted bundles, not blanket discounts.
                </div>
              </div>
            </motion.div>

            {/* Card 3: Try-On -> Recommendations */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden h-80 sm:h-96 border border-white/15 p-6 sm:p-7 flex flex-col justify-end group shadow-2xl cursor-default"
            >
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" 
                alt="Virtual Try-On and Smart Recommendations" 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              
              <div className="absolute top-5 left-5">
                <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[var(--color-accent)] shadow-md">
                  <Compass size={18} />
                </span>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-4">
                <div className="text-gray-300 font-bold mb-1 uppercase text-xs tracking-widest">Try-On</div>
                <div className="text-[var(--color-accent)] text-2xl font-bold mb-1 group-hover:translate-x-1.5 transition-transform inline-block">→</div>
                <div className="text-xl xl:text-2xl font-bold text-white tracking-tight">Recommendations</div>
                <div className="text-xs text-gray-200 mt-2 font-normal leading-relaxed">
                  Visualize fit on screen and feed customer sizing accuracy straight back to the CRM.
                </div>
              </div>
            </motion.div>

            {/* Card 4: Finance -> Procurement */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden h-80 sm:h-96 border border-white/15 p-6 sm:p-7 flex flex-col justify-end group shadow-2xl cursor-default"
            >
              <img 
                src="https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&q=80" 
                alt="Finance and Procurement Intelligence" 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              
              <div className="absolute top-5 left-5">
                <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[var(--color-accent)] shadow-md">
                  <TrendingUp size={18} />
                </span>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-4">
                <div className="text-gray-300 font-bold mb-1 uppercase text-xs tracking-widest">Finance</div>
                <div className="text-[var(--color-accent)] text-2xl font-bold mb-1 group-hover:translate-x-1.5 transition-transform inline-block">→</div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Procurement</div>
                <div className="text-xs text-gray-200 mt-2 font-normal leading-relaxed">
                  Calculate true gross margins and prevent capital being locked in slow inventory cycles.
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 04 - WHAT SCALEEZY CONNECTS: Luxury Bento Card Showcase        */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 md:py-36 bg-[var(--color-warm-white)] px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-4">
              <Layers size={14} /> Full Ecosystem Coverage
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-[var(--color-primary)] text-balance">
              <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl block mb-1">
                Seven pillars,
              </span>
              <span className="font-sans font-bold tracking-tight block">
                what Scaleezy connects.
              </span>
            </h2>
          </div>

          {/* 7 Connected Dimensions Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
            {[
              { 
                title: 'PRODUCTS', 
                desc: "Know what's available.", 
                colSpan: 'lg:col-span-6',
                img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80',
                badge: 'SKU & CATEGORY MATRIX',
                icon: Boxes
              },
              { 
                title: 'CUSTOMERS', 
                desc: 'Know who is buying.', 
                colSpan: 'lg:col-span-6',
                img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
                badge: 'CLIENTELING & LIFECYCLE',
                icon: Users
              },
              { 
                title: 'MARKETING', 
                desc: 'Know who to reach.', 
                colSpan: 'lg:col-span-4',
                img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
                badge: 'AUTOMATED CAMPAIGNS',
                icon: Megaphone
              },
              { 
                title: 'TRY-ON', 
                desc: 'Help customers decide.', 
                colSpan: 'lg:col-span-4',
                img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
                badge: 'AI VISUAL STUDIO',
                icon: Glasses
              },
              { 
                title: 'FINANCE', 
                desc: 'Know business performance.', 
                colSpan: 'lg:col-span-4',
                img: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&q=80',
                badge: 'MARGIN DASHBOARD',
                icon: TrendingUp
              },
              { 
                title: 'ANALYTICS', 
                desc: 'Understand what is happening.', 
                colSpan: 'lg:col-span-6',
                img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
                badge: 'EXECUTIVE TELEMETRY',
                icon: BarChart3
              },
              { 
                title: 'LOGISTICS', 
                desc: 'Move orders efficiently.', 
                colSpan: 'lg:col-span-6',
                img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80',
                badge: 'CARRIER ROUTING',
                icon: Truck
              }
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`group relative rounded-3xl overflow-hidden bg-white border border-black/10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end min-h-[300px] sm:min-h-[340px] p-6 sm:p-8 cursor-default ${item.colSpan}`}
                >
                  {/* Background Photography with Sophisticated Dark Vignette */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    loading="lazy" 
                    decoding="async" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent" />
                  
                  {/* Top Badge with Icon */}
                  <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider border border-white/25 shadow-xs">
                      <ItemIcon size={12} className="text-[var(--color-accent)]" /> {item.badge}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 text-white">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="w-7 h-7 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal pl-10">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 05 - SCALEEZY PHILOSOPHY: Atmospheric Atelier Showcase         */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 md:py-40 bg-[var(--color-primary)] text-white text-center px-4 sm:px-6 relative overflow-hidden">
        {/* Atmospheric Workshop Background Image with Deep Emerald Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80" 
            alt="Tailoring Atelier and Craftsmanship" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-20 filter contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/90 via-[var(--color-primary)]/95 to-[var(--color-primary)]" />
        </div>

        <BrandPatternAtelier mode="dark" opacity={0.06} size={360} />
        <MotifDataAnnotation className="absolute top-8 left-8 md:top-12 md:left-12 text-[var(--color-accent)] opacity-60 hidden sm:block z-10" label="PHILOSOPHY" value="TRUE" />

        <div className="max-w-5xl mx-auto relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-6"
          >
            The Scaleezy Principle
          </motion.div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 sm:mb-16 md:mb-20 leading-[1.05] tracking-tight text-balance">
            <span className="font-serif italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl block mb-1 text-[var(--color-accent)]">
              Stop guessing,
            </span>
            <span className="font-sans font-bold tracking-tight text-white block">
              start growing.
            </span>
          </h2>
          
          {/* Glassmorphic Progression Pipeline with Micro-Chevrons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { text: 'Better data', icon: Database, step: '01' },
              { text: 'Better decisions', icon: BrainCircuit, step: '02' },
              { text: 'Better customer experiences', icon: ShoppingBag, step: '03' },
              { text: 'Better business outcomes', icon: TrendingUp, step: '04', highlight: true }
            ].map((node, i) => {
              const IconComp = node.icon;
              return (
                <motion.div
                  key={node.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 rounded-2xl border text-center flex flex-col items-center justify-between backdrop-blur-md shadow-xl transition-all duration-300 relative ${
                    node.highlight 
                      ? 'bg-[var(--color-accent)]/15 border-[var(--color-accent)] text-[var(--color-accent)] shadow-[0_0_30px_rgba(184,212,50,0.2)]' 
                      : 'bg-white/5 border-white/10 text-white hover:border-white/25 hover:bg-white/10'
                  }`}
                >
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[var(--color-accent)] shadow-sm">
                    <IconComp size={20} />
                  </div>
                  <span className="text-base sm:text-lg font-semibold tracking-wide mb-3 leading-snug">
                    {node.text}
                  </span>
                  <span className="text-[10px] font-mono opacity-80 uppercase tracking-widest mt-auto">
                    STAGE {node.step}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 06 - WHO SCALEEZY IS FOR: 3D Curved Solution Cards Carousel   */}
      {/* ============================================================== */}
      <SectionSolutions />

      {/* ============================================================== */}
      {/* 07 - CTA SECTION: High-Impact Aesthetic Conclusion             */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 md:py-36 bg-[var(--color-warm-white)] text-center px-4 sm:px-6 relative overflow-hidden">
        <BrandPatternWeave opacity={0.035} color="var(--color-primary)" size={50} />

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Framed Editorial Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl sm:rounded-[36px] overflow-hidden p-8 sm:p-14 md:p-20 bg-gradient-to-br from-[var(--color-primary)] via-[#0e3b25] to-[#0A2F1D] text-white shadow-2xl border border-[var(--color-primary)]/20"
          >
            <BrandPatternAtelier mode="dark" opacity={0.08} size={320} />
            <BrandWatermark className="-right-24 -bottom-24 text-[var(--color-accent)]" opacity={0.04} size={500} />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-6">
                Next-Generation Retail OS
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 leading-[1.08] tracking-tight text-balance">
                <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-[var(--color-accent)]">
                  The future of commerce,
                </span>
                <span className="font-sans font-bold tracking-tight text-white block">
                  built for modern apparel brands.
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 font-normal">
                Join forward-thinking boutiques, ethnic wear houses, and multi-brand retailers that run their entire operations with connected intelligence.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <Link 
                  to="/how-it-works" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-sm sm:text-base font-semibold hover:bg-white/10 transition-all rounded-full backdrop-blur-sm"
                >
                  <span>Explore How It Works</span>
                  <ArrowRight size={17} />
                </Link>

                <Link 
                  to="/book-a-demo" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-[var(--color-primary)] px-9 py-4 text-sm sm:text-base font-bold hover:bg-white transition-all rounded-full shadow-xl hover:shadow-2xl hover:scale-102 active:scale-98"
                >
                  <span>Book a Demo</span>
                  <ArrowRight size={17} />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/10 text-xs sm:text-sm text-gray-200 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" /> 15-Minute Tailored Walkthrough
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" /> Real Apparel Data Models
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" /> Zero Operational Disruption
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
