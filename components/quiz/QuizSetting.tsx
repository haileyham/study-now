'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

export default function QuizSetting() {
  const [questionNum, setQuestionNum] = useState(10);
  const [timerDuration, setTimerDuration] = useState(10);
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

  return (
    <>
      <main className={styles.main}>
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
        <button onClick={handleMoveQuiz}>퀴즈 풀기</button>
      </main>
    </>
  );
}
