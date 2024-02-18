'use client';

import React from 'react';
import Modal from '../modal/Modal';
import { useRouter } from 'next/navigation';

export default function WriteBtn() {
  let router = useRouter();
  const handleWrite = () => {
    router.push(`/study-post/write`);
  };

  return (
    <>
      <Modal
        modalBtn={`글쓰기`}
        modalBtnStyle={`btn-s`}
        message={`글을 작성하시겠습니까?`}
        onFunction={handleWrite}
      ></Modal>
    </>
  );
}
