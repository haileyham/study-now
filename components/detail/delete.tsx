'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/modal/Modal';
import styles from './page.module.scss';

const DeleteBtn: React.FC<DeleteEditBtnProps> = ({ postId }) => {
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
          router.push('/study-post');
        }
      } else {
        console.error('에러발생');
      }
    } catch (error) {
      console.error('에러내용:', error);
    }
  };

  return (
    <>
      <Modal
        modalBtn={`글 삭제`}
        modalBtnStyle={styles.deleteEditBtn}
        message={`정말 삭제하시겠습니까?`}
        onFunction={handleDelete}
      ></Modal>
    </>
  );
};

export { DeleteBtn };
