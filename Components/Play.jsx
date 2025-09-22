import styles from "./Play.module.css"

export default function Play() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Ready to Challenge Your Mind?</h1>
          <p>Test your vocabulary skills and unlock the mystery word!</p>
        </div>
        <div className={styles.btn}>
          <button className={styles.playButton}>
            <span className={styles.playIcon}>▶</span>
            <span className={styles.playText}>Start Game</span>
          </button>
        </div>
      </div>
    </>
  )
}
