'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';

const Modal: React.FC<ModalProps> = ({
  modalBtn,
  modalBtnStyle,
  message,
  onFunction,
  mark,
  successMessage,
}) => {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = (e: React.MouseEvent) => {
    // console.log('closeModal called');
    setActive(false);
    setModal(false);
    setSuccessModal(false);
    e.stopPropagation();
  };

  const closeOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleConfirm = () => {
    setActive(false);
    const result = onFunction();
    if (typeof result !== 'undefined') {
      setModal(result);
    }
    if (result === true) {
      setSuccessModal(true);
    }
  };

  const modalOrder = () => {
    // console.log('오픈Modal called');
    setActive(true);
  };

  return (
    <>
      <div
        onClick={modalOrder}
        className={
          active === true ? styles.modalContainerFirst : styles.modalContainer
        }
      >
        <button className={modalBtnStyle} onClick={openModal}>
          {modalBtn}
        </button>
        {modal ? (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={closeOnClick}>
              {mark ? <span>{mark}</span> : ''}
              <p>{message}</p>
              <div>
                <button onClick={handleConfirm}>확인</button>
                <button onClick={closeModal}>닫기</button>
              </div>
            </div>
          </div>
        ) : null}
        {successModal && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={closeOnClick}>
              <p>{successMessage}</p>
              <div>
                <button onClick={closeModal}>닫기</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
