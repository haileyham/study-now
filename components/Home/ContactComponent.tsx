import Link from 'next/link';
import styles from './page.module.scss';
import React from 'react';

export default function ContactComponent() {
  return (
    <div className={styles.contactContainer}>
      <Link href="#">
        <img src="/images/character/blue.png" alt="" />
        <p>문의</p>
      </Link>
      <Link href="#">
        <img src="/images/character/rabbitBook.png" alt="" />
        <p>학습</p>
      </Link>
      <Link href="#">
        <img src="/images/character/catBook.png" alt="" />
        <p>상담</p>
      </Link>
      <Link href="#">
        <img src="/images/character/rabbitBook.png" alt="" />
        <p>연락</p>
      </Link>
    </div>
  );
}
