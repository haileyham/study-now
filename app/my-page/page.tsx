import React from 'react';
import styles from './page.module.scss';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { LoginBtn, LogoutBtn } from '@/components/Home/LoginOutBtn';

export default async function MyPage() {
  const session: any = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <div className="container">
          <main className={styles.main}>
            <h2 className="a11y-hidden">마이페이지</h2>
            <section className={styles.profile}>
              <div>
                <img src={session.user.image} alt="" />
              </div>
              <h3>{session.user.name}</h3>
              <p>{session.user.email}</p>
              <span>
                <p>&#128393;</p>
              </span>
              <LogoutBtn></LogoutBtn>
            </section>
            <section className={styles.myActive}>
              <div>
                <span>3</span>
                <p>comment</p>
              </div>
              <div>
                <span>1</span>
                <p>post</p>
              </div>
            </section>
            <section className={styles.myQuiz}>
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
            </section>
          </main>
        </div>
      ) : (
        <div className="container">
          <main className={styles.loginPrompt}>
            <div>
              <p>로그인이 필요한 페이지입니다.</p>
              <LoginBtn></LoginBtn>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
