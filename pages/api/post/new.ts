import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let save = {
    title: req.body.study.title,
    content: req.body.study.content,
  };
  const db = (await connectDB).db('study_platform');
  let result = await db.collection('study_posts').insertOne(save);
  return res.status(201).json('정상');
}
