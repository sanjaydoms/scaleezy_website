import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef(null);

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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-warm-white)]/92 backdrop-blur-md border-b border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center h-full">
          <Link to="/" className="flex items-center gap-2 group h-full py-3.5" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="/assets/logo.png" 
              alt="Scaleezy Logo" 
              width="180"
              height="28"
              decoding="async"
              className="h-[26px] sm:h-[30px] md:h-[32px] w-auto object-contain group-hover:opacity-90 transition-opacity" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-medium">
          {[
            { label: 'Home', path: '/' },
            { label: 'About Scaleezy', path: '/about-scaleezy' },
            { label: 'How It Works', path: '/how-it-works' },
            { label: 'Modules', path: '/modules' },
            { label: 'Solutions', path: '/solutions' },
            { label: 'Blogs', path: '/blogs' },
          ].map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? 'text-[var(--color-primary)] font-semibold'
                    : 'text-[var(--color-charcoal)]/80 hover:text-[var(--color-primary)]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-primary)] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/book-a-demo" className="bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-all shadow-md hover:shadow-lg hover:scale-102 active:scale-98">
            Book a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="lg:hidden p-2.5 rounded-lg text-[var(--color-primary)] hover:bg-black/5 active:scale-95 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Full-Screen Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 4.5rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed top-18 sm:top-20 left-0 right-0 w-full bg-[var(--color-warm-white)] border-b border-black/10 shadow-2xl flex flex-col justify-between py-6 px-6 overflow-y-auto"
          >
            <nav aria-label="Mobile" className="flex flex-col space-y-1">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Scaleezy', path: '/about-scaleezy' },
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Modules', path: '/modules' },
                { label: 'Solutions', path: '/solutions' },
                { label: 'Blogs', path: '/blogs' },
              ].map((item, idx) => {
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl py-3.5 px-4 rounded-xl transition-colors border-b border-gray-100 last:border-b-0 ${
                      isActive 
                        ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold'
                        : 'text-[var(--color-charcoal)] hover:bg-black/5 hover:text-[var(--color-primary)] font-medium'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 pb-4">
              <Link
                to="/book-a-demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block bg-[var(--color-primary)] text-white text-center py-4 rounded-full text-base font-semibold shadow-xl active:scale-98 transition-all"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
