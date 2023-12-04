import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import { connectDB } from '@/util/database';

export default async function StudyPost() {
  const db = (await connectDB).db('study_platform');
  let result: Post[] = await db.collection('study_posts').find().toArray();

  return (
    <>
      <div className="container">
        <main className={styles.studyMain}>
          <header className={styles.studyHeader}>
            <div>
              <h1>StudyList</h1>
              <p>스터디 멤버를 구하세요!</p>
            </div>
            <Link href="/study-post/write">
              <span className="btn-s">글쓰기</span>
            </Link>
          </header>
          <section className={styles.studySection}>
            {result.map((post: Post, i: number) => {
              return (
                <div key={i}>
                  <Link href="/study-post/detail/abc">
                    <div className={styles.studyList}>
                      <span className={styles.status}>{post.status}</span>
                      <span className={styles.date}>1일전</span>
                      <h2>{post.title}</h2>
                      <p>{post.content}</p>
                      <div className={styles.postInfo}>
                        <span>Zoe</span>
                        <span>♡ 1</span>
                        <span>♧ 2</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </section>
        </main>
      </div>
    </>
  );
}
