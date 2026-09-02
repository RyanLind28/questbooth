import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import type { Package } from '../data/packages';
import styles from './PackageCard.module.css';

type Props = {
  pkg: Package;
  /**
   * Heading level for the package name. The pricing page leads with an h1, so
   * its cards are h2; the home page already has an h2 above them, so they're h3.
   */
  headingLevel?: 2 | 3;
};

const PackageCard = ({ pkg, headingLevel = 2 }: Props) => {
  const Heading = headingLevel === 3 ? 'h3' : 'h2';

  return (
    <article
      id={pkg.id}
      className={`${styles.package} ${pkg.featured ? styles.featured : ''}`}
    >
      {pkg.featured && <div className={styles.badge}>Most Popular</div>}

      <div className={styles.media}>
        <img src={pkg.photo} alt={pkg.photoAlt} loading="lazy" />
      </div>

      <div className={styles.header}>
        <span className={styles.tag}>{pkg.tagline}</span>
        <Heading>{pkg.name}</Heading>
        <p>{pkg.description}</p>
      </div>

      <ul className={styles.features}>
        {pkg.features.map((feature, idx) => (
          <li key={idx}>
            <Check size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/booking?package=${pkg.id}`}
        className={`btn btn--block ${pkg.featured ? 'btn--primary' : 'btn--secondary'}`}
      >
        Select Package
        <ArrowRight size={18} />
      </Link>
    </article>
  );
};

export default PackageCard;
