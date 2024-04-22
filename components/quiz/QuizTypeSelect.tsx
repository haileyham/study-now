'use client';

import React from 'react';
import styles from './page.module.scss';

interface QuizTypeSelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const QuizTypeSelect: React.FC<QuizTypeSelectProps> = ({ onChange }) => {
  return (
    <div className={styles.quizSettingNum}>
      <label className={styles.settingName} htmlFor="quizType">
        문제유형
      </label>
      <select name="문제유형" id="quizType" onChange={onChange}>
        <option value="프론트엔드">프론트엔드</option>
        <option value="CS">CS</option>
        <option value="CS">재무회계</option>
        <option value="CS">미시경제학</option>
        <option value="CS">부동산원론</option>
      </select>
    </div>
  );
};

export default QuizTypeSelect;
