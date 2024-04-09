'use client';

import styles from './page.module.scss';
import React, { useEffect, useRef, useState } from 'react';

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
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (e: any) => {
        e.forEach((entry: any) => {
          if (entry.intersectionRatio > 0.33) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.33 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      className={
        isVisible
          ? title === 'Study Mate'
            ? `${styles.promotionalSection} ${styles.promotionalSectionEven} ${style}`
            : `${styles.promotionalSection} ${style}`
          : `${styles.hidden}`
      }
      ref={ref}
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
