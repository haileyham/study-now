'use client';
import Modal from '../modal/Modal';
import styles from './page.module.scss';
import React, { useState } from 'react';

export default function InquiriesComponent() {
  return (
    <div className={styles.container}>
      <header>
        <h2>Inquiry</h2>
      </header>
      <section className={styles.inquiry}>
        <div className={styles.inquiryText}>
          <strong>StudyNow에 궁금하신 것을 물어보세요</strong>
          <div className={styles.title}>
            <span>제목</span>
            <input type="text" />
          </div>
          <div className={styles.content}>
            <span>문의사항</span>
            <textarea name="content" id="content"></textarea>
          </div>
          <Modal
            modalBtn={'문의 보내기'}
            modalBtnStyle={`btn-m ${styles.inquiryBtn}`}
            message={'문의 사항을 보내시겠습니까?'}
            onFunction={() => {
              return true;
            }}
          ></Modal>
        </div>
      </section>
    </div>
  );
}
