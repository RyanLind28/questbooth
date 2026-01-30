import { Link } from 'react-router-dom';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const packages = [
    {
      id: 'drop-off',
      emoji: '📱',
      name: 'Drop-Off Digital',
      tagline: 'DIY Style!',
      description: 'We deliver & set up, you run the show! Perfect for hands-on hosts.',
      price: '199',
      features: [
        'Booth delivered & set up',
        'Unlimited digital photos',
        'Touchscreen - super easy!',
        'QR code instant sharing',
        'Online gallery access',
      ],
    },
    {
      id: 'manned-digital',
      emoji: '🎪',
      name: 'Manned Digital',
      tagline: 'Full Party Mode!',
      description: 'Our fun crew handles everything while you enjoy the party!',
      price: '349',
      featured: true,
      features: [
        'Everything in Drop-Off +',
        'Friendly on-site assistant',
        'Pro studio lighting',
        'TONS of fun props',
        'Backdrop & red carpet',
      ],
    },
    {
      id: 'manned-prints',
      emoji: '🖨️',
      name: 'Manned + Prints',
      tagline: 'The Full Shebang!',
      description: 'All the digital goodness PLUS instant prints to take home!',
      price: '449',
      features: [
        'Everything in Manned +',
        'Unlimited instant prints',
        'Premium 6x4" quality',
        'Custom photo strips',
        'Premium finish options',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How far do you travel? 🚗',
      a: 'We cover most of the UK! Delivery is free within 25 miles.',
    },
    {
      q: 'How much space do you need? 📐',
      a: 'About 8ft x 8ft for the full setup - we\'ll make it work!',
    },
    {
      q: 'Can I customize the photos? 🎨',
      a: 'Absolutely! Custom branding, names, dates - all free!',
    },
    {
      q: 'How do guests get their photos? 📲',
      a: 'Instantly via text, WhatsApp, or email. Magic!',
    },
    {
      q: 'Do you need a deposit? 💰',
      a: '25% to secure your date, rest due a week before.',
    },
    {
      q: 'What if plans change? 🔄',
      a: 'Life happens! Get in touch and we\'ll sort it out.',
    },
  ];

  const addOns = [
    { name: 'Extra Hour', price: '75', emoji: '⏰' },
    { name: 'Custom Backdrop', price: '50', emoji: '🎭' },
    { name: 'Guest Book', price: '45', emoji: '📖' },
  ];

  return (
    <main className={styles.pricing}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroEmoji}>💰</span>
          <h1>Pick Your <span className="text-gold">Package!</span></h1>
          <p>All packages include delivery, setup & collection within 25 miles</p>
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
                {pkg.featured && <div className={styles.popularTag}>🔥 Fan Favorite!</div>}

                <span className={styles.packageEmoji}>{pkg.emoji}</span>
                <span className={styles.tagline}>{pkg.tagline}</span>
                <h2>{pkg.name}</h2>
                <p className={styles.description}>{pkg.description}</p>

                <div className={styles.priceBlock}>
                  <span className={styles.currency}>£</span>
                  <span className={styles.amount}>{pkg.price}</span>
                  <span className={styles.period}>/ 3 hrs</span>
                </div>

                <ul className={styles.features}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/booking?package=${pkg.id}`}
                  className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {pkg.featured ? "Let's Go!" : 'Choose This'}
                  {pkg.featured && <Sparkles size={18} />}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className={styles.addOns}>
        <div className="container">
          <h2>Pimp Your Package! <span className={styles.addOnEmoji}>✨</span></h2>
          <div className={styles.addOnsGrid}>
            {addOns.map((item, idx) => (
              <div key={idx} className={styles.addOnCard}>
                <span className={styles.addOnCardEmoji}>{item.emoji}</span>
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
            <HelpCircle size={48} className={styles.faqIcon} />
            <h2>Got <span className="text-gold">Questions?</span></h2>
            <p>We've got answers!</p>
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
            <span className={styles.ctaEmoji}>🤔</span>
            <h2>Still Deciding?</h2>
            <p>No worries! Hit us up and we'll help you pick the perfect package.</p>
            <Link to="/booking" className="btn btn-primary btn-large">
              Chat With Us!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
