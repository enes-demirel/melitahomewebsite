import Link from "next/link";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import styles from "../corporate.module.css";

export const metadata = {
title: "Hakkımızda | Konya Züccaciye ve Ev Ürünleri Mağazası",
  description:
    "Melita Home, Konya Selçuklu’da züccaciye, çeyizlik ürünler, ev tekstili, küçük ev aletleri ve dekoratif ev ürünleri sunan yerel mağazadır.",
    alternates: {
  canonical: "/hakkimizda",
},
};

const breadcrumbLd = buildBreadcrumbJsonLd([
  { name: "Ana Sayfa", item: "https://melitahome.com" },
  { name: "Hakkımızda", item: "https://melitahome.com/hakkimizda" },
]);

const values = [
  {
    title: "Geniş ürün seçkisi",
    text: "Züccaciye, çeyizlik ürünler, ev tekstili, küçük ev aletleri ve dekoratif ev ürünleri tek mağaza deneyiminde sunulur.",
  },
  {
    title: "Yerel mağaza güveni",
    text: "Melita Home, Konya Selçuklu’daki fiziksel mağazasıyla ürünleri yerinde görme ve doğrudan bilgi alma imkânı sağlar.",
  },
  {
    title: "Yeni ev hazırlığına uygun yapı",
    text: "Çeyizlik ürünlerden sofra takımlarına, nevresimden dekoratif parçalara kadar yeni ev hazırlığına destek olur.",
  },
];

export default function Page() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrow}>Melita Home Hakkında</span>
              <h1 className={styles.h1}>
                Konya Selçuklu’da züccaciye, çeyizlik ve ev ürünleri mağazası.
              </h1>
              <p className={styles.lead}>
                Melita Home; evini yenilemek, çeyiz hazırlığı yapmak veya günlük
                ihtiyaçları için kaliteli ürün arayan kullanıcılar için züccaciye,
                ev tekstili, dekorasyon ve küçük ev aletleri alanında güçlü bir mağaza
                deneyimi sunar.
              </p>

              <div className={styles.actions}>
                <Link href="/urunler" className={styles.primaryButton}>
                  Ürünleri İncele
                </Link>
                <Link href="/iletisim" className={styles.secondaryButton}>
                  Mağaza Bilgileri
                </Link>
              </div>
            </div>

            <div className={styles.heroCard}>
              <strong>Melita Home, ürün çeşitliliğini yerel mağaza güveniyle birleştirir.</strong>
              <span>
                Konya züccaciye, Konya çeyizci ve Konya ev ürünleri aramalarında
                kullanıcıların gerçek mağaza bilgisine hızlıca ulaşmasını hedefler.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Yaklaşımımız</span>
            <h2>Ev alışverişinde net, ulaşılabilir ve güven veren mağaza deneyimi</h2>
            <p>
              Melita Home’un amacı yalnızca ürün göstermek değil; müşterinin ihtiyacına
              uygun ürün grubuna daha hızlı ulaşmasını sağlamaktır.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {values.map((item, index) => (
              <div key={item.title} className={styles.card}>
                <span className={styles.cardNumber}>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whiteSection}>
        <div className={styles.wrap}>
          <div className={styles.splitGrid}>
            <div>
              <span className={styles.eyebrow}>Ürün çeşitliliği</span>
              <h2>Züccaciye, ev tekstili ve çeyizlik ürünler aynı mağaza çatısında.</h2>
            </div>

            <div className={styles.textStack}>
              <p>
                Melita Home’da porselen yemek takımları, çatal bıçak setleri, bardak
                takımları, nevresim, pike, yorgan, dekoratif objeler ve küçük ev aletleri
                gibi evin farklı ihtiyaçlarına yönelik ürün grupları bulunur.
              </p>
              <p>
                Yeni ev kuranlar, çeyiz hazırlığı yapanlar veya evinde daha şık bir düzen
                oluşturmak isteyenler için mağaza içi ürün seçkisi pratik bir alışveriş
                deneyimi sunar.
              </p>

              <div className={styles.badgeList}>
                <span>Konya züccaciye</span>
                <span>Selçuklu züccaciye</span>
                <span>Konya çeyizci</span>
                <span>Konya ev ürünleri</span>
                <span>Ev tekstili</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.wrap}>
          <div className={styles.ctaBox}>
            <div>
              <span className={styles.eyebrow}>Melita Home</span>
              <h2>Mağazayı ziyaret etmeden önce bilgi almak ister misiniz?</h2>
              <p>
                Ürün grupları, stok bilgisi ve mağaza ziyareti için Melita Home ile
                iletişime geçebilirsiniz.
              </p>
            </div>

            <a href="tel:+905541940433" className={styles.primaryButton}>
              Bizi Arayın
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}