import Image from 'next/image';
import styles from './page.module.scss';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <main>
        <section className={styles.carousel}>
          <Carousel></Carousel>
        </section>
        <section className={styles.section}></section>
        <section className={styles.section}></section>
        <section className={styles.section}></section>
      </main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
}
