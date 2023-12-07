'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';

const Modal: React.FC<ModalProps> = ({
  modalBtn,
  modalBtnStyle,
  message,
  onFunction,
}) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  const closeOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleConfirm = () => {
    onFunction();
  };

  return (
    <>
      <div className={styles.modalContainer}>
        <button className={modalBtnStyle} onClick={openModal}>
          {modalBtn}
        </button>
        {modal ? (
          <div className={styles.modal} onClick={openModal}>
            <div className={styles.modalContent} onClick={closeOnClick}>
              <p>{message}</p>
              <button onClick={handleConfirm}>확인</button>
              <button onClick={openModal}>닫기</button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Modal;
