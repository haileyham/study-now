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
              <button></button>
            </div>
          </section>
          <section className={styles.jobListSection}></section>
        </main>
      </div>
    </>
  );
}
