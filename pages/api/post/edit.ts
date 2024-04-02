import { connectDB } from '@/lib/utils/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const session: any = await getServerSession(req, res, authOptions as any);
    const db = (await connectDB).db('study_platform');
    const findPost = await db
      .collection('study_posts')
      .findOne({ _id: new ObjectId(req.body.study._id) });
    console.log(findPost);

    if (req.body.study.title == '') {
      return res.status(400).json('제목을 입력해 주세요');
    }
    if (req.body.study.content == '') {
      return res.status(400).json('내용을 입력해 주세요');
    }
    if (req.body.study.status == '') {
      return res.status(400).json('모집상태를 입력해 주세요');
    }

    if (session) {
      if (
        findPost.author === session.user.email ||
        session.user.role === 'admin'
      ) {
        try {
          let editData = {
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
          const result = await db
            .collection('study_posts')
            .updateOne(
              { _id: new ObjectId(req.body.study._id) },
              { $set: editData },
            );
          return res.status(201).json('정상');
        } catch (error) {
          return res.status(500).json('서버 에러 발생');
        }
      } else {
        return res.status(500).json('글 작성자와 수정자가 불일치합니다.');
      }
    }
  }
}
