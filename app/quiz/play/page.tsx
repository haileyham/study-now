import QuizComponent from '@/components/quiz/QuizComponent';
import React from 'react';

interface QuizPlayProps {
  searchParams: {
    questionNum: number;
    timerDuration: number;
  };
}

export default function page(props: QuizPlayProps) {
  return (
    <>
      <QuizComponent
        questionNum={props.searchParams.questionNum}
        timerDuration={props.searchParams.timerDuration}
      ></QuizComponent>
    </>
  );
}
