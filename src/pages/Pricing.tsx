import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { photoByName } from '../data/photos';
import styles from './Pricing.module.css';

const Pricing = () => {
  const packages = [
    {
      id: 'manned-digital',
      name: 'Manned Digital',
      tagline: 'Full Service',
      image: photoByName('QuestBooth_15').src,
      imageAlt: photoByName('QuestBooth_15').alt,
      description: 'Our team runs the booth from start to finish while your guests share their photos straight to their phones.',
      features: [
        'Digital booth — photos sent straight to guests by text, WhatsApp, QR code or email',
        'Customised photo templates to match your event and colour scheme',
        'Props — a vast array of hats, masks, glasses and more',
        'Professional overhead LED lighting for a better look with no glare',
        'A member of staff on hand to help with props and anything else',
        'A link after the event to download every picture from the night',
      ],
    },
    {
      id: 'manned-prints',
      name: 'Manned Digital + Instant Prints',
      tagline: 'Complete Experience',
      image: photoByName('QuestBooth_8').src,
      imageAlt: photoByName('QuestBooth_8').alt,
      featured: true,
      description: 'Everything in our manned digital package, plus instant prints your guests take home as keepsakes.',
      features: [
        'Instant prints — the latest technology gets pictures in guests\u2019 hands in as little as 8 seconds',
        'Digital booth — photos sent straight to guests by text, WhatsApp, QR code or email',
        'Customised photo templates to match your event and colour scheme',
        'Props — a vast array of hats, masks, glasses and more',
        'Professional overhead LED lighting for a better look with no glare',
        'A member of staff on hand to help with props and anything else',
        'A link after the event to download every picture from the night',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How far do you travel?',
      a: 'We cover a 30 minute drive of SO31 as standard, which takes in Southampton, Fareham, Portsmouth and the surrounding area. Anywhere further afield may incur a small travel fee — just ask.',
    },
    {
      q: 'How much space is needed?',
      a: 'Approximately 8ft x 8ft for the complete setup. We can work with your venue to find the perfect spot.',
    },
    {
      q: 'Can photos be customised?',
      a: 'Yes. Custom branding, names, dates, and colour schemes are included at no extra cost.',
    },
    {
      q: 'How do guests get their photos?',
      a: 'Instantly via text, WhatsApp, QR code, or email. Plus a link to download every photo after the event.',
    },
    {
      q: 'What deposit is required?',
      a: '25% to secure your date, with the balance due one week before your event.',
    },
    {
      q: 'What if my plans change?',
      a: 'We understand life happens. Get in touch and we will work with you to find a solution.',
    },
  ];

  return (
    <main className={styles.main} id="main">
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Choose your <span className="text-gold">package</span></h1>
          <p className={styles.heroSub}>
            Available within a 30 minute drive of SO31. Travelling further may incur a
            small travel fee.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className={styles.packages}>
        <div className="container">
          <div className={styles.packagesGrid}>
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                id={pkg.id}
                className={`${styles.package} ${pkg.featured ? styles.featured : ''}`}
              >
                {pkg.featured && <div className={styles.badge}>Most Popular</div>}

                <div className={styles.packageMedia}>
                  <img src={pkg.image} alt={pkg.imageAlt} loading="lazy" />
                </div>

                <div className={styles.packageHeader}>
                  <span className={styles.packageTag}>{pkg.tagline}</span>
                  <h2>{pkg.name}</h2>
                  <p>{pkg.description}</p>
                </div>

                <ul className={styles.features}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/booking?package=${pkg.id}`}
                  className={`btn btn--block ${
                    pkg.featured ? 'btn--primary' : 'btn--secondary'
                  }`}
                >
                  Select Package
                  <ArrowRight size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className={styles.addons}>
        <div className="container container--narrow">
          <h2 className={styles.sectionTitle}>Enhance your experience</h2>
          <div className={styles.addonsGrid}>
            <div className={styles.addon}>
              <h3>Extra Hour</h3>
            </div>
            <div className={styles.addon}>
              <h3>Custom Backdrop</h3>
            </div>
            <div className={styles.addon}>
              <h3>Guest Book</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container container--narrow">
          <h2 className={styles.sectionTitle}>Common questions</h2>
          <div className={styles.faqGrid}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={styles.faqItem}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Not sure which to choose?</h2>
            <p>Get in touch and we'll help you find the perfect package for your event.</p>
            <Link to="/booking" className="btn btn--primary btn--large">
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
