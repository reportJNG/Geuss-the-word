"use client"

import styles from './Keybored.module.css';
import { useCallback } from "react";

export default function Keybored({ setWord, setTries, setWords }) {
  const letters = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M',
    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
  ];

const clickable = useCallback((l) => {
  setWord(prev => {
    const next = prev + l;

    if (next.length === 5) {
      setWords(old => [...old, next]);
      setTries(t => t + 1);
      return "";
    }

    return next;
  });
}, [setWord,setWords,setTries]);

  return (
    <div className={styles.container}>
      <div className={styles.boxletters}>
        {letters.map((val, i) => (
          <button key={i} onClick={() => clickable(val)}>{val}</button>
        ))}
        <button onClick={() => setWord(prev => prev.slice(0, -1))}>⌫</button>
      </div>
    </div>
  );
}
