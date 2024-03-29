import { validationPostStudy } from '@/lib/utils/validation';

type ValidationResult = { state: boolean; message?: string };

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
