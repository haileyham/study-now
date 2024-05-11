import styles from './page.module.scss';

export default function FeaturesComponent() {
  return (
    <div className={styles.FeaturesContainer}>
      <h2>One Stop</h2>
      <div>
        <p>
          모바일부터
          <br />
          테블릿, pc까지 !
        </p>
        <img src="/images/main/m1.png" alt="main-img" />
        <p>
          원하는 곳
          <br />
          언제 어디서나
          <br />
          손쉽게 이용가능합니다 !
        </p>
      </div>
    </div>
  );
}
