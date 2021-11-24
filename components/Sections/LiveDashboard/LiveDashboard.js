import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import styles from "./LiveDashboard.module.css";
import Image from "next/image";

const IMG_HEIGHT = 595;

export default function LiveDashboard() {
  //scrollYProgress tracks the value of component not the entire application -
  // CHANGE HEADER! Updating state that often will cause app to be slow, probably
  const { scrollYProgress } = useViewportScroll();

  //useTransform, based off scrollYProgress - when 61% of the component is in viewport, begin changing height
  // complete the changing of height once 70% has been reached
  const height = useTransform(scrollYProgress, [0.65, 0.72], [IMG_HEIGHT, 0], {
    clamp: true,
  });

  return (
    <section className={styles.liveDashboard}>
      <div className={styles.text}>
        <h1>Live Dashboard</h1>
        <p>
          Keep <span>TRACK</span> and view all aspects of your Bitcoin financing
          with our seamless live dashboard experience.
        </p>
      </div>

      <div className={styles.laptopImage}>
        <Image
          width={1080}
          height={640}
          src="/images/Haven-Dashboard.png"
          alt="Cool Dashboard"
          layout="fixed"
        />
        <div className={styles.container}>
          <div className={styles.lightMode}>
            <Image
              width={900}
              height={590}
              src="/images/LightMode.png"
              alt="Light mode"
              layout="fixed"
              objectFit="cover"
            />
          </div>
          <motion.div className={styles.darkMode} style={{ height }}>
            <Image
              width={900}
              height={590}
              src="/images/DarkMode.png"
              alt="dark mode"
              layout="fixed"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
