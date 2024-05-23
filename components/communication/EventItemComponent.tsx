'use client';
import styles from './page.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Image from 'next/image';
import React from 'react';

interface EventItemType {
  image: string;
  title: string;
  content?: string;
  style?: string;
}

export default function EventItemComponent({
  image,
  title,
  content,
  style,
}: EventItemType) {
  const { ref, isVisible } = useIntersectionObserver(0.5);
  return (
    <>
      <div className={style}>
        <div ref={ref} className={isVisible ? styles.visible : styles.hidden}>
          <h3>{title}</h3>
          <p>{content}</p>
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt="eventImg"
              layout="fill"
              objectFit="cover"
              quality={50}
              placeholder="blur"
              blurDataURL="/path/to/low-res-image.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
