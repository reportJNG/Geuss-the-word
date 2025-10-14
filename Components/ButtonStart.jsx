import styles from './ButtonStart.module.css'

export default function ButtonStart({isactive,setIsActive}){

    const start=()=>{
        setIsActive((prev)=>!prev);
    }
    return(
        <div className={styles.container}>
                    
                <button onClick={start}>Start</button>

        </div>
    )
}