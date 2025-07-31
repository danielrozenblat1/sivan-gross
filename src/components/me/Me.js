import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import sivan from "../../images/סיון תדמית.jpeg";
import ScrollReveal from 'scrollreveal';
import InteriorDesign from '../jobs/Jobs';

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
    <>
      <section ref={containerRef} className={styles.section} id="מי-אני">
        <h2 className={`${styles.heading} ${styles.revealItem}`}>
          <div className={styles.headingContainer}>
            <span className={styles.headingEnglish}>About Me</span>
            <span className={styles.headingInner}>מי אני</span>
          </div>
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
                <span className={styles.storyHighlight}>נולדתי אל תוך עולם של יופי, סדר ויצירה.</span> בבית שגדלתי בו, אסתטיקה לא הייתה מילה נרדפת לעיצוב - היא הייתה דרך חיים. אמא, perfectionist של ניקיון ודיוק ותחושת מרחב, ואבא שתמיד שיפץ, בנה, הוסיף עוד חדר או שתל פרח חדש בגינה. אני זוכרת את עצמי יושבת מהצד, בולעת כל תנועה, שואלת שאלות, לוקחת חלק - בלי להבין ששם בדיוק נרקמה התשוקה שלי לעיצוב פנים.
              </p>
              <p className={styles.paragraph}>
                רק בשלב מאוחר יותר בחיים הבנתי כמה כל הרגעים האלו עיצבו אותי. היום, כל בית שאני נוגעת בו - נושא איתו את אותה <span className={styles.storyHighlight}>רגישות, דיוק ואהבה למרחב</span> שהתחילו הרבה לפני שלמדתי עיצוב.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* InteriorDesign Section - Separate section */}
      <section>
        <InteriorDesign/>
      </section>

      <section className={styles.section}>
        <div className={`${styles.storySection} ${styles.revealItem}`}>
          <div className={styles.storyContent}>
            <p className={styles.storyParagraph}>
              אני יוצרת עולמות, בתים ועסקים עם אופי ונשמה, נוכחות וסטייל מדויק שלא רואים בכל מקום! כאלה שעושים "וואו" ולא דומים לשום דבר שראיתם.
            </p>
            <p className={styles.storyParagraph}>
              העיצוב איתי הוא מסע יצירתי, מדויק, ובעיקר - חוויה יחודית ובלתי נשכחת בהתאמה אישית מלאה.
            </p>
            <p className={styles.storyParagraph}>
              בלי שבלונות, בלי פחד מצבע או חומר. רק תעוזה, רגש והרבה תשוקה.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;