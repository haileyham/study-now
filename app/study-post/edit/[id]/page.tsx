import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react';

export default async function StudyEdit(props: StudyDetailProps) {
  const db = (await connectDB).db('study_platform');
  const result = await db
    .collection('study_posts')
    .findOne({ _id: new ObjectId(props.params.id) });
  return <div>{result.title}</div>;
}
