"use client"


import styles from './backwardsbutton.module.css'
import {FiSkipBack} from "react-icons/fi"
import { useRouter } from "next/navigation"

export default function Backwardsbutton({ nav }) {
  const router = useRouter()

  return(
    <div className={styles.container}>
      <button className={styles.button} onClick={nav}>
        <FiSkipBack/>
      </button>
    </div>
  )
}
