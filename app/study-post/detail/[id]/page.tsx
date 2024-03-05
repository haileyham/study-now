import React from 'react';
import { connectDB } from '@/lib/utils/database';
import { ObjectId } from 'mongodb';
import { Detail } from '@/components/detail/Detail';

export default async function StudyDetail(props: StudyDetailProps) {
  let db = (await connectDB).db('study_platform');
  let result = await db
    .collection('study_posts')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <>
      <Detail result={result}></Detail>
    </>
  );
}
