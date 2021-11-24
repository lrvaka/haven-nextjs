import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 138) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const stickyHead = `${styles.header} ${styles.scrolled}`;

  let headerClasses = scrolled ? stickyHead : `${styles.header}`;

  return (
    <header className={headerClasses}>
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
          <a className={styles.register}>
            <div>
              <Image
                width={15}
                height={15}
                src="/images/Register-Icon.png"
                alt="Register now"
              />
            </div>
            Register
          </a>
        </Link>
      </nav>
    </header>
  );
}
