import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import styles from './Navbar.module.css';

const links = [
  { path: '/', label: 'Home' },
  { path: '/pricing', label: 'Packages' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/booking', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <Link to="/" className={styles.logo} aria-label="QuestBooth home">
          <Logo iconHeight={46} wordHeight={26} gap={14} />
        </Link>

        <div
          className={`${styles.menu} ${isOpen ? styles.open : ''}`}
          id="main-menu"
        >
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? styles.active : ''}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/booking"
            className={`btn btn--primary ${styles.cta}`}
            onClick={closeMenu}
          >
            Book Your Booth
          </Link>

          <a
            href="tel:+447123456789"
            className={styles.menuPhone}
            onClick={closeMenu}
          >
            <Phone size={18} />
            07123 456 789
          </a>
        </div>

        <button
          className={styles.toggle}
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="main-menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
