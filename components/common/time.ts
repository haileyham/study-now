import React from 'react';

export default function getTimesAgo(postDate: string) {
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

  return getDate(postDateTime);
}

export function getDate(postDateTime: Date): string {
  const postDate = new Date(postDateTime);

  const options: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return postDate.toLocaleDateString('ko-KR', options);
}
