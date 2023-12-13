'use client';

import React, { ChangeEvent, useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

export default function StudyWrite() {
  let router = useRouter();
  const time = new Date().toString();

  const [studyWrite, setStudyWrite] = useState<StudyWriteState>({
    author: '',
    status: '',
    mode: '',
    location: '',
    time: '',
    type: '',
    title: '',
    content: '',
    day: '',
    date: time,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setStudyWrite({ ...studyWrite, [name]: value });
  };
  // console.log(studyWrite);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/post/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ study: studyWrite }),
      });
      if (response.ok) {
        console.log('글이 성공적으로 등록되었습니다.');
        {
          router.refresh();
          router.push('/study-post');
        }
      } else {
        const errorRes = await response.json();
        console.error('Error:', errorRes);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const openModal = async () => {
    setIsModalOpen(true);
  };

  const closeModal = async () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    router.back();
  };
  const closeOnClick = (e: any) => {
    e.stopPropagation(); // 이벤트 버블링 중지
  };

  return (
    <>
      <div className={`container ${styles.container} `}>
        <main>
          <section className={styles.writeHeader}>
            <div className={styles.modalContainer}>
              <button className={styles.backBtn} onClick={openModal}>
                ◀
              </button>
              {isModalOpen && (
                <div className={styles.modal} onClick={openModal}>
                  <div className={styles.modalContent} onClick={closeOnClick}>
                    <div className={styles.closeBtn} onClick={closeModal}>
                      &times;
                    </div>
                    <p>정말 나가겠습니까?</p>
                    <button onClick={handleConfirm}>확인</button>
                    <button onClick={closeModal}>닫기</button>
                  </div>
                </div>
              )}
            </div>
            <h1>스터디 모집</h1>
          </section>
          <section className={styles.writeCheck}>
            <div className={styles.studyStatus}>
              <span>Status</span>
              <label
                className={
                  studyWrite.status == ''
                    ? ''
                    : studyWrite.status == 'recruiting'
                    ? styles.hello
                    : styles.bye
                }
              >
                <input
                  type="checkbox"
                  name="status"
                  value="recruiting"
                  onChange={handleChange}
                />
                모집중
              </label>
              <label
                className={
                  studyWrite.status == ''
                    ? ''
                    : studyWrite.status == 'done'
                    ? styles.hello
                    : styles.bye
                }
              >
                <input
                  type="checkbox"
                  name="status"
                  value="done"
                  onChange={handleChange}
                />
                모집완료
              </label>
            </div>
            <div className={styles.studyMode}>
              <span>Mode</span>
              <label
                className={
                  studyWrite.mode == ''
                    ? ''
                    : studyWrite.mode == 'online'
                    ? styles.hello
                    : styles.bye
                }
              >
                <input
                  type="checkbox"
                  value="online"
                  name="mode"
                  onChange={handleChange}
                />
                Online
              </label>
              <label
                className={
                  studyWrite.mode == ''
                    ? ''
                    : studyWrite.mode == 'offline'
                    ? styles.hello
                    : styles.bye
                }
              >
                <input
                  type="checkbox"
                  value="offline"
                  name="mode"
                  onChange={handleChange}
                />
                Offline
              </label>
            </div>
            <div className={styles.studyLocation}>
              <span>Location</span>
              <input
                type="text"
                name="location"
                placeholder="강남"
                onChange={handleChange}
              />
            </div>
            <div className={styles.studyTime}>
              <span>Time</span>
              <input type="time" name="time" onChange={handleChange} />
            </div>
            <div className={styles.studyType}>
              <span>Type</span>
              <input
                type="text"
                placeholder="프론트엔드 면접"
                name="type"
                onChange={handleChange}
              />
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
            <button onClick={handleSubmit}>등록</button>
          </section>
        </main>
      </div>
    </>
  );
}
