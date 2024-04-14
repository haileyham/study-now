import Link from 'next/link';
import React from 'react';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href="/communications/notices">공지</Link>
        <Link href="/communications/inquiries">문의</Link>
        <Link href="/communications/news">뉴스</Link>
        <Link href="/communications/events">이벤트</Link>
      </nav>
      {children}
    </>
  );
}
