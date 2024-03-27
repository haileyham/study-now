import styles from './page.module.scss';

export default function SignUp() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.signUpInput}>
          <header>
            <h2>Sign Up</h2>
          </header>
          <div>
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="example@example.com" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button className="btn-m">Sign Up</button>
          </div>
        </section>
      </main>
    </>
  );
}
