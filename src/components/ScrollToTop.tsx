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

    // Scroll mapping for clean URLs
    let targetId = '';
    if (pathname === '/how-it-works') targetId = 'journey';
    else if (pathname === '/industries') targetId = 'industries';
    else if (pathname === '/stories') targetId = 'stories';
    else if (pathname === '/platform') targetId = 'platform';

    if (targetId) {
      const frame = window.requestAnimationFrame(() => {
        // Use a timeout to allow components to mount and render fully
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    // Default to top of the page
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [hash, pathname]);

  return null;
}