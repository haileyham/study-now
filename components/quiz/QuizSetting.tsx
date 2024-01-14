'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

export default function QuizSetting() {
  const [questionNum, setQuestionNum] = useState(10);
  const [timerDuration, setTimerDuration] = useState(10);
  const [quizType, setQuizType] = useState('프론트엔드');
  const router = useRouter();

  const handleIncrease = (name: string) => {
    if (name === 'questionNum') {
      setQuestionNum((prev) => prev + 5);
    } else if (name === 'timerDuration') {
      setTimerDuration((prev) => prev + 5);
    }
  };

  const handleDecrease = (name: string) => {
    if (name === 'questionNum') {
      setQuestionNum((prev) => prev - 5);
    } else if (name === 'timerDuration') {
      setTimerDuration((prev) => prev - 5);
    }
  };

  const handleMoveQuiz = () => {
    router.push(`/quiz/play?q=${questionNum}&t=${timerDuration}`);
  };

  const handleQuizTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuizType(e.target.value);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.quizType}>
          <label htmlFor="quizType">문제유형</label>
          <select name="문제유형" id="quizType" onChange={handleQuizTypeChange}>
            <option value="프론트엔드">프론트엔드</option>
            <option value="CS">CS</option>
          </select>
        </div>
        <div className={styles.questionNum}>
          <button
            onClick={() => {
              handleDecrease('questionNum');
            }}
          >
            -
          </button>
          <span>{questionNum}</span>
          <button
            onClick={() => {
              handleIncrease('questionNum');
            }}
          >
            +
          </button>
        </div>
        <div className={styles.timerDuration}>
          <button
            onClick={() => {
              handleDecrease('timerDuration');
            }}
          >
            -
          </button>
          <span>{timerDuration}</span>
          <button
            onClick={() => {
              handleIncrease('timerDuration');
            }}
          >
            +
          </button>
        </div>
        <button onClick={handleMoveQuiz}>퀴즈 풀기</button>
      </main>
    </>
  );
}
