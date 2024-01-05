'use client';
import React from 'react';

export default function QuizResults() {
  const userAnswersLocal = localStorage.getItem('userAnswers');
  const userAnswers: string[] | null = userAnswersLocal
    ? JSON.parse(userAnswersLocal)
    : null;

  return (
    <div>
      {' '}
      {userAnswers && (
        <ul>
          {userAnswers.map((answer, index) => (
            <li key={index}>{`Question ${index + 1}: ${answer}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
