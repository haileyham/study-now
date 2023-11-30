'use client';

import React, { ChangeEvent, useState } from 'react';
import styles from './page.module.scss';

export default function StudyWrite() {
  const [studyWrite, setStudyWrite] = useState({
    title: '',
    content: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setStudyWrite({ ...studyWrite, [name]: value });
  };
  console.log(studyWrite);

  return (
    <>
      <div className={`container ${styles.container} `}>
        <header>
          <h1>스터디 모집</h1>
        </header>
        <main>
          <section className={styles.writeCheck}>
            <div className={styles.studyStatus}>
              <span>Status</span>
              <label className={styles.hello}>
                <input type="checkbox" value="online" />
                모집중
              </label>
              <label className={styles.bye}>
                <input type="checkbox" value="done" />
                모집완료
              </label>
            </div>
            <div className={styles.studyMode}>
              <span>Mode</span>
              <label>
                <input type="checkbox" value="online" />
                Online
              </label>
              <label>
                <input type="checkbox" value="offline" />
                Offline
              </label>
            </div>
            <div className={styles.studyLocation}>
              <span>Location</span>
              <input type="text" name="location" placeholder="강남" />
            </div>
            <div className={styles.studyTime}>
              <span>Time</span>
              <input type="time" />
            </div>
            <div className={styles.studyType}>
              <span>Type</span>
              <input type="text" placeholder="프론트엔드 면접" />
            </div>
          </section>
          <section className={styles.writeInput}>
            <input
              type="text"
              name="title"
              placeholder="글제목"
              onChange={handleChange}
            />
            <textarea
              name="content"
              placeholder="글내용"
              onChange={handleChange}
            />
            <button>등록</button>
          </section>
        </main>
      </div>
    </>
  );
}
