import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        width={150}
        height={76}
        src="/images/haven-logo.png"
        alt="Haven for your value"
      />
      <nav>
        <Link href="/">
          <a className={styles.login}>Login</a>
        </Link>
        <Link href="/">
          <a className={styles.register}>Register</a>
        </Link>
      </nav>
    </header>
  );
}
