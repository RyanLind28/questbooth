import { Link } from 'react-router-dom';
import { Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import styles from './Footer.module.css';

/**
 * Sister brand. Put the Quest Events site URL here and the name below
 * becomes a link; left empty it renders as plain text.
 */
const QUEST_EVENTS_URL = 'https://www.questevents.uk/';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo iconHeight={54} wordHeight={30} gap={16} className={styles.logo} />
            <p>
              Premium photo booth hire for weddings, parties and corporate events across
              Southampton, Fareham, Portsmouth and the wider Hampshire area.
            </p>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <div className={styles.col}>
              <h4>Navigate</h4>
              <Link to="/">Home</Link>
              <Link to="/pricing">Packages</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/booking">Contact</Link>
            </div>

            <div className={styles.col}>
              <h4>Packages</h4>
              <Link to="/pricing#manned-digital">Manned Digital</Link>
              <Link to="/pricing#manned-prints">Manned + Instant Prints</Link>
            </div>

            <div className={styles.col}>
              <h4>Get in Touch</h4>
              <a href="tel:+447123456789">07123 456 789</a>
              <a href="mailto:hello@questbooth.co.uk">hello@questbooth.co.uk</a>
              <span>Within 30 minutes of SO31</span>
            </div>
          </nav>
        </div>

        <div className={styles.family}>
          <span className={styles.familyLabel}>Part of the Quest family</span>
          {QUEST_EVENTS_URL ? (
            <a
              className={styles.familyBrand}
              href={QUEST_EVENTS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quest Events
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className={styles.familyBrand}>Quest Events</span>
          )}
        </div>

        <div className={styles.bottom}>
          <div className={styles.credits}>
            <p>© {year} QuestBooth. All rights reserved.</p>
            <p>
              Website by{' '}
              <a href="https://ryanlind.co.uk" target="_blank" rel="noopener noreferrer">
                RyanLind.co.uk
              </a>
            </p>
          </div>
          <div className={styles.social}>
            <a
              href="https://instagram.com/questbooth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1DXfcrfxt3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
