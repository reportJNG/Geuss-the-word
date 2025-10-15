'use client';
import { useState } from 'react';
import Interface from "@/Components/Interface";
import Keybored from "@/Components/Keybored";
import { useLevel } from '@/app/Context/LevelContext';
export default function Playing(){
const [word,setWord]=useState('');
const {level,SetLevel}=useLevel();
const [tries,setTries]=useState(0);
    return(
<div>

<section id='Interface'>
        
<Interface word={word} tries={tries}/>

</section>



<section id="Keybored">
    <Keybored  setWord={setWord} setTries={setTries}/>
</section>


</div>
    )
}