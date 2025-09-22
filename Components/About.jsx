import styles from "./About.module.css"

export default function About() {
  return (
    
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://www.instagram.com/re_hamza_0/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          📷 Instagram
        </a>
        <a
          href="https://github.com/reportJNG"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          🐙 GitHub
        </a>
      </div>
      <p>✨ Made with ❤️ by Hamza dev</p>
      <p>© 2025 All rights reserved</p>
    </footer>
  )
}
