'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';

interface QuizData {
  question: string[];
  userAnswer: string[];
}

export default function QuizResults() {
  const [userQuiz, setUserQuiz] = useState<QuizData | null>(null);

  useEffect(() => {
    const userAnswersLocal: string | null = localStorage.getItem('userQuiz');
    if (userAnswersLocal) {
      const userData: QuizData = JSON.parse(userAnswersLocal);
      setUserQuiz(userData);
    }
  }, []);

  return (
    <div className="container">
      <main className={styles.mainResults}>
        <h2>퀴즈 결과 확인</h2>
        {userQuiz && (
          <ul>
            {userQuiz.question.map((question, index) => {
              const userAnswer = userQuiz.userAnswer[index];
              return (
                <li key={index}>
                  <strong>{`Quiz. ${index + 1}`}</strong>
                  <p>
                    <span>질문</span>
                    {question}
                  </p>
                  <p>
                    <span>답변</span>
                    {userAnswer}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </div>
  );
}
