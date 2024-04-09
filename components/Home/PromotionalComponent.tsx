'use client';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './page.module.scss';

interface PromotionalComponentProps {
  imageUrl: string;
  title: string;
  text: string;
  content: string;
}

const PromotionalComponent: React.FC<PromotionalComponentProps> = ({
  imageUrl,
  title,
  text,
  content,
}) => {
  const { ref, isVisible } = useIntersectionObserver(0.33);

  return (
    <div
      className={
        isVisible
          ? title === 'Study Mate'
            ? `${styles.promotionalSection} ${styles.promotionalSectionEven}`
            : `${styles.promotionalSection}`
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
