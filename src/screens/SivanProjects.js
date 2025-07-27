import React from 'react';
import ProjectCarousel from '../components/projects/Projects';
import styles from './SivanProjects.module.css';

// אימפורטים לתמונות סוויטה של אושר (42 תמונות)
import image1 from "../images/סיון גרוס סוויטה של אושר 1.png";
import image2 from "../images/סיון גרוס סוויטה של אושר 2.png";
import image3 from "../images/סיון גרוס סוויטה של אושר 3.png";
import image4 from "../images/סיון גרוס סוויטה של אושר 4.png";
import image5 from "../images/סיון גרוס סוויטה של אושר 5.png";
import image6 from "../images/סיון גרוס סוויטה של אושר 6.png";
import image7 from "../images/סיון גרוס סוויטה של אושר 7.png";
import image8 from "../images/סיון גרוס סוויטה של אושר 8.png";
import image9 from "../images/סיון גרוס סוויטה של אושר 9.png";
import image10 from "../images/סיון גרוס סוויטה של אושר 10.png";
import image11 from "../images/סיון גרוס סוויטה של אושר 11.png";
import image12 from "../images/סיון גרוס סוויטה של אושר 12.png";
import image13 from "../images/סיון גרוס סוויטה של אושר 13.png";
import image14 from "../images/סיון גרוס סוויטה של אושר 14.png";
import image15 from "../images/סיון גרוס סוויטה של אושר 15.png";
import image16 from "../images/סיון גרוס סוויטה של אושר 16.png";
import image17 from "../images/סיון גרוס סוויטה של אושר 17.png";
import image18 from "../images/סיון גרוס סוויטה של אושר 18.png";
import image19 from "../images/סיון גרוס סוויטה של אושר 19.png";
import image20 from "../images/סיון גרוס סוויטה של אושר 20.png";
import image21 from "../images/סיון גרוס סוויטה של אושר 21.png";
import image22 from "../images/סיון גרוס סוויטה של אושר 22.png";
import image23 from "../images/סיון גרוס סוויטה של אושר 23.png";
import image24 from "../images/סיון גרוס סוויטה של אושר 24.png";
import image25 from "../images/סיון גרוס סוויטה של אושר 25.png";
import image26 from "../images/סיון גרוס סוויטה של אושר 26.png";
import image27 from "../images/סיון גרוס סוויטה של אושר 27.png";
import image28 from "../images/סיון גרוס סוויטה של אושר 28.png";
import image29 from "../images/סיון גרוס סוויטה של אושר 29.png";
import image30 from "../images/סיון גרוס סוויטה של אושר 30.png";
import image31 from "../images/סיון גרוס סוויטה של אושר 31.png";
import image32 from "../images/סיון גרוס סוויטה של אושר 32.png";
import image33 from "../images/סיון גרוס סוויטה של אושר 33.png";
import image34 from "../images/סיון גרוס סוויטה של אושר 34.png";
import image35 from "../images/סיון גרוס סוויטה של אושר 35.png";
import image36 from "../images/סיון גרוס סוויטה של אושר 36.png";
import image37 from "../images/סיון גרוס סוויטה של אושר 37.png";
import image38 from "../images/סיון גרוס סוויטה של אושר 38.png";
import image39 from "../images/סיון גרוס סוויטה של אושר 39.png";
import image40 from "../images/סיון גרוס סוויטה של אושר 40.png";
import image41 from "../images/סיון גרוס סוויטה של אושר 41.png";
import image42 from "../images/סיון גרוס סוויטה של אושר 42.png";

// אימפורטים לתמונות סוויטת רילקס (49 תמונות)
import relax1 from "../images/סיון גרוס סוויטת רילקס 1.png";
import relax2 from "../images/סיון גרוס סוויטת רילקס 2.png";
import relax3 from "../images/סיון גרוס סוויטת רילקס 3.png";
import relax4 from "../images/סיון גרוס סוויטת רילקס 4.png";
import relax5 from "../images/סיון גרוס סוויטת רילקס 5.png";
import relax6 from "../images/סיון גרוס סוויטת רילקס 6.png";
import relax7 from "../images/סיון גרוס סוויטת רילקס 7.png";
import relax8 from "../images/סיון גרוס סוויטת רילקס 8.png";
import relax9 from "../images/סיון גרוס סוויטת רילקס 9.png";
import relax10 from "../images/סיון גרוס סוויטת רילקס 10.png";
import relax11 from "../images/סיון גרוס סוויטת רילקס 11.png";
import relax12 from "../images/סיון גרוס סוויטת רילקס 12.png";
import relax13 from "../images/סיון גרוס סוויטת רילקס 13.png";
import relax14 from "../images/סיון גרוס סוויטת רילקס 14.png";
import relax15 from "../images/סיון גרוס סוויטת רילקס 15.png";
import relax16 from "../images/סיון גרוס סוויטת רילקס 16.png";
import relax17 from "../images/סיון גרוס סוויטת רילקס 17.png";
import relax18 from "../images/סיון גרוס סוויטת רילקס 18.png";
import relax19 from "../images/סיון גרוס סוויטת רילקס 19.png";
import relax20 from "../images/סיון גרוס סוויטת רילקס 20.png";
import relax21 from "../images/סיון גרוס סוויטת רילקס 21.png";
import relax22 from "../images/סיון גרוס סוויטת רילקס 22.png";
import relax23 from "../images/סיון גרוס סוויטת רילקס 23.png";
import relax24 from "../images/סיון גרוס סוויטת רילקס 24.png";
import relax25 from "../images/סיון גרוס סוויטת רילקס 25.png";
import relax26 from "../images/סיון גרוס סוויטת רילקס 26.png";
import relax27 from "../images/סיון גרוס סוויטת רילקס 27.png";
import relax28 from "../images/סיון גרוס סוויטת רילקס 28.png";
import relax29 from "../images/סיון גרוס סוויטת רילקס 29.png";
import relax30 from "../images/סיון גרוס סוויטת רילקס 30.png";
import relax31 from "../images/סיון גרוס סוויטת רילקס 31.png";
import relax32 from "../images/סיון גרוס סוויטת רילקס 32.png";
import relax33 from "../images/סיון גרוס סוויטת רילקס 33.png";
import relax34 from "../images/סיון גרוס סוויטת רילקס 34.png";
import relax35 from "../images/סיון גרוס סוויטת רילקס 35.png";
import relax36 from "../images/סיון גרוס סוויטת רילקס 36.png";
import relax37 from "../images/סיון גרוס סוויטת רילקס 37.png";
import relax38 from "../images/סיון גרוס סוויטת רילקס 38.png";
import relax39 from "../images/סיון גרוס סוויטת רילקס 39.png";
import relax40 from "../images/סיון גרוס סוויטת רילקס 40.png";
import relax41 from "../images/סיון גרוס סוויטת רילקס 41.png";
import relax42 from "../images/סיון גרוס סוויטת רילקס 42.png";
import relax43 from "../images/סיון גרוס סוויטת רילקס 43.png";
import relax44 from "../images/סיון גרוס סוויטת רילקס 44.png";
import relax45 from "../images/סיון גרוס סוויטת רילקס 45.png";
import relax46 from "../images/סיון גרוס סוויטת רילקס 46.png";
import relax47 from "../images/סיון גרוס סוויטת רילקס 47.png";
import relax48 from "../images/סיון גרוס סוויטת רילקס 48.png";
import relax49 from "../images/סיון גרוס סוויטת רילקס 49.png";

// אימפורטים לתמונות אחוזת אלמוג (10 תמונות)
import almog1 from "../images/סיון גרוס אחוזת אלמוג 1.png";
import almog2 from "../images/סיון גרוס אחוזת אלמוג 2.png";
import almog3 from "../images/סיון גרוס אחוזת אלמוג 3.png";
import almog4 from "../images/סיון גרוס אחוזת אלמוג 4.png";
import almog5 from "../images/סיון גרוס אחוזת אלמוג 5.png";
import almog6 from "../images/סיון גרוס אחוזת אלמוג 6.png";
import almog7 from "../images/סיון גרוס אחוזת אלמוג 7.png";
import almog8 from "../images/סיון גרוס אחוזת אלמוג 8.png";
import almog9 from "../images/סיון גרוס אחוזת אלמוג 9.png";
import almog10 from "../images/סיון גרוס אחוזת אלמוג 10.png";

// אימפורטים לתמונות פרוייקט חדש (12 תמונות)
import newProject1 from "../images/פרוייקט חדש 1.png";
import newProject2 from "../images/פרוייקט חדש 2.png";
import newProject3 from "../images/פרוייקט חדש 3.png";
import newProject4 from "../images/פרוייקט חדש 4.png";
import newProject5 from "../images/פרוייקט חדש 5.png";
import newProject6 from "../images/פרוייקט חדש 6.png";
import newProject7 from "../images/פרוייקט חדש 7.png";
import newProject8 from "../images/פרוייקט חדש 8.png";
import newProject9 from "../images/פרוייקט חדש 9.png";
import newProject10 from "../images/פרוייקט חדש 10.png";
import newProject11 from "../images/פרוייקט חדש 11.png";
import newProject12 from "../images/פרוייקט חדש 12.png";

const SivanNew = () => {
  // יצירת מערכי התמונות
  const osherImages = [
    { src: image1, alt: "הסוויטה של אושר - תמונה 1" },
    { src: image2, alt: "הסוויטה של אושר - תמונה 2" },
    { src: image3, alt: "הסוויטה של אושר - תמונה 3" },
    { src: image4, alt: "הסוויטה של אושר - תמונה 4" },
    { src: image5, alt: "הסוויטה של אושר - תמונה 5" },
    { src: image6, alt: "הסוויטה של אושר - תמונה 6" },
    { src: image7, alt: "הסוויטה של אושר - תמונה 7" },
    { src: image8, alt: "הסוויטה של אושר - תמונה 8" },
    { src: image9, alt: "הסוויטה של אושר - תמונה 9" },
    { src: image10, alt: "הסוויטה של אושר - תמונה 10" },
    { src: image11, alt: "הסוויטה של אושר - תמונה 11" },
    { src: image12, alt: "הסוויטה של אושר - תמונה 12" },
    { src: image13, alt: "הסוויטה של אושר - תמונה 13" },
    { src: image14, alt: "הסוויטה של אושר - תמונה 14" },
    { src: image15, alt: "הסוויטה של אושר - תמונה 15" },
    { src: image16, alt: "הסוויטה של אושר - תמונה 16" },
    { src: image17, alt: "הסוויטה של אושר - תמונה 17" },
    { src: image18, alt: "הסוויטה של אושר - תמונה 18" },
    { src: image19, alt: "הסוויטה של אושר - תמונה 19" },
    { src: image20, alt: "הסוויטה של אושר - תמונה 20" },
    { src: image21, alt: "הסוויטה של אושר - תמונה 21" },
    { src: image22, alt: "הסוויטה של אושר - תמונה 22" },
    { src: image23, alt: "הסוויטה של אושר - תמונה 23" },
    { src: image24, alt: "הסוויטה של אושר - תמונה 24" },
    { src: image25, alt: "הסוויטה של אושר - תמונה 25" },
    { src: image26, alt: "הסוויטה של אושר - תמונה 26" },
    { src: image27, alt: "הסוויטה של אושר - תמונה 27" },
    { src: image28, alt: "הסוויטה של אושר - תמונה 28" },
    { src: image29, alt: "הסוויטה של אושר - תמונה 29" },
    { src: image30, alt: "הסוויטה של אושר - תמונה 30" },
    { src: image31, alt: "הסוויטה של אושר - תמונה 31" },
    { src: image32, alt: "הסוויטה של אושר - תמונה 32" },
    { src: image33, alt: "הסוויטה של אושר - תמונה 33" },
    { src: image34, alt: "הסוויטה של אושר - תמונה 34" },
    { src: image35, alt: "הסוויטה של אושר - תמונה 35" },
    { src: image36, alt: "הסוויטה של אושר - תמונה 36" },
    { src: image37, alt: "הסוויטה של אושר - תמונה 37" },
    { src: image38, alt: "הסוויטה של אושר - תמונה 38" },
    { src: image39, alt: "הסוויטה של אושר - תמונה 39" },
    { src: image40, alt: "הסוויטה של אושר - תמונה 40" },
    { src: image41, alt: "הסוויטה של אושר - תמונה 41" },
    { src: image42, alt: "הסוויטה של אושר - תמונה 42" }
  ];

  const relaxImages = [
    { src: relax1, alt: "סוויטת רילקס - תמונה 1" },
    { src: relax2, alt: "סוויטת רילקס - תמונה 2" },
    { src: relax3, alt: "סוויטת רילקס - תמונה 3" },
    { src: relax4, alt: "סוויטת רילקס - תמונה 4" },
    { src: relax5, alt: "סוויטת רילקס - תמונה 5" },
    { src: relax6, alt: "סוויטת רילקס - תמונה 6" },
    { src: relax7, alt: "סוויטת רילקס - תמונה 7" },
    { src: relax8, alt: "סוויטת רילקס - תמונה 8" },
    { src: relax9, alt: "סוויטת רילקס - תמונה 9" },
    { src: relax10, alt: "סוויטת רילקס - תמונה 10" },
    { src: relax11, alt: "סוויטת רילקס - תמונה 11" },
    { src: relax12, alt: "סוויטת רילקס - תמונה 12" },
    { src: relax13, alt: "סוויטת רילקס - תמונה 13" },
    { src: relax14, alt: "סוויטת רילקס - תמונה 14" },
    { src: relax15, alt: "סוויטת רילקס - תמונה 15" },
    { src: relax16, alt: "סוויטת רילקס - תמונה 16" },
    { src: relax17, alt: "סוויטת רילקס - תמונה 17" },
    { src: relax18, alt: "סוויטת רילקס - תמונה 18" },
    { src: relax19, alt: "סוויטת רילקס - תמונה 19" },
    { src: relax20, alt: "סוויטת רילקס - תמונה 20" },
    { src: relax21, alt: "סוויטת רילקס - תמונה 21" },
    { src: relax22, alt: "סוויטת רילקס - תמונה 22" },
    { src: relax23, alt: "סוויטת רילקס - תמונה 23" },
    { src: relax24, alt: "סוויטת רילקס - תמונה 24" },
    { src: relax25, alt: "סוויטת רילקס - תמונה 25" },
    { src: relax26, alt: "סוויטת רילקס - תמונה 26" },
    { src: relax27, alt: "סוויטת רילקס - תמונה 27" },
    { src: relax28, alt: "סוויטת רילקס - תמונה 28" },
    { src: relax29, alt: "סוויטת רילקס - תמונה 29" },
    { src: relax30, alt: "סוויטת רילקס - תמונה 30" },
    { src: relax31, alt: "סוויטת רילקס - תמונה 31" },
    { src: relax32, alt: "סוויטת רילקס - תמונה 32" },
    { src: relax33, alt: "סוויטת רילקס - תמונה 33" },
    { src: relax34, alt: "סוויטת רילקס - תמונה 34" },
    { src: relax35, alt: "סוויטת רילקס - תמונה 35" },
    { src: relax36, alt: "סוויטת רילקס - תמונה 36" },
    { src: relax37, alt: "סוויטת רילקס - תמונה 37" },
    { src: relax38, alt: "סוויטת רילקס - תמונה 38" },
    { src: relax39, alt: "סוויטת רילקס - תמונה 39" },
    { src: relax40, alt: "סוויטת רילקס - תמונה 40" },
    { src: relax41, alt: "סוויטת רילקס - תמונה 41" },
    { src: relax42, alt: "סוויטת רילקס - תמונה 42" },
    { src: relax43, alt: "סוויטת רילקס - תמונה 43" },
    { src: relax44, alt: "סוויטת רילקס - תמונה 44" },
    { src: relax45, alt: "סוויטת רילקס - תמונה 45" },
    { src: relax46, alt: "סוויטת רילקס - תמונה 46" },
    { src: relax47, alt: "סוויטת רילקס - תמונה 47" },
    { src: relax48, alt: "סוויטת רילקס - תמונה 48" },
    { src: relax49, alt: "סוויטת רילקס - תמונה 49" }
  ];

  const almogImages = [
    { src: almog1, alt: "אחוזת אלמוג - תמונה 1" },
    { src: almog2, alt: "אחוזת אלמוג - תמונה 2" },
    { src: almog3, alt: "אחוזת אלמוג - תמונה 3" },
    { src: almog4, alt: "אחוזת אלמוג - תמונה 4" },
    { src: almog5, alt: "אחוזת אלמוג - תמונה 5" },
    { src: almog6, alt: "אחוזת אלמוג - תמונה 6" },
    { src: almog7, alt: "אחוזת אלמוג - תמונה 7" },
    { src: almog8, alt: "אחוזת אלמוג - תמונה 8" },
    { src: almog9, alt: "אחוזת אלמוג - תמונה 9" },
    { src: almog10, alt: "אחוזת אלמוג - תמונה 10" }
  ];

  const newProjectImages = [
    { src: newProject6, alt: "פרוייקט חדש - תמונה 6" },
    { src: newProject9, alt: "פרוייקט חדש - תמונה 9" },
    { src: newProject1, alt: "פרוייקט חדש - תמונה 1" },
    { src: newProject2, alt: "פרוייקט חדש - תמונה 2" },
    { src: newProject3, alt: "פרוייקט חדש - תמונה 3" },
    { src: newProject4, alt: "פרוייקט חדש - תמונה 4" },
    { src: newProject5, alt: "פרוייקט חדש - תמונה 5" },
    { src: newProject7, alt: "פרוייקט חדש - תמונה 7" },
    { src: newProject8, alt: "פרוייקט חדש - תמונה 8" },
    { src: newProject10, alt: "פרוייקט חדש - תמונה 10" },
    { src: newProject11, alt: "פרוייקט חדש - תמונה 11" },
    { src: newProject12, alt: "פרוייקט חדש - תמונה 12" }
  ];

  const projectsData = [
    {
      id: 1,
      title: "הסוויטה של אושר - סוויטה בצפון הארץ",
      description: "כשאני מעצבת חלל, אני לא עוצרת ביופי החיצוני, אני יוצרת חוויה- כזו שנכנסים אליה וזוכרים. עיצוב טוב לא רק נראה טוב - הוא גורם לך לעצור, להרגיש, לזכור. העיצוב שלי הוא תוצאה של הקשבה ותעוזה, דיוק ושילובים שאחרים לא היו מעזים לחשוב עליהם. אני לא מאמינה בתבניות, ולא חוזרת על עצמי- כי כל אדם הוא סיפור, וכל חלל צריך לספר אחרת.",
      images: osherImages
    },
    {
      id: 2,
      title: "פרוייקט חדש",
      description: "פעם עיצוב היה מותרות, היום זו שפה! בעיניי עיצוב הוא כלי שמשקף אישיות, ערכים ואמירה! ולכן אני עובדת עם אנשים ועסקים שמבינים שעיצוב טוב הוא מעבר לאסתטיקה- היא דרך לבטא מי אתה, מה אתה מאמין בו, ואיך אתה רוצה לשדר זאת לעולם.",
      images: newProjectImages
    },
    {
      id: 3,
      title: "סוויטת רילקס",
      description: "עיצבתי עשרות חללים לאורך השנים, ולכל אחד קול יחודי משלו. אבל אם יש משהו שמשותף לכולם- זה הרושם שהם משאירים. בין אם זה בית או עסק- אני באה לעשות קסם. עם חיוך, חוצפה טובה וסטייל שאי אפשר להתעלם ממנו.",
      images: relaxImages
    },
    {
      id: 4,
      title: "אחוזת אלמוג",
      description: "כשאני מעצבת חלל, אני לא עוצרת ביופי החיצוני, אני יוצרת חוויה- כזו שנכנסים אליה וזוכרים. העיצוב שלי הוא תוצאה של הקשבה ותעוזה, דיוק ושילובים שאחרים לא היו מעזים לחשוב עליהם.",
      images: almogImages
    }
  ];

  return (
    <>
      <div className={styles.background}>
        <div className={styles.title} id="פרוייקטים">הפרוייקטים שלי</div>
        <div className={styles.description}>
          כשאני מעצבת חלל, אני לא עוצרת ביופי החיצוני, אני יוצרת חוויה- כזו שנכנסים אליה וזוכרים.
          עיצוב טוב לא רק נראה טוב - הוא גורם לך לעצור, להרגיש, לזכור.
          העיצוב שלי הוא תוצאה של הקשבה ותעוזה, דיוק ושילובים שאחרים לא היו מעזים לחשוב עליהם.
          אני לא מאמינה בתבניות, ולא חוזרת על עצמי- כי כל אדם הוא סיפור, וכל חלל צריך לספר אחרת.
          פעם עיצוב היה מותרות, היום זו שפה!
          בעיניי עיצוב הוא כלי שמשקף אישיות, ערכים ואמירה!
          ולכן אני עובדת עם אנשים ועסקים שמבינים שעיצוב טוב הוא מעבר לאסתטיקה-
          היא דרך לבטא מי אתה, מה אתה מאמין בו, ואיך אתה רוצה לשדר זאת לעולם.
          עיצבתי עשרות חללים לאורך השנים, ולכל אחד קול יחודי משלו.
          אבל אם יש משהו שמשותף לכולם- זה הרושם שהם משאירים.
          בין אם זה בית או עסק- אני באה לעשות קסם.
          עם חיוך, חוצפה טובה וסטייל שאי אפשר להתעלם ממנו.
        </div>
        <div className={styles.projectsList}>
          {projectsData.map((project, index) => (
            <div key={project.id} className={styles.projectSection}>
              <div className={styles.projectContent}>
                <ProjectCarousel
                  projectNumber={String(index + 1).padStart(2, '0')}
                  images={project.images}
                  title={project.title}
                  description={project.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SivanNew;