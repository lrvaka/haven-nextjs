import styles from "./LiveDashboard.module.css";
import Image from "next/image";

export default function LiveDashboard() {
  return (
    <section className={styles.liveDashboard}>
      <div className={styles.text}>
        <h1>Live Dashboard</h1>
        <p>
          Keep <span>TRACK</span> and view all aspects of your Bitcoin financing
          with our seamless live dashboard experience.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          width={1080}
          height={640}
          src="/images/Haven-Dashboard.png"
          alt="Cool Dashboard"
          layout="fixed"
        />
      </div>
    </section>
  );
}
