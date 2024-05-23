import React from 'react';
import styles from './page.module.scss';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { LoginBtn, LogoutBtn } from '@/components/Home/LoginOutBtn';
import CommunicationComponent from '@/components/Home/CommunicationComponent';
import Link from 'next/link';
import Modal from '@/components/modal/Modal';
import Image from 'next/image';

export default async function MyPage() {
  const session: any = await getServerSession(authOptions as any);

  return (
    <>
      {session ? (
        <div className="container">
          <main className={styles.main}>
            <h2 className="a11y-hidden">마이페이지</h2>
            <section className={styles.profile}>
              <div>
                <Image
                  src={session.user.image}
                  alt="user-profile-img"
                  width={100}
                  height={100}
                  quality={50}
                  placeholder="blur"
                  blurDataURL="/path/to/low-res-image.jpg"
                />
              </div>
              <h3>{session.user.name}</h3>
              <p>{session.user.email}</p>
              {/* <span>
                <p>&#128393;</p>
              </span> */}
              <LogoutBtn></LogoutBtn>
            </section>
            <section className={styles.myActive}>
              <Modal
                modalBtn={''}
                modalBtnStyle={styles.myPageModal}
                message={'업데이트 예정입니다 :)'}
              ></Modal>
              <div className={styles.active}>
                <div>
                  <span>3</span>
                  <p>comment</p>
                </div>
                <div>
                  <span>1</span>
                  <p>post</p>
                </div>
              </div>
            </section>
            <section className={styles.myQuiz}>
              <Modal
                modalBtn={''}
                modalBtnStyle={styles.myPageModal}
                message={'업데이트 예정입니다 :)'}
              ></Modal>
              <div className={styles.quiz}>
                <div>
                  <p>🌈</p>
                  <p>내가 푼 문제</p>
                  <span>3</span>
                </div>
                <div>
                  <p>🎈</p>
                  <p>스크랩 문제</p>
                  <span>5</span>
                </div>
              </div>
            </section>
            <section className={styles.communicationBox}>
              <CommunicationComponent></CommunicationComponent>
            </section>
          </main>
        </div>
      ) : (
        <div className="container">
          <main className={styles.loginPrompt}>
            <div>
              <p>로그인이 필요한 페이지입니다.</p>
              <LoginBtn></LoginBtn>
              <Link href="/sign-up" className="btn-m">
                회원가입
              </Link>
            </div>
          </main>
          <CommunicationComponent></CommunicationComponent>
        </div>
      )}
    </>
  );
}
