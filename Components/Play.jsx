"use client";
import { useState } from "react";
import styles from "./Play.module.css"

export default function Play() {
  const [Name,setName] = useState ('') ;
  const Play = () =>{
    if (Name.lenght < 2 || Name.lenght >25 ) { 
      setName('Player');
     }
    
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
          <button className={styles.playButton}   onClick={Play}>

            <span className={styles.playIcon}>▶</span>
            <span className={styles.playText}>Start Game</span>
          </button>
        </div>
      </div>
    </>
  )
}
