import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import logoImage from "../images/סיון גרוס אייקון.png";
import Loader from '../components/loader/Loader';

const FirstScreen = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Preload all images before displaying carousel
    const loadImage = (imageSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    // Set up automatic image rotation timer
    const timer = setInterval(() => {
      goToNextSlide();
    }, 4000);

    // Load all images first
    if (images && images.length > 0) {
      Promise.all(images.map(image => loadImage(image.src)))
        .then(() => {
          setImagesLoaded(true);
        })
        .catch((err) => console.error("Error loading images", err));
    }

    return () => clearInterval(timer);
  }, [images]);

  // Navigation functions
  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setCurrentSlide((prev) => {
      const nextSlide = (prev + 1) % images.length;
      return nextSlide;
    });
    
    // Reset transition flag after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition flag after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  };

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("היי סיון הגעתי מהדף, אשמח לשמוע עוד על..");
    window.open(`https://wa.me/972535904070?text=${message}`, '_blank');
  };

  // Phone call handler
  const handlePhoneClick = () => {
    window.location.href = 'tel:+972535904070';
  };

  // Show loader until images are loaded
  if (!imagesLoaded) {
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
              ${currentSlide === index ? styles.active : ''}
              ${(currentSlide + 1) % images.length === index ? styles.next : ''}
            `}
          >
            <img 
              src={image.src} 
              className={styles.carouselImage} 
              alt={image.caption || `Image ${index + 1}`} 
            />
            {image.caption && <div className={styles.caption}>{image.caption}</div>}
          </div>
        ))}
      </div>
      
      {/* Glass panel with logo and title */}
      <div className={styles.glassPanel}>
        <div className={styles.logoContainer}>
          <img 
            src={logoImage} 
            alt="Sivan Gross Logo" 
            className={styles.logoImage}
          />
        </div>
        <h1 className={styles.englishTitle}>SIVAN GROSS | INTERIOR DESIGN</h1>
        {/* <h2 className={styles.hebrewTagline}>עיצוב פנים ואדריכלות</h2> */}
      </div>
      
      {/* Indicators */}
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.floatingButtonsContainer}>
  <button 
    className={`${styles.floatingButton} ${styles.whatsappButton}`} 
    onClick={handleWhatsAppClick}
    aria-label="Contact via WhatsApp"
  >
    {/* אייקון הודעה חדש */}
    <svg className={styles.buttonIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="white"/>
      <path d="M7 9H17V11H7V9Z" fill="white"/>
      <path d="M7 12H14V14H7V12Z" fill="white"/>
      <path d="M7 6H17V8H7V6Z" fill="white"/>
    </svg>
  </button>
  <button 
    className={`${styles.floatingButton} ${styles.phoneButton}`} 
    onClick={handlePhoneClick}
    aria-label="Call Sivan Gross"
  >
    <svg className={styles.buttonIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="white"/>
    </svg>
  </button>
</div>
    </div>
  );
};

export default FirstScreen;