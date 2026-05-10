import Link from "next/link";
import styles from "./ProductCard.module.css";

export default function ProductCard({ p }) {
  const catLabel =
    p.category === "zuccaciye" ? "Züccaciye" :
    p.category === "ev-tekstili" ? "Ev Tekstili" : "Dekorasyon";

  return (
    <Link href={`/urun/${p.id}`} className={styles.card}>
      <div
        className={styles.media}
        style={{ backgroundImage: `url("${p.images?.[0]}")` }}
        aria-label={p.alt || p.title}
        role="img"
      />

      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.cat}>{catLabel}</div>
          <div className={styles.price}>
            {Number(p.price).toLocaleString("tr-TR")} ₺
          </div>
        </div>

        <div className={styles.title}>{p.title}</div>
        <div className={styles.desc}>{p.shortDesc}</div>

        <div className={styles.more}>
          İncele <span className={styles.arrow}>→</span>
        </div>
      </div>
    </Link>
  );
}