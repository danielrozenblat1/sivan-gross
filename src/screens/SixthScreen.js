import styles from "./SixthScreen.module.css"

const SixthScreen = () => {
  return (
    <>
      <div className={styles.title}>ובגדול.. זה נראה ככה</div>
      <div className={styles.description}>
      תפעילו את הסרטון ותהנו :)
      </div>

      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/rNMC2AOjZWQ" // החלף ל-ID של הסרטון שלך
            title="סיון גרוס - עיצוב פנים"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default SixthScreen
