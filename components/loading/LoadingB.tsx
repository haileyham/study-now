import styles from './page.module.scss';
import React from 'react';

export default function LoadingB() {
  return (
    <div className={styles.quizLoadingContainer}>
      <div className={styles.animationQuiz}></div>
    </div>
  );
}
