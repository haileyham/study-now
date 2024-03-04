import {
  FAIL_LENGTH_TITLE,
  FAIL_NULL_CONTENT,
  FAIL_NULL_STATUS,
  FAIL_NULL_TITLE,
  FAIL_NULL_TYPE,
} from './constant/message';

const result = {
  state: false,
  message: '',
};

export const validationPostStudy: any = (
  title: string,
  content: string,
  status: string,
  type: string,
  // mode: string,
  // location: string,
) => {
  const lenTitle = title?.length;
  const lenContent = content?.length;
  const lenStatus = status;
  const lenType = type;

  if (!lenTitle || !title) {
    result.state = false;
    result.message = FAIL_NULL_TITLE;
    return result;
  }

  if (!lenContent || !content) {
    result.state = false;
    result.message = FAIL_NULL_CONTENT;
    return result;
  }

  if (!lenStatus || !status) {
    result.state = false;
    result.message = FAIL_NULL_STATUS;
    return result;
  }

  if (!lenType || !type) {
    result.state = false;
    result.message = FAIL_NULL_TYPE;
    return result;
  }

  result.state = true;
  return result;
};
