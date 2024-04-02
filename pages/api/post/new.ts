import { connectDB } from '@/lib/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let session: any = await getServerSession(req, res, authOptions as any);
  if (session) {
    if (req.method === 'POST') {
      if (req.body.study.title == '') {
        return res.status(400).json('제목을 입력해 주세요');
      }
      if (req.body.study.content == '') {
        return res.status(400).json('내용을 입력해 주세요');
      }
      if (req.body.study.status == '') {
        return res.status(400).json('모집상태를 입력해 주세요');
      }
      try {
        let save = {
          author: session.user.email,
          authorName: session.user.name,
          title: req.body.study.title,
          content: req.body.study.content,
          status: req.body.study.status,
          mode: req.body.study.mode,
          location: req.body.study.location,
          contact: req.body.study.contact,
          date: req.body.study.date,
          type: req.body.study.type,
        };
        const db = (await connectDB).db('study_platform');
        let result = await db.collection('study_posts').insertOne(save);
        return res.status(201).json('정상');
      } catch (error) {
        return res.status(500).json('서버 에러 발생');
      }
    }
  } else {
    return res.status(401).json({ error: '로그인 필요' });
  }
}
