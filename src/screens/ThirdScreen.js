import React, { useEffect, useRef, useState } from 'react';
import styles from './ThirdScreen.module.css';
import image1 from "../images/סיון גרוס סוויטת רילקס 42.png";
import image2 from "../images/סיון גרוס סוויטה של אושר 3.png";
import image3 from "../images/סיון גרוס סוויטת רילקס 41.png";
import image4 from "../images/סיון גרוס סוויטה של אושר 20.png";
import image5 from "../images/סיון גרוס סוויטת רילקס 48.png";
import image6 from "../images/סיון גרוס סוויטת רילקס 14.png";
import image7 from "../images/סיון גרוס אחוזת אלמוג 3.png";
import image8 from "../images/סיון גרוס אחוזת אלמוג 2.png";
import image9 from "../images/סיון גרוס אחוזת אלמוג 7.png";

const TextFillEffect = () => {
  const textRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imagesVisible, setImagesVisible] = useState([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      
      // מיקום האלמנט ביחס לחלון
      const rect = textRef.current.getBoundingClientRect();
      
      // גובה החלון
      const windowHeight = window.innerHeight;
      
      // חישוב אחוז הגלילה - מתחיל כשהאלמנט נכנס לתחתית החלון ומסתיים כשהוא מגיע לחלק העליון
      const scrollPercentage = Math.min(
        Math.max(
          ((windowHeight - rect.top) / (windowHeight + rect.height)) * 1.75, // מכפיל מהירות
          0
        ),
        1
      );
      
      setScrollProgress(scrollPercentage);
      
      // הצגת התמונות בהדרגה לפי אחוז הגלילה
      setImagesVisible([
        scrollPercentage > 0.2, // תמונה ראשונה מופיעה ב-20% מהגלילה
        scrollPercentage > 0.4, // תמונה שנייה מופיעה ב-40% מהגלילה
        scrollPercentage > 0.6  // תמונה שלישית מופיעה ב-60% מהגלילה
      ]);
    };

    window.addEventListener('scroll', handleScroll);
    // הפעלת הפונקציה פעם אחת בטעינה כדי לקבוע את המצב ההתחלתי
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        {/* שורת תמונות ראשונה */}
        <div className={styles.imageRow}>
          <div className={`${styles.imageWrapper} ${imagesVisible[0] ? styles.visible : ''}`}>
            <img src={image1} alt="תמונה 1" className={styles.backgroundImage} />
          </div>
          <div className={`${styles.imageWrapper} ${imagesVisible[0] ? styles.visible : ''}`}>
            <img src={image2} alt="תמונה 2" className={styles.backgroundImage} />
          </div>
          <div className={`${styles.imageWrapper} ${imagesVisible[0] ? styles.visible : ''}`}>
            <img src={image3} alt="תמונה 3" className={styles.backgroundImage} />
          </div>
        </div>
        
        {/* שורת תמונות שנייה */}
        <div className={styles.imageRow}>
          <div className={`${styles.imageWrapper} ${imagesVisible[1] ? styles.visible : ''}`}>
            <img src={image4} alt="תמונה 4" className={styles.backgroundImage} />
          </div>
          <div className={`${styles.imageWrapper} ${imagesVisible[1] ? styles.visible : ''}`}>
            <img src={image5} alt="תמונה 5" className={styles.backgroundImage} />
          </div>
          <div className={`${styles.imageWrapper} ${imagesVisible[1] ? styles.visible : ''}`}>
            <img src={image6} alt="תמונה 6" className={styles.backgroundImage} />
          </div>
        </div>
        
        {/* שורת תמונות שלישית */}
        <div className={styles.imageRow}>
          <div className={`${styles.imageWrapper} ${imagesVisible[2] ? styles.visible : ''}`}>
            <img src={image7} alt="תמונה 7" className={styles.backgroundImage} />
          </div>
          <div className={`${styles.imageWrapper} ${imagesVisible[2] ? styles.visible : ''}`}>
            <img src={image8} alt="תמונה 8" className={styles.backgroundImage} />
          </div>
          <div className={`${styles.imageWrapper} ${imagesVisible[2] ? styles.visible : ''}`}>
            <img src={image9} alt="תמונה 9" className={styles.backgroundImage} />
          </div>
        </div>
      </div>
      
      <h2 
        ref={textRef} 
        className={styles.gradientText}
        style={{ 
          '--scroll-progress': scrollProgress 
        }}
      >
״חללים מעוצבים בקפידה
שבהם אלגנטיות, פונקציונליות ותחכום נפגשים״.
      </h2>
    </div>
  );
};

export default TextFillEffect;