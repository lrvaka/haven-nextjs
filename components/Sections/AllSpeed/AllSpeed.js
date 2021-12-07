import styles from "./AllSpeed.module.css";
import systemStyles from "../../../styles/utils.module.css";
import Image from "next/image";

export default function AllSpeed() {
  return (
    <section className={styles.allSpeedSection}>
      <div className={styles.allSpeedContainer}>
        <div className={styles.allSpeedItems}>
          <div className={styles.image}>
            <Image
              src="/images/All-Speed.svg"
              width={3105}
              height={1813}
              alt="super fast"
            />
          </div>
          <div className={styles.text}>
            <h1 className={systemStyles.heading}>
              All the speed, <br />
              with no fees
            </h1>
            <p className={systemStyles.paragraph}>
              <span>INSTANTANEOUS</span> transactions with with
              <span> NO FEES</span>, we cover it all, transaction costs, taxes,
              everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
