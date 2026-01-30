import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <img src="/logo-gold.png" alt="QuestBooth" className={styles.logo} />
            <p>Premium photo booth experiences for weddings, parties, and corporate events across the UK.</p>
            <div className={styles.social}>
              <a href="https://instagram.com/questbooth" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/questbooth" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <nav className={styles.nav}>
            <div className={styles.navCol}>
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/pricing">Packages</Link>
              <Link to="/booking">Get a Quote</Link>
            </div>

            <div className={styles.navCol}>
              <h4>Packages</h4>
              <Link to="/pricing#drop-off">Drop-Off Digital</Link>
              <Link to="/pricing#manned-digital">Manned Digital</Link>
              <Link to="/pricing#manned-prints">Manned + Prints</Link>
            </div>

            <div className={styles.navCol}>
              <h4>Contact</h4>
              <a href="tel:+447123456789" className={styles.contactLink}>
                <Phone size={16} />
                07123 456 789
              </a>
              <a href="mailto:hello@questbooth.co.uk" className={styles.contactLink}>
                <Mail size={16} />
                hello@questbooth.co.uk
              </a>
              <span className={styles.contactLink}>
                <MapPin size={16} />
                Serving all of UK
              </span>
            </div>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <p>© {currentYear} QuestBooth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
