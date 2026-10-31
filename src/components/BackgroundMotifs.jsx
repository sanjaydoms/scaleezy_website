import React from 'react';
import { motion } from 'framer-motion';

// Motif 01: Fashion technical sketch (abstract garment lines/measurements)
export const MotifFashionSketch = ({ className = '' }) => (
  <svg className={`absolute pointer-events-none opacity-[0.03] mix-blend-multiply ${className}`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50,20 C 60,10 140,10 150,20 L 160,60 C 150,80 140,100 130,180 L 70,180 C 60,100 50,80 40,60 Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2"/>
    <path d="M 100,10 L 100,190" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3"/>
    <path d="M 30,100 L 170,100" stroke="currentColor" strokeWidth="0.5"/>
    <text x="35" y="95" fontSize="6" fill="currentColor" opacity="0.8">CHEST: 38"</text>
    <circle cx="100" cy="40" r="2" stroke="currentColor" strokeWidth="0.5"/>
  </svg>
);

// Motif 02: SKU / barcode fragment
export const MotifBarcode = ({ className = '' }) => (
  <div className={`absolute pointer-events-none flex flex-col gap-1 opacity-[0.05] mix-blend-multiply font-mono text-[10px] tracking-widest ${className}`}>
    <div className="flex gap-px h-8">
      <div className="w-1 bg-current h-full"></div>
      <div className="w-2 bg-current h-full"></div>
      <div className="w-px bg-current h-full"></div>
      <div className="w-1 bg-current h-full"></div>
      <div className="w-0.5 bg-current h-full"></div>
      <div className="w-1.5 bg-current h-full"></div>
      <div className="w-px bg-current h-full"></div>
      <div className="w-2 bg-current h-full"></div>
      <div className="w-1 bg-current h-full"></div>
      <div className="w-px bg-current h-full"></div>
    </div>
    <span>SKU-4920-IND</span>
  </div>
);

// Motif 03: Curved Commerce Thread (animated)
export const MotifCommerceThread = ({ className = '', path = "M 0,50 C 50,0 100,100 150,50" }) => (
  <svg className={`absolute pointer-events-none ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      d={path}
      stroke="var(--color-accent)"
      strokeWidth="0.1"
      strokeDasharray="2 2"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 3, ease: "easeInOut" }}
    />
  </svg>
);

// Motif 04: Product Data Grid / Annotation
export const MotifDataAnnotation = ({ className = '', label, value }) => (
  <div className={`absolute pointer-events-none opacity-[0.04] mix-blend-multiply font-sans text-xs flex flex-col border-l border-current pl-2 ${className}`}>
    <span className="uppercase tracking-widest text-[8px]">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

// Motif 05: Customer profile journey dots
export const MotifJourneyDots = ({ className = '' }) => (
  <svg className={`absolute pointer-events-none opacity-[0.06] mix-blend-multiply ${className}`} viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10,25 C 40,5 60,45 90,25 C 110,10 130,25 140,25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2"/>
    <circle cx="10" cy="25" r="1.5" fill="currentColor"/>
    <circle cx="90" cy="25" r="1.5" fill="currentColor"/>
    <circle cx="140" cy="25" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
  </svg>
);
