'use client';
import React, { useEffect, useState } from 'react';

export default function Timer() {
  // 타이머 로직
  const [resetTime, setResetTime] = useState(10);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setResetTime((prevTime) => prevTime - 1);

      if (resetTime <= 0) {
        clearInterval(timerInterval);
        setResetTime(0);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [resetTime]);

  return <span>{resetTime}</span>;
}
