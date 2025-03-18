import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import logoImage from "../images/סיון גרוס אייקון.png";
import Loader from '../components/loader/Loader';

const FirstScreen = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);

  // מעבר אוטומטי בין התמונות כל 3.5 שניות
  useEffect(() => {
    if (!isFirstImageLoaded) return; // Don't start interval until first image is loaded
    
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex, isFirstImageLoaded]);

  // Preload the first image
  useEffect(() => {
    if (images && images.length > 0) {
      const firstImage = new Image();
      firstImage.src = images[0].src;
      firstImage.onload = () => {
        setIsFirstImageLoaded(true);
      };
    }
  }, [images]);

  const goToNextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newNextIndex = (currentIndex + 1) % images.length;
    setNextIndex(newNextIndex);
    
    setTimeout(() => {
      setCurrentIndex(newNextIndex);
      setIsTransitioning(false);
    }, 2000); // הארכת משך זמן האנימציה לתנועה חלקה יותר
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newNextIndex = (currentIndex - 1 + images.length) % images.length;
    setNextIndex(newNextIndex);
    
    setTimeout(() => {
      setCurrentIndex(newNextIndex);
      setIsTransitioning(false);
    }, 2000); // הארכת משך זמן האנימציה לתנועה חלקה יותר
  };

  // Render Loader until the first image is loaded
  if (!isFirstImageLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`
              ${styles.carouselItem}
              ${index === currentIndex ? styles.active : ''}
              ${index === nextIndex && isTransitioning ? styles.next : ''}
            `}
          >
            <img src={image.src} className={styles.carouselImage} alt={image.caption || `תמונה ${index + 1}`} />
            {image.caption && <div className={styles.caption}>{image.caption}</div>}
          </div>
        ))}
      </div>
      
      {/* Glass panel for Sivan's information with image on top */}
      <div className={styles.glassPanel}>
        <div className={styles.logoContainer}>
          <img 
            src={logoImage} 
            alt="Sivan Gross Logo" 
            className={styles.logoImage}
          />
        </div>
        <h1 className={styles.englishTitle}>SIVAN GROSS | HOME DESIGN</h1>
      </div>
      
      {/* נקודות אינדיקציה */}
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setNextIndex(index);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 500);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FirstScreen;