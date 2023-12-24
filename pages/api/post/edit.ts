import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    let editData = {
      author: req.body.study.author,
      title: req.body.study.title,
      content: req.body.study.content,
      status: req.body.study.status,
      mode: req.body.study.mode,
      location: req.body.study.location,
      time: req.body.study.time,
      date: req.body.study.date,
      type: req.body.study.type,
    };
    const db = (await connectDB).db('study_platform');
    const result = await db
      .collection('study_posts')
      .updateOne({ _id: new ObjectId(req.body.study._id) }, { $set: editData });
    return res.status(201).json('정상');
  } catch (error) {
    return res.status(500).json('서버 에러 발생');
  }
}
