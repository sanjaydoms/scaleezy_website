import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MotifFashionSketch } from './BackgroundMotifs';
import { BrandPatternMonogram } from './BrandPattern';
import { 
  Store, 
  CheckCircle2, 
  RefreshCw, 
  Zap, 
  Package, 
  ShoppingBag,
  UserCheck,
  ArrowRight
} from 'lucide-react';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function SectionJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      id="journey"
      className="relative py-16 sm:py-24 md:py-40 bg-[var(--color-charcoal)] text-white overflow-hidden"
    >
      {/* Background Motifs & Ambient Glow */}
      <BrandPatternMonogram opacity={0.025} color="var(--color-accent)" size={80} />
      <MotifFashionSketch className="w-[1200px] h-[1200px] absolute -top-40 -left-40 text-[var(--color-warm-white)] opacity-[0.02] pointer-events-none" />
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,212,50,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 md:mb-36">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
            The Scaleezy Operational Journey
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white text-balance mb-4 sm:mb-6"
          >
            <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-[var(--color-accent)]">
              From product procurement,
            </span>
            <span className="font-sans font-bold tracking-tight text-white block">
              to customer conversion.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Three interconnected milestones that unify fragmented fashion operations into an automated commerce engine.
          </motion.p>
        </div>

        {/* Timeline Container with Center Glowing Beam */}
        <div className="relative">
          
          {/* Continuous Vertical Timeline Track */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-white/10 z-0">
            {/* Glowing Active Beam */}
            <motion.div 
              style={{ scaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-[var(--color-accent)] via-emerald-400 to-[var(--color-accent)] shadow-[0_0_12px_rgba(184,212,50,0.8)]"
            />
          </div>

          <div className="space-y-16 sm:space-y-24 md:space-y-36">
            
            {/* ============================================================== */}
            {/* MILESTONE 01: Intelligent Procurement (Text Left, Card Right) */}
            {/* ============================================================== */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center pl-10 sm:pl-16 md:pl-0">
              
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 top-7 sm:top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[var(--color-charcoal)] border-2 border-[var(--color-accent)] flex items-center justify-center font-bold text-xs sm:text-sm text-[var(--color-accent)] shadow-[0_0_20px_rgba(184,212,50,0.35)]">
                  01
                </div>
              </div>

              {/* Text Column (Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-4 sm:space-y-6 md:text-right md:pr-12"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[var(--color-accent)] font-semibold tracking-wider uppercase">
                  <Package className="w-3.5 h-3.5" />
                  Milestone 01 • Sourcing
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Intelligent <br />
                  <span className="text-[var(--color-accent)]">Procurement</span>
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal leading-relaxed max-w-lg md:ml-auto">
                  Before a customer ever sees a piece, Scaleezy tracks inbound thread, fabric roll, or wholesale lots. Know exactly what you hold across all warehouses and sub-hubs with real-time BOM intelligence.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 md:justify-end">
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    Automated Lot Tracking
                  </span>
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    Multi-Warehouse Sync
                  </span>
                </div>
              </motion.div>

              {/* Visual Card (Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:pl-12"
              >
                <div className="min-h-[380px] sm:min-h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-2xl border border-white/15 group bg-gradient-to-br from-[#1e2e22] to-[#141b16] transform-gpu">
                  <img 
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80" 
                    alt="Luxury fabric rolls and materials" 
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-black/40 to-transparent"></div>

                  {/* Glassmorphic HUD overlay */}
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold text-[var(--color-accent)]">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
                        CENTRAL WAREHOUSE SYNC
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-white/85 bg-white/10 px-2 sm:px-2.5 py-0.5 rounded-full backdrop-blur-md">
                        WH-NORTH-04
                      </span>
                    </div>

                    <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/75 backdrop-blur-xl border border-white/20 shadow-2xl space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-semibold text-white text-sm sm:text-base">
                          Lot #7728 Logged to Inventory
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 sm:px-2.5 py-1 rounded-md border border-emerald-500/30 shrink-0">
                          VERIFIED
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 border-t border-white/10 text-xs text-gray-200">
                        <div>
                          <span className="text-gray-300 block text-[10px] sm:text-[11px]">Material</span>
                          <strong className="text-white font-medium text-xs sm:text-sm">100% Raw Silk Twill</strong>
                        </div>
                        <div>
                          <span className="text-gray-300 block text-[10px] sm:text-[11px]">Quantity In Stock</span>
                          <strong className="text-white font-medium text-xs sm:text-sm">1,450 meters</strong>
                        </div>
                      </div>

                      <div className="text-[10px] sm:text-[11px] text-gray-300 flex flex-wrap items-center justify-between gap-1 pt-1">
                        <span>Quality: <strong className="text-white">A+ Mill Certified</strong></span>
                        <span className="text-[var(--color-accent)] flex items-center gap-1">
                          Automated Allocation Active <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>


            {/* ============================================================== */}
            {/* MILESTONE 02: Omnichannel Visibility (Card Left, Text Right)   */}
            {/* ============================================================== */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center pl-10 sm:pl-16 md:pl-0">
              
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 top-7 sm:top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[var(--color-charcoal)] border-2 border-emerald-400 flex items-center justify-center font-bold text-xs sm:text-sm text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.35)]">
                  02
                </div>
              </div>

              {/* Visual Card (Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1 md:pr-12"
              >
                <div className="min-h-[380px] sm:min-h-[440px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#242424] to-[#181818] text-white shadow-2xl p-4 sm:p-7 relative border border-white/10 flex flex-col justify-between overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 pb-4 sm:pb-5 border-b border-white/10">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-[var(--color-primary)] border border-white/20 flex items-center justify-center text-[var(--color-accent)] shadow-md shrink-0">
                          <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-sm sm:text-base text-white flex items-center gap-1.5 sm:gap-2">
                            Instagram Commerce Sync
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                          </div>
                          <div className="text-[11px] sm:text-xs text-gray-300">Live Multi-Channel Catalog API</div>
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                        SYNC ACTIVE
                      </span>
                    </div>

                    {/* Live Sync Events */}
                    <div className="space-y-2.5 sm:space-y-3 mt-4 sm:mt-5">
                      <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-3 sm:p-3.5 border border-white/10 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/80 shrink-0">
                            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)]" />
                          </div>
                          <div>
                            <div className="font-medium text-xs sm:text-sm text-white">Product Published: Silk Saree</div>
                            <div className="text-[10px] sm:text-[11px] text-gray-300">Meta Commerce Catalog #9081</div>
                          </div>
                        </div>
                        <span className="text-emerald-400 text-[10px] sm:text-xs font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 sm:px-2.5 py-1 rounded-md flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="w-3 h-3" /> SUCCESS
                        </span>
                      </div>

                      <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-3 sm:p-3.5 border border-white/10 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/80 shrink-0">
                            <Store className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)]" />
                          </div>
                          <div>
                            <div className="font-medium text-xs sm:text-sm text-white">Flagship Boutique POS Updated</div>
                            <div className="text-[10px] sm:text-[11px] text-gray-300">All registers synced in real-time</div>
                          </div>
                        </div>
                        <span className="text-emerald-400 text-[10px] sm:text-xs font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 sm:px-2.5 py-1 rounded-md flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="w-3 h-3" /> SUCCESS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Telemetry Footer */}
                  <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin [animation-duration:8s]" />
                      <span>Sync Latency: <strong className="text-white">120ms</strong></span>
                    </div>
                    <span className="text-[11px] text-gray-300">Consistency: <strong className="text-white">100%</strong></span>
                  </div>
                </div>
              </motion.div>

              {/* Text Column (Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2 space-y-4 sm:space-y-6 md:pl-12"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-400 font-semibold tracking-wider uppercase">
                  <Zap className="w-3.5 h-3.5" />
                  Milestone 02 • Distribution
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Omnichannel <br />
                  <span className="text-emerald-400">Visibility</span>
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal leading-relaxed max-w-lg">
                  Instantly push new inventory to your website, Instagram, and physical POS simultaneously. No manual double-entry, no overselling, and zero catalog lag across online and offline channels.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Zero Lag Stock Sync
                  </span>
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Unified Catalog Engine
                  </span>
                </div>
              </motion.div>
            </div>


            {/* ============================================================== */}
            {/* MILESTONE 03: The Perfect Match (Text Left, Card Right)        */}
            {/* ============================================================== */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center pl-10 sm:pl-16 md:pl-0">
              
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 top-7 sm:top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[var(--color-charcoal)] border-2 border-[var(--color-accent)] flex items-center justify-center font-bold text-xs sm:text-sm text-[var(--color-accent)] shadow-[0_0_20px_rgba(184,212,50,0.35)]">
                  03
                </div>
              </div>

              {/* Text Column (Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-4 sm:space-y-6 md:text-right md:pr-12"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[var(--color-accent)] font-semibold tracking-wider uppercase">
                  <UserCheck className="w-3.5 h-3.5" />
                  Milestone 03 • Conversion
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  The Perfect <br />
                  <span className="text-[var(--color-accent)]">Match</span>
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal leading-relaxed max-w-lg md:ml-auto">
                  When a client walks in, your staff knows their purchase history, size profiles, and wishlist. Combine virtual try-on with physical touch for high-conversion sales and lifetime loyalty.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 md:justify-end">
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    Boutique Clienteling
                  </span>
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    Smart Size Profiles
                  </span>
                </div>
              </motion.div>

              {/* Visual Card (Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:pl-12"
              >
                <div className="min-h-[380px] sm:min-h-[440px] rounded-2xl sm:rounded-3xl relative overflow-hidden border border-white/15 shadow-2xl group transform-gpu">
                  <img 
                    src="https://images.unsplash.com/photo-1594969155368-f19485a9d88c?w=800&q=80" 
                    alt="Luxury clienteling shopping experience" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                  {/* Floating Client Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-[var(--color-warm-white)]/95 backdrop-blur-md p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-2xl border border-white/40 text-[var(--color-charcoal)]">
                    <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                      <div>
                        <span className="font-bold text-base sm:text-lg text-[var(--color-primary)]">Priya Sharma</span>
                        <div className="text-[11px] sm:text-xs text-gray-600">Client since 2023 • 14 Boutique Visits</div>
                      </div>
                      <span className="bg-[var(--color-primary)] text-[var(--color-accent)] text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
                        VIP Client
                      </span>
                    </div>

                    <div className="text-xs space-y-1 sm:space-y-1.5 text-gray-700 border-t border-gray-200/80 pt-2 sm:pt-2.5">
                      <p className="flex justify-between">
                        <span className="text-gray-600">Last Purchase:</span>
                        <strong className="font-semibold text-gray-900">Blue Velvet Lehenga</strong>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Tailoring Profile:</span>
                        <strong className="font-semibold text-gray-900">M (Custom Alterations)</strong>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Preference:</span>
                        <span className="font-medium text-emerald-800">Silver embroidery & Zari</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
