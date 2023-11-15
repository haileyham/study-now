import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="headerMain">
          <div className="logoMyContainer">
            <Link href="/">
              <img src="" alt="logo" />
            </Link>
            <div>🎃</div>
          </div>
          <ul className="navContainer">
            <li>퀴즈</li>
            <li>
              <Link href="/study-post">스터디</Link>
            </li>
            <li>채용정보</li>
            <li>MyPage</li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}