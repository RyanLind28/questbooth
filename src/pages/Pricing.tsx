import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import { packages } from '../data/packages';
import { useSeo, useJsonLd } from '../hooks/useSeo';
import styles from './Pricing.module.css';

const faqs = [
  {
    q: 'How far do you travel?',
    a: 'We cover a 30 minute drive of SO31 as standard, which takes in Southampton, Fareham, Portsmouth and the surrounding area. Anywhere further afield may incur a small travel fee, so just ask.',
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
/** Marks the FAQs up so search engines and assistants can quote them directly. */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const Pricing = () => {
  useSeo({
    title: 'Photo Booth Packages & Prices | QuestBooth Hampshire',
    description:
      'Two photo booth packages: manned digital, or manned digital with instant prints in as little as 8 seconds. Props, custom templates and professional lighting included.',
    path: '/pricing',
  });

  useJsonLd('faq-schema', faqSchema);



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
              <PackageCard key={pkg.id} pkg={pkg} />
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
