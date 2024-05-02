import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StudyNow',
  description: 'StudyNow 스터디나우 : 스터디모집,퀴즈,채용정보까지 한번에!',
};

export interface User {
  [key: string]: string;
}

export interface Session {
  user?: User;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
        />
        <meta property="og:title" content="studyWith" />
        <meta property="og:site_name" content="studyWith" />
        <meta
          property="og:description"
          content="StudyNow 스터디나우 : 스터디모집,퀴즈,채용정보까지 한번에!"
        />
        <link
          rel="apple-touch-icon"
          href="/images/icons/logo_apple_touch_icon.png"
        />
      </Head>
      <body className={inter.className}>
        <header className="headerMain">
          <ul className="navContainer">
            <li>
              <Link href="/">
                <img src="/images/icons/studyNow.svg" alt="logo" />홈
              </Link>
            </li>
            <li>
              <Link href="/quiz">
                <img src="/images/icons/quiz.svg" alt="quiz-page" />
                퀴즈
              </Link>
            </li>
            <li>
              <Link href="/study-post/list">
                <img src="/images/icons/study.svg" alt="study-post-page" />
                스터디
              </Link>
            </li>
            <li>
              <Link href="/job-openings">
                <img src="/images/icons/job.svg" alt="job-openings-page" />
                채용정보
              </Link>
            </li>
            <li>
              <Link href="/my-page">
                <img src="/images/icons/profile.svg" alt="my-page" />
                마이페이지
              </Link>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
