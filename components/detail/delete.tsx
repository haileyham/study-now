'use client';

import { useRouter } from 'next/navigation';

const DeleteBtn: React.FC<DeleteBtnProps> = ({ postId }) => {
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
      <button
        onClick={handleDelete}
        style={{ border: 'none', cursor: 'pointer' }}
      >
        글삭제
      </button>
    </>
  );
};

export { DeleteBtn };
