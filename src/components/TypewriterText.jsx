import React, { useState, useEffect } from 'react';

export default function TypewriterText({
  words = [],
  typingSpeed = 65,
  deletingSpeed = 30,
  pauseDuration = 2200,
  pauseEmptyDuration = 320,
  className = '',
  cursorClassName = 'text-emerald-700 font-bold',
  cursorChar = '|',
  showCursor = true,
  loop = true
}) {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [wordIndex, setWordIndex] = useState(0);
  // Pre-fill with the first word so initial render has zero layout shift
  const [currentText, setCurrentText] = useState(() => (words && words.length > 0 ? words[0] : ''));
  const [phase, setPhase] = useState('pausing_full');

  useEffect(() => {
    if (!words || words.length === 0 || reduceMotion) return;

    const currentWord = words[wordIndex % words.length] || '';

    if (phase === 'pausing_full') {
      if (!loop && wordIndex === words.length - 1) return;
      const timer = setTimeout(() => {
        setPhase('deleting');
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (phase === 'deleting') {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
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
        setWordIndex(prev => (prev + 1) % words.length);
        setPhase('typing');
      }, pauseEmptyDuration);
      return () => clearTimeout(timer);
    }

    if (phase === 'typing') {
      if (currentText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase('pausing_full');
        }, 40);
        return () => clearTimeout(timer);
      }
    }
  }, [currentText, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, pauseEmptyDuration, loop, reduceMotion]);

  const isBlinking = phase === 'pausing_full' || phase === 'pausing_empty';

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span>{currentText || '\u00A0'}</span>
      {showCursor && (
        <span
          className={`inline-block ml-0.5 select-none transition-opacity ${cursorClassName} ${
            isBlinking ? 'animate-pulse' : 'opacity-100'
          }`}
          aria-hidden="true"
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}
