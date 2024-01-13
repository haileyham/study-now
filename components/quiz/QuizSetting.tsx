'use client';

import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QuizSetting() {
  const [questionNum, setQuestionNum] = useState(10);
  const [timerDuration, setTimerDuration] = useState(10);
  const router = useRouter();

  const handleSettingQuiz = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === 'questionNum') {
      setQuestionNum(parseInt(value));
    } else if (name === 'timerDuration') {
      setTimerDuration(parseInt(value));
    }
  };

  const handleMoveQuiz = () => {
    router.push(`/quiz/play?q=${questionNum}&t=${timerDuration}`);
  };

  return (
    <>
      <input
        type="number"
        name="questionNum"
        defaultValue="10"
        onChange={handleSettingQuiz}
      />
      <input
        type="number"
        name="timerDuration"
        defaultValue="10"
        onChange={handleSettingQuiz}
      />
      <button onClick={handleMoveQuiz}>퀴즈 풀기</button>
    </>
  );
}
