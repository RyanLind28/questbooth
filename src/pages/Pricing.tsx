import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const packages = [
    {
      id: 'drop-off',
      number: '01',
      name: 'Drop-Off Digital',
      tagline: 'Self-Service',
      description: 'We deliver and set up, you run the show. Ideal for intimate gatherings where you want full control.',
      price: '199',
      features: [
        'Professional booth delivered & set up',
        'Unlimited digital photos',
        'Easy touchscreen interface',
        'QR code instant sharing',
        'Online gallery for all guests',
      ],
    },
    {
      id: 'manned-digital',
      number: '02',
      name: 'Manned Digital',
      tagline: 'Full Service',
      description: 'Our team handles everything while you enjoy the party. The most popular choice for weddings and large events.',
      price: '349',
      featured: true,
      features: [
        'Everything in Drop-Off, plus:',
        'Dedicated on-site attendant',
        'Professional studio lighting',
        'Premium props collection',
        'Backdrop & red carpet setup',
      ],
    },
    {
      id: 'manned-prints',
      number: '03',
      name: 'Manned + Prints',
      tagline: 'Complete Experience',
      description: 'The ultimate package with instant prints your guests can take home as keepsakes.',
      price: '449',
      features: [
        'Everything in Manned, plus:',
        'Unlimited instant prints',
        'Premium 6x4" print quality',
        'Custom photo strip designs',
        'Choice of print finishes',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How far do you travel?',
      a: 'We cover most of the UK. Delivery is free within 25 miles, with a small fee for further distances.',
    },
    {
      q: 'How much space is needed?',
      a: 'Approximately 8ft x 8ft for the complete setup. We can work with your venue to find the perfect spot.',
    },
    {
      q: 'Can photos be customized?',
      a: 'Yes. Custom branding, names, dates, and colour schemes are included at no extra cost.',
    },
    {
      q: 'How do guests get their photos?',
      a: 'Instantly via text, WhatsApp, or email. Plus access to an online gallery after the event.',
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
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1>Choose your<br /><span className="text-gold">package</span></h1>
          <p className={styles.heroSub}>
            All packages include delivery, setup, and collection within 25 miles.
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

                <div className={styles.packageHeader}>
                  <span className={styles.packageNum}>{pkg.number}</span>
                  <span className={styles.packageTag}>{pkg.tagline}</span>
                  <h2>{pkg.name}</h2>
                  <p>{pkg.description}</p>
                </div>

                <div className={styles.packagePrice}>
                  <span className={styles.from}>From</span>
                  <span className={styles.amount}>
                    <span className={styles.currency}>£</span>
                    {pkg.price}
                  </span>
                  <span className={styles.period}>for 3 hours</span>
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
                  className={`btn ${pkg.featured ? 'btn--primary' : 'btn--secondary'}`}
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
          <div className={styles.addonsHeader}>
            <p className="eyebrow">Extras</p>
            <h2>Enhance your experience</h2>
          </div>
          <div className={styles.addonsGrid}>
            <div className={styles.addon}>
              <h3>Extra Hour</h3>
              <span className={styles.addonPrice}>+£75</span>
            </div>
            <div className={styles.addon}>
              <h3>Custom Backdrop</h3>
              <span className={styles.addonPrice}>+£50</span>
            </div>
            <div className={styles.addon}>
              <h3>Guest Book</h3>
              <span className={styles.addonPrice}>+£45</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container container--narrow">
          <div className={styles.faqHeader}>
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
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
