import React from 'react';
import styles from './page.module.scss';

export default function StudyWrite() {
  return (
    <>
      <div className={styles.container}>
        <header>
          <h1>스터디 모집</h1>
        </header>
        <main>
          <section className={styles.writeCheck}>
            <div className={styles.studyStatus}>
              <label>
                <input type="checkbox" value="online" />
                모집중
              </label>
              <label>
                <input type="checkbox" value="done" />
                모집완료
              </label>
            </div>
            <div className={styles.studyMode}>
              <label>
                <input type="checkbox" value="online" />
                Online
              </label>
              <label>
                <input type="checkbox" value="offline" />
                Offline
              </label>
            </div>
            <div className={styles.studyStatus}>
              <label>
                location
                <input type="text" name="location" />
              </label>
            </div>
            <div className={styles.studyTime}>
              <label>
                Time
                <input type="time" />
              </label>
            </div>
            <div className={styles.studyType}>
              <label>
                스터디 종류
                <input type="text" placeholder="프론트엔드 면접" />
              </label>
            </div>
          </section>
          <section className={styles.writeInput}>
            <input type="text" name="title" placeholder="글제목" />
            <textarea name="content" placeholder="글내용" />
            <button>등록</button>
          </section>
        </main>
      </div>
    </>
  );
}
