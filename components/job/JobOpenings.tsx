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
        </main>
      </div>
    </>
  );
}
