import { useCallback, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Photo } from '../data/photos';
import styles from './Lightbox.module.css';

type Props = {
  photos: Photo[];
  /** index of the open photo, or null when the lightbox is closed */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

/** how many photos either side of the open one to warm the browser cache with */
const PRELOAD_RADIUS = 1;

/** a horizontal drag has to beat this many px to count as a swipe */
const SWIPE_THRESHOLD = 50;

/**
 * Full-screen photo viewer. Shared by the gallery page, the home bento grid
 * and the home marquee. Each of those only has to track which index is open.
 *
 * Navigation wraps at both ends, so there is no dead "next" button on the last
 * photo. Arrow keys and swipes do the same thing as the on-screen chevrons.
 */
const Lightbox = ({ photos, index, onClose, onIndexChange }: Props) => {
  const isOpen = index !== null;
  const overlay = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  // the element that was focused before we opened, so we can hand focus back
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  const step = useCallback(
    (delta: number) => {
      if (index === null || photos.length === 0) return;
      // + photos.length keeps the modulo positive when stepping back from 0
      onIndexChange((index + delta + photos.length) % photos.length);
    },
    [index, photos.length, onIndexChange]
  );

  // Keyboard: arrows step, Esc closes, Tab is kept inside the overlay.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        step(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        step(-1);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'Tab') {
        const focusable = overlay.current?.querySelectorAll<HTMLElement>('button');
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, step, onClose]);

  // Lock the page behind the overlay, and move focus in and back out again.
  useEffect(() => {
    if (!isOpen) return;

    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    // focus the dialog itself rather than a control, so the first Tab lands
    // on the close button instead of skipping past it
    overlay.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      restoreFocusTo.current?.focus();
    };
  }, [isOpen]);

  // Warm the neighbours so stepping through doesn't flash an empty frame.
  useEffect(() => {
    if (index === null) return;
    for (let offset = -PRELOAD_RADIUS; offset <= PRELOAD_RADIUS; offset++) {
      if (offset === 0) continue;
      const neighbour = photos[(index + offset + photos.length) % photos.length];
      if (neighbour) new Image().src = neighbour.src;
    }
  }, [index, photos]);

  if (index === null) return null;

  const photo = photos[index];
  if (!photo) return null;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const travelled = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(travelled) < SWIPE_THRESHOLD) return;
    // drag left (negative) reveals the next photo
    step(travelled < 0 ? 1 : -1);
  };

  return (
    <div
      ref={overlay}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}`}
      tabIndex={-1}
      // a click that lands on the overlay itself, not on the figure or a
      // control inside it, is a click on the backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>

      <button
        type="button"
        className={`${styles.nav} ${styles.prev}`}
        onClick={() => step(-1)}
        aria-label="Previous photo"
      >
        <ChevronLeft size={26} />
      </button>

      <figure className={styles.figure}>
        <img key={photo.src} src={photo.src} alt={photo.alt} />
        <figcaption>
          <span className={styles.caption}>{photo.alt}</span>
          <span className={styles.counter}>
            {index + 1} / {photos.length}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        className={`${styles.nav} ${styles.next}`}
        onClick={() => step(1)}
        aria-label="Next photo"
      >
        <ChevronRight size={26} />
      </button>
    </div>
  );
};

export default Lightbox;
