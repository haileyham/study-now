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
  const [searching, setSearching] = useState<string>('');
  const [searchResult, setSearchResult] = useState<any>([]);
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobOpeningAPI({ location: searching });
        setjobOpeningList(data.GetJobInfo.row);
        if (searchResult.length < 1) {
          setSearchResult(data.GetJobInfo.row);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, [searching]);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setSearching(e.target.value);
    setActiveBtn(false);
  }

  function handleBtn() {
    setActiveBtn(true);
    setSearchResult(jobOpeningList);
  }

  return (
    <>
      <JobSearching
        onFunction={handleInput}
        result={!activeBtn && searching.length ? jobOpeningList : []}
        onBtn={handleBtn}
      ></JobSearching>
      <section className={styles.jobListSection}>
        <ul>
          {searchResult.length > 0
            ? searchResult.map((item: JobAPI, i: number) => {
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
