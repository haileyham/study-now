import extractDistrict from './extractDistrict';
import styles from './page.module.scss';
import React, { ChangeEvent } from 'react';

interface JobSearchingProps {
  onFunction?: (e: ChangeEvent<HTMLInputElement>) => void;
  result?: any;
}

interface JobAPI {
  [key: string]: string;
}

const JobSearching: React.FC<JobSearchingProps> = ({ onFunction, result }) => {
  return (
    <section className={styles.jobSearchSection}>
      <h2 className="a11y-hidden">채용정보</h2>
      <div className={styles.searchbox}>
        <span>◎</span>
        <input type="text" onChange={onFunction} />
        <span className={styles.searchClose}>Ⅹ</span>
        <ul>
          {result?.map((company: JobAPI, i: number) => {
            const match = extractDistrict(company.WORK_PARAR_BASS_ADRES_CN);
            return (
              <li className={styles.searchSelected} key={i}>
                <p>{company.CMPNY_NM}</p>
                <p>{match}</p>
              </li>
            );
          })}
        </ul>
        <button className="btn-s">검색</button>
      </div>
    </section>
  );
};

export default JobSearching;
