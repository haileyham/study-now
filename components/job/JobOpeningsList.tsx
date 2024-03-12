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
                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
