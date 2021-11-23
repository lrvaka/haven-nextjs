import styles from "./WhatWeDo.module.css";
import Carousel from "./Carousel";

export default function WhatWeDo() {
  return (
    <section className={styles.whatWeDo}>
      <h1>Monetary solutions on your terms, not the banks</h1>
      <Carousel />
    </section>
  );
}
