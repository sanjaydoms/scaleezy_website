import React, { useState, useEffect } from 'react';

export default function TypingHeading({
  line1 = 'Total commerce,',
  line1Class = 'font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] block text-[var(--color-primary)]',
  line2Prefix = 'Totally ',
  line2Words = ['different.', 'synchronized.', 'connected.', 'automated.'],
  line2Class = 'font-sans font-bold tracking-tighter block text-emerald-600',
  badgeClass = '',
  wordClass = '',
  className = '',
  align = 'center',
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseDuration = 2600,
  pauseEmptyDuration = 280,
  seoText = 'Total commerce, Totally different.'
}) {
  // Start with the first word already pre-filled so the page is fully styled on first render with ZERO layout shift
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(line2Words[0] || '');
  const [status, setStatus] = useState('paused_full');
  // Cycle through the words once and settle back on the first, so the heading doesn't move forever (WCAG 2.2.2)
  const [hasCycled, setHasCycled] = useState(false);
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Serialize words list so parent re-renders don't cancel active timers
  const wordsSerialized = (line2Words || []).join('\u0000');

  useEffect(() => {
    if (!line2Words || line2Words.length === 0 || reduceMotion) return;

    const currentTarget = line2Words[wordIndex % line2Words.length];
    if (!currentTarget) return;

    if (status === 'paused_full') {
      if (hasCycled) return;
      const timer = setTimeout(() => {
        setStatus('deleting');
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (status === 'deleting') {
      if (displayedWord.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedWord(prev => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setStatus('paused_empty');
      }
    }

    if (status === 'paused_empty') {
      const timer = setTimeout(() => {
        const nextIndex = (wordIndex + 1) % line2Words.length;
        if (nextIndex === 0) setHasCycled(true);
        setWordIndex(nextIndex);
        setStatus('typing');
      }, pauseEmptyDuration);
      return () => clearTimeout(timer);
    }

    if (status === 'typing') {
      if (displayedWord.length < currentTarget.length) {
        const timer = setTimeout(() => {
          setDisplayedWord(currentTarget.slice(0, displayedWord.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setStatus('paused_full');
      }
    }
  }, [displayedWord, status, wordIndex, wordsSerialized, typingSpeed, deletingSpeed, pauseDuration, pauseEmptyDuration, hasCycled, reduceMotion]);

  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

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
        <span className={`inline-block min-h-[1.2em] w-full ${alignClass} ${line2Class}`}>
          {badgeClass ? (
            <span className={badgeClass}>
              {line2Prefix && <span>{line2Prefix}</span>}
              <span className={wordClass}>{displayedWord || '\u00A0'}</span>
            </span>
          ) : (
            <>
              {line2Prefix && <span>{line2Prefix}</span>}
              <span className={wordClass}>{displayedWord || '\u00A0'}</span>
            </>
          )}
        </span>
      </span>

      {/* Screen Reader Full Content (Invisible to eyes, perfect for SEO & Accessibility) */}
      <span className="sr-only">{seoText}</span>
    </h1>
  );
}
