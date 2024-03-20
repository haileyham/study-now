import styles from './page.module.scss';

export default function getCardContent() {
  return [
    {
      imageUrl: '/images/character/catBook.png',
      title: '인기 Quiz',
      url: 'https://study-now-pink.vercel.app/quiz/play?ty=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&q=5&t=10',
      style: '/images/company/kindergarden.jpg',
    },
    {
      imageUrl: '/images/character/rabbitBook.png',
      title: '인기 스터디 게시글',
      url: 'https://study-now-pink.vercel.app/study-post/detail/65f906033df113c6953cdcbc',
      content1: '프론트엔드 면접 스터디 모집중',
      content2: '공인중개사 스터디 구해요!',
      style: '/images/company/officeJob.jpg',
    },
    {
      imageUrl: '/images/character/job-openings.png',
      title: '인기 채용 정보',
      url: 'https://study-now-pink.vercel.app/job-openings',
      style: '/images/company/building.jpg',
    },
    {
      imageUrl: '/images/character/blue.png',
      title: 'Study Now 소식',
      url: 'https://github.com/haileyham/study-now',
      style: '/images/company/3.jpg',
    },
  ];
}
