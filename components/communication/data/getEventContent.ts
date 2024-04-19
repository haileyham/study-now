import styles from '../page.module.scss';

export default function getEventContent() {
  return [
    {
      image: '/images/events/review.png',
      title: '리뷰 이벤트',
      content:
        'StudyNow 리뷰 게시판에 남기시면 매월 추첨을 통해 커피 기프티콘을 드립니다!',
      style: `${styles.contentA}`,
    },
    {
      image: '/images/events/counseling.png',
      title: '분야별 전문가와 Q&A 이벤트!',
      content: 'COMING SOON! 분야별 전문가와 온라인 1:1 상담!',
      style: `${styles.contentB}`,
    },
    {
      image: '/images/events/challenge.png',
      title: '스터디나우 커뮤니티 챌린지!',
      content:
        'StudyNow에서 스터디 모집, 콘텐츠 공유등의 내역을 캡쳐하여 스터디나우 공식 코코아톡 채널로 보내시면 추첨을 통해 커피 기프티콘을 드립니다!',
      style: `${styles.contentC}`,
    },
  ];
}
