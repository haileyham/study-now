'use client';
import styles from './page.module.scss';
import jobOpeningAPI from '@/lib/apis/api-utils';
import React, { useEffect, useState } from 'react';
import JobSearching from './JobSearching';

interface JobAPI {
  [key: string]: string;
}

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
          {testData.length > 0
            ? testData.map((item: JobAPI, i: number) => {
                return (
                  <li key={i}>
                    <div className={styles.imgBox}>
                      <img
                        src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"
                        alt="채용회사이미지"
                      />
                    </div>
                    <h2>{item.CMPNY_NM}</h2>
                    <p>{item.BSNS_SUMRY_CN}</p>
                    <span>서울</span>
                  </li>
                );
              })
            : 'no'}
        </ul>
      </section>
    </>
  );
}
