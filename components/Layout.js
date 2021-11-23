import Head from "next/head";
import styles from "./Layout.module.css";
import Header from "./Header";

export const siteTitle = "Haven";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Create and store your wealth, the Bitcoin way"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      {children}
    </div>
  );
}
