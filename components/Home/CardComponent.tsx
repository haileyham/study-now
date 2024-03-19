import Link from 'next/link';
import styles from './page.module.scss';
import React from 'react';

interface CardComponentProps {
  imageUrl: string;
  title: string;
  url: string;
  content1?: string;
  content2?: string;
  style?: string;
}

export default function CardComponent({
  imageUrl,
  title,
  url,
  content1,
  content2,
  style,
}: CardComponentProps) {
  return (
    <>
      <div className={styles.card}>
        <Link href={url}>
          <div>
            <h2>{title}</h2>
            <p>{content1}</p>
            <p>{content2}</p>
          </div>
          {/* <img src={imageUrl} alt="" /> */}
        </Link>
      </div>
    </>
  );
}
