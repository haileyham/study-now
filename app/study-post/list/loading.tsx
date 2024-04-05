import Loading from '@/components/loading/Loading';
import styles from './page.module.scss';
import React from 'react';

export default function loading() {
  return (
    <div className="container">
      <main className={styles.studyMain}>
        <header className={styles.studyHeader}>
          <div>
            <h1>StudyList</h1>
            <p>스터디 멤버를 구하세요!</p>
          </div>
        </header>
        <section className={styles.studySection}>
          <Loading></Loading>
        </section>
      </main>
    </div>
  );
}
