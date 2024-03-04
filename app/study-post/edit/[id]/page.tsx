import WritingEditor from '@/components/writing/WritingEditor';
import { connectDB } from '@/lib/utils/database';
import { ObjectId } from 'mongodb';
import React from 'react';

export default async function StudyEdit(props: StudyDetailProps) {
  const db = (await connectDB).db('study_platform');
  const result: WritingEditor = await db
    .collection('study_posts')
    .findOne({ _id: new ObjectId(props.params.id) });
  result._id = result._id.toString();
  // console.log(result);
  const editText = {
    api: '/api/post/edit',
    modalBtnText: '수정',
    modalMessage: '수정사항을 저장하시겠습니까?',
  };

  return (
    <>
      <WritingEditor result={result} writingEdit={editText}></WritingEditor>
    </>
  );
}
