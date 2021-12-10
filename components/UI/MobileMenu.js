import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenuImage from "../../public/images/Mobile-Menu.svg";
import Image from "next/image";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ setIsOpen, isOpen }) {
  const variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  return (
    <motion.div
      className={styles.mobileMenuContainer}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      onClick={() => setIsOpen((e) => !e)}
    >
      <Image height={90} width={180} src={MobileMenuImage} alt="mobile menu" />
    </motion.div>
  );
}
