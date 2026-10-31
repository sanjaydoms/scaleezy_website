import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BrandPatternAtelier, BrandWatermark } from './BrandPattern';

// Minimal Starburst Icon matching the Framer reference in Image 1
function FramerStarburstIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="2.2" fill="white" />
      <path 
        d="M16 3v5 M16 24v5 M3 16h5 M24 16h5 M6.8 6.8l3.6 3.6 M21.6 21.6l3.6 3.6 M6.8 25.2l3.6-3.6 M21.6 10.4l3.6-3.6" 
        stroke="currentColor" 
        strokeWidth="2.2" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

const solutions = [
  {
    id: "01",
    name: "Saree Stores",
    tag: "High-Variant Weaves",
    desc: "Manage massive variations in weaves, zari borders, colors, and margins easily.",
    gradient: "from-[#F7F2EC] via-[#EFE6DC] to-[#E2D4C3]",
    borderTint: "border-[#D8C7B2]/40",
    pillColor: "hover:bg-[#8A6240] hover:text-white"
  },
  {
    id: "02",
    name: "Bridal Boutiques",
    tag: "Custom Atelier",
    desc: "Track custom orders, measurements, alterations, and bridal fittings seamlessly.",
    gradient: "from-[#E8EFF0] via-[#D2E2E3] to-[#B5CFD2]",
    borderTint: "border-[#9ABEC2]/40",
    pillColor: "hover:bg-[#285E65] hover:text-white"
  },
  {
    id: "03",
    name: "Ethnic Wear",
    tag: "Multi-Piece Sets",
    desc: "Organize complex sets and multi-piece garments with barcode precision.",
    gradient: "from-[#F2ECF7] via-[#E3D6ED] to-[#C9B5DF]",
    borderTint: "border-[#B299CE]/40",
    pillColor: "hover:bg-[#5C367E] hover:text-white"
  },
  {
    id: "04",
    name: "Fashion Retailers",
    tag: "Omnichannel POS",
    desc: "Omnichannel sync across physical POS, Shopify, and multiple marketplaces.",
    gradient: "from-[#EBF3E8] via-[#D7E8D2] to-[#B6D6AF]",
    borderTint: "border-[#96C08D]/40",
    pillColor: "hover:bg-[#2F6126] hover:text-white"
  },
  {
    id: "05",
    name: "Multi-Brand Stores",
    tag: "Consignment & SKUs",
    desc: "Centralize inventory for thousands of partner SKUs across various brands.",
    gradient: "from-[#F7EFE9] via-[#EEDCCD] to-[#DCBFAB]",
    borderTint: "border-[#CBA58C]/40",
    pillColor: "hover:bg-[#7D492A] hover:text-white"
  },
  {
    id: "06",
    name: "D2C Brands",
    tag: "High-Velocity Drops",
    desc: "Scale direct-to-consumer operations with real-time conversion analytics.",
    gradient: "from-[#F5F5F0] via-[#E7E9E2] to-[#CCD2C3]",
    borderTint: "border-[#AEB7A2]/40",
    pillColor: "hover:bg-[#4A553D] hover:text-white"
  },
  {
    id: "07",
    name: "Wholesalers",
    tag: "B2B Bulk Tiers",
    desc: "B2B buyer portal, bulk pricing tiers, and robust warehouse dispatch management.",
    gradient: "from-[#EAF0F6] via-[#D4E1EE] to-[#ADC4DE]",
    borderTint: "border-[#8CA7C7]/40",
    pillColor: "hover:bg-[#254A72] hover:text-white"
  },
  {
    id: "08",
    name: "Manufacturers",
    tag: "Factory & Mills",
    desc: "Track raw materials, fabric rolls, production batches, and mill output.",
    gradient: "from-[#ECEEEF] via-[#D8DCDE] to-[#BAC2C6]",
    borderTint: "border-[#9DA7AC]/40",
    pillColor: "hover:bg-[#343D42] hover:text-white"
  }
];

export default function SectionSolutions() {
  const [activeIdx, setActiveIdx] = useState(2); // Start on Ethnic Wear (Card 03 like in image)
  const [touchStart, setTouchStart] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const total = solutions.length;

  const nextCard = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Touch Swipe support for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextCard();
    if (diff < -50) prevCard();
    setTouchStart(null);
  };

  // Dynamic responsive geometry based on real screen width
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const xSpread = isMobile ? 140 : isTablet ? 200 : 270;

  return (
    <section id="solutions" className="relative py-20 sm:py-28 md:py-36 bg-[#FDFDFC] overflow-hidden select-none">
      {/* Background atelier tailoring texture */}
      <BrandPatternAtelier opacity={0.06} size={380} vignette={true} />
      <BrandWatermark className="-left-32 top-10 text-[var(--color-primary)]" opacity={0.015} size={700} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase bg-black/5 px-4 py-1.5 rounded-full border border-black/5 inline-block mb-4">
            Specialized Apparel Workflows
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[var(--color-primary)] mb-4 sm:mb-6 text-balance">
            <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-[var(--color-primary)]">
              Tailored workflows,
            </span>
            <span className="font-sans font-bold tracking-tight block">
              built for every apparel business.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-2 font-normal">
            From single-store bridal boutiques to enterprise garment manufacturing, explore dedicated operating tools crafted for your specific workflow.
          </p>
        </div>

        {/* ============================================================== */}
        {/* MINIMAL ARC CAROUSEL STAGE (Matching Reference Image 1)        */}
        {/* ============================================================== */}
        <div 
          className="relative w-full h-[460px] sm:h-[540px] md:h-[620px] flex items-center justify-center overflow-hidden sm:overflow-visible"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {solutions.map((item, idx) => {
            // Compute circular difference from active card
            let diff = (idx - activeIdx) % total;
            if (diff < -total / 2) diff += total;
            if (diff > total / 2) diff -= total;

            const isCenter = diff === 0;
            // On mobile show center + 1 on each side; on desktop show 5 cards
            const maxVisible = isMobile ? 1 : 2;
            const isVisible = Math.abs(diff) <= maxVisible;

            const cardX = diff * xSpread;
            const cardY = Math.abs(diff) * (isMobile ? 22 : 32) + Math.pow(diff, 2) * 6; // parabolic dip
            const cardRot = diff * (isMobile ? 5 : 7); // gentler rotation on mobile
            const cardScale = isCenter ? 1.05 : 1 - Math.abs(diff) * 0.08;
            const cardZIndex = 20 - Math.abs(diff);
            const cardOpacity = isVisible ? (isCenter ? 1 : 1 - Math.abs(diff) * 0.22) : 0;

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: cardX,
                  y: cardY,
                  rotateZ: cardRot,
                  scale: cardScale,
                  opacity: cardOpacity,
                  zIndex: cardZIndex
                }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 26,
                  mass: 0.8
                }}
                onClick={() => setActiveIdx(idx)}
                className={`absolute w-[240px] sm:w-[290px] md:w-[330px] h-[380px] sm:h-[440px] md:h-[480px] rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 md:p-8 flex flex-col justify-between items-center text-center cursor-pointer shadow-[0_22px_60px_-15px_rgba(0,0,0,0.12)] border ${item.borderTint} bg-gradient-to-b ${item.gradient} backdrop-blur-md transition-shadow hover:shadow-[0_28px_70px_-15px_rgba(0,0,0,0.2)]`}
                style={{
                  pointerEvents: isVisible ? 'auto' : 'none',
                  transformOrigin: "bottom center"
                }}
              >
                {/* Top Section: Minimalist Starburst Icon (Image 1 Style) */}
                <div className="flex flex-col items-center pt-2">
                  <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 flex items-center justify-center shadow-sm text-[var(--color-charcoal)] mb-3 group-hover:scale-110 transition-transform">
                    <FramerStarburstIcon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-gray-700">
                    {item.tag}
                  </span>
                </div>

                {/* Center Section: Minimal Title & Description */}
                <div className="my-auto px-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-charcoal)] mb-2.5">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Section: Clean Pill Action Button (Image 1 Style) */}
                <div className="pb-1">
                  {isCenter ? (
                    <Link 
                      to="/solutions"
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-block bg-white text-[var(--color-charcoal)] px-7 sm:px-8 py-3 rounded-full font-bold text-xs tracking-widest uppercase shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-white/80 transition-all duration-300 hover:scale-105 active:scale-95 ${item.pillColor}`}
                    >
                      EXPLORE SOLUTION →
                    </Link>
                  ) : (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIdx(idx);
                      }}
                      className={`bg-white text-[var(--color-charcoal)] px-7 sm:px-8 py-3 rounded-full font-bold text-xs tracking-widest uppercase shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-white/80 transition-all duration-300 hover:scale-105 active:scale-95 ${item.pillColor}`}
                    >
                      READ MORE
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE CONTROLS & INDICATOR DOTS                          */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center gap-6 mt-8">
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevCard}
              aria-label="Previous solution card"
              className="w-12 h-12 rounded-full bg-white border border-gray-200/80 shadow-md hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300 flex items-center justify-center text-gray-700 cursor-pointer group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={nextCard}
              aria-label="Next solution card"
              className="w-12 h-12 rounded-full bg-white border border-gray-200/80 shadow-md hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300 flex items-center justify-center text-gray-700 cursor-pointer group"
            >
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Minimal Dots Indicator */}
          <div className="flex items-center gap-2">
            {solutions.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Jump to ${s.name}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIdx === idx 
                    ? 'w-8 h-2 bg-[var(--color-primary)]' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
