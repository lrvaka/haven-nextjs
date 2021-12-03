import { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "./LiveDashboard.module.css";
import systemStyles from "../../../styles/utils.module.css";
import Image from "next/image";

const IMG_HEIGHT = 1813;
const IMG_WIDTH = 3105;

export default function LiveDashboard() {
  const [range, setRange] = useState({
    low: 0.7,
    high: 0.9,
  });
  //scrollYProgress tracks the value of component not the entire application -
  // CHANGE HEADER! Updating state that often will cause app to be slow, probably
  const { scrollYProgress } = useViewportScroll();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 690 && width <= 1100) {
      setRange({ low: -2, high: -2.5 });
    } else if (width < 690 && width > 525) {
      setRange({low: -1.82, high: -2.3})
    } else {
      setRange({ low: -2.2, high: -2.6 });
    }

    console.log(scrollYProgress.current)
  }, [width, scrollYProgress]);

  //useTransform, based off scrollYProgress - when 65% of the component is in viewport, begin changing height - 0
  // complete the changing of height once 72% has been reached - 595
  const height = useTransform(
    scrollYProgress,
    [range.low, range.high],
    [0, IMG_HEIGHT]
  );

  return (
    <section className={styles.liveDashboard}>
      <div className={styles.text}>
        <h1 className={systemStyles.heading}>Live Dashboard</h1>
        <p className={systemStyles.paragraph}>
          Keep <span>TRACK</span> and view all aspects of your Bitcoin financing
          with our seamless live dashboard experience.
        </p>
      </div>
      <div className={styles.colorModes}>
        <div className={styles.lightMode}>
          <Image
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            src="/images/LightMode.png"
            alt="Light mode"
          />
        </div>
        {/* this is the framer motion div being animated through the style attribute - height */}
        <motion.div className={styles.mask} style={{ height }}>
          <div className={styles.darkMode}>
            <Image
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              src="/images/DarkMode.png"
              alt="dark mode"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
