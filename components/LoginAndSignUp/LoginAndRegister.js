import styles from "./LoginAndRegister.module.css";
import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";

export default function LoginAndRegister({ login }) {
  return (
    <div className={styles.container}>
      <div className={styles.LoginAndRegister}>
        {login ? <LoginSection /> : <RegisterSection />}
      </div>
    </div>
  );
}