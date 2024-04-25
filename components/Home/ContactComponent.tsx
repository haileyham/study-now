import Link from 'next/link';
import styles from './page.module.scss';
import React from 'react';

export default function ContactComponent() {
  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.img}>
          <img src="/images/character/foxNews.png" alt="스터디나우" />
        </div>
        <div>
          <p>Study Now</p>
          <div className={styles.contact}>
            <Link href="/communications/inquiries">
              <img src="/images/icons/inquiry.svg" alt="문의" />
              <span>고객문의</span>
            </Link>
            <Link href="#">
              <img src="/images/icons/mail.svg" alt="메일" />
              <span>메일</span>
            </Link>
            <Link href="https://github.com/haileyham/study-now">
              <img src="/images/icons/news.svg" alt="개발소식" />
              <span>개발소식</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
