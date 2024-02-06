'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const carouselData = [
    {
      img: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'StudyNow에 지금 바로 함께 하세요!',
      link: '/my-page',
    },
    {
      img: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: '지금 바로 퀴즈를 풀고 지식을 테스트해 보세요!',
      link: '/quiz',
    },
    {
      img: 'https://images.unsplash.com/photo-1600716051809-e997e11a5d52?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: '스터디 메이트와 함께 공부해요!',
      link: '/study-post',
    },
    {
      img: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: '문제를 풀고 지식 UP!',
      link: '/quiz',
    },
  ];

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length,
    );
  };

  useEffect(() => {
    const changeImg = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(changeImg);
  }, [currentImage, carouselData.length]);

  const transformStyle = {
    transform: `translateX(${-currentImage * 25}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <>
      <div className={styles.carousel}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${carouselData[currentImage].img})` }}
        />
        <div className={styles.content}>
          <div className={styles.imageContainer} style={transformStyle}>
            {carouselData.map((data, i) => {
              return (
                <Link key={i} href={data.link}>
                  <img
                    src={data.img}
                    alt={data.text}
                    className={styles.image}
                  />
                  <h2>{data.text}</h2>
                </Link>
              );
            })}
          </div>
          <button onClick={prevSlide} className={styles.prevBtn}>
            ◀
          </button>
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
