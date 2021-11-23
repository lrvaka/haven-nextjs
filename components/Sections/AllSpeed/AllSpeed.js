import styles from "./AllSpeed.module.css";
import Image from "next/image";

export default function AllSpeed() {
  return (
    <div className={styles.allSpeed}>
      <div className={styles.image}>
        <Image
          src="/images/All-Speed.svg"
          width={1080}
          height={640}
          alt="super fast"
          layout="fixed"
        />
      </div>
      <div className={styles.text}>
        <h1>All the speed, with no fees</h1>
        <p>
          <span>INSTANTANEOUS</span> transactions with with
          <span> NO FEES</span>, we cover it all, transaction costs, taxes,
          everything.
        </p>
      </div>
    </div>
  );
}
