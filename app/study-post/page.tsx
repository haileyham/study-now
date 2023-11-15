import React from 'react';
import styles from './page.module.scss';

export default function StudyPost() {
  return (
    <>
      <main className={styles.studyMain}>
        <header className={styles.studyHeader}>
          <h1>StudyList</h1>
          <p>스터디 멤버를 구하세요!</p>
        </header>
        <section className={styles.studySection}>
          <div className={styles.studyList}>
            <span className={styles.status}>모집중</span>
            <span className={styles.date}>1일전</span>
            <h2>스터디 모집해용</h2>
            <p>우리 지금 해야하는 스터디는 이런 것입니다.</p>
            <div className={styles.postInfo}>
              <span>hailey</span>
              <span>♡ 1</span>
              <span>♧ 2</span>
            </div>
          </div>
          <div className={styles.studyList}>
            <span className={styles.status}>모집중</span>
            <span className={styles.date}>1일전</span>
            <h2>스터디 모집해용</h2>
            <p>우리 지금 해야하는 스터디는 이런 것입니다.</p>
            <div className={styles.postInfo}>
              <span>hailey</span>
              <span>♡ 1</span>
              <span>♧ 2</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
