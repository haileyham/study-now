'use client';
import styles from './page.module.scss';
import jobOpeningAPI from '@/lib/apis/api-utils';
import React, { ChangeEvent, useEffect, useState } from 'react';
import JobSearching from './JobSearching';
import extractDistrict from './extractDistrict';

interface JobAPI {
  [key: string]: string;
}

export default function JobOpeningsList() {
  const [jobOpeningList, setjobOpeningList] = useState<any>([]);
  const [searching, setSearching] = useState<string>('서울');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobOpeningAPI({ location: searching });
        setjobOpeningList(data.GetJobInfo.row);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, [searching]);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setSearching(e.target.value);
  }

  return (
    <>
      <JobSearching
        onFunction={handleInput}
        result={jobOpeningList}
      ></JobSearching>
      <section className={styles.jobListSection}>
        <ul>
          {jobOpeningList.length > 0
            ? jobOpeningList.map((item: JobAPI, i: number) => {
                const match = extractDistrict(item.WORK_PARAR_BASS_ADRES_CN);
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
                    {/* <span>{item.WORK_PARAR_BASS_ADRES_CN}</span> */}
                    <span>{match}</span>
                  </li>
                );
              })
            : 'no'}
        </ul>
      </section>
    </>
  );
}
