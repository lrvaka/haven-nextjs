import styles from "./ThreePillars.module.css";

const DUMMY_CARDS = [
  {
    title: "Security",
    emoji: "🔐 ",
    description: "Multisignature storage with distributed keys",
  },
  {
    title: "Transparency",
    emoji: "🪟 ",
    description: "On-chain addresses that are easy to monitor",
  },
  {
    title: "Autonomy",
    emoji: "🗽 ",
    description: "Choose how much control you wish to retain",
  },
];

export default function ThreePillars() {
  const ThreeCards = (
    <div className={styles.threeCards}>
      {DUMMY_CARDS.map((e) => (
        <div key={e.title} className={styles.card}>
          <h3>{e.emoji}</h3>
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
  return (
    <section className={styles.threePillars}>
      <h1>Havens Three Pillars</h1>
      {ThreeCards}
    </section>
  );
}
