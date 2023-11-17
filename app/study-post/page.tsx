import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

export default function StudyPost() {
  return (
    <>
      <div className="container">
        <main className={styles.studyMain}>
          <header className={styles.studyHeader}>
            <div>
              <h1>StudyList</h1>
              <p>스터디 멤버를 구하세요!</p>
            </div>
            <Link href="/study-post/write">
              <span>글쓰기</span>
            </Link>
          </header>
          <section className={styles.studySection}>
            <Link href="/study-post/detail/abc">
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
            </Link>
            <Link href="/study-post/detail/abc">
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
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
