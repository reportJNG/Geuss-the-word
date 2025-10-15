import styles from './Keybored.module.css';

export default function Keybored({setWord,setTries}){

const letters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
const clickable=(l)=>{
setWord(prev => {
  if (prev.trim().length === 5) {
    setTries(t => t + 1);
    return '';
  } else {
    return prev + l;
  }
})
}




    return(<div className={styles.container}>
        <div className={styles.boxletters}>
                {letters.map((val,i)=>(
                    <button key={i} onClick={()=>clickable(val)}>{val}</button>
                ))}
<button onClick={()=>setWord(prev=>prev.trim().slice(0,-1))}>⌫</button>
        </div>



    </div>
    )
}