'use client'; 
import styles from "./Play.module.css"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"

export default function Play() {
  const route = useRouter();
  const [Name,setName] = useState ('') ;
  const Play = () =>{
        route.push(`/play?name=${encodeURIComponent(Name)}`);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Ready to Challenge Your Mind?</h1>
          <p>Test your vocabulary skills and unlock the mystery word!</p>
        </div>
        <div className={styles.Inp}>
          <input type="text" required maxLength={26} minLength={3} value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Name ..."/>
        </div>
        <div className={styles.btn}>
          <button className={styles.playButton}   onClick={Play} disabled={Name.trim().length<3||Name.trim.length>10}>

            <span className={styles.playIcon}>▶</span>
            <span className={styles.playText}>Start Game</span>
          </button>
        </div>
      </div>
    </>
  )
}
