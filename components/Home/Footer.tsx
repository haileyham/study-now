import Link from 'next/link';
import styles from './page.module.scss';
import React from 'react';

export default function Footer() {
  return (
    <>
      <div className={`${styles.container} ${styles.footer}`}>
        <div className={styles.content}>
          <ul>
            <li>
              <Link href="/communications/notices">공지사항</Link>
            </li>
            <li>
              <Link href="#">이용약관</Link>
            </li>
            <li>
              <Link href="#">개인정보처리방침</Link>
            </li>
          </ul>
          <p>상업적 목적이 없는 개인 포트폴리오용 페이지입니다.</p>
        </div>
        <div className={styles.logo}>
          <img src="/images/icons/studyNow.svg" alt="studyNow_logo" />
          <p>ⓒ 2024 StudyNow. All rights reserved. </p>
        </div>
      </div>
    </>
  );
}
