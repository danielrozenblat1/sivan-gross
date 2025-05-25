import React, { useState, useEffect, useRef } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import ScrollReveal from 'scrollreveal';

import styles from "./ForthScreen.module.css";

import { Home, Shield, Brain, FileStack } from 'lucide-react';
import Button from '../components/button/Button';
import ParralexScreen from './ParralexScreen';
import FifthScreen from './FifthScreen';
import SocialLinks from '../components/social/Social';

// Heebo פונט משתמש ב-HeeboR כגרסה רגילה של הפונט

const ForthScreen = () => {
    const [index, setIndex] = useState(0);
    const featuresRef = useRef(null);
    const introRef = useRef(null);
    const summaryRef = useRef(null);
    const parallaxRef = useRef(null);
    
    const INTRO_TEXTS = [
        "נכנסים לבית חדש?",
        "חולמים על עיצוב יוקרתי לבית?",
        "רוצים לשדרג את החלל שלכם?",
        "מתלבטים בין סגנונות עיצוב?",
        "מחפשים פתרונות עיצוב פרקטיים?"
    ];
    
    const FEATURE_ITEMS = [
        { 
            icon: Home, 
            title: "התאמה אישית",
            text: "עיצוב שמשקף את האופי האישי שלך, יוצר סדר וארגון ומנצל כל פינה בחכמה"
        },
        { 
            icon: Shield, 
            title: "בטחון",
            text: "בית הוא העוגן והבטחון שלנו, המקום בו אנחנו מרגישים מוגנים ויכולים להיות אנחנו עצמנו"
        },
        { 
            icon: Brain, 
            title: "רוגע",
            text: "יצירת חלל מאוזן שמעניק תחושת רוגע, נחת ונוחות ומאפשר לנו להתחדש בסוף כל יום"
        },
        { 
            icon: FileStack, 
            title: "התנהלות חכמה",
            text: "ליווי מקצועי שחוסך טעויות יקרות, זמן ותסכול וממקסם את הערך מכל שקל בתקציב"
        }
    ];

    // Text transition effect
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex(index => index + 1),
            3000 // Change every 3 seconds
        );
        return () => clearInterval(intervalId);
    }, []);
    
    // Parallax effect implementation
    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                // Get the scroll position
                const scrollPosition = window.scrollY;
                // Calculate the new position for the parallax image
                // The division value controls the speed (higher = slower)
                const translateY = scrollPosition * 0.4;
                // Apply the transform
                parallaxRef.current.style.transform = `translateY(${translateY}px)`;
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // ScrollReveal configuration - Improved implementation
    useEffect(() => {
        // Initialize ScrollReveal once
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1200,
            delay: 100,
            opacity: 0,
            scale: 0.9,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            mobile: true,
            reset: true,  // Set to true to replay animations when scrolling up
            useDelay: 'always',
            viewFactor: 0.1 // Element needs to be only 10% in view before triggering
        });

        // Add a small delay to ensure DOM elements are fully rendered
        const timer = setTimeout(() => {
            // Reveal intro description
            if (introRef.current) {
                sr.reveal(introRef.current, {
                    origin: 'bottom',
                    distance: '20px',
                    delay: 100
                });
            }

            // Special animation sequence for features
            if (featuresRef.current) {
                // Create different animation for each feature box
                const animations = [
                    { origin: 'bottom', rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: 0.8 },
                    { origin: 'left', rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: 0.85 },
                    { origin: 'right', rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: 0.9 },
                    { origin: 'top', rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: 0.95 }
                ];
                
                // Select all feature boxes
                const boxes = featuresRef.current.querySelectorAll(`.${styles.featureBox}`);
                
                // Apply different reveal to each box
                boxes.forEach((box, index) => {
                    const animation = animations[index % animations.length];
                    
                    sr.reveal(box, {
                        origin: animation.origin,
                        distance: '40px',
                        rotate: animation.rotate,
                        opacity: 0,
                        scale: animation.scale,
                        delay: 200 + (index * 150),
                        interval: 150,
                        cleanup: false,
                        duration: 1000 + (index * 100),
                        afterReveal: (el) => {
                            // Add a subtle highlight effect after reveal
                            el.classList.add(styles.highlightEffect);
                            
                            // Animate the icon separately with a slight delay
                            const icon = el.querySelector(`.${styles.iconContainer}`);
                            if (icon) {
                                icon.style.animation = `pulseIcon 1.5s ${index * 0.1}s ease-out`;
                            }
                        }
                    });
                });
            }

            // Reveal summary with bottom-up animation
            if (summaryRef.current) {
                sr.reveal(summaryRef.current, {
                    origin: 'bottom',
                    distance: '30px',
                    delay: 500,
                    duration: 1000
                });
            }
        }, 200);
        
        // Cleanup function
        return () => {
            clearTimeout(timer);
            sr.destroy();
        };
    }, []); // Empty dependency array - only run once on mount

    return (
        <>
            <div className={styles.container}>
                <div className={styles.parallaxContainer}>
                    <div ref={parallaxRef} className={styles.parallaxImage}></div>
                </div>
                
                <div className={styles.introSection}>
                    <div className={styles.introBox}>
                        <TextTransition springConfig={presets.gentle} inline>
                            <span>{INTRO_TEXTS[index % INTRO_TEXTS.length]}</span>
                        </TextTransition>
                    </div>
                </div>
                
                <div ref={introRef} className={styles.sectionDescription}>
                    <p>חלל הבית שלכם הוא המקום שאתם מתחילים איתו את הבוקר ומסיימים איתו את היום, פנים המשרד שלכם הוא המקום שאתם מעבירים בו את רוב היום ומכניסים אליו לקוחות ואורחים <br/> חלל הפנים של הנכס שלכם הוא אזור הנוחות שלכם וכדי לדייק אותו בצורה הטובה ביותר אני תמיד דוגלת שכל התהליך איתי ישרה: </p>
                </div>
                
                <div ref={featuresRef} className={styles.featuresRow}>
                    {FEATURE_ITEMS.map((item, idx) => (
                        <div 
                            key={idx} 
                            className={styles.featureBox}
                        >
                            <div className={styles.iconContainer}>
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>
                            <div className={styles.textContainer}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div ref={summaryRef} className={styles.buttonContainer}>
                    <Button text="סיון, בואי נדבר!"/>
                </div>

                <ParralexScreen/>
                <FifthScreen/>
                <SocialLinks/>
            </div>
        </>
    );
};

export default ForthScreen;