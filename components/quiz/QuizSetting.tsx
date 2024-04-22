'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import QuizTypeSelect from './QuizTypeSelect';
import Modal from '../modal/Modal';

export default function QuizSetting() {
  const [questionNum, setQuestionNum] = useState(5);
  const [timerDuration, setTimerDuration] = useState(10);
  const [quizType, setQuizType] = useState('프론트엔드');
  const router = useRouter();

  const handleIncrease = (name: string) => {
    if (name === 'questionNum') {
      setQuestionNum((prev) => Math.min(prev + 5, 50));
    } else if (name === 'timerDuration') {
      setTimerDuration((prev) => Math.min(prev + 5, 100));
    }
  };

  const handleDecrease = (name: string) => {
    if (name === 'questionNum') {
      setQuestionNum((prev) => Math.max(5, prev - 5));
    } else if (name === 'timerDuration') {
      setTimerDuration((prev) => Math.max(5, prev - 5));
    }
  };

  const handleMoveQuiz = () => {
    if (quizType !== '프론트엔드') {
      return false;
    }
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
            {/* <button
              className={`btn-m ${styles.quizBtn}`}
              onClick={handleMoveQuiz}
            >
              퀴즈 풀기
            </button> */}
            {quizType === '프론트엔드' ? (
              <Modal
                modalBtn={'퀴즈 풀기'}
                modalBtnStyle={`btn-m ${styles.quizBtn}`}
                message={'문제를 푸시겠습니까?'}
                onFunction={handleMoveQuiz}
              ></Modal>
            ) : (
              <Modal
                modalBtn={'퀴즈 풀기'}
                modalBtnStyle={`btn-m ${styles.quizBtn}`}
                message={'문제 유형 업데이트 예정입니다 :)'}
                onFunction={handleMoveQuiz}
                mark={`!`}
              ></Modal>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
