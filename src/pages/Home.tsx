import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import Lightbox from '../components/Lightbox';
import { photos, photoByName } from '../data/photos';
import styles from './Home.module.css';

/**
 * Tile sizes are chosen so the bento tiles perfectly at every breakpoint —
 * see the grid rules in Home.module.css. Order matters.
 */
const featured = [
  { photo: photoByName('QuestBooth_1'), size: 'feature' },
  { photo: photoByName('QuestBooth_5'), size: 'wide' },
  { photo: photoByName('QuestBooth_2'), size: 'small' },
  { photo: photoByName('QuestBooth_3'), size: 'small' },
  { photo: photoByName('QuestBooth_8'), size: 'wide' },
  { photo: photoByName('QuestBooth_4'), size: 'wide' },
] as const;

const services = [
  {
    num: '01',
    name: 'Manned Digital',
    href: '/pricing#manned-digital',
    copy: 'A member of our team runs the booth all night. Professional lighting, custom templates, a mountain of props, and photos sent straight to your guests\u2019 phones.',
  },
  {
    num: '02',
    name: 'Manned Digital + Instant Prints',
    href: '/pricing#manned-prints',
    featured: true,
    copy: 'Everything in our manned digital package, plus instant prints in as little as 8 seconds so your guests go home with the photo in their hand.',
  },
];

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

const testimonials = [
  {
    quote:
      "The booth was the highlight of our wedding reception. Our guests are still sharing photos weeks later. Couldn't recommend more highly.",
    name: 'Sarah & James',
    event: 'Wedding, Manchester',
  },
  {
    quote:
      'Professional from start to finish. The team were friendly, the equipment was top quality, and everyone had an absolute blast.',
    name: 'TechCorp Ltd',
    event: 'Corporate Event, London',
  },
  {
    quote:
      "Made my mum's 50th birthday absolutely unforgettable. So many genuine laughing moments captured. Worth every penny.",
    name: 'The Williams Family',
    event: 'Birthday Party, Birmingham',
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const heroBg = useParallax<HTMLDivElement>(0.18);
  const aboutImg = useParallax<HTMLImageElement>(0.06);

  return (
    <main className={styles.main} id="main">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <div ref={heroBg} className={styles.heroMediaInner}>
            <img src={photoByName('QuestBooth_6').src} alt="" fetchPriority="high" />
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
              Premium photo booths for weddings, parties &amp; events across the
              UK. Family-run, professionally delivered.
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

          <dl className={styles.heroStats}>
            <div>
              <dt>500+</dt>
              <dd>Events completed</dd>
            </div>
            <div>
              <dt>50k+</dt>
              <dd>Photos taken</dd>
            </div>
            <div>
              <dt>5.0</dt>
              <dd>Star reviews</dd>
            </div>
          </dl>
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
                     seamless — it stays clickable but out of the tab order */
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
            <div className={styles.aboutMedia}>
              <img
                ref={aboutImg}
                src={photoByName('QuestBooth_9').src}
                alt="A QuestBooth photo booth set up on a red carpet at a venue"
                loading="lazy"
              />
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

      {/* Featured Photos Grid */}
      <section className={styles.featured}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Moments we've captured</h2>
          <div className={styles.bento}>
            {featured.map((tile) => (
              <button
                type="button"
                key={tile.photo.name}
                className={`${styles.tile} ${styles[tile.size]}`}
                /* index into the whole set, so opening a bento tile lets you
                   browse every photo rather than just these six */
                onClick={() =>
                  setOpenIndex(photos.findIndex((p) => p.name === tile.photo.name))
                }
                aria-label={`Open photo: ${tile.photo.alt}`}
              >
                <img src={tile.photo.src} alt={tile.photo.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Two ways to bring the fun</h2>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article
                key={service.num}
                className={`${styles.service} ${
                  service.featured ? styles.serviceFeatured : ''
                }`}
              >
                {service.featured && (
                  <div className={styles.featuredBadge}>Popular</div>
                )}
                <h3>{service.name}</h3>
                <p>{service.copy}</p>
                <Link
                  to={service.href}
                  className={`btn btn--block ${
                    service.featured ? 'btn--primary' : 'btn--secondary'
                  }`}
                >
                  Choose this package
                </Link>
              </article>
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

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaMedia} aria-hidden="true">
          <img src={photoByName('QuestBooth_5').src} alt="" loading="lazy" />
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
    </main>
  );
};

export default Home;
