import Image from 'next/image';
import styles from './page.module.scss';
import Carousel from '@/components/Home/Carousel';
import { LoginBtn, LogoutBtn } from '@/components/Home/LoginOutBtn';

export default function Home() {
  return (
    <>
      <main>
        <div className="myContainer">
          {/* {session ? (
              <>
                <div>
                  <span>{session?.user?.name}</span>
                  <LogoutBtn></LogoutBtn>
                </div>
              </>
            ) : (
              <>
                <div>
                  <span>로그인하세요!</span>
                  <LoginBtn></LoginBtn>
                </div>
              </>
            )} */}
          {/* 임시 */}
          <LoginBtn></LoginBtn>
          <LogoutBtn></LogoutBtn>
          <div>🌛</div>
        </div>
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
