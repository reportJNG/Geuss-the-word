'use client';
import {  createContext, useContext, useState } from 'react';

const LevelContext = createContext();
export  function LevelProvider({children}){
    const [level,setLevel]=useState(0);

    return(
        <LevelContext.Provider value={{level,setLevel}}>
                {children}
        </LevelContext.Provider>
    )
}

export function useLevel(){
    return useContext(LevelContext);
}