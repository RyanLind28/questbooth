import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { useInView } from '../hooks/useInView';
import { useSeo } from '../hooks/useSeo';
import Lightbox from '../components/Lightbox';
import PackageCard from '../components/PackageCard';
import { packages } from '../data/packages';
import { photos, photoByName } from '../data/photos';
import { strips, stripByName } from '../data/strips';
import styles from './Home.module.css';

const steps = [
  {
    title: 'Tell us about your event',
    copy: 'Fill in our quick form with your date, venue, and package preference.',
  },
  {
    title: 'Get your quote',
    copy: "We'll respond within 24 hours with a personalised quote.",
  },
  {
    title: 'We handle the rest',
    copy: "Confirm your booking, then relax. We'll be there early to set up.",
  },
];

/**
 * Real customer reviews only. Add them here, from Google or Facebook, with
 * the reviewer's permission, and the section renders itself. While this is
 * empty the whole section is hidden, because an invented testimonial is worse
 * than none (and fake reviews are illegal in the UK).
 */
const testimonials: { quote: string; name: string; event: string }[] = [];


/** One strip per event design, fanned out in the about section. */
const stackStrips = [
  'QuestBooth_Booth_Photo_1',
  'QuestBooth_Booth_Photo_6',
  'QuestBooth_Booth_Photo_9',
  'QuestBooth_Booth_Photo_14',
].map(stripByName);

const Home = () => {
  useSeo({
    title: 'Photo Booth Hire Southampton & Hampshire | QuestBooth',
    description:
      'Family-run photo booth hire across Southampton, Fareham, Portsmouth and Hampshire. Manned digital booths and instant prints, with props, backdrops and professional lighting.',
    path: '/',
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openStrip, setOpenStrip] = useState<number | null>(null);
  const heroBg = useParallax<HTMLDivElement>(0.18);
  const [stackRef, stackInView] = useInView<HTMLDivElement>();

  return (
    <main className={styles.main} id="main">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <div ref={heroBg} className={styles.heroMediaInner}>
            <img src={photoByName('QuestBooth_18').src} alt="" fetchPriority="high" />
          </div>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroLeft}>
            <h1>
              Say{' '}
              <span className={styles.cheese}>
                <span className={styles.cheeseText}>Cheese</span>
              </span>
            </h1>
            <p className={styles.heroLede}>
              Premium photo booths for weddings, parties &amp; events across
              Hampshire. Family-run, professionally delivered.
            </p>
            <div className={styles.heroActions}>
              <Link to="/booking" className="btn btn--primary btn--large">
                Get a Free Quote
                <ArrowRight size={20} />
              </Link>
              <Link to="/pricing" className="btn btn--secondary btn--large">
                See Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Marquee Style */}
      <section className={styles.gallery} aria-label="Photo gallery">
        <div className={styles.galleryTrack}>
          {[0, 1].map((slide) => (
            <div
              key={slide}
              className={styles.gallerySlide}
              aria-hidden={slide === 1 ? 'true' : undefined}
            >
              {photos.map((p, idx) => (
                <button
                  type="button"
                  key={`${slide}-${idx}`}
                  className={styles.galleryItem}
                  onClick={() => setOpenIndex(idx)}
                  /* the duplicated track is only there to make the loop
                     seamless. It stays clickable but out of the tab order */
                  tabIndex={slide === 1 ? -1 : undefined}
                  aria-label={slide === 0 ? `Open photo ${idx + 1}: ${p.alt}` : undefined}
                >
                  <img src={p.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div
              ref={stackRef}
              className={`${styles.stack} ${stackInView ? styles.stackIn : ''}`}
            >
              {stackStrips.map((strip, idx) => (
                <img
                  key={strip.name}
                  className={styles.stackStrip}
                  style={{ '--i': idx } as React.CSSProperties}
                  src={strip.src}
                  alt={idx === 0 ? strip.alt : ''}
                  aria-hidden={idx === 0 ? undefined : true}
                  loading="lazy"
                />
              ))}
            </div>
            <div className={styles.aboutBody}>
              <h2>A family business that genuinely cares about your event</h2>
              <p>
                We started QuestBooth because we believe every celebration deserves
                to be remembered. Not with awkward posed photos, but with real moments
                of joy, laughter, and maybe a few silly hats.
              </p>
              <p>
                Every event we do, we treat like it's our own family's party.
                That means premium equipment, meticulous setup, and a genuine
                passion for making your guests smile.
              </p>
              <Link to="/booking" className="btn--ghost">
                Talk to us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Print strips */}
      <section className={styles.strips}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Making memories</h2>
        </div>

        <div className={styles.stripsRow}>
          {strips.map((strip, idx) => (
            <button
              type="button"
              key={strip.name}
              className={styles.strip}
              onClick={() => setOpenStrip(idx)}
              aria-label={`Open print strip ${idx + 1} of ${strips.length}`}
            >
              <img src={strip.src} alt={strip.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Two ways to bring the fun</h2>

          <div className={styles.packagesGrid}>
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} headingLevel={3} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleCenter}`}>
            Booking is simple
          </h2>

          <ol className={styles.processSteps}>
            {steps.map((step) => (
              <li key={step.title} className={styles.step}>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.sectionTitle}>From our happy customers</h2>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((item) => (
              <blockquote key={item.name} className={styles.testimonial}>
                <p>"{item.quote}"</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.event}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaMedia} aria-hidden="true">
          <img src={photoByName('QuestBooth_16').src} alt="" loading="lazy" />
        </div>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to make some memories?</h2>
            <p>
              Get in touch today for a free, no-obligation quote.
              We'd love to be part of your celebration.
            </p>
            <Link to="/booking" className="btn btn--primary btn--large">
              Start Your Booking
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

export default Home;
