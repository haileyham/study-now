import styles from './page.module.scss';
import React from 'react';

interface PromotionalComponentProps {
  imageUrl: string;
  title: string;
  text: string;
  content: string;
  style?: string;
}

const PromotionalComponent: React.FC<PromotionalComponentProps> = ({
  imageUrl,
  title,
  text,
  content,
  style,
}) => {
  return (
    <div className={`${styles.promotionalSection} ${style}`}>
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={imageUrl} alt={title} />
      <p>{content}</p>
    </div>
  );
};

export default PromotionalComponent;
