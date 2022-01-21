import styles from "./WhatWeDo.module.css";
import systemStyles from "../../../styles/utils.module.css";
import Carousel from "./Carousel";

export default function WhatWeDo() {
  return (
    <section className={styles.whatWeDoContainer}>
      <div className={styles.whatWeDo}>
        <h1 className={systemStyles.heading}>
          Monetary solutions on your terms, not the banks
        </h1>
        <Carousel />
      </div>
    </section>
  );
}
