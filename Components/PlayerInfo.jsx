'use client';
import styles from './PlayerInfo.module.css';
import { useName } from '../app/Context/NameContext';
export default function PlayerInfo (){
const {name,setName}=useName()
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