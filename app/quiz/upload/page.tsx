'use client';
import React, { ChangeEvent, useState } from 'react';

export default function page() {
  const [quiz, setQuiz] = useState({
    num: Number,
    question: '',
    answer: '',
    type: '프론트엔드',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/quiz/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quiz: quiz }),
      });
      if (response.ok) {
        console.log('글이 성공적으로 등록되었습니다.');
        setQuiz({ num: Number, question: '', answer: '', type: '프론트엔드' });
      } else {
        const errorRes = await response.json();
        console.error('Error:', errorRes);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };
  return (
    <div
      style={{
        margin: 'auto',
        padding: '3rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        gap: '1rem',
        background: '#f6f0ff',
        borderRadius: '1rem',
      }}
    >
      <p>num</p>
      <input type="number" name="num" onChange={handleChange} />
      <p>question</p>
      <input
        type="text"
        name="question"
        onChange={handleChange}
        value={quiz.question}
      />
      <p>answer</p>
      <textarea
        name="answer"
        onChange={handleChange}
        value={quiz.answer}
      ></textarea>
      <p>type</p>
      <select name="type">
        <option value="프론트엔드">프론트엔드</option>
        <option value="프론트엔드">CS</option>
      </select>
      <p>제출</p>
      <button onClick={handleSubmit} className="btn-m">
        업로드
      </button>
    </div>
  );
}
