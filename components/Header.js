import { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import MobileMenu from "./UI/MobileMenu";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const { width } = useWindowSize();

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.35, 1],
    ["-200%", "-200%", "0%", "0%"]
  );

  const variants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -10, opacity: 0 },
  };

  useEffect(() => {
    if (width <= 750) {
      setShowMobileMenu(true);
    } else {
      setShowMobileMenu(false);
      setIsOpen(false);
    }
  }, [width]);

  const headerContent = (
    <>
      <Image
        width={150}
        height={76}
        src="/images/haven-logo.png"
        alt="Haven for your value"
      />
      {showMobileMenu ? (
        <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      ) : (
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
      )}
    </>
  );

  const mobileMenuDropdown = (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className={styles.overlay}
    >
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
    </motion.div>
  );

  const originalHeader = (
    <>
      <header className={styles.mainHeader}>{headerContent}</header>
      {showMobileMenu ? mobileMenuDropdown : null}
    </>
  );

  const stickyHeader = (
    <motion.header className={styles.sticky} style={{ y }}>
      <motion.div className={styles.scrolledContent}>
        {headerContent}
      </motion.div>
      {showMobileMenu ? mobileMenuDropdown : null}
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
