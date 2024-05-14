import Link from 'next/link';
import styles from './page.module.scss';
import React from 'react';

type AdvProps = {
  st: string;
};

const Advertisement: React.FC<AdvProps> = ({ st }) => {
  return (
    <article className={`${st} ${styles.article}`}>
      <h1 className="a11y-hidden">ChattingWith</h1>
      <p className="a11y-hidden">스터디원 채팅페이지</p>
      <aside>
        <Link href="https://chatting-with.vercel.app/" target="_blank">
          <div>
            <img src="/images/icons/chatting.png" alt="광고 이미지" />
          </div>
          <h2>ChattingWith</h2>
          <p>
            스터디원과 <br /> 채팅은 이곳에서!
          </p>
        </Link>
      </aside>
    </article>
  );
};

export default Advertisement;
