import styles from "./LoginAndSignUp.module.css";

export default function LoginAndSignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.LoginAndSignUp}>
        login (probably through props) ? LoginSection : SignUpSection
      </div>
    </div>
  );
}

// { login (probably through props)? loginSection : signUpSection}
