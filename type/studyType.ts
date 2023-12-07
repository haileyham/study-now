type StudyWriteState = {
  readonly status: string;
  readonly title: string;
  readonly content: string;
  [key: string]: string;
};

interface Post {
  _id: Object;
  author: string;
  title: string;
  content: string;
  status: string;
  mode: string;
  location: string;
  time: string;
  type: string;
}

interface PostListProps {
  result: Post[];
}

interface StudyDetailProps {
  params: {
    id: string;
  };
}

type DeleteBtnProps = {
  postId: Object | string;
};
