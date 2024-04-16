'use client';
import useToggle from '@/hooks/useToggle';
import styles from './page.module.scss';
import React from 'react';
import getNoticesContent from './data/getNoticesContent';

export default function NoticesComponent() {
  const [toggle, setToggle] = useToggle(false);
  const noticesContent = getNoticesContent();

  return (
    <div className={styles.container}>
      <header>
        <h2>Notice</h2>
      </header>
      <section className={`${styles.notice} ${styles.board}`}>
        <ul>
          {noticesContent.map((item, i) => {
            return (
              <li onClick={setToggle} key={i}>
                <p className={toggle ? styles.title : ''}>
                  {item.title}
                  {toggle ? <span>▲</span> : <span>▼</span>}
                </p>
                <div className={toggle ? styles.content : styles.none}>
                  <span>{item.content}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
