import Link from 'next/link';
import styles from './page.module.scss';
import React from 'react';
import Image from 'next/image';

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
            <Image
              src="/images/icons/chatting.png"
              alt="광고 이미지"
              width={100}
              height={100}
              quality={75}
              placeholder="blur"
              blurDataURL="/path/to/low-res-image.jpg"
            />
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
