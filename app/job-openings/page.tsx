import React from 'react';
import styles from './page.module.scss';

export default function JobOpenings() {
  return (
    <>
      <div className="container">
        <main className={styles.main}>
          <section className={styles.jobSearchSection}>
            <h2 className="a11y-hidden">채용정보</h2>
            <div className={styles.searchbox}>
              <span>◎</span>
              <input type="text" />
              <span className={styles.searchClose}>Ⅹ</span>
            </div>
            <div>
              <button>무엇을</button>
            </div>
          </section>
          <section className={styles.jobListSection}>
            <ul>
              <li>
                <img
                  src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"
                  alt="채용회사이미지"
                />
                <p>제목이다</p>
                <p>내용이다</p>
                <p>기한이다</p>
              </li>
              <li>
                <p>제목이다</p>
                <p>내용이다</p>
              </li>
              <li>
                <p>제목이다</p>
                <p>내용이다</p>
              </li>
              <li>
                <p>제목이다</p>
                <p>내용이다</p>
              </li>
              <li>
                <p>제목이다</p>
                <p>내용이다</p>
              </li>
              <li>
                <p>제목이다</p>
                <p>내용이다</p>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
