import QuizComponent from '@/components/quiz/QuizComponent';
import React from 'react';

interface QuizPlayProps {
  searchParams: {
    q: number; //questionNum
    t: number; //timerDuration
  };
}

export default function page(props: QuizPlayProps) {
  return (
    <>
      <QuizComponent
        questionNum={props.searchParams.q}
        timerDuration={props.searchParams.t}
      ></QuizComponent>
    </>
  );
}
