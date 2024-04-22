'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import Timer from './Timer';
import Header from '../common/Header';

type Quiz = {
  _id: string;
  num: string;
  question: string;
  answer: string;
  type: string;
};

interface QuizProps {
  questionNum: number;
  timerDuration: number;
  quizData: Quiz[];
}

const QuizComponent: React.FC<QuizProps> = ({
  questionNum,
  timerDuration,
  quizData,
}) => {
  let router = useRouter();

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
      setResetTime(timerDuration);
    } else {
      router.push('/quiz/results');
    }

    const userQuiz = {
      question: quizData
        .slice(0, questionNum)
        .map((question) => question.question),
      userAnswer: userAnswers,
      answer: quizData.slice(0, questionNum).map((question) => question.answer),
    };
    localStorage.setItem('userQuiz', JSON.stringify(userQuiz));
  };

  return (
    <>
      <div className="container">
        <main className={styles.main}>
          <Header title={`Quiz : ${quizData[0].type}`}></Header>
          <section className={styles.quizInfo}>
            <div className={styles.time}>
              <Timer
                resetTime={resetTime}
                onReset={() => setResetTime((prevTime) => prevTime - 1)}
              ></Timer>
              <span>⏰</span>
              <span>Time</span>
            </div>
            {/* <div className={styles.check}>
              <label htmlFor="save">
                <input type="checkbox" id="save"></input>
                다시보기
              </label>
            </div> */}
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
              <textarea
                // type="text"
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
                {questionNum - 1 === currentQuestion ? 'Results ▶' : 'Next ▶'}
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default QuizComponent;
