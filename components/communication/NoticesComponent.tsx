import styles from './page.module.scss';
import React from 'react';

export default function NoticesComponent() {
  return (
    <div className={styles.container}>
      <header>
        <h2>Notice</h2>
      </header>
      <section className={`${styles.notice} ${styles.board}`}>
        <ul>
          <li>
            <p>New! 채용 정보 제공</p>
          </li>
          <li>
            <p>스터디 검색 기능 추가</p>
          </li>
          <li>
            <p>퀴즈 신규 업데이트</p>
          </li>
          <li>
            <p>Study Now 출시!</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
