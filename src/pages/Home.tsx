import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import styles from './Home.module.css';

const PHOTO_BASE =
  'https://ho516c37no6nnbga.public.blob.vercel-storage.com/Quest/QuestBooth/Photos/QuestBooth_';

const photo = (n: number) => `${PHOTO_BASE}${n}.jpeg`;

const photos = Array.from({ length: 12 }, (_, i) => ({
  src: photo(i + 1),
  alt: `QuestBooth photo booth setup at a UK event ${i + 1}`,
}));

/**
 * Tile sizes are chosen so the bento tiles perfectly at every breakpoint —
 * see the grid rules in Home.module.css. Order matters.
 */
const featured = [
  { photo: photos[0], size: 'feature' },
  { photo: photos[4], size: 'wide' },
  { photo: photos[1], size: 'small' },
  { photo: photos[2], size: 'small' },
  { photo: photos[7], size: 'wide' },
  { photo: photos[3], size: 'wide' },
] as const;

const services = [
  {
    num: '01',
    name: 'Drop-Off Digital',
    href: '/pricing#drop-off',
    price: '199',
    copy: 'We deliver, set up, and leave you in control. Perfect for intimate gatherings where you want a DIY vibe.',
  },
  {
    num: '02',
    name: 'Manned Digital',
    href: '/pricing#manned-digital',
    price: '349',
    featured: true,
    copy: 'Our team runs the show while you enjoy the party. Full service with professional lighting and premium props.',
  },
  {
    num: '03',
    name: 'Manned + Prints',
    href: '/pricing#manned-prints',
    price: '449',
    copy: 'Everything above, plus instant prints your guests take home. The complete photo booth experience.',
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
  const heroBg = useParallax<HTMLDivElement>(0.18);
  const aboutImg = useParallax<HTMLImageElement>(0.06);

  return (
    <main className={styles.main} id="main">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <div ref={heroBg} className={styles.heroMediaInner}>
            <img src={photo(6)} alt="" fetchPriority="high" />
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
                <div key={`${slide}-${idx}`} className={styles.galleryItem}>
                  <img src={p.src} alt={slide === 0 ? p.alt : ''} loading="lazy" />
                </div>
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
                src={photo(9)}
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
            {featured.map((tile, idx) => (
              <figure key={idx} className={`${styles.tile} ${styles[tile.size]}`}>
                <img src={tile.photo.src} alt={tile.photo.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Three ways to bring the fun</h2>

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
                <div className={styles.servicePrice}>
                  <span>From</span>
                  <strong>£{service.price}</strong>
                </div>
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
          <img src={photo(5)} alt="" loading="lazy" />
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
    </main>
  );
};

export default Home;
