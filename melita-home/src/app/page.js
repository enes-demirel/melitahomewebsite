import Link from "next/link";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { buildLocalBusinessJsonLd } from "@/lib/seo";
import styles from "./home.module.css";

export const metadata = {
  title: "Konya Züccaciye, Çeyizlik ve Ev Ürünleri | Melita Home",
  description:
    "Melita Home, Konya Selçuklu’da züccaciye, çeyizlik ürünler, ev tekstili, nevresim, pike, yorgan, tabak takımları, çatal bıçak setleri, küçük ev aletleri ve dekoratif ev ürünleri sunan yerel mağazadır.",
    alternates: {
  canonical: "/",
},
  keywords: [
    "Konya züccaciye",
    "Selçuklu züccaciye",
    "Konya çeyizci",
    "Konya ev ürünleri",
    "Konya tekstil",
    "Konya ev tekstili",
    "Melita Home",
  ],
};

const popularGroups = [
  {
    title: "Züccaciye",
    text: "Porselen yemek takımları, bardak setleri, sunum ürünleri ve mutfak ihtiyaçları.",
    href: "/urunler?cat=zuccaciye",
  },
  {
    title: "Çeyizlik Ürünler",
    text: "Yeni ev hazırlığı için sofra, tekstil, mutfak ve dekorasyon ürünleri.",
    href: "/urunler",
  },
  {
    title: "Ev Tekstili",
    text: "Nevresim takımları, pike, yorgan ve yatak odası tekstil ürünleri.",
    href: "/urunler?cat=ev-tekstili",
  },
  {
    title: "Dekorasyon",
    text: "Evin atmosferini tamamlayan dekoratif objeler ve şık detaylar.",
    href: "/urunler?cat=dekorasyon",
  },
];

const productTypes = [
  "Porselen yemek takımları",
  "Çatal bıçak setleri",
  "Bardak takımları",
  "Nevresim takımları",
  "Pike ve yorgan",
  "Çeyizlik setler",
  "Küçük ev aletleri",
  "Dekoratif objeler",
];

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  name: "Melita Home",
  address: "Kosova, Seher Sk. No:3/A, 42250 Selçuklu / Konya",
  telephone: "+90 545 425 09 75",
  sameAs: ["https://www.instagram.com/melitahomee/"],
});

export default function Page() {
  const featured = products.filter((product) => product.isFeatured).slice(0, 3);

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroTopline}>
                <span>Melita Home</span>
                <span>Konya Selçuklu</span>
                <span>Züccaciye & Ev Ürünleri</span>
              </div>

              <h1 className={styles.h1}>
                Konya’da züccaciye, çeyizlik ve ev ürünleri için güçlü mağaza vitrini.
              </h1>

              <p className={styles.lead}>
                Melita Home; Selçuklu/Konya’da züccaciye, çeyizlik ürünler, ev
                tekstili, nevresim, pike, yorgan, tabak takımları, çatal bıçak setleri,
                küçük ev aletleri ve dekoratif ev ürünleri sunan yerel mağazadır.
              </p>

              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="tel:+905454250975">
                  Bizi Arayın
                </a>

                <Link className={styles.secondaryButton} href="/urunler">
                  Ürünleri İncele
                </Link>
              </div>

              <div className={styles.trustRow} aria-label="Melita Home mağaza özellikleri">
                <div>
                  <strong>Konya</strong>
                  <span>Yerel mağaza</span>
                </div>
                <div>
                  <strong>08.30 - 20.00</strong>
                  <span>Çalışma saatleri</span>
                </div>
                <div>
                  <strong>Çeyizlik</strong>
                  <span>Geniş ürün grubu</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.imageCard}>
                <div
                  className={styles.mainImage}
                  role="img"
                  aria-label="Melita Home züccaciye ve ev ürünleri vitrini"
                />
              </div>

              <div className={styles.floatCard}>
                <span className={styles.floatLabel}>Popüler ürünler</span>
                <strong>Züccaciye • Çeyizlik • Ev Tekstili</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categorySection}>
        <div className={styles.wrap}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Kategoriler</span>
            <h2>Ev için aradığınız temel ürün grupları</h2>
            <p>
              Melita Home’da züccaciye, çeyizlik ürünler, ev tekstili ve dekoratif
              ev ürünlerini tek mağaza deneyimiyle inceleyebilirsiniz.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {popularGroups.map((group) => (
              <Link key={group.title} href={group.href} className={styles.categoryCard}>
                <span className={styles.categoryNumber}>0{popularGroups.indexOf(group) + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <span className={styles.cardArrow}>İncele →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.wrap}>
          <div className={styles.sectionLineHeader}>
            <div>
              <span className={styles.eyebrow}>Vitrin</span>
              <h2>Öne çıkan ürünler</h2>
            </div>

            <Link className={styles.textLink} href="/urunler">
              Tüm ürünler →
            </Link>
          </div>

          <div className={styles.productGrid}>
            {featured.map((product) => (
              <ProductCard key={product.id} p={product} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.bridalSection}>
        <div className={styles.wrap}>
          <div className={styles.bridalBox}>
            <div>
              <span className={styles.eyebrow}>Çeyizlik ürünler</span>
              <h2>Konya’da çeyiz hazırlığı için züccaciye ve ev tekstili seçenekleri</h2>
              <p>
                Çeyiz hazırlığında sofra ürünlerinden nevresim takımlarına, küçük ev
                aletlerinden dekoratif tamamlayıcılara kadar birçok ürün grubunu aynı
                çatı altında değerlendirebilirsiniz. Melita Home, Konya çeyizci arayışında
                olan kullanıcılar için yerel, ulaşılabilir ve ürün çeşitliliği güçlü bir
                mağaza deneyimi sunar.
              </p>

              <div className={styles.bridalActions}>
                <a href="tel:+905454250975" className={styles.primaryButton}>
                  Çeyizlik Ürünler İçin Arayın
                </a>

                <Link href="/iletisim" className={styles.secondaryDarkButton}>
                  Mağaza Bilgileri
                </Link>
              </div>
            </div>

            <div className={styles.productTypeBox}>
              <h3>Ürün grupları</h3>
              <div className={styles.productTypeList}>
                {productTypes.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.localSeoSection}>
        <div className={styles.wrap}>
          <div className={styles.localGrid}>
            <div>
              <span className={styles.eyebrow}>Konya Selçuklu</span>
              <h2>Konya züccaciye ve ev ürünleri alışverişinde yerel mağaza avantajı</h2>
            </div>

            <div className={styles.localText}>
              <p>
                Konya züccaciye ve ev ürünleri arayışında olan kullanıcılar için fiziksel
                mağaza güveni hâlâ önemli bir avantajdır. Melita Home, Selçuklu’daki konumu
                ile ürünleri yerinde görme, ihtiyaçlara göre karşılaştırma yapma ve doğru
                ürün grubuna hızlıca ulaşma imkânı sunar.
              </p>

              <p>
                Ev tekstili, çeyizlik ürünler, tabak takımları, çatal bıçak setleri,
                küçük ev aletleri ve dekoratif objeler gibi farklı ürün gruplarını bir
                arada sunan mağaza yapısı, hem günlük ihtiyaçlar hem de yeni ev hazırlıkları
                için pratik bir alışveriş deneyimi sağlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.wrap}>
          <div className={styles.contactBox}>
            <div>
              <span className={styles.eyebrow}>İletişim</span>
              <h2>Mağazaya ulaşın, ürünler hakkında bilgi alın</h2>
              <p>
                Ürün stokları, fiyat bilgisi ve mağaza ziyareti için Melita Home ile
                telefon veya Instagram üzerinden iletişime geçebilirsiniz.
              </p>
            </div>

            <div className={styles.contactCards}>
              <a href="tel:+905454250975" className={styles.contactCard}>
                <span>Telefon</span>
                <strong>+90 545 425 09 75</strong>
              </a>

              <a
                href="https://www.instagram.com/melitahomee/"
                target="_blank"
                rel="noreferrer"
                className={styles.contactCard}
              >
                <span>Instagram</span>
                <strong>@melitahomee</strong>
              </a>

              <a
                href="https://share.google/QAFSwfGNnTcdO9VJk"
                target="_blank"
                rel="noreferrer"
                className={styles.contactCard}
              >
                <span>Adres</span>
                <strong>Kosova, Seher Sk. No:3/A, Selçuklu / Konya</strong>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection} aria-label="Melita Home harita konumu">
        <iframe
          className={styles.mapFrame}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Kosova%2C%20Seher%20Sk.%20No%3A3%2FA%2C%2042250%20Sel%C3%A7uklu%2FKonya&output=embed"
          title="Melita Home Konum"
        />
      </section>
    </main>
  );
}