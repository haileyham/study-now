import React from 'react';
import styles from './page.module.scss';

export default function MyPage() {
  return (
    <>
      <div className="container">
        <main className={styles.main}>
          <h2 className="a11y-hidden">마이페이지</h2>
          <section className={styles.profile}>
            <div>
              <img
                src="https://github.com/haileyham/character/blob/main/%EC%BA%A1%EC%B2%98.JPG?raw=true"
                alt="profile"
              />
            </div>
            <h3>Hailey</h3>
            <p>test@test.com</p>
            <span>
              <p>&#128393;</p>
            </span>
          </section>
          <section className={styles.myActive}>
            <div>
              <span>3</span>
              <p>comment</p>
            </div>
            <div>
              <span>1</span>
              <p>post</p>
            </div>
          </section>
          <section className={styles.myQuiz}>
            <div>
              <p>🌈</p>
              <p>내가 푼 문제</p>
              <span>3</span>
            </div>
            <div>
              <p>🎈</p>
              <p>스크랩 문제</p>
              <span>5</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
