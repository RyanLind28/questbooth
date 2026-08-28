import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router does not manage scroll position. Without this, navigating
 * between pages keeps the previous page's offset, and `#hash` links change
 * the URL without moving the viewport.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }

    // The target may not be mounted on the first paint after a route change.
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      } else {
        window.scrollTo({ top: 0, left: 0 });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
