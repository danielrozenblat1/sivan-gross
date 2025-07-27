import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const ProjectCarousel = ({ images, title, description, projectNumber }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);

  const handleImageClick = (index) => {
    if (index !== currentIndex && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    handleImageClick(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    handleImageClick(newIndex);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const openFullscreen = () => {
    setFullscreenIndex(currentIndex);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const handleFullscreenPrevious = () => {
    const newIndex = fullscreenIndex === 0 ? images.length - 1 : fullscreenIndex - 1;
    setFullscreenIndex(newIndex);
  };

  const handleFullscreenNext = () => {
    const newIndex = fullscreenIndex === images.length - 1 ? 0 : fullscreenIndex + 1;
    setFullscreenIndex(newIndex);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Mouse drag handlers for main image
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    e.preventDefault();
  };

  const handleMouseMoveMain = (e) => {
    if (!isDragging || !dragStart) return;
    
    const dragDistance = e.clientX - dragStart;
    
    // Update mouse position for visual effects
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const handleMouseUp = (e) => {
    if (!isDragging || !dragStart) return;
    
    const dragDistance = e.clientX - dragStart;
    const threshold = 100;
    
    if (dragDistance > threshold) {
      handlePrevious();
    } else if (dragDistance < -threshold) {
      handleNext();
    }
    
    setIsDragging(false);
    setDragStart(null);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isFullscreen) {
        if (e.key === 'ArrowLeft') handleFullscreenPrevious();
        if (e.key === 'ArrowRight') handleFullscreenNext();
        if (e.key === 'Escape') closeFullscreen();
      } else {
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isFullscreen, fullscreenIndex]);

  // אם אין תמונות, לא מציגים כלום
  if (!images || images.length === 0) {
    return (
      <div className={styles.carouselContainer}>
        <div className={styles.noImagesMessage}>
          <p>לא נמצאו תמונות להצגה</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselContent}>
        {/* Header - Right aligned */}
        {(projectNumber || title || description) && (
          <div className={styles.carouselHeader}>
            {projectNumber && (
              <div className={styles.projectNumber}>
                {String(projectNumber).padStart(2, '0')}
              </div>
            )}
            {title && (
              <div className={styles.titleGlass}>
                <h1 className={styles.carouselTitle}>{title}</h1>
              </div>
            )}
            {description && (
              <div className={styles.descriptionGlass}>
                <p className={styles.carouselDescription}>{description}</p>
              </div>
            )}
          </div>
        )}

        {/* Main Image Display */}
        <div 
          className={styles.mainImageContainer}
          onMouseMove={handleMouseMoveMain}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button 
            className={`${styles.navButton} ${styles.navButtonLeft}`} 
            onClick={handlePrevious}
            aria-label="תמונה קודמת"
          >
            <div className={styles.buttonGlass}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          <div 
            className={`${styles.mainImageWrapper} ${isTransitioning ? styles.transitioning : ''} ${isDragging ? styles.dragging : ''}`}
            style={{
              '--mouse-x': `${mousePosition.x}%`,
              '--mouse-y': `${mousePosition.y}%`
            }}
            onClick={!isDragging ? openFullscreen : undefined}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.imageGlassFrame}>
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className={styles.mainImage}
                draggable={false}
              />
              <div className={styles.imageReflection}></div>
              <div className={styles.imageBorder}></div>
            </div>
            
            <div className={styles.imageOverlay}>
            </div>
          </div>

          <button 
            className={`${styles.navButton} ${styles.navButtonRight}`} 
            onClick={handleNext}
            aria-label="תמונה הבאה"
          >
            <div className={styles.buttonGlass}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Thumbnail Strip with Counter */}
        <div className={styles.thumbnailStrip}>
          <div className={styles.thumbnailGlassContainer}>
            <div className={styles.imageCounter}>
              <span className={styles.counterNumber}>{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className={styles.counterSeparator}>—</span>
              <span className={styles.counterTotal}>{String(images.length).padStart(2, '0')}</span>
            </div>
            
            <div className={styles.thumbnailContainer}>
              {images.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => handleImageClick(index)}
                  aria-label={`תמונה ${index + 1}`}
                >
                  <div className={styles.thumbnailGlass}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={styles.thumbnailImage}
                      draggable={false}
                    />
                    <div className={styles.thumbnailOverlay}></div>
                    <div className={styles.thumbnailBorder}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className={styles.progressIndicators}>
          <div className={styles.progressGlass}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.progressDot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => handleImageClick(index)}
                aria-label={`עבור לתמונה ${index + 1}`}
              >
                <div className={styles.dotInner}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className={styles.fullscreenModal} 
          onClick={closeFullscreen}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.fullscreenContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.fullscreenClose} onClick={closeFullscreen} aria-label="סגור מסך מלא">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button className={`${styles.fullscreenNav} ${styles.fullscreenNavLeft}`} onClick={handleFullscreenPrevious} aria-label="תמונה קודמת">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <img
              src={images[fullscreenIndex].src}
              alt={images[fullscreenIndex].alt}
              className={styles.fullscreenImage}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              draggable={false}
            />
            
            <button className={`${styles.fullscreenNav} ${styles.fullscreenNavRight}`} onClick={handleFullscreenNext} aria-label="תמונה הבאה">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={styles.fullscreenCounter}>
              <span>{String(fullscreenIndex + 1).padStart(2, '0')}</span>
              <span style={{margin: '0 1rem', opacity: 0.7}}>—</span>
              <span>{String(images.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;