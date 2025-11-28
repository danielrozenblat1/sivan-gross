import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import logoImage from "../images/סיון גרוס לוגו לבן.png";
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
        {/* <h1 className={styles.englishTitle}>SIVAN GROSS | INTERIOR DESIGN</h1> */}
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
          {/* WhatsApp Icon */}
          <svg className={styles.buttonIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="white"/>
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