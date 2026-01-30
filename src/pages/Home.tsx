import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  const testimonials = [
    {
      name: 'Sarah & James',
      event: 'Wedding',
      text: 'QuestBooth made our wedding reception absolutely incredible. The props were amazing and the photo quality was outstanding.',
    },
    {
      name: 'Emily Thompson',
      event: 'Corporate Gala',
      text: 'Professional service from start to finish. Our guests are still talking about the photo booth months later.',
    },
    {
      name: 'The Williams Family',
      event: 'Birthday Celebration',
      text: 'The team was so friendly and helpful. Made our mum\'s milestone birthday one to remember forever.',
    },
  ];

  return (
    <main className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Family-Run Photo Booth Hire</span>
            <h1>
              Creating Memories<br />
              <span className={styles.heroAccent}>One Photo at a Time</span>
            </h1>
            <p className={styles.heroText}>
              Premium equipment. Endless props. Unforgettable moments.
              We're a local family business dedicated to making your event extraordinary.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/booking" className="btn btn-primary btn-large">
                Book Your Event
                <ArrowRight size={18} />
              </Link>
              <Link to="/pricing" className="btn btn-secondary btn-large">
                View Packages
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualFrame}>
              <div className={styles.visualInner}>
                <span className={styles.visualText}>Photo Booth</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <span className={styles.label}>About Us</span>
              <h2>We believe in giving you the absolute best</h2>
            </div>
            <div className={styles.introRight}>
              <p>
                Our high-end equipment and vast range of props is guaranteed to get your
                guests taking the best pictures. As a family-run business, we bring personal
                care and attention to every event we're part of.
              </p>
              <div className={styles.introStats}>
                <div className={styles.introStat}>
                  <span className={styles.statNum}>500+</span>
                  <span className={styles.statLabel}>Events</span>
                </div>
                <div className={styles.introStat}>
                  <span className={styles.statNum}>50k+</span>
                  <span className={styles.statLabel}>Photos</span>
                </div>
                <div className={styles.introStat}>
                  <span className={styles.statNum}>100%</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <span className={styles.label}>Our Packages</span>
            <h2>Choose Your Experience</h2>
          </div>

          <div className={styles.servicesGrid}>
            <article className={styles.serviceCard}>
              <span className={styles.serviceNum}>01</span>
              <h3>Drop-Off Digital</h3>
              <p>
                Perfect for DIY events. We deliver and set up your digital photo booth,
                and you take it from there. Self-service simplicity.
              </p>
              <ul className={styles.serviceFeatures}>
                <li>Booth delivered & set up</li>
                <li>Unlimited digital photos</li>
                <li>Easy QR code sharing</li>
              </ul>
              <Link to="/pricing#drop-off" className={styles.serviceLink}>
                Learn more <ArrowRight size={16} />
              </Link>
            </article>

            <article className={`${styles.serviceCard} ${styles.serviceFeatured}`}>
              <span className={styles.featuredTag}>Popular</span>
              <span className={styles.serviceNum}>02</span>
              <h3>Manned Digital</h3>
              <p>
                The full experience. A member of our friendly team will be there
                throughout, ensuring everyone has an amazing time.
              </p>
              <ul className={styles.serviceFeatures}>
                <li>On-site assistant</li>
                <li>Professional lighting</li>
                <li>Props & backdrop included</li>
                <li>Red carpet setup</li>
              </ul>
              <Link to="/pricing#manned-digital" className={styles.serviceLink}>
                Learn more <ArrowRight size={16} />
              </Link>
            </article>

            <article className={styles.serviceCard}>
              <span className={styles.serviceNum}>03</span>
              <h3>Manned + Prints</h3>
              <p>
                Everything you love about our Manned Digital package, plus instant
                high-quality prints for your guests to take home.
              </p>
              <ul className={styles.serviceFeatures}>
                <li>All Manned Digital features</li>
                <li>Unlimited instant prints</li>
                <li>Premium 6x4" quality</li>
              </ul>
              <Link to="/pricing#manned-prints" className={styles.serviceLink}>
                Learn more <ArrowRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.processHeader}>
            <span className={styles.label}>How It Works</span>
            <h2>Simple as 1, 2, 3</h2>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepMarker}>
                <span>01</span>
                <div className={styles.stepLine} />
              </div>
              <div className={styles.stepContent}>
                <h3>Choose & Book</h3>
                <p>Select your perfect package and secure your date with a simple booking process.</p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepMarker}>
                <span>02</span>
                <div className={styles.stepLine} />
              </div>
              <div className={styles.stepContent}>
                <h3>We Set Up</h3>
                <p>We arrive early, handle all the setup, and make sure everything is perfect before your guests arrive.</p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepMarker}>
                <span>03</span>
              </div>
              <div className={styles.stepContent}>
                <h3>Capture Memories</h3>
                <p>Your guests have a blast, photos are delivered instantly, and you receive a full digital gallery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.testimonialsHeader}>
            <span className={styles.label}>Testimonials</span>
            <h2>What People Say</h2>
          </div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((item, index) => (
              <article key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <blockquote>{item.text}</blockquote>
                <footer>
                  <cite>{item.name}</cite>
                  <span>{item.event}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaContent}>
              <span className={styles.label}>Ready to Book?</span>
              <h2>Let's Create Something<br />Unforgettable</h2>
              <p>Get in touch today for a free, no-obligation quote.</p>
              <Link to="/booking" className="btn btn-primary btn-large">
                Get Your Free Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
