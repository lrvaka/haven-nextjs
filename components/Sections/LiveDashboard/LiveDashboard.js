import { useState, useEffect } from "react";
import styles from "./LiveDashboard.module.css";
import Image from "next/image";

export default function LiveDashboard() {
  const [imageHeight, setImageHeight] = useState(590);

  const handleScroll = () => {
    const offset = window.scrollY;
    console.log(offset);
    if (offset > 1691) {

    } else {

    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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
        <div className={styles.darkMode} style={{  }}>
          <Image
            width={900}
            height={590}
            src="/images/DarkMode.png"
            alt="dark mode"
            layout="fixed"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
