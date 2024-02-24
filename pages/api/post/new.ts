import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    if (
      // req.body.study.author == '' || //임시 주석처리
      req.body.study.title == '' ||
      req.body.study.content == '' ||
      req.body.study.status == ''
    ) {
      return res.status(400).json('빈칸안됑');
    }
    try {
      let save = {
        author: req.body.study.author,
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
}
