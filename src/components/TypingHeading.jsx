import React, { useState, useEffect } from 'react';

export default function TypingHeading({
  line1 = 'Total commerce,',
  line1Class = 'font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] block text-[var(--color-primary)]',
  line2Prefix = 'Totally ',
  line2Words = ['different.', 'synchronized.', 'connected.', 'automated.'],
  line2Class = 'font-sans font-bold tracking-tighter block text-emerald-600',
  line2MinHeight = 'min-h-[1.2em]',
  badgeClass = '',
  wordClass = '',
  className = '',
  align = 'center',
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseDuration = 2600,
  pauseEmptyDuration = 280,
  seoText = 'Total commerce, Totally different.',
  showCursor = true,
  cursorClassName = 'bg-emerald-700',
  loop = true
}) {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [wordIndex, setWordIndex] = useState(0);
  // Pre-fill first word so page renders with complete content and zero layout shift
  const [displayedWord, setDisplayedWord] = useState(() => (line2Words && line2Words.length > 0 ? line2Words[0] : ''));
  const [phase, setPhase] = useState('pausing_full');

  useEffect(() => {
    if (!line2Words || line2Words.length === 0 || reduceMotion) return;

    const currentTarget = line2Words[wordIndex % line2Words.length] || '';

    if (phase === 'pausing_full') {
      if (!loop && wordIndex === line2Words.length - 1) return;
      const timer = setTimeout(() => {
        setPhase('deleting');
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (phase === 'deleting') {
      if (displayedWord.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedWord(prev => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase('pausing_empty');
        }, 40);
        return () => clearTimeout(timer);
      }
    }

    if (phase === 'pausing_empty') {
      const timer = setTimeout(() => {
        setWordIndex(prev => (prev + 1) % line2Words.length);
        setPhase('typing');
      }, pauseEmptyDuration);
      return () => clearTimeout(timer);
    }

    if (phase === 'typing') {
      if (displayedWord.length < currentTarget.length) {
        const timer = setTimeout(() => {
          setDisplayedWord(currentTarget.slice(0, displayedWord.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase('pausing_full');
        }, 40);
        return () => clearTimeout(timer);
      }
    }
  }, [displayedWord, phase, wordIndex, line2Words, typingSpeed, deletingSpeed, pauseDuration, pauseEmptyDuration, loop, reduceMotion]);

  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  // Wrapped lines inside the flex container must follow the same alignment as the text
  const justifyClass = align === 'left' ? 'justify-start' : align === 'right' ? 'justify-end' : 'justify-center';
  const isTypingOrDeleting = phase === 'typing' || phase === 'deleting';

  // Ensure prefix trailing whitespace is never collapsed in HTML
  const cleanPrefix = line2Prefix ? line2Prefix.trimEnd() : '';

  return (
    <h1 className={`relative ${alignClass} ${className}`} aria-label={seoText}>
      {/* Visual Animated Heading */}
      <span aria-hidden="true" className={`block ${alignClass} w-full`}>
        {/* Line 1 */}
        {line1 && (
          <span className={`block ${alignClass} ${line1Class}`}>
            {line1}
          </span>
        )}

        {/* Line 2 with guaranteed minimum height to prevent layout shift */}
        <span className={`inline-block ${line2MinHeight} w-full ${alignClass} ${line2Class}`}>
          {badgeClass ? (
            <span className={badgeClass}>
              {cleanPrefix && <span>{cleanPrefix}&nbsp;</span>}
              <span className="inline-flex items-baseline">
                <span className={wordClass}>{displayedWord || '\u00A0'}</span>
                {showCursor && (
                  <span
                    className={`inline-block w-[2.5px] sm:w-[3px] md:w-[3.5px] h-[0.82em] align-baseline ${cursorClassName} ml-1 sm:ml-1.5 rounded-xs transition-opacity ${
                      isTypingOrDeleting ? 'opacity-100' : 'animate-pulse'
                    }`}
                    aria-hidden="true"
                  />
                )}
              </span>
            </span>
          ) : (
            <span className={`inline-flex items-baseline ${justifyClass} flex-wrap`}>
              {cleanPrefix && <span>{cleanPrefix}&nbsp;</span>}
              <span className="inline-flex items-baseline">
                <span className={wordClass}>{displayedWord || '\u00A0'}</span>
                {showCursor && (
                  <span
                    className={`inline-block w-[2.5px] sm:w-[3.5px] md:w-[4px] h-[0.82em] align-baseline ${cursorClassName} ml-1 sm:ml-1.5 rounded-xs transition-opacity ${
                      isTypingOrDeleting ? 'opacity-100' : 'animate-pulse'
                    }`}
                    aria-hidden="true"
                  />
                )}
              </span>
            </span>
          )}
        </span>
      </span>

      {/* Screen Reader Full Content (Invisible to eyes, perfect for SEO & Accessibility) */}
      <span className="sr-only">{seoText}</span>
    </h1>
  );
}
