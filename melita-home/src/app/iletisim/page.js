import { buildBreadcrumbJsonLd, buildLocalBusinessJsonLd } from "@/lib/seo";
import styles from "../corporate.module.css";

export const metadata = {
title: "İletişim | Melita Home Konya Selçuklu",
  description:
    "Melita Home iletişim bilgileri: Kosova, Seher Sk. No:3/A, 42250 Selçuklu/Konya. Telefon: +90 545 425 09 75. Çalışma saatleri: 09:00 - 19:00.",
    alternates: {
  canonical: "/iletisim",
},
};

const breadcrumbLd = buildBreadcrumbJsonLd([
  { name: "Ana Sayfa", item: "https://melitahome.com" },
  { name: "İletişim", item: "https://melitahome.com/iletisim" },
]);

const localBusinessLd = buildLocalBusinessJsonLd({
  name: "Melita Home",
  address: "Kosova, Seher Sk. No:3/A, 42250 Selçuklu / Konya",
  telephone: "+90 545 425 09 75",
  sameAs: ["https://www.instagram.com/melitahomee/"],
});

export default function Page() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrow}>İletişim</span>
              <h1 className={styles.h1}>
                Melita Home Konya Selçuklu mağaza iletişim bilgileri.
              </h1>
              <p className={styles.lead}>
                Ürün fiyatı, stok bilgisi, çeyizlik ürünler, züccaciye ve ev tekstili
                seçenekleri hakkında bilgi almak için Melita Home ile iletişime
                geçebilirsiniz.
              </p>

              <div className={styles.actions}>
                <a href="tel:+905454250975" className={styles.primaryButton}>
                  Bizi Arayın
                </a>
                <a
                  href="https://www.instagram.com/melitahomee/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.secondaryButton}
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className={styles.heroCard}>
              <strong>Her gün 09:00 - 19:00 saatleri arasında ulaşabilirsiniz.</strong>
              <span>
                Kosova Mahallesi, Seher Sokak üzerindeki Melita Home mağazasını ziyaret
                edebilirsiniz.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.contactGrid}>
            <div className={styles.contactPanel}>
              <span className={styles.eyebrow}>Mağaza bilgileri</span>

              <div className={styles.contactList}>
                <a href="tel:+905454250975" className={styles.contactItem}>
                  <span>Telefon</span>
                  <strong>+90 545 425 09 75</strong>
                </a>

                <a
                  href="https://www.instagram.com/melitahomee/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactItem}
                >
                  <span>Instagram</span>
                  <strong>@melitahomee</strong>
                </a>

                <a
                  href="https://share.google/QAFSwfGNnTcdO9VJk"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactItem}
                >
                  <span>Adres</span>
                  <strong>Kosova, Seher Sk. No:3/A, 42250 Selçuklu / Konya</strong>
                </a>

                <div className={styles.contactItem}>
                  <span>Çalışma saatleri</span>
                  <strong>Her gün 09:00 - 19:00</strong>
                </div>
              </div>
            </div>

            <iframe
              className={styles.mapFrame}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Kosova%2C%20Seher%20Sk.%20No%3A3%2FA%2C%2042250%20Sel%C3%A7uklu%2FKonya&output=embed"
              title="Melita Home Konum"
            />
          </div>
        </div>
      </section>
    </main>
  );
}