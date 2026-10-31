import React, { useState, useEffect } from 'react';

export default function TypewriterText({
  words,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseDuration = 2200,
  pauseBeforeDelete = 1800,
  className = '',
  cursorClassName = 'text-[var(--color-accent)] font-light',
  cursorChar = '|',
  showCursor = false,
  // Type through the words once and stop, so the text doesn't move forever (WCAG 2.2.2)
  loop = false
}) {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(reduceMotion && words?.length ? words[words.length - 1] : '');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0 || reduceMotion) return;

    const currentFullWord = words[currentWordIndex % words.length];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
      }, isDeleting ? 400 : pauseBeforeDelete);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting) {
      // Typing forward
      if (currentText.length < currentFullWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullWord.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Reached end of word
        if (!loop && currentWordIndex === words.length - 1) {
          return;
        }
        setIsPaused(true);
        const pauseTimer = setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, pauseDuration);
        return () => clearTimeout(pauseTimer);
      }
    } else {
      // Backspacing / Deleting
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Deleted completely, move to next word
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length);
        setIsPaused(true);
      }
    }
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration, pauseBeforeDelete, loop, reduceMotion]);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span>{currentText}</span>
      {showCursor && (
        <span className={`inline-block animate-pulse ml-0.5 select-none ${cursorClassName}`}>
          {cursorChar}
        </span>
      )}
    </span>
  );
}
