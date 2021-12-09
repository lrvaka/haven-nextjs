import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import MobileMenu from "./UI/MobileMenu";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const { scrollYProgress } = useViewportScroll();
  const { height, width } = useWindowSize();

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.32, 1],
    ["-100%", "-100%", "0%", "0%"]
  );

  const headerContent = (
    <>
      <Image
        width={150}
        height={76}
        src="/images/haven-logo.png"
        alt="Haven for your value"
      />
      {height}
      {width}
      <nav className={styles.nav}>
        <MobileMenu />
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
    </>
  );

  const originalHeader = (
    <div className={styles.headerContainer}>
      <header className={styles.mainHeader}>{headerContent}</header>
    </div>
  );

  const stickyHeader = (
    <motion.header style={{ y }} className={styles.sticky}>
      <motion.div className={styles.scrolledContent}>
        {headerContent}
      </motion.div>
    </motion.header>
  );

  return (
    <>
      {/* In order to prevent the two divs from stacking when animation occurred, I changed the position of originalHeader to absolute*/}
      {stickyHeader}
      {originalHeader}
    </>
  );
}
