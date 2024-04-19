import Link from 'next/link';
import styles from './page.module.scss';
import React from 'react';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <ul>
            <li>
              <Link href="/communications/notices">공지</Link>
            </li>
            <li>
              <Link href="/communications/inquiries">문의</Link>
            </li>
            <li>
              <Link href="/communications/news">뉴스</Link>
            </li>
            <li>
              <Link href="/communications/events">이벤트</Link>
            </li>
          </ul>
        </nav>
        <main className={styles.mainContainer}>{children}</main>
      </div>
    </>
  );
}
