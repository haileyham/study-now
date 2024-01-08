'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import Timer from './Timer';

export default function QuizComponent() {
  let router = useRouter();

  const quizData = [
    {
      id: 1,
      question: '블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q.',
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
  ];

  const [input, setInput] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(quizData.length).fill(''),
  );

  const handleInputChange = (e: any) => {
    // setInput(e.target.value);
    // 추후예정) 데이터에 문제별 num 부여하고 그에따라 저장? 혹은 마지막페이지에서..고민중
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = e.target.value;
    setUserAnswers(updatedUserAnswers);
  };

  const handleNextButtonClick = () => {
    // localStorage.setItem('answer', answer);
    // 추후 문제 갯수에 따라서 조정예정
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setInput('');
      localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
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
              <Timer></Timer>
            </div>
            <div className={styles.check}>
              <label htmlFor="save">
                <input type="checkbox" id="save"></input>
                다시보기
              </label>
            </div>
          </section>
          <section className={styles.quiz}>
            <p>{quizData[currentQuestion].question}</p>
            <span
              className={
                userAnswers[currentQuestion]
                  ? `btn-s ${styles.answerEmpty} ${styles.answer}`
                  : styles.answerEmpty
              }
            >
              {userAnswers[currentQuestion]}
            </span>
            <input
              type="text"
              value={userAnswers[currentQuestion]}
              onChange={handleInputChange}
            />
            <button
              className={
                userAnswers[currentQuestion]
                  ? `btn-s ${styles.nextBtn} ${styles.nextBtnActive}`
                  : `btn-s ${styles.nextBtn}`
              }
              onClick={handleNextButtonClick}
            >
              {/* 추후예정) 갯수에 따라서 Results 로 바꾸기 */}
              Next ▶
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
