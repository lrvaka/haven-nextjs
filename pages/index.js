import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import WhatWeDo from "../components/Sections/WhatWeDo/WhatWeDo";
import styles from "../styles/Home.module.css";
import ThreePillars from "../components/Sections/ThreePillars/ThreePillars";
import LiveDashboard from "../components/Sections/LiveDashboard/LiveDashboard";
import AllSpeed from "../components/Sections/AllSpeed/AllSpeed";

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <WhatWeDo />
        <ThreePillars />
        <LiveDashboard />
        <AllSpeed />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>
  );
}
