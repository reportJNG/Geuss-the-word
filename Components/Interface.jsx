import { useState } from 'react';
import styles from './Interface.module.css';
import Line from './Line'
export default function Interface({word,tries}){
    const[arw,setArw]=useState([]);

    
    return(
        <div className={styles.container}>
            <div>
            <Line arw={arw}/>
            <Line arw={arw}/>
            <Line arw={arw}/>
            <Line arw={arw}/>
            <Line arw={arw}/>
            </div>

        </div>
    )
}