import React from 'react';
import { Facebook, Instagram, Navigation } from 'lucide-react';
import styles from './Social.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>תוכלו למצוא אותי גם ב:</h2>
      <div className={styles.iconsContainer}>
        <a 
          href="https://www.waze.com/he/live-map/directions/%D7%9E%D7%A0%D7%95%D7%AA?q=%D7%99%D7%94%D7%9C%D7%95%D7%9D+29+%D7%9E%D7%A6%D7%A4%D7%94+%D7%9E%D7%A0%D7%95%D7%AA&to=place.ws.il.129179.27" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.iconLink}
        >
          <div className={styles.iconWrapper}>
            <Navigation strokeWidth={1} className={styles.icon} />
            <span className={styles.iconText}>וייז</span>
          </div>
        </a>
        <a 
          href="https://www.facebook.com/sywn.grws" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <div className={styles.iconWrapper}>
            <Facebook strokeWidth={1} className={styles.icon} />
            <span className={styles.iconText}>פייסבוק</span>
          </div>
        </a>
        <a 
          href="https://www.instagram.com/sivan_gross?utm_source=qr&igsh=N2hjNHhibTVxYWU4" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <div className={styles.iconWrapper}>
            <Instagram strokeWidth={1} className={styles.icon} />
            <span className={styles.iconText}>אינסטגרם</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;

