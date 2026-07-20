import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRightIcon,
  MenuIcon,
  XIcon,
  ChevronDown,
  PackageSearch,
  Users,
  Megaphone,
  Sparkles,
  Boxes,
  Truck
} from 'lucide-react';
import { triggerBookDemo } from './BookDemoModal';

const MODULES = [
  { id: 'inventory', name: 'Inventory', description: 'Live stock intelligence', icon: PackageSearch },
  { id: 'crm', name: 'CRM', description: 'Know every customer', icon: Users },
  { id: 'marketing', name: 'Marketing', description: 'Personalised outreach', icon: Megaphone },
  { id: 'try-on-studio', name: 'Try-On Studio', description: 'AI virtual try-on', icon: Sparkles },
  { id: 'product-management', name: 'Product Management', description: 'Unified data model', icon: Boxes },
  { id: 'logistics', name: 'Logistics', description: 'Streamlined fulfilment', icon: Truck },
];

const LINKS = [
  { label: 'How it works', href: '/#journey' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Stories', href: '/#stories' }
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileModulesOpen, setMobileModulesOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isLight = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileModulesOpen(false);
  }, [pathname]);

  const textClassName = isLight ? 'text-forest/80' : 'text-cream/90';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${isLight ? 'border-b border-forest/10 bg-cream/95 backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className={`text-2xl font-semibold tracking-tight transition-colors duration-700 ${isLight ? 'text-forest' : 'text-cream'}`}>
          scale<span className="text-lime-dark">ezy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {/* Modules Dropdown Trigger */}
            <li 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1.5 text-sm tracking-wide transition-colors duration-300 hover:text-lime-dark focus:outline-none py-1 ${textClassName}`}>
                Modules
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] rounded-2xl border border-forest/10 bg-white p-4 shadow-xl grid grid-cols-2 gap-1.5 z-[100]"
                  >
                    {MODULES.map((module) => {
                      const Icon = module.icon;
                      return (
                        <Link
                          key={module.id}
                          to={`/platform/${module.id}`}
                          className="flex items-start gap-3 rounded-xl p-3 hover:bg-forest/5 transition-colors duration-300 text-left"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime/10 text-forest flex-shrink-0">
                            <Icon className="h-4.5 w-4.5 text-forest" />
                          </span>
                          <div>
                            <h4 className="text-sm font-semibold text-forest leading-none">{module.name}</h4>
                            <p className="mt-1.5 text-[11px] text-forest/60 leading-tight">{module.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={`text-sm tracking-wide transition-colors duration-300 hover:text-lime-dark ${textClassName}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={triggerBookDemo}
            className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition-colors duration-300 ${isLight ? 'border-forest/30 text-forest hover:bg-forest hover:text-cream' : 'border-cream/40 text-cream hover:bg-cream hover:text-forest'}`}
          >
            Book Demo
            <ArrowRightIcon aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`md:hidden ${isLight ? 'text-forest' : 'text-cream'}`}
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="overflow-hidden bg-cream md:hidden"
        >
          <ul className="flex flex-col px-6 pb-6">
            {/* Mobile Modules Dropdown */}
            <li>
              <button
                onClick={() => setMobileModulesOpen(!mobileModulesOpen)}
                className="flex w-full items-center justify-between border-b border-forest/10 py-3.5 text-forest text-left focus:outline-none"
              >
                <span className="text-sm tracking-wide font-medium">Modules</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileModulesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileModulesOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-forest/5 pl-4 pr-2 py-2 rounded-xl mt-2 space-y-1"
                  >
                    {MODULES.map((module) => {
                      const Icon = module.icon;
                      return (
                        <li key={module.id}>
                          <Link
                            to={`/platform/${module.id}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-forest/5 text-forest"
                          >
                            <Icon className="h-4 w-4 text-forest/70" />
                            <span className="text-sm font-medium">{module.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-forest/10 py-3.5 text-sm tracking-wide text-forest"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  triggerBookDemo();
                }}
                className="mt-5 block w-full rounded-full bg-forest px-5 py-3 text-center text-sm font-medium text-cream"
              >
                Book Demo
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}