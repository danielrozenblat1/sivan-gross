import React from 'react';
import styles from './Regular.module.css';
import Button from '../button/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images
import result1 from "../../images/סיון גרוס המלצות 1.png";
import result2 from "../../images/סיון גרוס המלצות 2.png";
import result3 from "../../images/סיון גרוס המלצות 3.png";
import result4 from "../../images/סיון גרוס המלצות 4.png";
import result5 from "../../images/סיון גרוס המלצות 5.png";
import Testimonials from '../newRecommends/NewRecommends';

const Recommendations = () => {
  const images = [
        { src: result4 },
            { src: result5 },
       { src: result1 },
    { src: result2 },
    { src: result3 },
    
  ];

  const sliderSettings = {
    infinite: true,
    speed: 700,
    autoplaySpeed: 3500,
    dots: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: window.innerWidth < 450 ? 1 :
                  window.innerWidth <= 1050 ? 2 : 4,
    slidesToScroll: 1,
  };



  return (
    <div className={styles.secondScreenContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>קצת המלצות</h2>
        <div className={styles.titleEnglish}>Testimonials</div>
      </div>
      <div className={styles.description}>
    גללו כלפי מעלה בין התמונות
      </div>
   <Testimonials testimonialImages={images}/>
      <Button text="סיון, בואי נדבר!" />
    </div>
  );
};

export default Recommendations;