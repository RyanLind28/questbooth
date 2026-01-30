import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="eyebrow">Photo Booth Hire</p>
          <h1>
            Say<br />
            <span className={styles.cheese}>Cheese</span>
          </h1>
          <div className={styles.heroRight}>
            <p>
              We bring premium photo booths to weddings, parties & events
              across the UK. Family-run, professionally delivered.
            </p>
            <Link to="/booking" className="btn btn--primary btn--large">
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className={styles.scrollHint}>
          <span>Scroll</span>
          <ArrowDown size={16} />
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Events Completed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50k+</span>
              <span className={styles.statLabel}>Photos Taken</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5.0</span>
              <span className={styles.statLabel}>Star Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <p className="eyebrow">Who We Are</p>
              <h2>A family business that genuinely cares about your event</h2>
            </div>
            <div className={styles.aboutRight}>
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
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <p className="eyebrow">What We Offer</p>
            <h2>Three ways to bring the fun</h2>
          </div>

          <div className={styles.servicesGrid}>
            <article className={styles.service}>
              <span className={styles.serviceNum}>01</span>
              <h3>Drop-Off Digital</h3>
              <p>
                We deliver, set up, and leave you in control. Perfect for
                intimate gatherings where you want a DIY vibe.
              </p>
              <div className={styles.servicePrice}>
                <span>From</span>
                <strong>£199</strong>
              </div>
              <Link to="/pricing#drop-off" className="btn--ghost">
                Learn more <ArrowRight size={16} />
              </Link>
            </article>

            <article className={`${styles.service} ${styles.serviceFeatured}`}>
              <div className={styles.featuredBadge}>Popular</div>
              <span className={styles.serviceNum}>02</span>
              <h3>Manned Digital</h3>
              <p>
                Our team runs the show while you enjoy the party. Full service
                with professional lighting and premium props.
              </p>
              <div className={styles.servicePrice}>
                <span>From</span>
                <strong>£349</strong>
              </div>
              <Link to="/pricing#manned-digital" className="btn btn--primary">
                Choose this package
              </Link>
            </article>

            <article className={styles.service}>
              <span className={styles.serviceNum}>03</span>
              <h3>Manned + Prints</h3>
              <p>
                Everything above, plus instant prints your guests take home.
                The complete photo booth experience.
              </p>
              <div className={styles.servicePrice}>
                <span>From</span>
                <strong>£449</strong>
              </div>
              <Link to="/pricing#manned-prints" className="btn--ghost">
                Learn more <ArrowRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className="container container--narrow">
          <div className={styles.processHeader}>
            <p className="eyebrow">How It Works</p>
            <h2>Booking is simple</h2>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepLine} />
              <span className={styles.stepNum}>1</span>
              <div className={styles.stepContent}>
                <h3>Tell us about your event</h3>
                <p>Fill out our quick form with your date, venue, and package preference.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepLine} />
              <span className={styles.stepNum}>2</span>
              <div className={styles.stepContent}>
                <h3>Get your quote</h3>
                <p>We'll respond within 24 hours with a personalized quote.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepLine} />
              <span className={styles.stepNum}>3</span>
              <div className={styles.stepContent}>
                <h3>We handle the rest</h3>
                <p>Confirm your booking, then relax. We'll be there early to set up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.testimonialsHeader}>
            <p className="eyebrow">Kind Words</p>
            <h2>From our happy customers</h2>
          </div>

          <div className={styles.testimonialsGrid}>
            <blockquote className={styles.testimonial}>
              <p>
                "The booth was the highlight of our wedding reception. Our guests
                are still sharing photos weeks later. Couldn't recommend more highly."
              </p>
              <footer>
                <strong>Sarah & James</strong>
                <span>Wedding, Manchester</span>
              </footer>
            </blockquote>

            <blockquote className={styles.testimonial}>
              <p>
                "Professional from start to finish. The team were friendly, the
                equipment was top quality, and everyone had an absolute blast."
              </p>
              <footer>
                <strong>TechCorp Ltd</strong>
                <span>Corporate Event, London</span>
              </footer>
            </blockquote>

            <blockquote className={styles.testimonial}>
              <p>
                "Made my mum's 50th birthday absolutely unforgettable. So many
                genuine laughing moments captured. Worth every penny."
              </p>
              <footer>
                <strong>The Williams Family</strong>
                <span>Birthday Party, Birmingham</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
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
