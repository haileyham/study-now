import QuizComponent from '@/components/quiz/QuizComponent';
import { connectDB } from '@/lib/utils/database';
import React from 'react';

interface QuizPlayProps {
  searchParams: {
    q: number; //questionNum
    t: number; //timerDuration
    ty: string; //quizType
  };
}

export default async function page(props: QuizPlayProps) {
  const db = (await connectDB).db('study_platform');
  const result = await db
    .collection('quiz')
    .aggregate([
      { $match: { type: props.searchParams.ty } },
      { $sample: { size: Number(props.searchParams.q) } },
    ])
    .toArray();
  result.map((post: any) => {
    post._id = post._id.toString();
    return post;
  });
  return (
    <>
      <QuizComponent
        quizData={result}
        questionNum={props.searchParams.q}
        timerDuration={props.searchParams.t}
      ></QuizComponent>
    </>
  );
}
