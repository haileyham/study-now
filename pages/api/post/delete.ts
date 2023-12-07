import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const db = (await connectDB).db('study_platform');
  const postId = req.query.postId as string;
  const result = await db
    .collection('study_posts')
    .deleteOne({ _id: new ObjectId(postId) });
  return res.status(200).json('삭제완료');
}
