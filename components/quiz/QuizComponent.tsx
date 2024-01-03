'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';

export default function QuizComponent() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    setAnswer(input);
  };

  const handleNextButtonClick = () => {
    localStorage.setItem('answer', answer);
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
            <p>
              Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q.
              블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q.
              블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q. 블라블라Q.
              블라블라Q. 블라블라Q. 블라블라Q. 블라블라
            </p>
            <span className={styles.answer}>{answer}</span>
            <input type="text" onChange={handleInputChange} />
            <button className="btn-s" onClick={handleButtonClick}>
              제출
            </button>
            <button
              className={
                answer
                  ? `btn-s ${styles.nextBtn} ${styles.nextBtnActive}`
                  : `btn-s ${styles.nextBtn}`
              }
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
