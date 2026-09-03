import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a flag that flips true once the element scrolls into view,
 * then stays true. For entrance animations that should play once rather than
 * replay every time you scroll past.
 *
 * @param margin rootMargin, to start the animation slightly before the element
 *               reaches the viewport edge
 */
export const useInView = <T extends HTMLElement>(
  margin = '0px 0px -15% 0px'
): [React.RefObject<T | null>, boolean] => {
  const ref = useRef<T>(null);
  // no IntersectionObserver means no animation, so start at the final state
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return [ref, inView];
};
