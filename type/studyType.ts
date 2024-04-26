type StudyWriteState = {
  readonly status: string;
  readonly title: string;
  readonly content: string;
  [key: string]: string;
};

interface Post {
  _id: Object;
  author: string;
  authorName: string;
  title: string;
  content: string;
  status: string;
  mode: string;
  location: string;
  contact: string;
  date: string;
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

interface StudyDetailComponent {
  result: {
    _id: string | Object;
    author: string;
    authorName: string;
    authorImage: string;
    title: string;
    content: string;
    status: string;
    mode: string;
    location: string;
    contact: string;
    date: Date;
    type: string;
  };
  session: any;
}

type DeleteEditBtnProps = {
  postId?: Object | string;
  session?: any;
  author: string;
};

type ModalProps = {
  modalBtn: string;
  modalBtnStyle: string;
  message: string;
  onFunction?: () => void;
  mark?: string;
  successMessage?: string;
};

//toLocaleDateString method option객체
interface DateTimeFormatOptions {
  localeMatcher?: 'lookup' | 'best fit';
  weekday?: 'long' | 'short' | 'narrow';
  era?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'long' | 'short';
  formatMatcher?: 'basic' | 'best fit';
  hour12?: boolean;
  timeZone?: string;
}

interface WritingEditor {
  _id: string;
  author: string;
  title: string;
  content: string;
  status: string;
  mode: string;
  location: string;
  contact: string;
  date: string;
  type: string;
}

type WritingEditorProps = {
  result?: WritingEditor;
  writingEdit: { [key: string]: string };
};
