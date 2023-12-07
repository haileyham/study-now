'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  const closeOnClick = (e: any) => {
    e.stopPropagation();
  };

  const handleConfirm = () => {};

  return (
    <>
      <div className={styles.modalContainer}>
        <button className={styles.modalOpenBtn} onClick={openModal}>
          modal
        </button>
        {modal ? (
          <div className={styles.modal} onClick={openModal}>
            <div className={styles.modalContent} onClick={closeOnClick}>
              <div className={styles.closeBtn} onClick={openModal}>
                &times;
              </div>
              <p>정말 나가겠습니까?</p>
              <button onClick={handleConfirm}>확인</button>
              <button onClick={openModal}>닫기</button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
