import React from 'react';
import styles from './page.module.scss';
import { connectDB } from '@/lib/utils/database';
import WriteBtn from '@/components/writing/WriteBtn';
import SearchingStudyPostList from '@/components/studyList/SearchingStudy';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Advertisement from '@/components/common/Advertisement';

// export const revalidate = 60;
export const dynamic = 'force-dynamic';

export default async function StudyPost() {
  const db = (await connectDB).db('study_platform');
  let result: Post[] = await db.collection('study_posts').find().toArray();
  result.map((post) => {
    post._id = post._id.toString();
    return post;
  });
  let session = await getServerSession(authOptions as any);

  return (
    <>
      <div className="container">
        <main className={styles.studyMain}>
          <Advertisement st={styles.advStyle}></Advertisement>
          <header className={styles.studyHeader}>
            <div>
              <h1>StudyList</h1>
              <p>스터디 멤버를 구하세요!</p>
            </div>
            <WriteBtn session={session}></WriteBtn>
          </header>
          <section className={styles.studySection}>
            <SearchingStudyPostList result={result}></SearchingStudyPostList>
          </section>
        </main>
      </div>
    </>
  );
}
