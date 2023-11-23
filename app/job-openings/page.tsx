import React from 'react';
import styles from './page.module.scss';

export default function JobOpenings() {
  return (
    <>
      <div className="container">
        <main className={styles.main}>
          <section className={styles.jobSearchSection}>
            <h2 className="a11y-hidden">채용정보</h2>
            <div className={styles.searchbox}>
              <span>◎</span>
              <input type="text" />
              <span className={styles.searchClose}>Ⅹ</span>
              <ul>
                <li className={styles.searchSelected}>
                  <p>이이</p>
                </li>
                <li>
                  <p>이이이</p>
                </li>
                <li>
                  <p>이이이이</p>
                </li>
              </ul>
            </div>

            <div>{/* <button>무엇을</button> */}</div>
          </section>
          <section className={styles.jobListSection}>
            <ul>
              <li>
                <div className={styles.imgBox}>
                  <img
                    src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"
                    alt="채용회사이미지"
                  />
                </div>
                <p>제목이다</p>
                <p>내용이다</p>
                <p>기한이다</p>
              </li>
              <li>
                <div className={styles.imgBox}>
                  <img
                    src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"
                    alt="채용회사이미지"
                  />
                </div>
                <p>제목이다</p>
                <p>내용이다</p>
                <p>기한이다</p>
              </li>
              <li>
                <div className={styles.imgBox}>
                  <img
                    src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"
                    alt="채용회사이미지"
                  />
                </div>
                <p>제목이다</p>
                <p>내용이다</p>
                <p>기한이다</p>
              </li>
              <li>
                <div className={styles.imgBox}>
                  <img
                    src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"
                    alt="채용회사이미지"
                  />
                </div>
                <p>제목이다</p>
                <p>내용이다</p>
                <p>기한이다</p>
              </li>
              <li>
                <div className={styles.imgBox}>
                  <img
                    src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"
                    alt="채용회사이미지"
                  />
                </div>
                <p>제목이다</p>
                <p>내용이다</p>
                <p>기한이다</p>
              </li>
            </ul>
          </section>
          <section className={styles.jobOpeningWebSite}>
            <ul>
              <li>
                <div>
                  <div className={styles.imgBox}>
                    <img
                      src="https://i.namu.wiki/i/hQbC1A-Bo2bhXpnTJd-Po8WKzT34w-9UN0xDYkUKOA-uV6rLOJUOVUlLw4jjwAyxx4gk4-qgcFxB4pmpcv_OE7U7PYsIo90vuMK6btYwE5M_rzQso7iqapRHFRyg7EjDyIXRfv7ZGwbqIRaxruvoIg.webp"
                      alt="원티드"
                    />
                  </div>
                  <p>채용사이트명</p>
                </div>
              </li>
              <li>
                <div>
                  <div className={styles.imgBox}>
                    <img
                      src="https://cdn.jumpit.co.kr/jumpit/jumpit_share.png"
                      alt="점핏"
                    />
                  </div>
                  <p>채용사이트명</p>
                </div>
              </li>
              <li>
                <div>
                  <div className={styles.imgBox}>
                    <img
                      src="https://jpassets.jobplanet.co.kr/production/uploads/material/media/7444/jp_og.png"
                      alt="잡플레닛"
                    />
                  </div>
                  <p>채용사이트명</p>
                </div>
              </li>
              <li>
                <div>
                  <div className={styles.imgBox}>
                    <img
                      src="https://oopy.lazyrockets.com/api/rest/cdn/image/0821aa81-6c17-485e-98b4-9589a62e7ae2.png"
                      alt="잡코리아"
                    />
                  </div>
                  <p>채용사이트명</p>
                </div>
              </li>
              <li>
                <div>
                  <div className={styles.imgBox}>
                    <img
                      src="https://i.namu.wiki/i/TQfS31XrpTACrWnhtrLZmGpYnn8ihiDPVSO6i5Iq91jSOZNxIsKOaGiz1Pa-BxpgJJ9xm7i7Ena92nOi7RPW9Ah15pcNv_FJ1KnKiPlxxYtj56b5_tGBYEccBYN42wpebo9JYxPc1O5mCUcq0qtWkg.svg"
                      alt="사람인"
                    />
                  </div>
                  <p>채용사이트명</p>
                </div>
              </li>
            </ul>
          </section>
          <section className={styles.jobOpeningLogo}>
            <div className={styles.logoContainer1}>
              <div className={styles.imgBox}>
                <img
                  src="https://i.namu.wiki/i/hQbC1A-Bo2bhXpnTJd-Po8WKzT34w-9UN0xDYkUKOA-uV6rLOJUOVUlLw4jjwAyxx4gk4-qgcFxB4pmpcv_OE7U7PYsIo90vuMK6btYwE5M_rzQso7iqapRHFRyg7EjDyIXRfv7ZGwbqIRaxruvoIg.webp"
                  alt="원티드"
                />
              </div>
              <div className={styles.imgBox}>
                <img
                  src="https://cdn.jumpit.co.kr/jumpit/jumpit_share.png"
                  alt="점핏"
                />
              </div>
              <div className={styles.imgBox}>
                <img
                  src="https://jpassets.jobplanet.co.kr/production/uploads/material/media/7444/jp_og.png"
                  alt="잡플레닛"
                />
              </div>
              <div className={styles.imgBox}>
                <img
                  src="https://oopy.lazyrockets.com/api/rest/cdn/image/0821aa81-6c17-485e-98b4-9589a62e7ae2.png"
                  alt="잡코리아"
                />
              </div>
              <div className={styles.imgBox}>
                <img
                  src="https://i.namu.wiki/i/TQfS31XrpTACrWnhtrLZmGpYnn8ihiDPVSO6i5Iq91jSOZNxIsKOaGiz1Pa-BxpgJJ9xm7i7Ena92nOi7RPW9Ah15pcNv_FJ1KnKiPlxxYtj56b5_tGBYEccBYN42wpebo9JYxPc1O5mCUcq0qtWkg.svg"
                  alt="사람인"
                />
              </div>
            </div>
            <div className={styles.logoContainer2}>
              <div className={styles.imgBox}>
                <img
                  src="https://i.namu.wiki/i/hQbC1A-Bo2bhXpnTJd-Po8WKzT34w-9UN0xDYkUKOA-uV6rLOJUOVUlLw4jjwAyxx4gk4-qgcFxB4pmpcv_OE7U7PYsIo90vuMK6btYwE5M_rzQso7iqapRHFRyg7EjDyIXRfv7ZGwbqIRaxruvoIg.webp"
                  alt="원티드"
                />
              </div>
              <div className={styles.imgBox}>
                <img
                  src="https://cdn.jumpit.co.kr/jumpit/jumpit_share.png"
                  alt="점핏"
                />
              </div>
              <div className={styles.imgBox}>
                <img
                  src="https://jpassets.jobplanet.co.kr/production/uploads/material/media/7444/jp_og.png"
                  alt="잡플레닛"
                />
              </div>
              <div className={styles.imgBox}>
                <img
                  src="https://oopy.lazyrockets.com/api/rest/cdn/image/0821aa81-6c17-485e-98b4-9589a62e7ae2.png"
                  alt="잡코리아"
                />
              </div>
              <div className={styles.imgBox}>
                <img
                  src="https://i.namu.wiki/i/TQfS31XrpTACrWnhtrLZmGpYnn8ihiDPVSO6i5Iq91jSOZNxIsKOaGiz1Pa-BxpgJJ9xm7i7Ena92nOi7RPW9Ah15pcNv_FJ1KnKiPlxxYtj56b5_tGBYEccBYN42wpebo9JYxPc1O5mCUcq0qtWkg.svg"
                  alt="사람인"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
