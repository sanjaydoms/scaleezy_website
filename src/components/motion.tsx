import React, { useRef, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Slow, calm easing curve used site-wide.
const EASE = [0.22, 1, 0.36, 1] as const;
type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'section' | 'span' | 'p' | 'li';
};
/** Fade + rise, triggered once as the section enters the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = 'div'
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{
        opacity: 0,
        y
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}>
      
      {children}
    </MotionTag>);

}
type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Range of vertical drift in px across the scroll. */
  strength?: number;
  /** Slow reveal scale-in on enter. */
  reveal?: boolean;
};
/** Full-bleed image with subtle parallax drift + hover zoom. */
export function ParallaxImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  strength = 60,
  reveal = true
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-full w-full"
        style={{
          y
        }}
        initial={
        reveal ?
        {
          scale: 1.12,
          opacity: 0
        } :
        undefined
        }
        whileInView={
        reveal ?
        {
          scale: 1.05,
          opacity: 1
        } :
        undefined
        }
        viewport={{
          once: true,
          amount: 0.2
        }}
        transition={{
          duration: 1.4,
          ease: EASE
        }}>
        
        <img
          src={src}
          alt={alt}
          className={`h-[118%] w-full object-cover ${imgClassName}`}
          loading="lazy" />
        
      </motion.div>
    </div>);

}
export { EASE };