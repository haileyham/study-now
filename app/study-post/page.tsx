import React from 'react';
import styles from './page.module.scss';
import { connectDB } from '@/util/database';
import PostList from './postList';
import WriteBtn from '@/components/writing/WriteBtn';
import SearchingStudy from '@/components/studyList/SearchingStudy';

// export const revalidate = 60;
export const dynamic = 'force-dynamic';

export default async function StudyPost() {
  const db = (await connectDB).db('study_platform');
  let result: Post[] = await db.collection('study_posts').find().toArray();
  result.map((post) => {
    post._id = post._id.toString();
    return post;
  });

  return (
    <>
      <div className="container">
        <main className={styles.studyMain}>
          <header className={styles.studyHeader}>
            <div>
              <h1>StudyList</h1>
              <p>스터디 멤버를 구하세요!</p>
            </div>
            <WriteBtn></WriteBtn>
          </header>
          <section className={styles.studySection}>
            <SearchingStudy result={result}></SearchingStudy>
            <PostList result={result}></PostList>
          </section>
        </main>
      </div>
    </>
  );
}
