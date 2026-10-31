import React from 'react';
import { motion } from 'framer-motion';

// A full-bleed colour field. The header reads data-chapter-* to take this chapter's colours.
export function Chapter({ bg, ink = 'dark', logo, className = '', style, children, ...rest }) {
  return (
    <section
      data-chapter-bg={bg}
      data-chapter-ink={ink}
      data-chapter-logo={logo}
      className={`relative ${className}`}
      style={{ backgroundColor: bg, color: ink === 'light' ? 'var(--color-paper)' : 'var(--color-primary)', ...style }}
      {...rest}
    >
      {children}
    </section>
  );
}

// Entrance for the parts of a section: rises 24px and fades in once, staggered by `delay`.
export function Rise({ as = 'div', delay = 0, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
