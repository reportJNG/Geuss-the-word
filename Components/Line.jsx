"use client"
import styles from "./Line.module.css";

export default function Line({ arw, secret }) {

  return (
    <div className={styles.line}>
      {Array.from({length: 5}).map((_,i)=>{
        
        const letter = arw[i] ? arw[i].toUpperCase() : "";

        let state = "empty"; 
        
        if(letter){
          if(letter === secret[i]) state = "correct"; 
          else if(secret.includes(letter)) state = "exist"; 
          else state = "wrong";
        }

        return (
          <div key={i} className={`${styles.square} ${styles[state]}`}>
            {letter}
          </div>
        )
      })}
    </div>
  )
}
