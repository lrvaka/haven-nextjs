import styles from "./LoginAndSignUp.module.css";

export default function LoginAndSignUp({login}) {
  return (
    <div className={styles.container}>
      <div className={styles.LoginAndSignUp}>
      {login ? "login page" : "sign up page"}
      </div>
    </div>
  );
}

// { login (probably through props)? loginSection : signUpSection}
