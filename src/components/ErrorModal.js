import React from 'react'
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {

    const errorClosingHandler=()=>props.closeError();

  return (
    <div>
        <div className={styles.backdrop}></div>
    
<div className={styles.modal}>
    <header className={styles.header}>
        <h2>Invalid input!</h2>
    </header>
    <div className={styles.content}>
        <p>All entered values must be greater than 0.</p>
    </div>
    <footer className={styles.actions}>
        <button className={styles.button} onClick={errorClosingHandler}>Okay</button>
    </footer>
</div> 
</div> )
}

export default ErrorModal