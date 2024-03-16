import QuizComponent from '@/components/quiz/QuizComponent';
import React from 'react';

interface QuizPlayProps {
  searchParams: {
    q: number; //questionNum
    t: number; //timerDuration
    ty: string; //quizType
  };
}

export default function page(props: QuizPlayProps) {
  return (
    <>
      <QuizComponent
        quizType={props.searchParams.ty}
        questionNum={props.searchParams.q}
        timerDuration={props.searchParams.t}
      ></QuizComponent>
    </>
  );
}
