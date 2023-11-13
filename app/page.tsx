import Image from 'next/image';
import styles from './page.module.scss';
import Carousel from '@/components/carousel';

export default function Home() {
  return (
    <>
      <main>
        <section className={styles.carousel}>
          <Carousel></Carousel>
        </section>
        <section className={styles.section}>1</section>
        <section className={styles.section}>2</section>
        <section className={styles.section}>3</section>
      </main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
}
