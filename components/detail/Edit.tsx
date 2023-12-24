'use client';

import React from 'react';
import styles from './page.module.scss';
import Modal from '@/components/modal/Modal';
import { useRouter } from 'next/navigation';

const EditBtn: React.FC<DeleteEditBtnProps> = ({ postId }) => {
  let router = useRouter();

  const handleEdit = () => {
    router.push(`/study-post/edit/${postId}`);
  };

  return (
    <Modal
      modalBtn={`글수정`}
      modalBtnStyle={styles.deleteEditBtn}
      message={`정말 수정하시겠습니까?`}
      onFunction={handleEdit}
    ></Modal>
  );
};

export { EditBtn };
