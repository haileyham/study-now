'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const carouselData = [
    {
      img: '/images/character/catLaptop.png',
      text: 'StudyNow에 지금 바로 함께 하세요!',
      link: '/my-page',
      color: 'to right, #ffaf02, rgb(255, 234, 76)',
    },
    {
      img: '/images/character/catPhone.png',
      text: '퀴즈를 풀고 지식을 테스트해 보세요!',
      link: '/quiz',
      color: 'to right, #c99fff , #9f32ff',
    },
    {
      img: '/images/character/dogsQuiz.png',
      text: '스터디를 모집하고 함께 공부해요!',
      link: '/study-post',
      color: 'to right, #ff728c, rgb(255, 151, 217)',
    },
    {
      img: '/images/character/polarbear.png',
      text: '채용 정보까지 한눈에!',
      link: '/job-openings',
      color: 'to right, #71e756, #17a701',
    },
    {
      img: '/images/character/blue.png',
      text: '문제를 풀고 지식 UP!',
      link: '/quiz',
      color: 'to right, #4a72ff, rgb(96, 231, 255)',
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

  // useEffect(() => {
  //   const changeImg = setInterval(() => {
  //     nextSlide();
  //   }, 3000);
  //   return () => clearInterval(changeImg);
  // }, [currentImage, carouselData.length]);

  const transformStyle = {
    transform: `translateX(${-currentImage * 20}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <>
      <div className={styles.carousel}>
        <div
          className={styles.background}
          style={{
            background: `linear-gradient(${carouselData[currentImage].color})`,
          }}
        />
        <div className={styles.content}>
          <div className={styles.imageContainer} style={transformStyle}>
            {carouselData.map((data, i) => {
              return (
                <div key={i}>
                  <Link href={data.link}>
                    <img
                      src={data.img}
                      alt={data.text}
                      className={styles.image}
                    />
                  </Link>
                  <h2>{data.text}</h2>
                </div>
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
