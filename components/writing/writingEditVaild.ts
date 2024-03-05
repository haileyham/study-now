import { validationPostStudy } from '@/lib/utils/validation';

type ValidationResult = { [key: string]: string };

type ValidateResult = ValidationResult | { success: string };

export const validate = (studyWrite: StudyWriteState): ValidateResult => {
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
