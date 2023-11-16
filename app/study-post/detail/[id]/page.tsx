import React from 'react';
import styles from './page.module.scss';

export default function StudyDetail() {
  return (
    <>
      <div className="container">
        <header>
          <h1>스터디 모집 상세 페이지</h1>
          <button className="btn-s">글수정</button>
          <button className="btn-s">글삭제</button>
        </header>
        <main className={styles.main}>
          <section>
            <header className={styles.mainHeader}>
              <h2>ㅇㅇ스터디 구해요!</h2>
              <div>
                <img src="" alt="profile" />
                <p>author</p>
                <p>1일전</p>
              </div>
            </header>
            <div className={styles.mainContent}>
              <p>
                이렇게 저렇게 해서 요렇궁 저렇궁 이렇게 저렇게 해서 요렇궁
                저렇궁이렇게 저렇게 해서 요렇궁 저렇궁이렇게 저렇게 해서 요렇궁
                저렇궁이렇게 저렇게 해서 요렇궁 저렇궁 이렇게 저렇게 해서 요렇궁
                저렇궁이렇게 저렇게 해서 요렇궁 저렇궁이렇게 저렇게 해서 요렇궁
                저렇궁이렇게 저렇게 해서 요렇궁 저렇궁 이렇게 저렇게 해서 요렇궁
                저렇궁이렇게 저렇게 해서 요렇궁 저렇궁이렇게 저렇게 해서 요렇궁
                저렇궁이렇게 저렇게 해서 요렇궁 저렇궁
              </p>
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
                <p>
                  댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다l
                  댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다l
                  댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입
                </p>
                <p>1일전</p>
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
