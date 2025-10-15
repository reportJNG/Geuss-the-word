import { useRouter } from 'next/navigation';
import styles from './ButtonStart.module.css'

export default function ButtonStart(){
    const router = useRouter();
    const start=()=>{
            router.push('play/playing')        
    }
    return(
        <div className={styles.container}>
                    
                <button onClick={start}>Start</button>

        </div>
    )
}