import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

const PostList: React.FC<PostListProps> = ({ result }) => {
  //시간
  const getTimesAgo = (postDate: string) => {
    const postDateTime = new Date(postDate);
    const currentDateTime = new Date();

    const timeDifference = currentDateTime.getTime() - postDateTime.getTime();
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutesAgo < 1) {
      return '방금 전';
    }
    if (minutesAgo < 60) {
      return `${minutesAgo}분 전`;
    }
    if (hoursAgo < 24) {
      return `${hoursAgo}시간 전`;
    }
    if (daysAgo <= 30) {
      return `${daysAgo}일 전`;
    }

    const options: DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return postDateTime.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      {result.map((post: Post, i: number) => {
        console.log(post);
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
