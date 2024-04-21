import { connectDB } from '@/lib/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    let save = {
      num: req.body.quiz.num,
      question: req.body.quiz.question,
      answer: req.body.quiz.answer,
      type: req.body.quiz.type,
    };
    const db = (await connectDB).db('study_platform');
    let result = await db.collection('quiz').insertOne(save);
    return res.status(201).json('정상');
  } catch (error) {
    return res.status(500).json('서버 에러 발생');
  }
}
