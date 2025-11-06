import { NorthStarLogo } from "../components/NorthStarLogo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <NorthStarLogo className={styles.logo} />
        <div className={styles.copy}>
          <h1>North Star Roofing</h1>
          <p>
            Guided by excellence, we protect what matters most with premium
            roofing craftsmanship and trusted service.
          </p>
        </div>
      </section>
    </main>
  );
}
