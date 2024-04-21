'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import useToggle from '@/hooks/useToggle';

interface QuizData {
  question: string[];
  userAnswer: string[];
  answer: string[];
}

export default function QuizResults() {
  const [userQuiz, setUserQuiz] = useState<QuizData | null>(null);
  const [toggle, setToggle] = useToggle(false);

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
              const answer = userQuiz.answer[index];
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
                  <p onClick={setToggle} className={styles.answerBox}>
                    {toggle ? <span>정답보기 ▲</span> : <span>정답보기 ▼</span>}
                    <div
                      className={toggle ? styles.answer : styles.answerHidden}
                    >
                      {answer}
                    </div>
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
