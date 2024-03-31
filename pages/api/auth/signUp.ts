import { connectDB } from '@/lib/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    if (req.body.info.name == '') {
      return res.status(400).json('이름을 입력해 주세요');
    }
    if (req.body.info.email == '') {
      return res.status(400).json('이메일을 입력해 주세요');
    }
    if (req.body.info.pw == '') {
      return res.status(400).json('비밀번호를 입력해 주세요');
    }
    try {
      let userInfo = {
        name: req.body.info.name,
        email: req.body.info.email,
        password: req.body.info.pw,
      };
      const hash = await bcrypt.hash(req.body.info.pw, 10);
      userInfo.password = hash;
      const db = (await connectDB).db('study_platform');
      await db.collection('user_cred').insertOne(userInfo);
      return res.status(201).json('정상 요청');
    } catch (error) {
      return res.status(500).json('server error');
    }
  } else {
    return res.status(400).json({ error: 'POST만 가능' });
  }
}
