"use client"

import { useState } from "react";
import Interface from "@/Components/Interface";
import Keybored from "@/Components/Keybored";
import { useLevel } from "@/app/Context/LevelContext";
import DotGrid from "../../../Components/DotGrid"
import ShowLevel from '@/Components/ShowLevel';
import Backwardsbutton from '@/Components/mini-Components/backwardsbutton';
import { useRouter } from 'next/navigation';

export default function Playing(){
  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');
  const [tries, setTries] = useState(0);
  const { level, setLevel } = useLevel();

  const router = useRouter();
  const nav = () => router.push('/play');

  return (
    <div style={{ position: "relative" }}>
      <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#000000"
        activeColor="#000000"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <section id='backwards'>
        <Backwardsbutton nav={nav}/>
      </section>

      <section id='level'>
        <ShowLevel level={level}/>
      </section>

      <section id='Interface'>
        <Interface 
          words={words} 
          currentWord={word} 
          tries={tries}
          setWords={setWords}
          setWord={setWord}
          setTries={setTries}
          level={level}
          setLevel={setLevel}
        />
      </section>

      <section id="Keybored">
        <Keybored setWord={setWord} setTries={setTries} setWords={setWords} />
      </section>
    </div>
  );
}
