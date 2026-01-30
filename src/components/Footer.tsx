import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="https://ho516c37no6nnbga.public.blob.vercel-storage.com/Quest/QuestBooth/Logo/Agold.webp" alt="QuestBooth" className={styles.logo} />
            <p>
              Premium photo booth hire for weddings, parties, and corporate events across the UK.
            </p>
          </div>

          <nav className={styles.nav}>
            <div className={styles.col}>
              <h4>Navigate</h4>
              <Link to="/">Home</Link>
              <Link to="/pricing">Packages</Link>
              <Link to="/booking">Contact</Link>
            </div>

            <div className={styles.col}>
              <h4>Packages</h4>
              <Link to="/pricing#drop-off">Drop-Off Digital</Link>
              <Link to="/pricing#manned-digital">Manned Digital</Link>
              <Link to="/pricing#manned-prints">Manned + Prints</Link>
            </div>

            <div className={styles.col}>
              <h4>Get in Touch</h4>
              <a href="tel:+447123456789">07123 456 789</a>
              <a href="mailto:hello@questbooth.co.uk">hello@questbooth.co.uk</a>
              <span>Serving all of UK</span>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {year} QuestBooth. All rights reserved.</p>
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
              href="https://facebook.com/questbooth"
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
