'use client';
import { ChangeEvent, useState } from 'react';
import styles from './page.module.scss';

export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    name: '',
    email: '',
    pw: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };
  console.log(signUpInfo);

  return (
    <>
      <main className={styles.main}>
        <section className={styles.signUpInput}>
          <header>
            <h2>Sign Up</h2>
          </header>
          <div>
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
              name="password"
              onChange={handleChange}
            />
            <button className="btn-m">Sign Up</button>
          </div>
        </section>
      </main>
    </>
  );
}
