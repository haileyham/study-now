'use client';
import Modal from '../modal/Modal';
import styles from './page.module.scss';
import React, { ChangeEvent, useState } from 'react';

type InquiryType = {
  title: string;
  content: string;
};

export default function InquiriesComponent() {
  const [inquiry, setInquiry] = useState<InquiryType>({
    title: '',
    content: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setInquiry({ ...inquiry, [name]: value });
  };

  const clearInput = () => {
    setInquiry({ title: '', content: '' });
  };

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
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={inquiry.title}
            />
          </div>
          <div className={styles.content}>
            <span>문의사항</span>
            <textarea
              name="content"
              id="content"
              onChange={handleChange}
              value={inquiry.content}
            ></textarea>
          </div>
          <Modal
            modalBtn={'문의 보내기'}
            modalBtnStyle={`btn-m ${styles.inquiryBtn}`}
            message={'문의 사항을 보내시겠습니까?'}
            onFunction={() => {
              clearInput();
              return true;
            }}
            successMessage="전송이 완료됐습니다."
          ></Modal>
        </div>
      </section>
    </div>
  );
}
