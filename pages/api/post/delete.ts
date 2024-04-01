import { connectDB } from '@/lib/utils/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'DELETE') {
    const session: any = await getServerSession(req, res, authOptions as any);
    const db = (await connectDB).db('study_platform');
    const postId = req.query.postId as string;
    const findPost = await db
      .collection('study_posts')
      .findOne({ _id: new ObjectId(postId) });
    if (session) {
      if (findPost.author === session.user.email) {
        const result = await db
          .collection('study_posts')
          .deleteOne({ _id: new ObjectId(postId) });
        return res.status(200).json('삭제완료');
      } else {
        return res.status(500).json({ error: '현재 유저와 글 작성자 불일치' });
      }
    } else {
      return res.status(401).json({ error: '로그인 필요' });
    }
  }
}
