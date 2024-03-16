import React from 'react';
import styles from './page.module.scss';

export default function JobOpeningSite() {
  const jobOpeningSite = [
    {
      img: '/images/job/jobkorea.png',
      alt: 'jobkorea',
      url: 'https://www.jumpit.co.kr/',
      name: '잡코리아',
    },
    {
      img: '/images/job/jobplanet.png',
      alt: 'jobplanet',
      url: 'https://www.jobplanet.co.kr/job',
      name: '잡플래닛',
    },
    {
      img: '/images/job/jumpit.png',
      alt: 'jumpit',
      url: 'https://www.jumpit.co.kr/',
      name: '점핏',
    },
    {
      img: '/images/job/saramin.png',
      alt: 'saramin',
      url: 'https://www.saramin.co.kr/zf_user/',
      name: '사람인',
    },
    {
      img: '/images/job/wanted.png',
      alt: 'wanted',
      url: 'https://www.wanted.co.kr/jobsfeed?utm_source=google&utm_medium=sa&utm_campaign=kr_recruit_web_sa_signup&utm_term=%EC%9B%90%ED%8B%B0%EB%93%9C&utm_content=brand_new&gad_source=1&gclid=Cj0KCQiA6vaqBhCbARIsACF9M6l0n1UCvLRt_0hQh5ZA2nqZgmw5pslGxDn7TVJZ7Pf1-LDtQcNqOPkaAixtEALw_wcB',
      name: '원티드',
    },
    {
      img: '/images/job/worknet.jpg',
      alt: 'worknet',
      url: 'https://www.work.go.kr/seekWantedMain.do',
      name: '워크넷',
    },
  ];
  return (
    <>
      <section className={styles.jobOpeningWebSite}>
        <ul>
          {jobOpeningSite.map((site, i) => {
            return (
              <li className={styles.siteList} key={i}>
                <div>
                  <div className={styles.imgBox}>
                    <a href={site.url} target="_blank">
                      <img src={site.img} alt={site.alt} />
                    </a>
                  </div>
                  <p>{site.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
