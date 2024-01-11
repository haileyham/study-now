'use client';

import React, { useState } from 'react';
import QuizComponent from './QuizComponent';
import { useRouter } from 'next/navigation';

export default function QuizSetting() {
  const [questionNum, setQuestionNum] = useState(10);
  const [timerDuration, setTimerDuration] = useState(10);
  const router = useRouter();

  const handleSettingQuiz = (e: any) => {
    const { name, value } = e.target; // Get input name and value
    if (name === 'questionNum') {
      setQuestionNum(parseInt(value)); // Parse value to number for questionNum
    } else if (name === 'timerDuration') {
      setTimerDuration(parseInt(value)); // Parse value to number for timerDuration
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
