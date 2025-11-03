"use client"

import styles from './ShowLevel.module.css';

export default function ShowLevel({ level }) {
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Guess The Word</h2>
      <h3 className={styles.level}>Your Level : <span className={styles.number}>{level}</span></h3>
    </div>
  );
}
