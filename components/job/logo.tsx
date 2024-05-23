import React from 'react';
import styles from './page.module.scss';
import getJobOpeningLogoContent from './data/getJobOpeningLogoContent';
import Image from 'next/image';

interface JobOpeningSite {
  img: string;
  alt: string;
}

interface LogoContainerProps {
  className: string;
  sites: JobOpeningSite[];
}

const LogoContainer: React.FC<LogoContainerProps> = ({ className, sites }) => (
  <div className={className}>
    {sites.map((site, i) => (
      <div className={styles.imgBox} key={i}>
        <Image
          src={site.img}
          alt={site.alt}
          width={100}
          height={70}
          quality={50}
          placeholder="blur"
          blurDataURL="/path/to/low-res-image.jpg"
        />
      </div>
    ))}
  </div>
);

export default function SiteLogo() {
  const jobOpeningSite = getJobOpeningLogoContent();

  return (
    <section className={styles.jobOpeningLogo}>
      <LogoContainer className={styles.logoContainer1} sites={jobOpeningSite} />
      <LogoContainer className={styles.logoContainer2} sites={jobOpeningSite} />
      <LogoContainer className={styles.logoContainer3} sites={jobOpeningSite} />
    </section>
  );
}
