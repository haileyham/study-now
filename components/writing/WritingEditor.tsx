'use client';
import React, { ChangeEvent, useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import Modal from '../modal/Modal';
import Header from '../detail/Header';

const WritingEditor: React.FC<WritingEditorProps> = ({
  result,
  writingEdit,
}) => {
  let router = useRouter();
  const time = new Date().toString();

  const [studyWrite, setStudyWrite] = useState<StudyWriteState>({
    author: result?.author || '',
    status: result?.status || '',
    mode: result?.mode || '',
    location: result?.location || '',
    time: result?.time || '',
    type: result?.type || '',
    title: result?.title || '',
    content: result?.content || '',
    day: time,
    date: result?.date || time,
    _id: result?._id || '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setStudyWrite({ ...studyWrite, [name]: value });
  };
  // console.log(studyWrite);
  // console.log(result);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${writingEdit.api}`, {
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

  const handleConfirm = () => {
    router.back();
  };

  return (
    <>
      <div className={`container ${styles.container} `}>
        <main>
          <Header title={`스터디 모집`}></Header>
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
                placeholder="ex) 강남"
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
                placeholder="ex) 프론트엔드 면접"
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
              defaultValue={result?.title}
            />
            <textarea
              name="content"
              placeholder="글내용"
              onChange={handleChange}
              defaultValue={result?.content}
            />
            <Modal
              modalBtn={`${writingEdit.modalBtnText}`}
              modalBtnStyle={styles.writeEditBtn}
              message={`${writingEdit.modalMessage}`}
              onFunction={handleSubmit}
            ></Modal>
          </section>
        </main>
      </div>
    </>
  );
};

export default WritingEditor;
