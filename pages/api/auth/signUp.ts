import { connectDB } from '@/lib/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    let userInfo = {
      name: req.body.info.name,
      email: req.body.info.email,
      pw: req.body.info.pw,
    };
    const hash = await bcrypt.hash(req.body.info.pw, 10);
    req.body.info.pw = hash;
    const db = (await connectDB).db('study_platform');
    await db.collection('user_cred').insertOne(userInfo);
    return res.status(201).json('정상 요청');
  } catch (error) {
    return res.status(500).json('server error');
  }
}
