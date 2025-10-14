'use client';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'
import styles from './PlayerInfo.module.css';
export default function PlayerInfo (){
const usesearch = useSearchParams();
    let test = usesearch.get('name') ?? '';
   const name = test.trim().length<3 || test.trim().length>10 ? 'Player':test.trim();
    return(
        <div className={styles.container}>
                <div className={styles.color}>
                <div className={styles.logo}>
                     
                </div></div>        

                <div className={styles.name}>

                        <h3>{name}</h3>

                </div>

        </div>
    )
}