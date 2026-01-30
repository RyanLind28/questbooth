import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const packages = [
    {
      id: 'drop-off',
      name: 'Drop-Off Digital',
      tagline: 'Self-Service',
      description: 'We deliver and set up your digital photo booth, you take it from there. Perfect for intimate gatherings.',
      price: '199',
      features: [
        'Booth delivered & set up',
        'Unlimited digital photos',
        'Touchscreen operation',
        'QR code sharing',
        'Digital gallery access',
      ],
    },
    {
      id: 'manned-digital',
      name: 'Manned Digital',
      tagline: 'Full Experience',
      description: 'Our friendly team on-site throughout, ensuring everyone has an amazing time capturing moments.',
      price: '349',
      featured: true,
      features: [
        'Everything in Drop-Off',
        'On-site assistant',
        'Professional lighting',
        'Huge prop collection',
        'Backdrop & red carpet',
      ],
    },
    {
      id: 'manned-prints',
      name: 'Manned + Prints',
      tagline: 'Premium Package',
      description: 'The ultimate experience with instant high-quality prints for your guests to take home.',
      price: '449',
      features: [
        'Everything in Manned Digital',
        'Unlimited instant prints',
        'Premium 6x4" quality',
        'Guest photo strips',
        'Premium finish options',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How far do you travel?',
      a: 'We cover most of the UK. Delivery is included within 25 miles. Additional mileage charged at a small fee.',
    },
    {
      q: 'How much space do you need?',
      a: 'Approximately 8ft x 8ft for the full setup including booth, backdrop, and props area.',
    },
    {
      q: 'Can I customise photo templates?',
      a: 'Yes! Custom branding, names, dates, or logos can be added at no extra charge.',
    },
    {
      q: 'How are photos delivered?',
      a: 'Instantly via text, WhatsApp, or email. Plus a private online gallery after your event.',
    },
    {
      q: 'Do you require a deposit?',
      a: '25% deposit to secure your date. Remaining balance due 7 days before your event.',
    },
    {
      q: 'What if I need to cancel?',
      a: 'We understand plans change. Get in touch and we\'ll do our best to help.',
    },
  ];

  return (
    <main className={styles.pricing}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Pricing</span>
          <h1>Choose Your Package</h1>
          <p className={styles.heroSub}>
            All packages include delivery, setup, and collection within 25 miles
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
                className={`${styles.packageCard} ${pkg.featured ? styles.featured : ''}`}
              >
                {pkg.featured && <span className={styles.featuredTag}>Most Popular</span>}

                <header className={styles.packageHeader}>
                  <span className={styles.packageTagline}>{pkg.tagline}</span>
                  <h2>{pkg.name}</h2>
                  <p>{pkg.description}</p>
                </header>

                <div className={styles.priceBlock}>
                  <span className={styles.currency}>£</span>
                  <span className={styles.amount}>{pkg.price}</span>
                  <span className={styles.period}>/ 3 hrs</span>
                </div>

                <ul className={styles.featureList}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/booking?package=${pkg.id}`}
                  className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Select Package
                </Link>
              </article>
            ))}
          </div>

          <p className={styles.addOnNote}>
            Add-ons available: Extra hours (£75/hr), Custom backdrop (£50), Guest book setup (£45)
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <div className={styles.faqHeader}>
            <span className={styles.label}>FAQ</span>
            <h2>Common Questions</h2>
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
          <div className={styles.ctaInner}>
            <h2>Not sure which to choose?</h2>
            <p>Get in touch for a personalised recommendation based on your event.</p>
            <Link to="/booking" className="btn btn-primary btn-large">
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
