import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/pricing', label: 'Packages' },
    { path: '/booking', label: 'Contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`}>
        <Link to="/" className={styles.logo}>
          <img src="/logo-gold.png" alt="QuestBooth" />
        </Link>

        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? styles.active : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/booking"
            className={`btn btn--primary ${styles.cta}`}
            onClick={() => setIsOpen(false)}
          >
            Book Your Booth
          </Link>
        </div>

        <button
          className={styles.toggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
