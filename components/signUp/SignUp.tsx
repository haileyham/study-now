'use client';
import { ChangeEvent, useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import { validateSignUp } from './validateSignUp';
import Modal from '../modal/Modal';

type Valid = {
  [key: string]: string | boolean;
};

export default function SignUp() {
  const router = useRouter();
  const [signUpInfo, setSignUpInfo] = useState({
    name: '',
    email: '',
    pw: '',
  });

  const [validationFailed, setValidationFailed] = useState<Valid>({});
  console.log(validationFailed);
  const validation = () => {
    const result = validateSignUp(signUpInfo);
    setValidationFailed(result);
  };

  const handleCancel = () => {
    setValidationFailed({});
    return false;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/auth/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ info: signUpInfo }),
      });
      if (response.ok) {
        console.log('회원가입 성공적');
        router.push('/');
      } else {
        const errorRes = await response.json();
        console.error('Error:', errorRes);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <section className={styles.signUpInput}>
          <header>
            <h2>Sign Up</h2>
          </header>
          <div className={styles.signUpInputBox}>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="example@example.com"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="pw"
              onChange={handleChange}
            />
            <div className={styles.submitBtn} onClick={validation}>
              {validationFailed.success === 'success' ? (
                <Modal
                  modalBtn="Sign Up"
                  modalBtnStyle={`btn-m ${styles.submitBtn}`}
                  message="회원가입을 하시겠습니까?"
                  onFunction={handleSubmit}
                ></Modal>
              ) : (
                <Modal
                  modalBtn="Sign Up"
                  modalBtnStyle={`btn-m ${styles.submitBtn}`}
                  message={`${validationFailed.message}`}
                  onFunction={handleCancel}
                  mark={`!`}
                ></Modal>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
