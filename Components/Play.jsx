'use client'
import styles from "./Play.module.css"
import { useRouter } from 'next/navigation'
import { useName } from '@/app/Context/NameContext'

export default function Play() {
  const router = useRouter()
  const { name, setName } = useName()

  const Play = () =>{
    router.push("/play")
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Ready to Challenge Your Mind?</h1>
        <p>Test your vocabulary skills and unlock the mystery word!</p>
      </div>

      <div className={styles.Inp}>
        <input 
          type="text" 
          required 
          maxLength={26} 
          minLength={3} 
          value={name} 
          onChange={(e)=>setName(e.target.value)} 
          placeholder="Name ..." 
        />
      </div>

      <div className={styles.btn}>
        <button
          className={styles.playButton}
          onClick={Play}
          disabled={name.trim().length < 3 || name.trim().length > 10}
        >
          <span className={styles.playIcon}>▶</span>
          <span className={styles.playText}>Start Game</span>
        </button>
      </div>
    </div>
  )
}
