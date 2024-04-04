import styles from './page.module.scss';
import React from 'react';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.animationA}></div>
      <div className={styles.animationB}></div>
      <div className={styles.animationC}></div>
      <div className={styles.animationA}></div>
      <div className={styles.animationB}></div>
    </div>
  );
}
