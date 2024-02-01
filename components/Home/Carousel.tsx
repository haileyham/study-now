'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

import Character from '../public/studyingCharacter1.png';

const Carousel: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/_next/static/media/studyingCharacter1.702bfe18.png"
        alt="Description"
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        width="1000"
        height="1000"
        priority={true}
      />
    </div>
  );
};

export default Carousel;
