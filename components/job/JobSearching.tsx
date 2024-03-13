// 'use client';
import SearchingBtn from '../common/SearchingBtn';
import extractDistrict from './extractDistrict';
import styles from './page.module.scss';
import React, { ChangeEvent } from 'react';

interface JobSearchingProps {
  onFunction?: (e: ChangeEvent<HTMLInputElement>) => void;
  result?: any;
  onBtn?: () => void;
  // onReset: () => void;
}

interface JobAPI {
  [key: string]: string;
}

const JobSearching: React.FC<JobSearchingProps> = ({
  onFunction,
  result,
  onBtn,
  // onReset,
}) => {
  return (
    <section className={styles.jobSearchSection}>
      <h2 className="a11y-hidden">채용정보</h2>
      <div className={styles.searchbox}>
        <div className={styles.searchIp}>
          <input type="text" onChange={onFunction} />
          {/* <span className={styles.searchClose} onClick={onReset}>
            Ⅹ
          </span> */}
          <ul className={result.length > 1 ? '' : styles.none}>
            {result?.map((company: JobAPI, i: number) => {
              const match = extractDistrict(company.WORK_PARAR_BASS_ADRES_CN);
              return (
                <li key={i}>
                  <p>{company.CMPNY_NM}</p>
                  <p>{match}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <SearchingBtn
          onFunction={onBtn}
          style={styles.searchingBtn}
        ></SearchingBtn>
      </div>
    </section>
  );
};

export default JobSearching;
