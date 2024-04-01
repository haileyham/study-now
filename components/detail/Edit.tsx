'use client';

import React from 'react';
import styles from './page.module.scss';
import Modal from '@/components/modal/Modal';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const EditBtn: React.FC<DeleteEditBtnProps> = ({ postId, session }) => {
  let router = useRouter();

  const handleEdit = () => {
    router.push(`/study-post/edit/${postId}`);
  };

  const handleLogin = () => {
    signIn();
  };

  return (
    <>
      {session ? (
        <Modal
          modalBtn={`글 수정`}
          modalBtnStyle={styles.deleteEditBtn}
          message={`정말 수정하시겠습니까?`}
          onFunction={handleEdit}
        ></Modal>
      ) : (
        <Modal
          modalBtn={`글 수정`}
          modalBtnStyle={styles.deleteEditBtn}
          message={`로그인 필요`}
          onFunction={handleLogin}
          mark={`!`}
        ></Modal>
      )}
    </>
  );
};

export { EditBtn };
