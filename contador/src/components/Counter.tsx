import { useState } from 'react';
import styles from './Counter.module.css';

export function Counter() {
  const [count, setCount] = useState<number>(0);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className={styles.counterContainer}>
      <h1 className={styles.title}>Contador Interativo</h1>
      <div className={styles.counterDisplay}>{count}</div>
      <button
        className={styles.incrementButton}
        onClick={incrementCounter}
        aria-label="Incrementar contador em 1"
      >
        Incrementar +1
      </button>
    </div>
  );
}
