'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import getCarouselData from './data/getCarouselData';
import Image from 'next/image';

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselData = getCarouselData();

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
                <div key={i} className={styles.box}>
                  <h2>{data.text}</h2>
                  <Link href={data.link}>
                    <button className="btn-m">{data.btn}</button>
                    <Image
                      src={data.img}
                      alt={data.text}
                      className={styles.image}
                      width={300}
                      height={300}
                      quality={75}
                      placeholder="blur"
                      blurDataURL="/path/to/low-res-image.png"
                      loading="lazy"
                    />
                  </Link>
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
