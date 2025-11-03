"use client"
import styles from './Interface.module.css';
import Line from './Line';
import { useEffect, useState } from 'react';

export default function Interface({ words, currentWord, tries, setWords, setWord, setTries, level, setLevel }) {

  const secretWords = [
    "APPLE",
    "GHOST",
    "BRAIN",
    "CHAIR",
    "WATER"
  ];

  const secret = secretWords[level];

  const [win,setWin]=useState(false);
  const [lose,setLose]=useState(false);

  useEffect(()=>{

    // WIN
    if(tries > 0 && words[tries-1] === secret && !win){
      setWin(true);
      setLevel(prev => {

        const next = prev + 1;

        // if reach max => go won page
        if(next === 5){
          router.push("/play/playing/won");
        }

        return next;
      });

      setTimeout(()=>{
        // reset round
        setWords([]);
        setWord("");
        setTries(0);
        setWin(false);
        setLose(false);
      },600)
    }

    // LOSE
    if(tries === 5 && !win){
      setLose(true);

      setTimeout(()=>{
        setWords([]);
        setWord("");
        setTries(0);
        setWin(false);
        setLose(false);
      },1000)
    }

},[tries,words,secret,win])


  return(
    <div className={styles.container}>
      <div className={styles.box}>

        {Array.from({length:5}).map((_,i)=>{

          if(i < tries){
return <Line key={i} arw={words[i].split('')} secret={secret}/>
          }
          if(i === tries){
return <Line key={i} arw={currentWord.split('')} secret={secret}/>
          }
return <Line key={i} arw={[]} secret={secret}/>
        })}

      </div>
    </div>
  )

}
