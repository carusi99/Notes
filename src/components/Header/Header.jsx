import styles from "./Header.module.css";
export default function Header({handleState}){
     return ( 
        <div className={styles.Header}>
        <h1 className={styles.Header__title}>
            Welcome to things to do <span>{`${localStorage.getItem("username")}`}</span>!
        </h1>
        <button onClick={handleState} className={styles.Header__button}>
          Exit
        </button>
        </div> 
    )
     }
  