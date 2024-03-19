import styles from './page.module.scss';
import React from 'react';

interface CardComponentProps {
  imageUrl: string;
  title: string;
  content: string;
  style?: string;
}

export default function CardComponent({
  imageUrl,
  title,
  content,
  style,
}: CardComponentProps) {
  return (
    <div className={styles.card}>
      <span>인기 Quiz</span>
    </div>
  );
}
