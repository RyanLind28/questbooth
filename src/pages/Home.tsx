import { Link } from 'react-router-dom';
import { Camera, Sparkles, PartyPopper, Heart, Star, Zap, Users } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  const features = [
    {
      icon: <Camera size={36} />,
      title: 'Top-Notch Gear',
      description: 'Pro cameras & studio lighting for picture-perfect shots every time!',
      emoji: '📸',
    },
    {
      icon: <Sparkles size={36} />,
      title: 'Props Galore',
      description: 'Hundreds of hilarious props to bring out everyone\'s silly side!',
      emoji: '🎭',
    },
    {
      icon: <Users size={36} />,
      title: 'Family Vibes',
      description: 'We\'re a family biz that treats every event like our own party!',
      emoji: '👨‍👩‍👧‍👦',
    },
    {
      icon: <Zap size={36} />,
      title: 'Instant Magic',
      description: 'Photos zapped to your phone in seconds via text or WhatsApp!',
      emoji: '⚡',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah & James',
      event: 'Wedding',
      text: 'OMG the booth was the highlight of our wedding! Everyone\'s still sharing the photos!',
      emoji: '💒',
    },
    {
      name: 'TechCorp Ltd',
      event: 'Office Party',
      text: 'Best team building ever! Even our CEO wore the silly glasses 😂',
      emoji: '🏢',
    },
    {
      name: 'The Williams Fam',
      event: 'Birthday Bash',
      text: 'Mum\'s 50th was EPIC thanks to QuestBooth! So many memories captured!',
      emoji: '🎂',
    },
  ];

  return (
    <main className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroDecor}>
          <span className={styles.floatingEmoji} style={{ top: '15%', left: '10%' }}>📸</span>
          <span className={styles.floatingEmoji} style={{ top: '25%', right: '15%' }}>🎉</span>
          <span className={styles.floatingEmoji} style={{ bottom: '30%', left: '8%' }}>⭐</span>
          <span className={styles.floatingEmoji} style={{ bottom: '20%', right: '10%' }}>✨</span>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <PartyPopper size={18} />
            Family-Run Fun!
          </div>

          <h1>
            Say Cheese! <span className={styles.heroEmoji}>📸</span>
            <br />
            <span className="text-gold">Epic Photos</span> Await!
          </h1>

          <p className={styles.heroText}>
            We bring the party vibes with our premium photo booth! Amazing props,
            pro-quality pics, and memories your guests will absolutely LOVE!
          </p>

          <div className={styles.heroCtas}>
            <Link to="/booking" className="btn btn-primary btn-large">
              Book The Fun!
              <PartyPopper size={20} />
            </Link>
            <Link to="/pricing" className="btn btn-secondary btn-large">
              See Packages
            </Link>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Epic Events</span>
            </div>
            <div className={styles.statDivider}>🎊</div>
            <div className={styles.stat}>
              <span className={styles.statNum}>50K+</span>
              <span className={styles.statLabel}>Smiles Captured</span>
            </div>
            <div className={styles.statDivider}>🎊</div>
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Good Times</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEmoji}>🌟</span>
            <h2>Why We're <span className="text-gold">Awesome</span></h2>
            <p>Here's why our booths are the life of the party!</p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <span className={styles.featureEmoji}>{feature.emoji}</span>
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
            <span className={styles.sectionEmoji}>🎯</span>
            <h2>Easy as <span className="text-gold">1-2-3!</span></h2>
            <p>Getting your booth is super simple</p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepBubble}>
                <span>1</span>
              </div>
              <h3>Pick Your Package</h3>
              <p>Choose from our awesome options - there's something for everyone!</p>
              <span className={styles.stepEmoji}>🎁</span>
            </div>

            <div className={styles.stepArrow}>→</div>

            <div className={styles.step}>
              <div className={styles.stepBubble}>
                <span>2</span>
              </div>
              <h3>Book Your Date</h3>
              <p>Lock in your party date and leave the rest to us!</p>
              <span className={styles.stepEmoji}>📅</span>
            </div>

            <div className={styles.stepArrow}>→</div>

            <div className={styles.step}>
              <div className={styles.stepBubble}>
                <span>3</span>
              </div>
              <h3>Party Time!</h3>
              <p>We show up, set up, and make the magic happen!</p>
              <span className={styles.stepEmoji}>🎉</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className={styles.packages}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEmoji}>💫</span>
            <h2>Our <span className="text-gold">Packages</span></h2>
            <p>Pick the perfect booth experience for your bash!</p>
          </div>

          <div className={styles.packagesGrid}>
            <div className={styles.packageCard}>
              <span className={styles.packageEmoji}>📱</span>
              <h3>Drop-Off Digital</h3>
              <p>DIY style! We drop it off, you run the show</p>
              <span className={styles.packagePrice}>From £199</span>
              <Link to="/pricing#drop-off" className={styles.packageLink}>
                Learn More →
              </Link>
            </div>

            <div className={`${styles.packageCard} ${styles.packageFeatured}`}>
              <div className={styles.popularTag}>🔥 Most Popular!</div>
              <span className={styles.packageEmoji}>🎪</span>
              <h3>Manned Digital</h3>
              <p>Full service with our fun crew on-site!</p>
              <span className={styles.packagePrice}>From £349</span>
              <Link to="/pricing#manned-digital" className="btn btn-primary">
                Choose This!
              </Link>
            </div>

            <div className={styles.packageCard}>
              <span className={styles.packageEmoji}>🖨️</span>
              <h3>Manned + Prints</h3>
              <p>Everything above PLUS instant photo prints!</p>
              <span className={styles.packagePrice}>From £449</span>
              <Link to="/pricing#manned-prints" className={styles.packageLink}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEmoji}>💬</span>
            <h2>Happy <span className="text-gold">Party People</span></h2>
            <p>Don't just take our word for it!</p>
          </div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((item, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialEmoji}>{item.emoji}</div>
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
            <div className={styles.ctaEmojis}>
              <span>🎉</span>
              <span>📸</span>
              <span>🎊</span>
            </div>
            <h2>Ready to <span className="text-gold">Party?</span></h2>
            <p>Let's make your event absolutely LEGENDARY!</p>
            <Link to="/booking" className="btn btn-primary btn-large">
              Get Your Free Quote!
              <Heart size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
