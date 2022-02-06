import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devtools</title>
        <meta name="description" content="All dev tools in one place." />
      </Head>
      <main className={styles.box}>
        <span></span>
        <div className={styles.flex_col}>
          <h3 className={styles.title}>Coming Soon</h3>
          <p className={styles.tagline}>Our website is under construction</p>
        </div>
        <span className={styles.copyright}>
          &copy; 2021{" "}
          <a href="https://twitter.com/vijayhardaha">Vijay Hardaha</a>
          <span>&mdash;</span>
          <span>
            <a href="https://twitter.com/vijayhardaha">Twitter</a>
          </span>
          <span>
            <a href="https://github.com/vijayhardaha">Github</a>
          </span>
        </span>
      </main>
    </>
  );
}
