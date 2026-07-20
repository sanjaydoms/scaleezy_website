import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // If it's a hash anchor, scroll to it
    if (hash) {
      const targetId = decodeURIComponent(hash.slice(1));
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      });
      return () => window.cancelAnimationFrame(frame);
    }

    // Default to top of the page on route transition
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [hash, pathname]);

  return null;
}