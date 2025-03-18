import React, { useEffect, useRef } from 'react';
import styles from './Steps.module.css';

// המרת מספרים לרומיים
const toRomanNumeral = (num) => {
  const romanNumerals = [
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';
  let remaining = num;

  for (const { value, numeral } of romanNumerals) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }

  return result;
};

const Steps = () => {
  const stepsRef = useRef([]);

  const steps = [
    {
      title: 'תכנון הבית',
      description: 'בחירת סגנון עיצובי והגדרת הצרכים של הדיירים'
    },
    {
      title: 'בחירת חומרים',
      description: 'בחירת חומרי גמר, ריהוט ואביזרים המתאימים לקונספט העיצובי'
    },
    {
      title: 'ביצוע העבודה',
      description: 'יישום התכנון בשטח תוך הקפדה על איכות הביצוע והחומרים'
    }
  ];

  // Scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealed);
        }
      });
    }, observerOptions);

    // Observe each step element
    stepsRef.current.forEach(step => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach(step => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <div className={styles.stepsContainer}>
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={styles.step}
          ref={el => stepsRef.current[index] = el}
        >
          <div className={styles.stepNumberWrapper}>
            <div 
              className={styles.stepNumber} 
              data-roman={toRomanNumeral(index + 1)}
            />
          </div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;