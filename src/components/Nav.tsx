import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { triggerBookDemo } from './BookDemoModal';
const LINKS = [
{
  label: 'Platform',
  href: '/#platform'
},
{
  label: 'How it works',
  href: '/#journey'
},
{
  label: 'Industries',
  href: '/#industries'
},
{
  label: 'Stories',
  href: '/#stories'
}];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isLight = scrolled || !isHome;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  const textClassName = isLight ? 'text-forest/80' : 'text-cream/90';
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${isLight ? 'border-b border-forest/10 bg-cream/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        
        <Link
          to="/"
          className={`text-2xl font-semibold tracking-tight transition-colors duration-700 ${isLight ? 'text-forest' : 'text-cream'}`}>
          
          scale<span className="text-lime-dark">ezy</span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {LINKS.map((link) =>
            <li key={link.label}>
                <a
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-lime-dark ${textClassName}`}>
                
                  {link.label}
                </a>
              </li>
            )}
          </ul>
          <button
            onClick={triggerBookDemo}
            className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition-colors duration-300 ${isLight ? 'border-forest/30 text-forest hover:bg-forest hover:text-cream' : 'border-cream/40 text-cream hover:bg-cream hover:text-forest'}`}>
            
            Book Demo
            <ArrowRightIcon
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            
          </button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`md:hidden ${isLight ? 'text-forest' : 'text-cream'}`}>
          
          {open ?
          <XIcon className="h-6 w-6" /> :

          <MenuIcon className="h-6 w-6" />
          }
        </button>
      </nav>
      {open &&
      <motion.div
        initial={{
          opacity: 0,
          height: 0
        }}
        animate={{
          opacity: 1,
          height: 'auto'
        }}
        className="overflow-hidden bg-cream md:hidden">
        
          <ul className="flex flex-col px-6 pb-6">
            {LINKS.map((link) =>
          <li key={link.label}>
                <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-forest/10 py-3.5 text-forest">
              
                  {link.label}
                </a>
              </li>
          )}
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  triggerBookDemo();
                }}
                className="mt-5 block w-full rounded-full bg-forest px-5 py-3 text-center text-sm font-medium text-cream">
                
                Book Demo
              </button>
            </li>
          </ul>
        </motion.div>
      }
    </motion.header>);

}