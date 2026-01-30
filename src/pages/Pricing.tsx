import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock, Image, BookOpen } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const packages = [
    {
      id: 'drop-off',
      name: 'Drop-Off Digital',
      tagline: 'Self-Service',
      description: 'We deliver and set up, you run the show. Perfect for hands-on hosts who want full control.',
      price: '199',
      features: [
        'Booth delivered & set up',
        'Unlimited digital photos',
        'Touchscreen interface',
        'QR code instant sharing',
        'Online gallery access',
      ],
    },
    {
      id: 'manned-digital',
      name: 'Manned Digital',
      tagline: 'Full Service',
      description: 'Our professional team handles everything while you enjoy your event.',
      price: '349',
      featured: true,
      features: [
        'Everything in Drop-Off',
        'Dedicated on-site attendant',
        'Professional studio lighting',
        'Premium props collection',
        'Backdrop & red carpet',
      ],
    },
    {
      id: 'manned-prints',
      name: 'Manned + Prints',
      tagline: 'Complete Experience',
      description: 'The full experience with instant prints your guests can take home.',
      price: '449',
      features: [
        'Everything in Manned',
        'Unlimited instant prints',
        'Premium 6x4" quality',
        'Custom photo strips',
        'Premium finish options',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How far do you travel?',
      a: 'We cover most of the UK. Delivery is free within 25 miles of our location, with additional charges for further distances.',
    },
    {
      q: 'How much space do you need?',
      a: 'Approximately 8ft x 8ft for the complete setup. We can work with your venue to find the perfect spot.',
    },
    {
      q: 'Can I customize the photos?',
      a: 'Yes. Custom branding, names, dates, and colour schemes are all available at no extra cost.',
    },
    {
      q: 'How do guests receive their photos?',
      a: 'Instantly via text, WhatsApp, or email. They can also access the online gallery after the event.',
    },
    {
      q: 'What is the deposit requirement?',
      a: '25% deposit to secure your date, with the balance due one week before your event.',
    },
    {
      q: 'What is your cancellation policy?',
      a: 'We understand plans change. Contact us to discuss your situation and we will work with you.',
    },
  ];

  const addOns = [
    { name: 'Extra Hour', price: '75', icon: <Clock size={24} /> },
    { name: 'Custom Backdrop', price: '50', icon: <Image size={24} /> },
    { name: 'Guest Book', price: '45', icon: <BookOpen size={24} /> },
  ];

  return (
    <main className={styles.pricing}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroTag}>Pricing</span>
          <h1>Choose Your <span className="text-gold">Package</span></h1>
          <p>All packages include delivery, setup, and collection within 25 miles</p>
        </div>
      </section>

      {/* Packages */}
      <section className={styles.packages}>
        <div className="container">
          <div className={styles.packagesGrid}>
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                id={pkg.id}
                className={`${styles.packageCard} ${pkg.featured ? styles.featured : ''}`}
              >
                {pkg.featured && <div className={styles.popularTag}>Most Popular</div>}

                <span className={styles.tagline}>{pkg.tagline}</span>
                <h2>{pkg.name}</h2>
                <p className={styles.description}>{pkg.description}</p>

                <div className={styles.priceBlock}>
                  <span className={styles.currency}>£</span>
                  <span className={styles.amount}>{pkg.price}</span>
                  <span className={styles.period}>/ 3 hours</span>
                </div>

                <ul className={styles.features}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/booking?package=${pkg.id}`}
                  className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Select Package
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className={styles.addOns}>
        <div className="container">
          <div className={styles.addOnsHeader}>
            <h2>Enhance Your <span className="text-gold">Experience</span></h2>
            <p>Optional extras to make your event even more memorable</p>
          </div>
          <div className={styles.addOnsGrid}>
            {addOns.map((item, idx) => (
              <div key={idx} className={styles.addOnCard}>
                <div className={styles.addOnIcon}>{item.icon}</div>
                <h3>{item.name}</h3>
                <span className={styles.addOnPrice}>+£{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <div className={styles.faqHeader}>
            <h2>Frequently Asked <span className="text-gold">Questions</span></h2>
            <p>Everything you need to know</p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={styles.faqCard}>
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
            <h2>Need Help <span className="text-gold">Deciding?</span></h2>
            <p>Get in touch and we will help you find the perfect package for your event.</p>
            <Link to="/booking" className="btn btn-primary btn-large">
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
