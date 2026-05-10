import Link from "next/link";
import styles from "./ProductCard.module.css";

const categoryLabels = {
  zuccaciye: "Züccaciye",
  "ev-tekstili": "Ev Tekstili",
  dekorasyon: "Dekorasyon",
};

function formatPrice(price) {
  const value = Number(price);

  if (!Number.isFinite(value) || value <= 0) {
    return "İletişime geçiniz";
  }

  return `${value.toLocaleString("tr-TR")} ₺`;
}

export default function ProductCard({ p }) {
  const catLabel = categoryLabels[p.category] || "Melita Home";
  const hasPrice = Number.isFinite(Number(p.price)) && Number(p.price) > 0;

  return (
    <Link href={`/urun/${p.id}`} className={styles.card}>
      <div className={styles.mediaWrap}>
        <img
          className={styles.media}
          src={p.images?.[0]}
          alt={p.alt || p.title}
          loading="lazy"
        />

        <span className={styles.badge}>{catLabel}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.priceRow}>
          <span className={hasPrice ? styles.price : styles.priceMuted}>
            {formatPrice(p.price)}
          </span>
        </div>

        <h3 className={styles.title}>{p.title}</h3>

        <p className={styles.desc}>{p.shortDesc}</p>

        <div className={styles.more}>
          Ürünü İncele <span>→</span>
        </div>
      </div>
    </Link>
  );
}