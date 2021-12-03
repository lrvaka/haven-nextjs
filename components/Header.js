import { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const { height, width } = useWindowSize();

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 1],
    ["0%", "0%", "100%", "100%"]
  );

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 800) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const sticky = {
    visible: {
      y: 100,
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
    hidden: {
      y: 0,
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

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
      <header className={styles.header}>{headerContent}</header>
    </div>
  );

  const stickyHeader = (
    <motion.header
      // animate={scrolled ? "visible" : "hidden"}
      // variants={sticky}
      style={{ y }}
      className={styles.sticky}
    >
      <motion.div className={styles.scrolledContent}>
        {headerContent}
      </motion.div>
    </motion.header>
  );

  return (
    <>
      {/* In order to prevent the two divs from stacking when animation occurred, I changed the position of originalHeader to absolute*/}
      {originalHeader}
      {stickyHeader}
    </>
  );
}
