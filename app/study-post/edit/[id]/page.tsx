import WritingEditor from '@/components/writing/WritingEditor';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react';

export default async function StudyEdit(props: StudyDetailProps) {
  const db = (await connectDB).db('study_platform');
  const result: WritingEditor = await db
    .collection('study_posts')
    .findOne({ _id: new ObjectId(props.params.id) });
  result._id = result._id.toString();
  // console.log(result);

  return (
    <>
      <WritingEditor result={result}></WritingEditor>
    </>
  );
}
