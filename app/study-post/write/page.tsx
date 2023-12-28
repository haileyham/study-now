import React from 'react';
import WritingEditor from '@/components/writing/WritingEditor';

export default function StudyWrite() {
  const writeText = {
    api: '/api/post/new',
    modalBtnText: '등록',
    modalMessage: '등록사항을 저장하시겠습니까?',
  };

  return (
    <>
      <WritingEditor writingEdit={writeText}></WritingEditor>
    </>
  );
}
