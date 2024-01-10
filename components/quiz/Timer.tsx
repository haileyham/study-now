'use client';
import React, { useEffect, useState } from 'react';

interface TimerProps {
  resetTime: number;
  onReset: () => void;
}

const Timer: React.FC<TimerProps> = ({ resetTime, onReset }) => {
  // 타이머 로직

  useEffect(() => {
    const timerInterval = setInterval(() => {
      onReset();

      // if (resetTime <= 0) {
      //   clearInterval(timerInterval);
      //   setResetTime(0);
      // }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [onReset]);

  return <span>{resetTime}</span>;
};

export default Timer;
