import Link from "next/link";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import styles from "../corporate.module.css";

export const metadata = {
  title: "Ürün Grupları ve Mağaza Hizmetleri | Melita Home",
  description:
    "Melita Home’da züccaciye, çeyizlik ürünler, ev tekstili, dekorasyon, küçük ev aletleri ve mağaza içi ürün desteği hakkında bilgi alın.",
};

const breadcrumbLd = buildBreadcrumbJsonLd([
  { name: "Ana Sayfa", item: "https://melitahome.com" },
  { name: "Ürün Grupları", item: "https://melitahome.com/hizmetler" },
]);

const groups = [
  {
    title: "Züccaciye",
    text: "Porselen yemek takımları, bardak setleri, servis ürünleri, mutfak yardımcıları ve sofra düzenine yönelik ürünler.",
    href: "/urunler?cat=zuccaciye",
  },
  {
    title: "Çeyizlik Ürünler",
    text: "Yeni ev hazırlığı için sofra, mutfak, tekstil, dekorasyon ve tamamlayıcı ev ürünleri.",
    href: "/urunler",
  },
  {
    title: "Ev Tekstili",
    text: "Nevresim takımları, pike, yorgan ve yatak odası kullanımına uygun tekstil ürünleri.",
    href: "/urunler?cat=ev-tekstili",
  },
  {
    title: "Dekorasyon",
    text: "Salon, antre ve yaşam alanlarını tamamlayan dekoratif objeler ve şık ev aksesuarları.",
    href: "/urunler?cat=dekorasyon",
  },
];

const services = [
  {
    title: "Ürün danışmanlığı",
    text: "İhtiyacınıza uygun ürün grubuna karar verirken mağaza üzerinden bilgi alabilirsiniz.",
  },
  {
    title: "Çeyiz hazırlığı desteği",
    text: "Yeni ev ve çeyiz hazırlığında birlikte kullanılabilecek ürün grupları hakkında yönlendirme alabilirsiniz.",
  },
  {
    title: "Mağazadan inceleme",
    text: "Ürünleri fiziksel mağazada görerek karşılaştırabilir ve detaylı bilgi alabilirsiniz.",
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
              <span className={styles.eyebrow}>Ürün Grupları</span>
              <h1 className={styles.h1}>
                Züccaciye, çeyizlik, ev tekstili ve dekorasyon ürünleri.
              </h1>
              <p className={styles.lead}>
                Melita Home’da evin farklı ihtiyaçlarına yönelik ürün gruplarını
                inceleyebilir, fiyat ve stok bilgisi için mağazayla doğrudan iletişime
                geçebilirsiniz.
              </p>

              <div className={styles.actions}>
                <Link href="/urunler" className={styles.primaryButton}>
                  Ürünleri İncele
                </Link>
                <a href="tel:+905541940433" className={styles.secondaryButton}>
                  Bizi Arayın
                </a>
              </div>
            </div>

            <div className={styles.heroCard}>
              <strong>Konya’da züccaciye ve ev ürünleri arayanlar için kategorili vitrin.</strong>
              <span>
                Ürünleri kategoriye göre inceleyin, detaylı bilgi için Melita Home ile
                iletişime geçin.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Kategoriler</span>
            <h2>Melita Home ürün kategorileri</h2>
            <p>
              Züccaciye, çeyizlik ürünler, ev tekstili ve dekorasyon kategorileriyle
              ev alışverişini daha net ve düzenli hale getirir.
            </p>
          </div>

          <div className={styles.cardGridFour}>
            {groups.map((group, index) => (
              <Link key={group.title} href={group.href} className={styles.card}>
                <span className={styles.cardNumber}>0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <span className={styles.cardLink}>Ürünleri incele →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whiteSection}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Mağaza desteği</span>
            <h2>Ürün seçimini kolaylaştıran mağaza deneyimi</h2>
            <p>
              Melita Home, yalnızca ürün listeleyen bir vitrin değil; müşterinin doğru
              ürün grubuna ulaşmasını kolaylaştıran yerel mağaza deneyimi sunar.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {services.map((service, index) => (
              <div key={service.title} className={`${styles.card} ${styles.cardAlt}`}>
                <span className={styles.cardNumber}>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.wrap}>
          <div className={styles.ctaBox}>
            <div>
              <span className={styles.eyebrow}>Bilgi alın</span>
              <h2>Aradığınız ürün grubunu hızlıca öğrenin.</h2>
              <p>
                Stok, fiyat ve kategori bilgisi için Melita Home’u arayabilir veya
                mağazayı ziyaret edebilirsiniz.
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