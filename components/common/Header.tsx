'use client';

import React from 'react';
import Modal from '../modal/Modal';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter();

  const handleConfirm = () => {
    router.back();
  };

  return (
    <>
      <section className={styles.writeHeader}>
        <Modal
          modalBtn={'◀'}
          modalBtnStyle={styles.backBtn}
          message={'정말 나가겠습니까?'}
          onFunction={handleConfirm}
        ></Modal>
        <h1>{title}</h1>
      </section>
    </>
  );
};

export default Header;
