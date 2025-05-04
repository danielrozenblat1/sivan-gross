import React from 'react';
import styles from "./Button.module.css";

const Button = (props) => {
  const handleButtonClick = () => {
    // Get the form ID from props or use a default one
    const formId = props.formId || "טופס";
    
    // Scroll to the form element with smooth animation
    const formElement = document.getElementById(formId);
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <div className={styles.center}>
      <button className={styles.button} onClick={handleButtonClick}>
        <span className={styles.buttonContent}>
          {props.text}
        </span>
        <div className={styles.shine}></div>
      </button>
    </div>
  );
};

export default Button;