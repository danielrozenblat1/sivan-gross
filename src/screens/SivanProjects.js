import React, { useState, useEffect } from 'react';
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

import itamar1 from "../images/סיון גרוס הוילה של איתמר 1.png";
import itamar2 from "../images/סיון גרוס הוילה של איתמר 2.png";
import itamar3 from "../images/סיון גרוס הוילה של איתמר 3.png";
import itamar4 from "../images/סיון גרוס הוילה של איתמר 4.png";
import itamar5 from "../images/סיון גרוס הוילה של איתמר 5.png";
import itamar6 from "../images/סיון גרוס הוילה של איתמר 6.png";
import itamar7 from "../images/סיון גרוס הוילה של איתמר 7.png";
import itamar8 from "../images/סיון גרוס הוילה של איתמר 8.png";
import itamar9 from "../images/סיון גרוס הוילה של איתמר 9.png";
import itamar10 from "../images/סיון גרוס הוילה של איתמר 10.png";
import itamar11 from "../images/סיון גרוס הוילה של איתמר 11.png";
import itamar12 from "../images/סיון גרוס הוילה של איתמר 12.png";
import itamar13 from "../images/סיון גרוס הוילה של איתמר 13.png";
import itamar14 from "../images/סיון גרוס הוילה של איתמר 14.png";
import itamar15 from "../images/סיון גרוס הוילה של איתמר 15.png";
import itamar16 from "../images/סיון גרוס הוילה של איתמר 16.png";
import itamar17 from "../images/סיון גרוס הוילה של איתמר 17.png";
import itamar18 from "../images/סיון גרוס הוילה של איתמר 18.png";
import itamar19 from "../images/סיון גרוס הוילה של איתמר 19.png";
import itamar20 from "../images/סיון גרוס הוילה של איתמר 20.png";
import itamar21 from "../images/סיון גרוס הוילה של איתמר 21.png";
import itamar22 from "../images/סיון גרוס הוילה של איתמר 22.png";
import itamar23 from "../images/סיון גרוס הוילה של איתמר 23.png";
import itamar24 from "../images/סיון גרוס הוילה של איתמר 24.png";
import itamar25 from "../images/סיון גרוס הוילה של איתמר 25.png";


import main1 from "../images/אושר ראשית.png"
import main2 from "../images/רילקס ראשית.png"
import main3 from "../images/הורים ראשית.png"
import main4 from "../images/אלמוג ראשית.png"
import main5 from "../images/סיון גרוס הוילה של איתמר 14.png"
import Button from '../components/button/Button';
const SivanNetflixGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleThumbnails, setVisibleThumbnails] = useState(new Set());

  // יצירת מערכי התמונות
  const osherImages = [
   image22, image26, image27, image28, image29,  image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15, image16,  image18, image19, image36, image37, image38, image39, image40,
    image1, image2, image3, image4, image5,  image23,  image35,  image25,
   image32, image33, image34,
    image41, image42
  ];

  const relaxImages = [
    relax2, relax3, relax4, relax32,relax5,  relax7, relax8, relax9, relax10, relax1,
    relax11, relax12, relax13, relax14, relax15, relax16, relax17, relax18, relax19, relax20,
    relax21, relax22, relax23, relax24, relax25, relax26,relax28, relax29, relax30,
    relax31,   relax34, relax35, relax36,  relax38, relax39, relax40,
   relax42, relax43, relax44, relax45, relax46, relax47, relax48, relax49
  ];

  const almogImages = [
    almog1, almog2, almog3, almog4, almog5, almog6, almog7, almog8, almog9, almog10
  ];

  const newProjectImages = [
    newProject9,  newProject6,newProject2,
 newProject7, newProject8, newProject10, newProject11, newProject12  , newProject1,  newProject3, newProject4, newProject5,
  ];
  const itamarImages = [
   itamar14, itamar1, itamar2, itamar3, itamar4, itamar5, itamar6, itamar7, itamar8, itamar9, itamar10,
    itamar11, itamar12, itamar13,  itamar15, itamar16, itamar17, itamar18, itamar19, itamar20,
    itamar21, itamar22, itamar23, itamar24, itamar25
  ];
  const projectsData = [

       {
      id: 5,
      title: "הוילה של איתמר",
      thumbnail: main5,
      images: itamarImages
    },
    {
      id: 1,
      title: "הסוויטה של אושר - סוויטה בצפון הארץ",
      thumbnail: main1,
      images: osherImages
    },
    {
      id: 2,
      title: "סוויטה הורים",
      thumbnail: main3,
      images: newProjectImages
    },
    {
      id: 3,
      title: "סוויטת רילקס",
      thumbnail: main2,
      images: relaxImages
    },
    {
      id: 4,
      title: "אחוזת אלמוג",
      thumbnail: main4,
      images: almogImages
    },
   
  ];

  // Enhanced navigation function with smooth transitions
  const navigateToImage = (newIndex) => {
    if (isTransitioning || newIndex === currentImageIndex) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const nextImage = () => {
    const newIndex = currentImageIndex === selectedProject.images.length - 1 ? 0 : currentImageIndex + 1;
    navigateToImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = currentImageIndex === 0 ? selectedProject.images.length - 1 : currentImageIndex - 1;
    navigateToImage(newIndex);
  };

  const goToImage = (index) => {
    navigateToImage(index);
  };

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      
      switch(e.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'Escape':
          closeGallery();
          break;
        default:
          break;
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedProject, currentImageIndex, isTransitioning]);

  // Animate thumbnails on load
  useEffect(() => {
    projectsData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleThumbnails(prev => new Set([...prev, index]));
      }, index * 150);
    });
  }, []);

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsTransitioning(false);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsTransitioning(false);
    document.body.style.overflow = 'auto';
  };

  return <>
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
   <div className={styles.description} style={{fontWeight:800}}>
    לחצו על כל תמונה כדי לפתוח את הפרוייקט המלא
      </div>

      {/* Netflix-style thumbnails grid */}
      <div className={styles.netflixGrid}>
        {projectsData.map((project, index) => (
          <div 
            key={project.id}
            className={`${styles.netflixThumbnail} ${
              visibleThumbnails.has(index) ? styles.thumbnailVisible : styles.thumbnailHidden
            }`}
            onClick={() => openGallery(project)}
            style={{
              '--delay': `${index * 0.1}s`,
              '--random-rotation': `${(Math.random() - 0.5) * 6}deg`,
              '--random-scale': `${0.95 + Math.random() * 0.1}`
            }}
          >
            <div className={styles.thumbnailImageWrapper}>
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className={styles.thumbnailImage}
              />
              <div className={styles.thumbnailShine}></div>
            </div>
            <div className={styles.thumbnailOverlay}>
              <h3 className={styles.thumbnailTitle}>{project.title}</h3>
              <span className={styles.thumbnailCategory}>פרוייקט עיצוב</span>
            </div>
            <div className={styles.thumbnailGlow}></div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className={`${styles.galleryModal} ${selectedProject ? styles.active : ''}`}>
          <div className={styles.galleryContainer}>
            <button className={styles.galleryClose} onClick={closeGallery}>
              ×
            </button>
            
            <button className={`${styles.galleryNav} ${styles.prev}`} onClick={prevImage}>
            </button>
            
            <img 
              src={selectedProject.images[currentImageIndex]} 
              alt={`${selectedProject.title} - תמונה ${currentImageIndex + 1}`}
              className={`${styles.galleryImage} ${isTransitioning ? styles.transitioning : ''}`}
              onLoad={() => {
                if (isTransitioning) {
                  setTimeout(() => setIsTransitioning(false), 100);
                }
              }}
            />
            
            <button className={`${styles.galleryNav} ${styles.next}`} onClick={nextImage}>
            </button>
            
            <div className={styles.galleryInfo}>
              <div className={styles.galleryCounter}>
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
          
            </div>
            
            <div className={styles.galleryThumbnails}>
              {selectedProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`תמונה זעירה ${index + 1}`}
                  className={`${styles.galleryThumbnail} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
       <Button text="סיון, בואי נדבר על הפרוייקט שלי"/>
    </div>
   
</>
};

export default SivanNetflixGallery;