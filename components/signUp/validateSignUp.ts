import { validationSignUp } from '@/lib/utils/validation';

interface SignUpInfo {
  name: string;
  email: string;
  pw: string;
}

type ValidationResult = { state: boolean; message?: string };

type ValidateResult = ValidationResult | { success: string };

export const validateSignUp = (info: SignUpInfo): ValidateResult => {
  console.log(info);
  const validRegistration = validationSignUp(info.name, info.email, info.pw);
  if (!validRegistration.state) {
    return validRegistration;
  }

  return { success: 'success' };
};
