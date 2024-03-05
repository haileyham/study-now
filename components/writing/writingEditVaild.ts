import { validationPostStudy } from '@/lib/utils/validation';

export const validate = (studyWrite) => {
  const validWritingEditor = validationPostStudy(
    studyWrite.title,
    studyWrite.content,
    studyWrite.status,
    studyWrite.type,
    studyWrite.location,
    studyWrite.contact,
  );
  if (!validWritingEditor.state) {
    return validWritingEditor;
  }

  return { success: 'success' };
};
