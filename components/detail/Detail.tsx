import React from 'react';
import styles from './page.module.scss';
import { EditBtn } from '@/components/detail/Edit';
import { DeleteBtn } from '@/components/detail/delete';
import { getDate } from '@/components/common/time';

export default function Detail({ result }) {
  // console.log(result);
  let id;
  if (result) {
    id = result._id.toString();
  } else {
    console.error('Study post not found');
    // 또는 에러 처리 로직을 추가할 수 있습니다.
  }

  if (result) {
    return (
      <>
        <div className={`container ${styles.container}`}>
          <header>
            <h1 className="a11y-hidden">스터디 모집 상세 페이지</h1>
          </header>
          <main className={styles.main}>
            <section>
              <header className={styles.mainHeader}>
                <div className={styles.postInfo}>
                  <div>
                    <span>모집상태</span>
                    <p>
                      {result.status == 'recruiting' ? '모집중' : '모집완료'}
                    </p>
                  </div>
                  <div>
                    <span>온오프</span>
                    <p>{result.mode ? result.mode : '-'}</p>
                  </div>
                  <div>
                    <span>장소</span>
                    <p>{result.location ? result.location : '-'}</p>
                  </div>
                  <div>
                    <span>종류</span>
                    <p>{result.type ? result.type : '-'}</p>
                  </div>
                </div>
                <div className={styles.divMainHeader}>
                  <h2>{result.title}</h2>
                  <div className={styles.detailEditDel}>
                    {/* <Link href={`/study-post/edit/${id}`}>
                      <button className={styles.editBtn}>글수정</button>
                    </Link> */}
                    <EditBtn postId={result._id}></EditBtn>
                    {/* <button className="btn-s">글삭제</button> */}
                    <DeleteBtn postId={result._id}></DeleteBtn>
                  </div>
                </div>
                <div className={styles.divMainHeader}>
                  <img src="" alt="profile" />
                  <p>author</p>
                  <p className={styles.date}>{getDate(result.date)}</p>
                </div>
              </header>
              <div className={styles.mainContent}>
                <p className={styles.content}>{result.content}</p>
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
  } else {
    return <></>;
  }
}
