import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <video autoplay="" muted="" loop>
        <source src="/videos/Hero-Video.mp4" type="video/mp4" />
        <source src="/videos/Hero-Video.ogv" type="video/ogv" />
        <source src="/videos/Hero-Video.webm" type="video/webm" />
      </video>
      <div className={styles.heroMessage}>
        <h1>
          <span>Bitcoin</span>, value by the many for the many
        </h1>
        <p>
          Offering the best solutions to create and store your wealth, for
          everyone
        </p>
      </div>
      <div className={styles.heroImage}>
        <Image
          width={800}
          height={907}
          src="/images/3D-Coin.svg"
          alt="Haven for your value"
        />
      </div>
    </div>
  );
}
