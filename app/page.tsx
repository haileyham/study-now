import Image from 'next/image';
import styles from './page.module.scss';
import Carousel from '@/components/Home/Carousel';
import { LoginBtn, LogoutBtn } from '@/components/Home/LoginOutBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
import Footer from '@/components/Home/Footer';
import PromotionalComponent from '@/components/Home/PromotionalComponent';
import getPromotionalContent from '@/components/Home/getPromotionalContent';
import CardComponent from '@/components/Home/CardComponent';
import getCardContetn from '@/components/Home/getCardContetn';

export default async function Home() {
  const session: any = await getServerSession(authOptions);
  const promotional = getPromotionalContent();
  const contentCards = getCardContetn();

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
          {contentCards.map((item, i) => {
            return (
              <CardComponent
                key={i}
                imageUrl={item.imageUrl}
                title={item.title}
                url={item.url}
                style={item.style}
                content1={item.content1}
                content2={item.content2}
              ></CardComponent>
            );
          })}
        </section>
        {promotional.map((item, i) => {
          return (
            <section className={styles.section} key={i}>
              <PromotionalComponent
                imageUrl={item.imageUrl}
                title={item.title}
                text={item.text}
                content={item.content}
                style={item.style}
              ></PromotionalComponent>
            </section>
          );
        })}
        <section className={styles.sectionFull}></section>
        <section className={styles.section}></section>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </>
  );
}
