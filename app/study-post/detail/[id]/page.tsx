import React from 'react';
import styles from './page.module.scss';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { DeleteBtn } from '@/components/detail/delete';

export default async function StudyDetail(props: StudyDetailProps) {
  let db = (await connectDB).db('study_platform');
  let result = await db
    .collection('study_posts')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <>
      <div className={`container ${styles.container}`}>
        <header>
          <h1 className="a11y-hidden">스터디 모집 상세 페이지</h1>
        </header>
        <main className={styles.main}>
          <section>
            <header className={styles.mainHeader}>
              <div>
                <h2>{result.title}</h2>
                <div className={styles.detailEditDel}>
                  <button className="btn-s">글수정</button>
                  <button className="btn-s">글삭제</button>
                  <DeleteBtn postId={result._id}></DeleteBtn>
                </div>
              </div>
              <div>
                <img src="" alt="profile" />
                <p>author</p>
                <p className={styles.date}>1일전</p>
              </div>
            </header>
            <div className={styles.mainContent}>
              <div className={styles.postInfo}>
                <div>
                  <span>status</span>
                  <p>{result.status == 'recruiting' ? '모집중' : '모집완료'}</p>
                </div>
                <div>
                  <span>mode</span>
                  <p>{result.mode}</p>
                </div>
                <div>
                  <span>Location</span>
                  <p>{result.location}</p>
                </div>
                <div>
                  <span>Type</span>
                  <p>{result.type}</p>
                </div>
              </div>
              <p>{result.content}</p>
            </div>
          </section>
          <section>
            <h3>Comment</h3>
            <ul className={styles.commentWrapper}>
              <li>
                <div className={styles.commnetInfo}>
                  <img src="" alt="profile" />
                  <p>author</p>
                </div>
                <p className={styles.comment}>
                  댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다l
                  댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다l
                </p>
                <p className={styles.commentDate}>1일전</p>
              </li>
            </ul>
            <div className={styles.commentInput}>
              <input type="text" placeholder="댓글을 남겨주세요" />
              <button className="btn-s">전송</button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
