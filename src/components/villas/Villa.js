import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Villa.module.css';
import Button from '../button/Button';

const GalleryComponent = ({ title, description, images }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const thumbnailRefs = useRef([]);

  // התמקדות באלמנט הפעיל בכל פעם שהאינדקס משתנה
  useEffect(() => {
    if (thumbnailRefs.current[mainImageIndex]) {
      thumbnailRefs.current[mainImageIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [mainImageIndex]);

  const handlePrevious = () => {
    setMainImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMainImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  return <>
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>

      <div className={styles.mainImageContainer}>
        <img
          src={images[mainImageIndex]}
          alt={`תמונה ${mainImageIndex + 1}`}
          className={styles.mainImage}
        />
        
        <button
          onClick={handlePrevious}
          className={`${styles.navButton} ${styles.prevButton}`}
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
        <button
          onClick={handleNext}
          className={`${styles.navButton} ${styles.nextButton}`}
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      <div className={styles.thumbnailWrapper}>
        <div className={styles.thumbnailContainer}>
          {images.map((image, idx) => (
            <img
              key={idx}
              ref={el => thumbnailRefs.current[idx] = el}
              src={image}
              alt={`תמונה ${idx + 1}`}
              onClick={() => handleThumbnailClick(idx)}
              className={`${styles.thumbnail} ${
                mainImageIndex === idx ? styles.activeThumbnail : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    <Button text="אהבתי! בואו נדבר" message="היי סיון הגעתי מהדף, ראיתי עבודות שלך ואשמח שנדבר על..."/>
</>
};

export default GalleryComponent;