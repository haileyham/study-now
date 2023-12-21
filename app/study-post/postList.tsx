import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import getTimesAgo from '@/components/common/time';

const PostList: React.FC<PostListProps> = ({ result }) => {
  const reversedResult = result.slice().reverse();
  console.log(reversedResult);
  // console.log(result);
  return (
    <div>
      {reversedResult.map((post: Post, i: number) => {
        // console.log(post);
        return (
          <div key={i}>
            <Link href={`/study-post/detail/${post._id}`}>
              <div className={styles.studyList}>
                {/* <span
                        className={
                          post.status == 'recruiting'
                            ? styles.statusRR
                            : styles.statusDD
                        }
                      ></span> */}
                <span
                  className={
                    post.status == 'recruiting'
                      ? styles.statusR
                      : styles.statusD
                  }
                >
                  {post.status == 'recruiting' ? '모집중' : '모집완료'}
                </span>
                <span className={styles.date}>{getTimesAgo(post.date)}</span>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <div className={styles.postInfo}>
                  {post.mode && (
                    <span className={styles.info1}>{post.mode}</span>
                  )}
                  {post.location && (
                    <span className={styles.info2}>{post.location}</span>
                  )}
                  {post.time && (
                    <span className={styles.info3}>{post.time}</span>
                  )}
                  {post.type && (
                    <span className={styles.info4}>{post.type}</span>
                  )}

                  <span>작성자 : Zoe</span>
                  {/* <span>♡ 1</span> */}
                  {/* <span>♧ 2</span> */}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
