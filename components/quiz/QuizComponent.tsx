'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import Timer from './Timer';

interface QuizProps {
  questionNum: number;
  timerDuration: number;
  quizType: string;
}

const QuizComponent: React.FC<QuizProps> = ({
  questionNum,
  timerDuration,
  quizType,
}) => {
  let router = useRouter();
  const quizData = [
    {
      id: 1,
      question:
        '블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q블라블라Q',
      answer: 'hello',
    },
    {
      id: 2,
      question: '블루블루 블루짱',
      answer: 'hello world',
    },
    {
      id: 3,
      question: '블라블라큐큐큐',
      answer: 'hello hi',
    },
    {
      id: 4,
      question: '블라블라큐큐큐4',
      answer: 'hello hi',
    },
    {
      id: 5,
      question: '블라블라큐큐큐5',
      answer: 'hello hi',
    },
    {
      id: 6,
      question: '블라블라큐큐큐6',
      answer: 'hello hi',
    },
  ];

  const [input, setInput] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(Number(questionNum)).fill(''),
  );
  const [resetTime, setResetTime] = useState(timerDuration);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (resetTime > 0) {
      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers[currentQuestion] = e.target.value;
      setUserAnswers(updatedUserAnswers);
    }
  };

  const handleNextButtonClick = () => {
    if (currentQuestion < questionNum - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setInput('');
      localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
      setResetTime(timerDuration);
    } else {
      localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
      router.push('/quiz/results');
    }
  };

  return (
    <>
      <div className="container">
        <main className={styles.main}>
          <section className={styles.quizInfo}>
            <div className={styles.time}>
              <span>⏰</span>
              <span>Time</span>
              <Timer
                resetTime={resetTime}
                onReset={() => setResetTime((prevTime) => prevTime - 1)}
              ></Timer>
            </div>
            <div className={styles.check}>
              <label htmlFor="save">
                <input type="checkbox" id="save"></input>
                다시보기
              </label>
            </div>
          </section>
          <section className={styles.quiz}>
            <div className={styles.questionBox}>
              <p>{quizData[currentQuestion].question}</p>
            </div>
            <span
              className={
                userAnswers[currentQuestion]
                  ? `btn-s ${styles.answerEmpty} ${styles.answer}`
                  : styles.answerEmpty
              }
            >
              {userAnswers[currentQuestion]}
            </span>
            <div className={styles.answerBox}>
              <input
                type="text"
                value={
                  resetTime === 0
                    ? '시간 경과 : 추가 답변 입력 불가'
                    : userAnswers && userAnswers[currentQuestion] !== undefined
                    ? userAnswers[currentQuestion]
                    : ''
                }
                onChange={handleInputChange}
                disabled={resetTime <= 0}
              />
              <button
                className={
                  userAnswers[currentQuestion] || resetTime == 0
                    ? `btn-s ${styles.nextBtn} ${styles.nextBtnActive}`
                    : `btn-s ${styles.nextBtn}`
                }
                onClick={handleNextButtonClick}
              >
                Next ▶
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default QuizComponent;
