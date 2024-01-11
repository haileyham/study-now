'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';

export default function QuizResults() {
  const [userAnswers, setUserAnswers] = useState<string[] | null>(null);

  useEffect(() => {
    const userAnswersLocal = localStorage.getItem('userAnswers');
    if (userAnswersLocal) {
      setUserAnswers(JSON.parse(userAnswersLocal));
    }
  }, []);

  return (
    <div className="container">
      <main className={styles.main}>
        {userAnswers && (
          <ul>
            {userAnswers.map((answer, index) => (
              <li key={index}>{`Question ${index + 1}: ${answer}`}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
