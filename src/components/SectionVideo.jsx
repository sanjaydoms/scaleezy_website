import React, { useRef, useEffect } from 'react';
import { BrandPatternAtelier, BrandWatermark } from './BrandPattern';

export default function SectionVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => { });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[var(--color-warm-white)] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Scaleezy Atelier Sewing & Tailoring Background Pattern */}
      <BrandPatternAtelier opacity={0.14} size={360} vignette={true} />

      {/* Architectural Brand Watermarks */}
      <BrandWatermark className="-left-32 -top-32 text-[var(--color-primary)]" opacity={0.02} size={650} />
      <BrandWatermark className="-right-32 -bottom-32 text-[var(--color-primary)] rotate-180" opacity={0.015} size={700} />

      {/* Subtle radial ambient spotlight */}
      <div className="absolute inset-0 bg-radial from-white/60 via-transparent to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center mb-8 sm:mb-12 md:mb-16">
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase bg-white/80 px-4 py-1.5 rounded-full border border-black/10 shadow-sm inline-block mb-4">
          Experience The Platform
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-primary)] leading-[1.08] tracking-tight text-balance">
          <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1">
            See Scaleezy,
          </span>
          <span className="font-sans font-bold tracking-tight block">
            in motion.
          </span>
        </h2>
      </div>

      {/* Video Player Card - Clean Rounded Edges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="relative w-full aspect-video md:h-[76vh] lg:h-[82vh] bg-black overflow-hidden origin-center rounded-2xl sm:rounded-3xl lg:rounded-[36px] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.3)] border border-black/10">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/assets/scaleezy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
