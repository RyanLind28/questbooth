import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import { photos } from '../data/photos';
import { strips } from '../data/strips';
import { useSeo } from '../hooks/useSeo';
import styles from './Gallery.module.css';

const Gallery = () => {
  useSeo({
    title: 'Photo Booth Gallery | QuestBooth Hampshire',
    description:
      'Photos from real events across Hampshire. Sequin walls, themed backdrops, prop tables and our booths set up and ready to go.',
    path: '/gallery',
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openStrip, setOpenStrip] = useState<number | null>(null);

  return (
    <main className={styles.main} id="main">
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroRow}>
            <div>
              <h1>
                Our <span className="text-gold">gallery</span>
              </h1>
              <p className={styles.heroSub}>
                Backdrops, props and booths from real events. Tap any photo to see it
                full size.
              </p>
            </div>

            {/* Guests land here looking for their own night's photos. */}
            <aside className={styles.guestNote}>
              <h2>Looking for your event photos?</h2>
              <p>
                The person who booked gets a link to every photo from the night. Ask
                them for it, or <Link to="/booking">get in touch</Link> and we'll dig
                it out.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.grid}>
        <div className="container">
          <ul className={styles.tiles}>
            {photos.map((photo, idx) => (
              <li key={photo.name}>
                <button
                  type="button"
                  className={styles.tile}
                  onClick={() => setOpenIndex(idx)}
                  aria-label={`Open photo ${idx + 1} of ${photos.length}: ${photo.alt}`}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.strips}>
        <div className="container">
          <h2>Strips from the booth</h2>
          <p className={styles.stripsLede}>
            What guests walk away with. Every layout is built to match the event.
          </p>

          <ul className={styles.stripGrid}>
            {strips.map((strip, idx) => (
              <li key={strip.name}>
                <button
                  type="button"
                  className={styles.strip}
                  onClick={() => setOpenStrip(idx)}
                  aria-label={`Open print strip ${idx + 1} of ${strips.length}`}
                >
                  <img src={strip.src} alt={strip.alt} loading="lazy" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Like what you see?</h2>
            <p>Tell us about your event and we'll put a booth in the room.</p>
            <Link to="/booking" className="btn btn--primary btn--large">
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Lightbox
        photos={photos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />

      <Lightbox
        photos={strips}
        index={openStrip}
        onClose={() => setOpenStrip(null)}
        onIndexChange={setOpenStrip}
        itemLabel="Print strip"
      />
    </main>
  );
};

export default Gallery;
