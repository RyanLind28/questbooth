import { Link } from 'react-router-dom';
import { Camera, Sparkles, Users, Zap, Award, ArrowRight, Star, CheckCircle } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  const features = [
    {
      icon: <Camera size={32} />,
      title: 'Professional Equipment',
      description: 'Studio-grade cameras and lighting for flawless photos every time.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Premium Props',
      description: 'Curated collection of elegant and fun props for memorable shots.',
    },
    {
      icon: <Users size={32} />,
      title: 'Family Business',
      description: 'Personal service and attention to detail at every event.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Instant Delivery',
      description: 'Photos sent directly to guests via text or WhatsApp.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah & James',
      event: 'Wedding Reception',
      text: 'The booth was the highlight of our wedding. Everyone is still sharing the photos weeks later!',
    },
    {
      name: 'TechCorp Ltd',
      event: 'Corporate Event',
      text: 'Professional setup and brilliant service. Even our CEO got involved with the props!',
    },
    {
      name: 'The Williams Family',
      event: 'Birthday Celebration',
      text: 'Made mum\'s 50th absolutely unforgettable. So many precious memories captured.',
    },
  ];

  return (
    <main className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <Award size={16} />
            <span>Family-Run Excellence</span>
          </div>

          <h1>
            Say Cheese.
            <br />
            <span className={styles.heroAccent}>Make Memories.</span>
          </h1>

          <p className={styles.heroText}>
            Premium photo booth experiences for weddings, parties, and corporate events.
            Professional quality. Personal service. Unforgettable moments.
          </p>

          <div className={styles.heroCtas}>
            <Link to="/booking" className="btn btn-primary btn-large">
              Get Your Free Quote
              <ArrowRight size={20} />
            </Link>
            <Link to="/pricing" className="btn btn-secondary btn-large">
              View Packages
            </Link>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Events</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>50K+</span>
              <span className={styles.statLabel}>Photos</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>5</span>
              <span className={styles.statLabel}>Star Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Why Choose Us</span>
            <h2>The QuestBooth <span className="text-gold">Difference</span></h2>
            <p>What sets our photo booth experience apart</p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Simple Process</span>
            <h2>Book in <span className="text-gold">Three Steps</span></h2>
            <p>Getting your photo booth is effortless</p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>Choose Your Package</h3>
              <p>Select from our range of options designed to suit every event and budget.</p>
            </div>

            <div className={styles.stepLine} />

            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>Book Your Date</h3>
              <p>Secure your preferred date with a simple booking process.</p>
            </div>

            <div className={styles.stepLine} />

            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>Enjoy The Experience</h3>
              <p>We handle everything. You focus on making memories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className={styles.packages}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Our Packages</span>
            <h2>Find Your <span className="text-gold">Perfect Fit</span></h2>
            <p>Tailored options for every occasion</p>
          </div>

          <div className={styles.packagesGrid}>
            <div className={styles.packageCard}>
              <h3>Drop-Off Digital</h3>
              <p className={styles.packageDesc}>Self-service style with all the essentials</p>
              <ul className={styles.packageFeatures}>
                <li><CheckCircle size={16} /> Professional equipment</li>
                <li><CheckCircle size={16} /> Digital delivery</li>
                <li><CheckCircle size={16} /> Props included</li>
              </ul>
              <span className={styles.packagePrice}>From £199</span>
              <Link to="/pricing#drop-off" className={styles.packageLink}>
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className={`${styles.packageCard} ${styles.packageFeatured}`}>
              <div className={styles.popularTag}>Most Popular</div>
              <h3>Manned Digital</h3>
              <p className={styles.packageDesc}>Full service with our professional team</p>
              <ul className={styles.packageFeatures}>
                <li><CheckCircle size={16} /> Dedicated attendant</li>
                <li><CheckCircle size={16} /> Instant sharing</li>
                <li><CheckCircle size={16} /> Premium props</li>
              </ul>
              <span className={styles.packagePrice}>From £349</span>
              <Link to="/pricing#manned-digital" className="btn btn-primary">
                Choose This Package
              </Link>
            </div>

            <div className={styles.packageCard}>
              <h3>Manned + Prints</h3>
              <p className={styles.packageDesc}>The complete experience with instant prints</p>
              <ul className={styles.packageFeatures}>
                <li><CheckCircle size={16} /> Everything in Manned</li>
                <li><CheckCircle size={16} /> Instant photo prints</li>
                <li><CheckCircle size={16} /> Custom templates</li>
              </ul>
              <span className={styles.packagePrice}>From £449</span>
              <Link to="/pricing#manned-prints" className={styles.packageLink}>
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Testimonials</span>
            <h2>What Our <span className="text-gold">Clients Say</span></h2>
            <p>Real feedback from real celebrations</p>
          </div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((item, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <p>"{item.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{item.name}</strong>
                  <span>{item.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Create <span className="text-gold">Memories?</span></h2>
            <p>Let's make your event unforgettable</p>
            <Link to="/booking" className="btn btn-primary btn-large">
              Get Your Free Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
