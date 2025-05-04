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
        <span className={styles.headingEnglish}>About Me</span>
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
              מאז שאני זוכרת את עצמי, אבא שלי היה ההשראה הכי גדולה שלי. הייתי מסתכלת עליו הופך שרטוטים לבתים אמיתיים ופשוט נדלקתי! איך דף נייר יכול להפוך למשהו שאנשים חיים בו? זה התחיל כסקרנות של ילדה קטנה, והיום זה הדבר שאני הכי אוהבת לעשות. בשבילי, כל בית זה סיפור חדש לגמרי, עולם שלם שמחכה שיגלו אותו.
            </p>
            <p className={styles.paragraph}>
              העיצוב שלי עומד על שלושה דברים חשובים: שהבית ישקף באמת מי אתם, שהוא יהיה נוח ופרקטי לחיים האמיתיים (כי בסוף אתם צריכים לחיות שם!), ושהוא יהיה מקום שפשוט כיף להיות בו. אני מאמינה שעיצוב טוב הוא כזה שברגע שאתם נכנסים הביתה ומדליקים את האור, אתם מרגישים - "וואו, הגעתי הביתה".
            </p>
            <p className={styles.paragraph}>
              הכי כיף לי לחבר בין עולמות - לקחת את הסגנון של אחד ושל השני ולמצוא את הקסם באמצע. לשלב בין חלומות גדולים לתקציב שאפשר לעמוד בו, ולהפוך חללים מאתגרים למשהו מדהים. אני פשוט חיה את זה! הבית שאעצב לכם יהיה שלכם ורק שלכם. אין אצלי העתק-הדבק.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;