import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Boxes, 
  Zap, 
  Users, 
  Database, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { BrandPatternMonogram, BrandWatermark } from './BrandPattern';

// Delicate 4-point star sparkle
function HandDrawnSparkle({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M18 2 C18 12 24 18 34 18 C24 18 18 24 18 34 C18 24 12 18 2 18 C12 18 18 12 18 2 Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const problems = [
  {
    number: '01',
    category: 'Inventory',
    title: 'Procurement without guesswork',
    desc: 'See real demand trends and avoid capital locked in unsold stock across seasons.',
    metric: '↓ 30% Dead Stock',
    rotation: 'lg:-rotate-6',
    translateY: 'lg:translate-y-4',
    bgColor: 'bg-[#EAE8FE]',
    textColor: 'text-[#1D1B48]',
    accentColor: 'text-[#5B4DF6]',
    blobColor: 'bg-[#D6D2FD]',
    badgeBg: 'bg-white/95',
    badgeText: 'text-[#4438CA]',
    icon: Boxes,
    secondaryIcon: TrendingUp,
    highlight: 'Predictive batch allocation'
  },
  {
    number: '02',
    category: 'Store Operations',
    title: 'Faster stores',
    desc: 'Cut physical trials and eliminate long billing queues with rapid mobile checkout.',
    metric: '3x Faster Billing',
    rotation: 'lg:-rotate-2',
    translateY: 'lg:translate-y-0',
    bgColor: 'bg-[#F9FAFC]',
    textColor: 'text-[#0D251A]',
    accentColor: 'text-[#0A2F1D]',
    blobColor: 'bg-[#E3E8EE]',
    badgeBg: 'bg-[#0A2F1D]/10',
    badgeText: 'text-[#0A2F1D]',
    icon: Zap,
    secondaryIcon: Clock,
    highlight: 'Sub-20s Counter Scan'
  },
  {
    number: '03',
    category: 'Retention',
    title: 'Customers who come back',
    desc: 'Personalise every follow-up using purchase history, size profiles, and loyalty perks.',
    metric: '+42% Repeat Buys',
    rotation: 'lg:rotate-1',
    translateY: 'lg:-translate-y-3',
    bgColor: 'bg-[#DCEEFE]',
    textColor: 'text-[#0B2545]',
    accentColor: 'text-[#134074]',
    blobColor: 'bg-[#BDDDFB]',
    badgeBg: 'bg-white/95',
    badgeText: 'text-[#034078]',
    icon: Users,
    secondaryIcon: HeartHandshake,
    highlight: 'VIP Clienteling Profiles'
  },
  {
    number: '04',
    category: 'Architecture',
    title: 'One source of truth',
    desc: 'No more manual data reconciliation between separate tools, ERPs, and spreadsheets.',
    metric: '100% Real-Time Sync',
    rotation: 'lg:rotate-6',
    translateY: 'lg:translate-y-5',
    bgColor: 'bg-[#EEF8B2]',
    textColor: 'text-[#0A2F1D]',
    accentColor: 'text-[#0A2F1D]',
    blobColor: 'bg-[#DCF182]',
    badgeBg: 'bg-[#0A2F1D]',
    badgeText: 'text-[#B8D432]',
    icon: Database,
    secondaryIcon: CheckCircle2,
    highlight: 'Zero sync discrepancies'
  }
];

export default function Section3() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[var(--color-primary)] text-white overflow-hidden relative rounded-t-[32px] sm:rounded-t-[44px] md:rounded-t-[56px] rounded-b-[32px] sm:rounded-b-[44px] md:rounded-b-[56px] my-10 sm:my-16 mx-3 sm:mx-6 md:mx-8 shadow-2xl">
      {/* Brand Monogram and Subtle Watermark */}
      <BrandPatternMonogram opacity={0.035} color="var(--color-accent)" size={80} />
      <BrandWatermark className="-left-40 top-1/4 text-white" opacity={0.015} size={800} />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-24 right-0 w-[500px] h-[400px] bg-[var(--color-accent)]/8 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Business Problems Solved</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]"
          >
            Apparel commerce friction, <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[var(--color-accent)] text-4xl sm:text-5xl md:text-6xl inline-block sm:mt-1">permanently solved.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-white/85 text-base sm:text-lg md:text-xl leading-relaxed font-normal"
          >
            Scaleezy replaces fragmented fashion retail tools with four connected pillars — turning operational drag into compound margin growth.
          </motion.p>
        </div>

        {/* Tilted Playing Cards Deck Flow */}
        <div className="relative">
          {/* Subtle connecting curved thread & decorative sparkle stars running behind the cards on desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
              <path
                d="M 170 480 Q 220 540 280 510"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="1.75"
                strokeDasharray="4 4"
              />
              <path
                d="M 450 360 C 510 320, 560 300, 620 280"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
              />
              <path
                d="M 770 230 C 860 170, 920 180, 990 270"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
              />
            </svg>

            <div className="absolute left-[20%] bottom-[4%] text-[var(--color-accent)]">
              <HandDrawnSparkle className="w-8 h-8 animate-pulse" />
            </div>

            <div className="absolute right-[22%] top-[10%] text-white/80">
              <HandDrawnSparkle className="w-10 h-10" />
            </div>

            <div className="absolute right-[4%] top-[2%] text-[var(--color-accent)]">
              <HandDrawnSparkle className="w-6 h-6" />
            </div>
          </div>

          {/* Cards Grid / Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 relative z-10 items-stretch py-4">
            {problems.map((problem, i) => {
              const IconComp = problem.icon;
              const SecondaryIcon = problem.secondaryIcon;
              return (
                <motion.div
                  key={problem.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className={`relative flex flex-col justify-between rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 md:p-8 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out cursor-pointer group transform-gpu will-change-transform ${problem.bgColor} ${problem.textColor} ${problem.rotation} ${problem.translateY} hover:rotate-0 hover:-translate-y-6 hover:scale-105 hover:z-30 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),0_0_35px_rgba(184,212,50,0.2)]`}
                >
                  {/* Top Number & Category */}
                  <div className="text-center">
                    <span className="text-xs sm:text-sm font-mono font-bold tracking-widest opacity-75 uppercase block mb-2">
                      {problem.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug px-1">
                      {problem.title}
                    </h3>
                  </div>

                  {/* Center Graphic Badge / Illustration */}
                  <div className="my-7 sm:my-8 flex items-center justify-center">
                    <div className="relative">
                      <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-[28px] sm:rounded-[32px] ${problem.blobColor} flex items-center justify-center shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/95 shadow-md flex items-center justify-center border border-black/5">
                          <IconComp className={`w-9 h-9 ${problem.accentColor} transition-transform duration-500 group-hover:scale-110`} />
                        </div>
                      </div>

                      <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-white shadow-md border border-black/10 text-[10px] font-bold tracking-wide flex items-center gap-1">
                        <SecondaryIcon className={`w-3 h-3 ${problem.accentColor}`} />
                        <span className="text-gray-900">{problem.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content & Impact Metric */}
                  <div className="text-center flex flex-col justify-end">
                    <p className="text-xs sm:text-sm leading-relaxed opacity-95 mb-5 font-medium px-1">
                      {problem.desc}
                    </p>

                    <div className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-bold tracking-wide shadow-sm mx-auto ${problem.badgeBg} ${problem.badgeText} transition-transform duration-300 group-hover:scale-105`}>
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{problem.metric}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section Bottom CTA Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-24 p-8 sm:p-10 md:p-12 rounded-[28px] sm:rounded-[36px] bg-white/[0.06] border border-white/15 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="relative z-10 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
              Continuous Operational Velocity
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              Ready to eliminate these bottlenecks across your stores?
            </h4>
            <p className="text-white/85 text-sm sm:text-base max-w-xl">
              Experience how Scaleezy links real-time inventory, express billing, and customer retention into one effortless workspace.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              to="/book-a-demo"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-[var(--color-accent)] hover:bg-[#c9e838] text-[var(--color-primary)] font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_10px_25px_rgba(184,212,50,0.3)] hover:scale-105"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
