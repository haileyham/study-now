'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/modal/Modal';
import styles from './page.module.scss';
import { signIn } from 'next-auth/react';

const DeleteBtn: React.FC<DeleteEditBtnProps> = ({
  postId,
  session,
  author,
}) => {
  let router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/post/delete?postId=${postId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('삭제완룡');
        {
          router.refresh();
          router.push('/study-post/list');
        }
      } else {
        console.error('에러발생');
      }
    } catch (error) {
      console.error('에러내용:', error);
    }
  };

  const handleLogin = () => {
    signIn();
  };

  const handleCancel = () => {
    return false;
  };

  return (
    <>
      {session ? (
        session.user.email === author || session.user.role === 'admin' ? (
          <Modal
            modalBtn={`글 삭제`}
            modalBtnStyle={styles.deleteEditBtn}
            message={`정말 삭제하시겠습니까?`}
            onFunction={handleDelete}
          ></Modal>
        ) : (
          <Modal
            modalBtn={`글 삭제`}
            modalBtnStyle={styles.deleteEditBtn}
            message={`작성자만 접근 가능합니다`}
            onFunction={handleCancel}
            mark={`!`}
          ></Modal>
        )
      ) : (
        <Modal
          modalBtn={`글 삭제`}
          modalBtnStyle={styles.deleteEditBtn}
          message={`로그인 필요`}
          onFunction={handleLogin}
          mark={`!`}
        ></Modal>
      )}
    </>
  );
};

export { DeleteBtn };
