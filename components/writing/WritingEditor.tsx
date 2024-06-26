'use client';
import React, { ChangeEvent, useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import Modal from '../modal/Modal';
import Header from '../common/Header';
import { validate } from './validateWritingEdit';

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
    contact: result?.contact || '',
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
          router.push('/study-post/list');
        }
      } else {
        const errorRes = await response.json();
        console.error('Error:', errorRes);
        setValidationFailed({ state: false, message: errorRes });
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  type Valid = {
    [key: string]: string | boolean;
  };

  const [validationFailed, setValidationFailed] = useState<Valid>({});

  const validation = () => {
    const result = validate(studyWrite);
    setValidationFailed(result);
  };

  const handleCancel = () => {
    setValidationFailed({});
    return false;
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
                defaultValue={result?.location}
              />
            </div>
            {/* <div className={styles.studyTime}>
              <span>Time</span>
              <input type="time" name="time" onChange={handleChange} />
            </div> */}
            <div className={styles.studyType}>
              <span>Type</span>
              <input
                type="text"
                placeholder="ex) 프론트엔드 면접"
                name="type"
                onChange={handleChange}
                defaultValue={result?.type}
              />
            </div>
            <div className={styles.studyContact}>
              <span>Contact</span>
              <input
                type="text"
                name="contact"
                placeholder="ex) https://open.kakao.com/"
                onChange={handleChange}
                defaultValue={result?.contact}
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
            <div className={styles.submitBtn} onClick={validation}>
              {validationFailed.success === 'success' ? (
                <Modal
                  modalBtn={`${writingEdit.modalBtnText}`}
                  modalBtnStyle={styles.writeEditBtn}
                  message={`${writingEdit.modalMessage}`}
                  onFunction={handleSubmit}
                ></Modal>
              ) : (
                <Modal
                  modalBtn={`${writingEdit.modalBtnText}`}
                  modalBtnStyle={styles.writeEditBtn}
                  message={`${validationFailed.message}`}
                  onFunction={handleCancel}
                  mark={`!`}
                ></Modal>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default WritingEditor;
