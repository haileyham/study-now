import Link from 'next/link';
import styles from './page.module.scss';
import React from 'react';
import getCommunicationData from './data/getCommunicationData';

export default function CommunicationComponent() {
  const communicationData = getCommunicationData();
  return (
    <div className={styles.communicationContainer}>
      {communicationData.map((item, i) => {
        return (
          <Link href={item.link} key={i}>
            <img src={item.img} alt={item.alt} />
            <p>{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
