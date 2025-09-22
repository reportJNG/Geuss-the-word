
import styles from "./Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
    
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Guess the Word – Fun & Simple Game</h1>
          <p>
            Welcome to <strong>Guess the Word</strong>! 🎉<br /><br />
            Each level has a <strong>secret 5-letter word</strong>.<br />
            Your goal is to <strong>guess the word</strong> in as few tries as possible.<br /><br />
            Here’s how it works:<br />
            - Letters that appear <strong>black or gray</strong> do <strong>not exist</strong> in the word.<br />
            - Letters that appear <strong>yellow</strong> exist in the word but are in the <strong>wrong position</strong>.<br />
            - Letters that appear <strong>green</strong> are in the <strong>correct position</strong>.<br /><br />
            Use logic and deduction to figure out the correct word before running out of attempts!<br />
            Can you guess the word and complete all the levels? Test your brain and have fun! 🧠✨
          </p>
        </div>
      </main>
    </div>
  )
}
