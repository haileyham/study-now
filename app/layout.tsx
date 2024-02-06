import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
      <body className={inter.className}>
        <header className="headerMain">
          <ul className="navContainer">
            <Link href="/">
              <img src="" alt="logo" />
            </Link>
            <li>
              <Link href="/quiz">퀴즈</Link>
            </li>
            <li>
              <Link href="/study-post">스터디</Link>
            </li>
            <li>
              <Link href="/job-openings">채용정보</Link>
            </li>
            <li>
              <Link href="/my-page">MyPage</Link>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
