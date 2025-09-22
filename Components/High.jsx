import styles from "./High.module.css"

export default function High() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.jpg" alt="Logo"  />
      </div>
      <div className={styles.title}>Geuss The Word</div>
      <nav className={styles.links}>
        <a href="#home" className={styles.link}>Home</a>
        <a href="#about" className={styles.link}>About</a>
        <a href="#play" className={styles.playBtn}>▶  Play</a>
      </nav>
    </div>
  )
}
