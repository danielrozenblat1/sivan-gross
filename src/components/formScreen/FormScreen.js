import React, { useState } from 'react';
import styles from './FormScreen.module.css';

const FormScreen = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    reason: ''
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    reason: ''
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      valid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      valid = false;
    }

    // Validate phone number (Israeli format)
    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      valid = false;
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      valid = false;
    }

    // Validate reason
    if (!formData.reason.trim()) {
      newErrors.reason = 'נא להזין סיבת פנייה';
      valid = false;
    } else if (formData.reason.trim().length < 5) {
      newErrors.reason = 'סיבת הפנייה חייבת להכיל לפחות 5 תווים';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: '',
            phone: '',
            reason: ''
          });
          setSubmitted(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className={styles.formScreenContainer} id="טופס">
      <div className={styles.titleContainer}>
        <span className={styles.titleEnglish}>Contact Me</span>
        <div className={styles.title}>צרו איתי קשר</div>
      </div>
      
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="fullName">שם מלא</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
              value={formData.fullName}
              onChange={handleChange}
              placeholder="השם המלא שלך"
              disabled={isSubmitting || submitted}
            />
            {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="phone">מספר טלפון</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              value={formData.phone}
              onChange={handleChange}
              placeholder="050-0000000"
              disabled={isSubmitting || submitted}
            />
            {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="reason">סיבת הפנייה</label>
            <textarea
              id="reason"
              name="reason"
              className={`${styles.textarea} ${errors.reason ? styles.inputError : ''}`}
              value={formData.reason}
              onChange={handleChange}
              placeholder="ספרו לי במה אוכל לעזור לכם"
              rows={4}
              disabled={isSubmitting || submitted}
            />
            {errors.reason && <p className={styles.errorText}>{errors.reason}</p>}
          </div>
          
          <button 
            type="submit" 
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
            disabled={isSubmitting || submitted}
          >
            {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'סיון, בואי נדבר!'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormScreen;