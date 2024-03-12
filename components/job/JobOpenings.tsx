import React from 'react';
import styles from './page.module.scss';
import SiteLogo from './logo';
import JobOpeningsList from './JobOpeningsList';

export default function JobOpenings() {
  return (
    <>
      <SiteLogo></SiteLogo>
      <div className="container">
        <main className={styles.main}>
          <JobOpeningsList></JobOpeningsList>
          <section className={styles.jobOpeningWebSite}>
            <ul>
              <li>
                <div>
                  <div className={styles.imgBox}>
                    <a
                      href="https://www.wanted.co.kr/jobsfeed?utm_source=google&utm_medium=sa&utm_campaign=kr_recruit_web_sa_signup&utm_term=%EC%9B%90%ED%8B%B0%EB%93%9C&utm_content=brand_new&gad_source=1&gclid=Cj0KCQiA6vaqBhCbARIsACF9M6l0n1UCvLRt_0hQh5ZA2nqZgmw5pslGxDn7TVJZ7Pf1-LDtQcNqOPkaAixtEALw_wcB"
                      target="_blank"
                    >
                      <img
                        src="https://i.namu.wiki/i/hQbC1A-Bo2bhXpnTJd-Po8WKzT34w-9UN0xDYkUKOA-uV6rLOJUOVUlLw4jjwAyxx4gk4-qgcFxB4pmpcv_OE7U7PYsIo90vuMK6btYwE5M_rzQso7iqapRHFRyg7EjDyIXRfv7ZGwbqIRaxruvoIg.webp"
                        alt="원티드"
                      />
                    </a>
                  </div>
                  <p>채용사이트명</p>
                </div>
              </li>
              <li>
                <div>
                  <div className={styles.imgBox}>
                    <a href="https://www.jumpit.co.kr/" target="_blank">
                      <img
                        src="https://cdn.jumpit.co.kr/jumpit/jumpit_share.png"
                        alt="점핏"
                      />
                    </a>
                  </div>
                  <p>채용사이트명</p>
                </div>
              </li>
              <li>
                <div>
                  <div className={styles.imgBox}>
                    <a href="https://www.jobplanet.co.kr/job" target="_blank">
                      <img
                        src="https://jpassets.jobplanet.co.kr/production/uploads/material/media/7444/jp_og.png"
                        alt="잡플레닛"
                      />
                    </a>
                  </div>
                  <p>채용사이트명</p>
                </div>
              </li>
              <li>
                <div>
                  <div className={styles.imgBox}>
                    <a
                      href="https://www.jobkorea.co.kr/OnePick/JobList?Ord=GcmCodeAmtDesc&utm_source=google&utm_medium=cpc&utm_campaign=pc_%EB%B8%8C%EB%9E%9C%EB%93%9C_tcpa&utm_content=pc_%EB%B8%8C%EB%9E%9C%EB%93%9C_tcpa_%EC%9B%90%ED%94%BD%EA%B3%B5%EA%B3%A0(%EA%B8%B0%EC%88%A0)&utm_term=%EC%9E%A1%20%EC%BD%94%EB%A6%AC%EC%95%84&cmpid=sa_goo"
                      target="_blank"
                    >
                      <img
                        src="https://oopy.lazyrockets.com/api/rest/cdn/image/0821aa81-6c17-485e-98b4-9589a62e7ae2.png"
                        alt="잡코리아"
                      />
                    </a>
                  </div>
                  <p>채용사이트명</p>
                </div>
              </li>
              <li>
                <div>
                  <div className={styles.imgBox}>
                    <a
                      href="https://www.saramin.co.kr/zf_user/"
                      target="_blank"
                    >
                      <img
                        src="https://i.namu.wiki/i/TQfS31XrpTACrWnhtrLZmGpYnn8ihiDPVSO6i5Iq91jSOZNxIsKOaGiz1Pa-BxpgJJ9xm7i7Ena92nOi7RPW9Ah15pcNv_FJ1KnKiPlxxYtj56b5_tGBYEccBYN42wpebo9JYxPc1O5mCUcq0qtWkg.svg"
                        alt="사람인"
                      />
                    </a>
                  </div>
                  <p>채용사이트명</p>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
