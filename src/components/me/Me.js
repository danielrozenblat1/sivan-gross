import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import sivan from "../../images/סיון גרוס תדמית.png";
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
        <span className={styles.headingInner}>בואו נכיר</span>
      </h2>
      
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
          <img src={sivan} alt="סיון גרוס" className={styles.image} />
          <div className={styles.imageBorder}></div>
        </div>
        
        <div className={styles.content}>
          <h3 className={`${styles.name} ${styles.revealItem}`}>סיון גרוס</h3>
          
          <p className={`${styles.quote} ${styles.revealItem}`}>
            "אני לא עוזבת אותך מרגע התכנון עד שהאגרטל נמצא בבית"
          </p>
          
          <div className={`${styles.textBlock} ${styles.revealItem}`}>
           
            <p className={styles.paragraph}>
              כבר מילדות, הייתי תמיד שקועה בעשייה וביצירה. אבא שלי, שעסק בבנייה, היה ההשראה הראשונה שלי. התלהבתי מהאופן בו הוא הפך תוכניות לבתים אמיתיים, מהשטח החי והנושם, ומהיכולת לראות חזון הופך למציאות. עם השנים, הבנתי שזה לא רק תחביב עבורי - זה ייעוד.
            </p>
            <p className={styles.paragraph}>
              החזון העיצובי שלי נשען על שלושה עקרונות: יצירת חלל שמשקף את האנשים החיים בו, פתרונות פרקטיים לחיי היומיום, ואסתטיקה שמעניקה תחושת נחת ורוגע. אני לא מאמינה ב"פתרונות קופסה" - כל בית הוא עולם ומלואו, וכל פרויקט הוא יצירה חדשה לחלוטין.
            </p>
            <p className={styles.paragraph}>
              אני מלווה אותך מהרגע שהחלום מתחיל להתרקם ועד לרגע שאתה נכנס הביתה, מדליק את האור, ומרגיש - "הגעתי הביתה". בין אם מדובר בגישור בין סגנונות שונים של בני זוג, ניצול מקסימלי של חללים מאתגרים, או שילוב נכון בין חומרים ופריטים עיצוביים - אני כאן כדי להפוך את החלום שלך למציאות, תמיד במסגרת התקציב המתוכנן.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;