import Link from 'next/link';
import styles from './page.module.scss';
import React from 'react';
import getCommunicationData from './data/getCommunicationData';
import Image from 'next/image';

export default function CommunicationComponent() {
  const communicationData = getCommunicationData();
  return (
    <div className={styles.communicationContainer}>
      {communicationData.map((item, i) => {
        return (
          <Link href={item.link}>
            <div className={styles.imageContainerCommu}>
              <Image
                src={item.img}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                quality={75}
                placeholder="blur"
                blurDataURL="/path/to/low-res-image.jpg"
              />
            </div>
            <p>{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
