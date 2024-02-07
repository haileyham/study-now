'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import QuizTypeSelect from './QuizTypeSelect';

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
    router.push(
      `/quiz/play?ty=${quizType}&q=${questionNum}&t=${timerDuration}`,
    );
  };

  const handleQuizTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuizType(e.target.value);
  };

  return (
    <>
      <div className="container">
        <main className={styles.main}>
          <section className={styles.quizSetting}>
            <QuizTypeSelect onChange={handleQuizTypeChange}></QuizTypeSelect>
            <div className={styles.quizSettingNum}>
              <span className={styles.settingName}>문제수</span>
              <div>
                <button
                  onClick={() => {
                    handleDecrease('questionNum');
                  }}
                >
                  -
                </button>
                <span>{questionNum}개</span>
                <button
                  onClick={() => {
                    handleIncrease('questionNum');
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.quizSettingNum}>
              <span className={styles.settingName}>시간제한</span>
              <div>
                <button
                  onClick={() => {
                    handleDecrease('timerDuration');
                  }}
                >
                  -
                </button>
                <span>{timerDuration}초</span>
                <button
                  onClick={() => {
                    handleIncrease('timerDuration');
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className={`btn-m ${styles.quizBtn}`}
              onClick={handleMoveQuiz}
            >
              퀴즈 풀기
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
