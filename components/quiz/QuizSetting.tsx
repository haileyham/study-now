'use client';

import React, { useState } from 'react';
import QuizComponent from './QuizComponent';

export default function QuizSetting() {
  const [questionNum, setQuestionNum] = useState(10);
  const [timerDuration, setTimerDuration] = useState(10);

  return (
    <>
      <QuizComponent
        questionNum={questionNum}
        timerDuration={timerDuration}
      ></QuizComponent>
    </>
  );
}
