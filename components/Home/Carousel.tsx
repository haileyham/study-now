'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

import Character from '../public/studyingCharacter1.png';

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1600716051809-e997e11a5d52?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const changeImg = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(changeImg);
  }, [currentImage, images.length]);

  return (
    <>
      <div className={styles.carousel}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        />
        <div className={styles.content}>
          <button onClick={prevSlide} className={styles.prevBtn}>
            ◀
          </button>
          <img src={images[currentImage]} alt="" className={styles.image} />
          <button onClick={nextSlide} className={styles.nextBtn}>
            ▶
          </button>
        </div>
      </div>
    </>
    // <div
    //   style={{
    //     width: '100%',
    //     height: '300px',
    //     position: 'relative',
    //     overflow: 'hidden',
    //   }}
    // >
    //   <Image
    //     src="/_next/static/media/studyingCharacter1.702bfe18.png"
    //     alt="Description"
    //     style={{ objectFit: 'cover', width: '100%', height: '100%' }}
    //     width="1000"
    //     height="1000"
    //     priority={true}
    //   />
    // </div>
  );
};

export default Carousel;
