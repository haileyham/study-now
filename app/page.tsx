import Image from 'next/image';
import styles from './page.module.scss';
import Carousel from '@/components/Home/Carousel';
import { LoginBtn, LogoutBtn } from '@/components/Home/LoginOutBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
import Footer from '@/components/Home/Footer';
import PromotionalComponent from '@/components/Home/PromotionalComponent';
import getPromotionalContent from '@/components/Home/data/getPromotionalContent';
import CardComponent from '@/components/Home/CardComponent';
import getCardContent from '@/components/Home/data/getCardContent';
import FeaturesComponent from '@/components/Home/FeaturesComponent';
import CommunicationComponent from '@/components/Home/CommunicationComponent';
import ContactComponent from '@/components/Home/ContactComponent';

export default async function Home() {
  const session: any = await getServerSession(authOptions as any);
  const promotional = getPromotionalContent();
  const contentCards = getCardContent();

  return (
    <>
      <main>
        <div className="myContainer">
          <img src="/images/icons/logo.svg" alt="" className="logo" />
          {session ? (
            <div>
              <img src={session.user.image} alt={session.user.name} />
              <Link href="/my-page">{session.user.name}님</Link>
            </div>
          ) : (
            <div>
              <Link href="/sign-up" className={styles.signUp}>
                Sign Up
              </Link>
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
            return <CardComponent key={i} {...item}></CardComponent>;
          })}
        </section>
        <section
          className={`${styles.section} ${styles.communicationContainer}`}
        >
          <CommunicationComponent></CommunicationComponent>
        </section>
        {promotional.map((item, i) => {
          return (
            <section className={styles.section} key={i}>
              <PromotionalComponent {...item}></PromotionalComponent>
            </section>
          );
        })}
        <section className={styles.sectionFull}>
          <FeaturesComponent />
        </section>
        <section className={`${styles.section} ${styles.contactContainer}`}>
          <ContactComponent></ContactComponent>
        </section>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </>
  );
}
