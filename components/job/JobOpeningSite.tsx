import React from 'react';
import styles from './page.module.scss';
import getJobOpeningSiteContent from './data/getJobOpeningSiteContent';

export default function JobOpeningSite() {
  const jobOpeningSite = getJobOpeningSiteContent();
  return (
    <>
      <section className={styles.jobOpeningWebSite}>
        <ul>
          {jobOpeningSite.map((site, i) => {
            return (
              <li className={styles.siteList} key={i}>
                <div>
                  <div className={styles.imgBox}>
                    <a href={site.url} target="_blank">
                      <img src={site.img} alt={site.alt} />
                    </a>
                  </div>
                  <p>{site.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
