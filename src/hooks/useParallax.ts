import { useEffect, useRef } from 'react';

/**
 * Translates the returned element vertically as it scrolls through the
 * viewport. A CSS `prefers-reduced-motion` block cannot stop a JS transform,
 * so the check lives here and the hook no-ops when motion is reduced.
 *
 * @param speed fraction of scroll distance to offset by (0.2 = subtle)
 */
export const useParallax = <T extends HTMLElement>(speed = 0.25) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // distance of the element's centre from the viewport centre
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    const start = () => {
      if (motionQuery.matches) {
        el.style.transform = '';
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        return;
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      update();
    };

    start();
    motionQuery.addEventListener('change', start);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      motionQuery.removeEventListener('change', start);
    };
  }, [speed]);

  return ref;
};
