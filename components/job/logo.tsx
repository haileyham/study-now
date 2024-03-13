import React from 'react';
import styles from './page.module.scss';

export default function SiteLogo() {
  const jobOpeningSite = [
    { img: '/images/job/jobkorea.png', alt: 'jobkorea' },
    { img: '/images/job/jobplanet.png', alt: 'jobplanet' },
    { img: '/images/job/jumpit.png', alt: 'jumpit' },
    { img: '/images/job/saramin.png', alt: 'saramin' },
    { img: '/images/job/wanted.png', alt: 'wanted' },
    { img: '/images/job/worknet.jpg', alt: 'worknet' },
  ];
  return (
    <section className={styles.jobOpeningLogo}>
      <div className={styles.logoContainer1}>
        {jobOpeningSite.map((site, i) => {
          return (
            <>
              <div className={styles.imgBox} key={i}>
                <img src={site.img} alt={site.alt} />
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.logoContainer2}>
        {jobOpeningSite.map((site, i) => {
          return (
            <>
              <div className={styles.imgBox} key={i}>
                <img src={site.img} alt={site.alt} />
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.logoContainer3}>
        {jobOpeningSite.map((site, i) => {
          return (
            <>
              <div className={styles.imgBox} key={i}>
                <img src={site.img} alt={site.alt} />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
