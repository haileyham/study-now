import Image from 'next/image';
import styles from './page.module.scss';
import Carousel from '@/components/Home/Carousel';
import { LoginBtn, LogoutBtn } from '@/components/Home/LoginOutBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
import Footer from '@/components/Home/Footer';
import PromotionalComponent from '@/components/Home/PromotionalComponent';

export default async function Home() {
  const session: any = await getServerSession(authOptions);
  const promotional = [
    {
      imageUrl: '/images/character/catBook.png',
      title: 'Solve The Quiz',
      text: '퀴즈를 통해 실력을 향상 시키세요!',
      content: '언제 어디서나 mobile, pc 이용하여! 블라블라!',
      style: styles.quizSection,
    },
    {
      imageUrl: '/images/character/dogsQuiz.png',
      title: 'Study Mate',
      text: '스터디를 모집하고 함께 공부하세요!',
      content:
        '스터디원을 모집하거나 기존의 스터디에 참여하여 함께 실력을 향상시키세요!',

      style: styles.studySection,
    },
    {
      imageUrl: '/images/character/job-openings.png',
      title: 'Job Openings',
      text: '채용 정보 검색을',
      content:
        '채용 정보 검색을 통해 해당 직무에 필요한 능력을 살펴보고 지원해보세요!',
      style: styles.jobSection,
    },
  ];

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
        <section className={styles.section}></section>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </>
  );
}
