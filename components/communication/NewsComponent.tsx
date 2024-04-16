'use client';
import useToggle from '@/hooks/useToggle';
import styles from './page.module.scss';
import React, { useState } from 'react';
import getNewsContent from './data/getNewsContent';
import Link from 'next/link';

export default function NewsComponent() {
  const [toggle, setToggle] = useToggle(false);

  // const api = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://newsapi.org/v2/everything?q=apple&from=2024-04-14&to=2024-04-14&sortBy=popularity&apiKey=9c99aeb431ab46a492fe23e1f003c7df`,
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       setNews(data.articles);
  //       return data.articles;
  //     } else {
  //       const errorRes = await response.json();
  //       console.error('Error:', errorRes);
  //       throw new Error('Failed to fetch data');
  //     }
  //   } catch (error) {
  //     console.error('Error', error);
  //     throw error;
  //   }
  // };
  // api();

  const [news, setNews] = useState([]);
  const newsContent = getNewsContent();

  return (
    <div className={styles.container}>
      <header>
        <h2>News</h2>
      </header>
      <section className={styles.news}>
        <ul>
          {/* {news?.map((article, i) => {
            return (
              <li onClick={setToggle} key={i}>
                <p className={toggle ? styles.title : ''}>
                  {article.title}
                  {toggle ? <span>▲</span> : <span>▼</span>}
                </p>
                <div className={toggle ? styles.content : styles.none}>
                  <span>{article.description}</span>
                </div>
              </li>
            );
          })} */}
          {newsContent.map((article, i) => {
            return (
              <li>
                <p>{article.title}</p>
                <div>
                  <span>{article.content}</span>
                </div>
                <Link href={article.link} target="_blank">
                  기사 원문 보기
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
