import React, { useEffect, useRef } from 'react';
import styles from './ParralexScreen.module.css'

const ParallaxScreen = () => {
  const containerRef = useRef(null);
  const imageRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    // Parallax and fade effect on scroll
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      
      // Get the container's position relative to viewport
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll position relative to the element
      const scrollPosition = rect.top;
      
      // Update each image with a different parallax effect
      imageRefs.forEach((ref, index) => {
        if (!ref.current) return;
        
        // Different speed for each image - negative values make it scroll up as page scrolls down
        const speed = -0.3 - (index * 0.15); 
        const parallaxValue = scrollPosition * speed;
        
        // Apply different transform to each image - note negative translateY makes it move up
        ref.current.style.transform = `translateY(${parallaxValue}px) 
                                      rotate(${index * 0.5 - 0.5}deg)`;
      });
      
      // Fade in effect when element enters viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate opacity based on position in viewport
        const opacity = Math.min(
          1,
          1 - Math.abs(scrollPosition - windowHeight/2) / windowHeight
        );
        container.style.opacity = opacity;
        
        // Add visible class for the reveal animation
        container.classList.add(styles.visible);
        
        // Add active class when element is centered in viewport
        if (Math.abs(scrollPosition - windowHeight/4) < windowHeight/3) {
          container.classList.add(styles.active);
        } else {
          container.classList.remove(styles.active);
        }
      } else if (rect.bottom < 0 || rect.top > windowHeight) {
        // Remove visible class when element is out of viewport
        container.classList.remove(styles.visible);
        container.classList.remove(styles.active);
      }
    };

    // Initial call to set the correct state on load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Mouse move effect for enhanced parallax
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Only apply effect when container is in view
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Calculate mouse position relative to the container center
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        // First calculate the scroll-based parallax values for each image
        const parallaxValues = imageRefs.map((_, index) => {
          return rect.top * (-0.3 - (index * 0.15));
        });
        
        // Then apply different movement to each image
        imageRefs.forEach((ref, index) => {
          if (!ref.current) return;
          
          const strength = 15 - (index * 4); // Different movement strength
          ref.current.style.transform = `
            translateX(${mouseX * strength}px) 
            translateY(${parallaxValues[index]}px)
            rotate(${index * 0.5 - 0.5 + mouseX * 2}deg)
          `;
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.imagesContainer}>
        <div className={`${styles.imageWrapper} ${styles.image1}`}>
          <div 
            className={styles.backgroundImage} 
            ref={imageRefs[0]} 
          />
          <div className={styles.overlay}>
            <div className={styles.parallaxLayer1}></div>
            <div className={styles.parallaxLayer2}></div>
          </div>
        </div>
        
        <div className={`${styles.imageWrapper} ${styles.image2}`}>
          <div 
            className={styles.backgroundImage} 
            ref={imageRefs[1]} 
          />
          <div className={styles.overlay}>
            <div className={styles.parallaxLayer1}></div>
            <div className={styles.parallaxLayer2}></div>
          </div>
        </div>
        
        <div className={`${styles.imageWrapper} ${styles.image3}`}>
          <div 
            className={styles.backgroundImage} 
            ref={imageRefs[2]} 
          />
          <div className={styles.overlay}>
            <div className={styles.parallaxLayer1}></div>
            <div className={styles.parallaxLayer2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxScreen;