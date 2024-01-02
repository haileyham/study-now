import React from 'react';
import styles from './page.module.scss';

export default function QuizComponent() {
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
            <span className={styles.answer}></span>
            <input type="text" />
            <button className="btn-s">제출</button>
          </section>
        </main>
      </div>
    </>
  );
}
