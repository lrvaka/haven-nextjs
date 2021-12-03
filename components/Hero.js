import { motion } from "framer-motion";
import systemStyles from "../styles/utils.module.css";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  const coin = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 500},
        delay: 1,
      },
    },
  };

  const text = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 10 },
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className={styles.hero}>
      <video autoplay="" muted="" loop>
        <source src="/videos/Hero-Video.mp4" type="video/mp4" />
        <source src="/videos/Hero-Video.ogv" type="video/ogv" />
        <source src="/videos/Hero-Video.webm" type="video/webm" />
      </video>
      <motion.div
        className={styles.heroMessage}
        variants={text}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item} className={systemStyles.heading}>
          <span>Bitcoin</span>, value by the many for the many
        </motion.h1>
        <motion.p variants={item} className={systemStyles.paragraph}>
          Offering the best solutions to create and store your wealth, for
          everyone
        </motion.p>
      </motion.div>
      <motion.div
        className={styles.heroImage}
        variants={coin}
        initial="hidden"
        animate="show"
      >
        <Image
          width={800}
          height={907}
          src="/images/3D-Coin.svg"
          alt="Haven for your value"
        />
      </motion.div>
    </div>
  );
}
