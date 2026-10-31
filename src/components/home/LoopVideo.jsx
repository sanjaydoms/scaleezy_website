import React, { useEffect, useRef } from 'react';

// A muted looping clip that stays on its poster frame when the visitor asks for reduced motion
export default function LoopVideo({ src, poster, label, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
