import styles from './Line.module.css';

export default function Line({arw}){

    return(
        <div className={styles.container}>

            <div className={styles.box}>
                <div className={styles.square}>
                    {arw[0]}
                </div>
                <div className={styles.square}>
                    {arw[1]}
                </div>
                <div className={styles.square}>
                    {arw[2]}
                </div>
                <div className={styles.square}>
                    {arw[3]}
                </div>
                <div className={styles.square}>
                    {arw[4]}
                </div>
            </div>

        </div>
    )
}