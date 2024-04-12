import Link from 'next/link';
import styles from './page.module.scss';
import React from 'react';

export default function ContactComponent() {
  return (
    <div className={styles.contactContainer}>
      <Link href="#">
        <img src="/images/character/koala.png" alt="" />
        <p>공지</p>
      </Link>
      <Link href="#">
        <img src="/images/character/dragonPhone.png" alt="" />
        <p>문의</p>
      </Link>
      <Link href="#">
        <img src="/images/character/pandaNews.png" alt="" />
        <p>뉴스</p>
      </Link>
      <Link href="#">
        <img src="/images/character/mouseSign.png" alt="" />
        <p>이벤트</p>
      </Link>
    </div>
  );
}
