'use client';
import Header from '../../Components/Header2'
import About from '../../Components/About'
import DotGrid from "../../Components/DotGrid"
import ShowLevel from "../../Components/ShowLevel"
import ButtonStart from "../../Components/ButtonStart"
import { useState } from 'react'

export default function Start (){
        const [level,setLevel]=useState(0);
        const [isactive,setIsActive]=useState(false);
    return(
        
<div>
      
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


      <Header />
        <section id='lobby'>
      <section id="ShowLevel">
        <ShowLevel level={level}/>
      </section>  
        
        <section id="ButtonStart">
        <ButtonStart isactive={isactive} setIsActive={setIsActive}/>
      </section> 
         
        </section>


      <section id="about">
        <About />
      </section>
    </div>
     </div> 
    )
}