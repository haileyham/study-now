'use client';
import styles from './page.module.scss';
import jobOpeningAPI from '@/lib/apis/api-utils';
import React, { useEffect, useState } from 'react';
import JobSearching from './JobSearching';

export default function JobOpeningsList() {
  const [testData, setTestData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobOpeningAPI();
        setTestData(data.GetJobInfo.row);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <JobSearching></JobSearching>
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
    </>
  );
}
