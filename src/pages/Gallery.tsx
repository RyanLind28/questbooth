import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import { photos } from '../data/photos';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className={styles.main} id="main">
      <section className={styles.hero}>
        <div className="container">
          <h1>
            Our <span className="text-gold">gallery</span>
          </h1>
          <p className={styles.heroSub}>
            Backdrops, props and booths from real events. Tap any photo to see it full size.
          </p>
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
    </main>
  );
};

export default Gallery;
