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
        <div className={styles.contentContainer}>
          <div className={styles.socialsIconContainer}>
            <Image
              src="/images/FB-Icon.png"
              alt="Facebook Logo"
              width={30}
              height={30}
            />
            <Image
              src="/images/Insta-Icon.png"
              alt="Instagram Logo"
              width={30}
              height={30}
            />
            <Image
              src="/images/Twitter-Icon.png"
              alt="Twitter Logo"
              width={30}
              height={30}
            />
            <Image
              src="/images/Email-Icon.png"
              alt="Email Logo"
              width={30}
              height={30}
            />
          </div>
        </div>
      </footer>
    </Layout>
  );
}
