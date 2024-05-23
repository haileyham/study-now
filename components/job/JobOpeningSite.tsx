import React from 'react';
import styles from './page.module.scss';
import getJobOpeningSiteContent from './data/getJobOpeningSiteContent';
import Image from 'next/image';

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
                      <Image
                        src={site.img}
                        alt={site.alt}
                        width={400}
                        height={200}
                        quality={75}
                        placeholder="blur"
                        blurDataURL="/path/to/low-res-image.jpg"
                      />
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
