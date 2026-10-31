import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const NAV = [
  { label: 'About', path: '/about-scaleezy' },
  { label: 'How it works', path: '/how-it-works' },
  { label: 'Modules', path: '/modules' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Blog', path: '/blogs' },
];

const DEFAULT_CHAPTER = { bg: 'var(--color-warm-white)', ink: 'dark', logo: 'brand' };

// The bar takes the colour of the chapter beneath it. Sections opt in with
// data-chapter-bg (a colour), data-chapter-ink ("light" | "dark") and optionally data-chapter-logo ("mono").
function useChapterUnderHeader(pathname) {
  const [chapter, setChapter] = useState(DEFAULT_CHAPTER);

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const probe = 40;
      const hit = [...document.querySelectorAll('[data-chapter-bg]')].find(el => {
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom > probe;
      });
      setChapter(hit
        ? { bg: hit.dataset.chapterBg, ink: hit.dataset.chapterInk || 'dark', logo: hit.dataset.chapterLogo || (hit.dataset.chapterInk === 'light' ? 'light' : 'brand') }
        : DEFAULT_CHAPTER);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(read); };
    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    const settle = setTimeout(read, 400);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      clearTimeout(settle);
    };
  }, [pathname]);

  return chapter;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const chapter = useChapterUnderHeader(location.pathname);
  const inkColor = chapter.ink === 'light' ? 'var(--color-paper)' : 'var(--color-primary)';
  const logoFilter = chapter.logo === 'light' ? 'brightness(0) invert(1)' : chapter.logo === 'mono' ? 'brightness(0)' : 'none';

  // Escape closes the mobile menu and returns focus to its button
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[background-color,color] duration-300"
      style={{ backgroundColor: isMobileMenuOpen ? 'var(--color-warm-white)' : chapter.bg, color: isMobileMenuOpen ? 'var(--color-primary)' : inkColor }}
    >
      <div className="wrap h-18 sm:h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center h-full py-3.5" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/assets/logo.png"
            alt="Scaleezy"
            width="180"
            height="28"
            decoding="async"
            className="h-[26px] sm:h-[30px] w-auto object-contain transition-[filter] duration-300"
            style={{ filter: isMobileMenuOpen ? 'none' : logoFilter }}
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-8 t-small font-medium">
          {NAV.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={isActive(link.path) ? 'page' : undefined}
              className={`py-1 underline-offset-[6px] decoration-2 transition-[text-underline-offset] duration-150 hover:underline ${isActive(link.path) ? 'underline' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/book-a-demo"
            className="btn"
            style={chapter.bg.includes('accent') ? { '--btn-bg': 'var(--color-primary)', '--btn-ink': 'var(--color-accent)' } : undefined}
          >
            Book a demo
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          className="lg:hidden p-2.5 -mr-2.5 active:scale-95 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden fixed top-18 sm:top-20 left-0 right-0 bottom-0 w-full bg-[var(--color-warm-white)] text-[var(--color-primary)] flex flex-col justify-between wrap py-6 overflow-y-auto"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                  className={`t-lead py-3 ${isActive(item.path) ? 'underline underline-offset-[6px] decoration-2' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              to="/book-a-demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn justify-center w-full"
            >
              Book a demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
