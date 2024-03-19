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
    <div
      className={
        title === 'Study Mate'
          ? `${styles.promotionalSection} ${style} ${styles.promotionalSectionEven}`
          : `${styles.promotionalSection} ${style}`
      }
    >
      <img src={imageUrl} alt={title} />
      <div>
        <h2>{title}</h2>
        <h3>{text}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default PromotionalComponent;
