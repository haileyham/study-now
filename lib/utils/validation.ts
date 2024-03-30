import {
  FAIL_LENGTH_CONTACT,
  FAIL_LENGTH_EMAIL,
  FAIL_LENGTH_LOCATION,
  FAIL_LENGTH_NAME,
  FAIL_LENGTH_PASSWORD,
  FAIL_LENGTH_TITLE,
  FAIL_LENGTH_TYPE,
  FAIL_NULL_CONTENT,
  FAIL_NULL_EMAIL,
  FAIL_NULL_NAME,
  FAIL_NULL_PASSWORD,
  FAIL_NULL_STATUS,
  FAIL_NULL_TITLE,
  FAIL_NULL_TYPE,
  FAIL_REGEX_EMAIL,
  FAIL_REGEX_PASSWORD,
} from './constant/message';
import { emailRegex, pwRegex } from './regex';

const result = {
  state: false,
  message: '',
};

type vaildReturnType = {
  state: boolean;
  message: string;
};

export const validationPostStudy = (
  title: string,
  content: string,
  status: string,
  type: string,
  location: string,
  contact: string,
): vaildReturnType => {
  const lenTitle = title?.length;
  const lenContent = content?.length;
  const lenType = type?.length;
  const lenLocation = location?.length;
  const lenContact = contact?.length;

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

  if (!status) {
    result.state = false;
    result.message = FAIL_NULL_STATUS;
    return result;
  }

  if (!lenType || !type) {
    result.state = false;
    result.message = FAIL_NULL_TYPE;
    return result;
  }

  if (lenTitle < 2 || 15 < lenTitle) {
    result.state = false;
    result.message = FAIL_LENGTH_TITLE;
    return result;
  }

  if (15 < lenType) {
    result.state = false;
    result.message = FAIL_LENGTH_TYPE;
    return result;
  }

  if (10 < lenLocation) {
    result.state = false;
    result.message = FAIL_LENGTH_LOCATION;
    return result;
  }

  if (30 < lenContact) {
    result.state = false;
    result.message = FAIL_LENGTH_CONTACT;
    return result;
  }

  result.state = true;
  return result;
};

export const validationSignUp = (
  name: string,
  email: string,
  pw: string,
): vaildReturnType => {
  const lenName = name?.length;
  const lenEmail = email?.length;
  const lenPw = pw?.length;

  if (!lenName || !name) {
    result.state = false;
    result.message = FAIL_NULL_NAME;
    return result;
  }

  if (!email) {
    result.state = false;
    result.message = FAIL_NULL_EMAIL;
    return result;
  }

  if (!lenPw || !pw) {
    result.state = false;
    result.message = FAIL_NULL_PASSWORD;
    return result;
  }

  if (lenName < 2 || 10 < lenName) {
    result.state = false;
    result.message = FAIL_LENGTH_NAME;
    return result;
  }

  if (21 < lenEmail) {
    result.state = false;
    result.message = FAIL_LENGTH_EMAIL;
    return result;
  }

  if (lenPw < 6 || 16 < lenPw) {
    result.state = false;
    result.message = FAIL_LENGTH_PASSWORD;
    return result;
  }

  if (!emailRegex.test(email)) {
    result.state = false;
    result.message = FAIL_REGEX_EMAIL;
    return result;
  }

  if (!pwRegex.test(pw)) {
    result.state = false;
    result.message = FAIL_REGEX_PASSWORD;
    return result;
  }

  result.state = true;
  return result;
};
