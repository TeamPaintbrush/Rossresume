import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-based animations
 * Detects when elements enter the viewport and adds animation classes
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally stop observing after first reveal
          if (options.once !== false) {
            observer.unobserve(element);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isVisible];
};

/**
 * Helper function to add stagger delays to multiple elements
 */
export const getStaggerDelay = (index, baseDelay = 0.1) => {
  return `${index * baseDelay}s`;
};

// Default export for convenience
export default useScrollReveal;
