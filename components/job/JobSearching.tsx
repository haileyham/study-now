import styles from './page.module.scss';
import React from 'react';

export default function JobSearching() {
  return (
    <section className={styles.jobSearchSection}>
      <h2 className="a11y-hidden">채용정보</h2>
      <div className={styles.searchbox}>
        <span>◎</span>
        <input type="text" />
        <span className={styles.searchClose}>Ⅹ</span>
        <ul>
          <li className={styles.searchSelected}>
            <p>이이</p>
          </li>
          <li>
            <p>이이이</p>
          </li>
          <li>
            <p>이이이이</p>
          </li>
        </ul>
      </div>
      <div>{/* <button>무엇을</button> */}</div>
    </section>
  );
}
