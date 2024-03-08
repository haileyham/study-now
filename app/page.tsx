import Image from 'next/image';
import styles from './page.module.scss';
import Carousel from '@/components/Home/Carousel';
import { LoginBtn, LogoutBtn } from '@/components/Home/LoginOutBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';

export default async function Home() {
  const session: any = await getServerSession(authOptions);

  return (
    <>
      <main>
        <div className="myContainer">
          {session ? (
            <div>
              <img src={session.user.image} alt={session.user.name} />
              <Link href="/my-page">{session.user.name}님</Link>
              {/* <LogoutBtn></LogoutBtn> */}
            </div>
          ) : (
            <div>
              <LoginBtn></LoginBtn>
            </div>
          )}
          {/* <div>🌛</div> */}
        </div>
        <section className={styles.carousel}>
          <Carousel></Carousel>
        </section>
        <section className={`${styles.section} ${styles.cardContainer}`}>
          <div className={styles.card}>
            <span>Quiz를 통한 실력 체크</span>
          </div>
          <div className={styles.card}>
            <span>Study를 통해 공부 협업 UP</span>
          </div>
        </section>
        <section className={styles.section}></section>
        <section className={styles.section}></section>
      </main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
}
