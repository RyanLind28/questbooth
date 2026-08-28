import styles from './Logo.module.css';

type LogoProps = {
  /** Rendered height of the icon mark, in px. */
  iconHeight?: number;
  /** Rendered height of the wordmark, in px. */
  wordHeight?: number;
  gap?: number;
  className?: string;
};

const Logo = ({
  iconHeight = 44,
  wordHeight = 24,
  gap = 12,
  className = '',
}: LogoProps) => (
  <span
    className={`${styles.logo} ${className}`}
    style={
      {
        '--icon-h': `${iconHeight}px`,
        '--word-h': `${wordHeight}px`,
        '--logo-gap': `${gap}px`,
      } as React.CSSProperties
    }
  >
    <span className={styles.icon} />
    <span className={styles.word} />
  </span>
);

export default Logo;
