'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';

export default function QuizComponent() {
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
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = e.target.value;
    setUserAnswers(updatedUserAnswers);
  };

  // const handleButtonClick = () => {
  //   setAnswer(input);
  // };

  const handleNextButtonClick = () => {
    // localStorage.setItem('answer', answer);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setInput('');
    } else {
      localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
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
            </div>
            <div className={styles.check}>
              <label htmlFor="save">
                <input type="checkbox" id="save"></input>
                다시보기
              </label>
            </div>
          </section>
          <section className={styles.quiz}>
            {/* <p>
              Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q.
              블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q.
              블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q.
              블라블라Q. 블라블라Q. 블라블라Q. 블라블라
            </p> */}
            <p>{quizData[currentQuestion].question}</p>
            {/* <span className={styles.answer}>{answer}</span> */}
            <span className={styles.answer}>
              {userAnswers[currentQuestion]}
            </span>
            <input type="text" onChange={handleInputChange} />
            {/* <button className="btn-s" onClick={handleButtonClick}>
              제출
            </button> */}
            <button
              // className={
              //   answer
              //     ? `btn-s ${styles.nextBtn} ${styles.nextBtnActive}`
              //     : `btn-s ${styles.nextBtn}`
              // }
              onClick={handleNextButtonClick}
            >
              Next ▶
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
