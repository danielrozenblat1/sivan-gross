import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import sivan from "../../images/סיון תדמית.jpeg";
import ScrollReveal from 'scrollreveal';

const AboutMe = () => {
  const containerRef = useRef(null);
  
  // ScrollReveal configuration
  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 1000,
        delay: 150,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.2
      });

      // Reveal elements
      sr.reveal(`.${styles.revealItem}`, {
        origin: 'bottom',
        distance: '20px',
        interval: 100
      });
    }
    
    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.section} id="מי-אני">
      <h2 className={`${styles.heading} ${styles.revealItem}`}>
        <span className={styles.headingInner}>מי אני</span>
        <span className={styles.headingEnglish}>About Me</span>
      </h2>
      
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
          <img src={sivan} alt="סיון גרוס" className={styles.image} />
          <div className={styles.imageBorder}></div>
        </div>
        
        <div className={styles.content}>
          <h3 className={`${styles.name} ${styles.revealItem}`}>נעים להכיר, אני סיון גרוס</h3>
          
          <p className={`${styles.quote} ${styles.revealItem}`}>
            "אני לא רק מעצבת פנים - אני חיה ונושמת עיצוב"
          </p>
          
          <div className={`${styles.textBlock} ${styles.revealItem}`}>
            <p className={styles.paragraph}>
              אני יוצרת עולמות, בתים ועסקים עם אופי ונשמה, נוכחות וסטייל מדויק שלא רואים בכל מקום! כאלה שעושים "וואו" ולא דומים לשום דבר שראיתם.
            </p>
            <p className={styles.paragraph}>
              העיצוב איתי הוא מסע יצירתי, מדויק, ובעיקר – חוויה יחודית ובלתי נשכחת בהתאמה אישית מלאה.
            </p>
            <p className={styles.paragraph}>
              בלי שבלונות, בלי פחד מצבע או חומר. רק תעוזה, רגש והרבה תשוקה.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;