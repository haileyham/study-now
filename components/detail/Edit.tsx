'use client';

import React from 'react';
import styles from './page.module.scss';
import Modal from '@/components/modal/Modal';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const EditBtn: React.FC<DeleteEditBtnProps> = ({ postId, session, author }) => {
  let router = useRouter();

  const handleEdit = () => {
    router.push(`/study-post/edit/${postId}`);
  };

  const handleLogin = () => {
    signIn();
  };

  const handleCancle = () => {
    return false;
  };

  return (
    <>
      {session ? (
        session.user.email === author || session.user.role === 'admin' ? (
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
            message={`작성자만 접근 가능합니다`}
            onFunction={handleCancle}
            mark={`!`}
          ></Modal>
        )
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
