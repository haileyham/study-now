'use client';

import React from 'react';
import Modal from '../modal/Modal';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function WriteBtn({ session }: any) {
  let router = useRouter();
  const handleWrite = () => {
    router.push(`/study-post/write`);
  };
  const handleLogin = () => {
    signIn();
  };

  return (
    <>
      {session ? (
        <Modal
          modalBtn={`글쓰기`}
          modalBtnStyle={`btn-s`}
          message={`글을 작성하시겠습니까?`}
          onFunction={handleWrite}
        ></Modal>
      ) : (
        <Modal
          modalBtn={`글쓰기`}
          modalBtnStyle={`btn-s`}
          message={`로그인 필요`}
          onFunction={handleLogin}
          mark={`!`}
        ></Modal>
      )}
    </>
  );
}
