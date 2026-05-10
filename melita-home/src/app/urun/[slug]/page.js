import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import { buildBreadcrumbJsonLd, buildProductJsonLd } from "@/lib/seo";
import styles from "./product-detail.module.css";

const categoryLabels = {
  zuccaciye: "Züccaciye",
  "ev-tekstili": "Ev Tekstili",
  dekorasyon: "Dekorasyon",
};

function getProduct(slug) {
  return products.find((product) => product.id === slug);
}

function hasValidPrice(price) {
  const value = Number(price);
  return Number.isFinite(value) && value > 0;
}

function formatPrice(price) {
  if (!hasValidPrice(price)) {
    return "İletişime geçiniz";
  }

  return `${Number(price).toLocaleString("tr-TR")} ₺`;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.slug);

  if (!product) {
    return {
      title: "Ürün bulunamadı",
      description: "Aradığınız ürün Melita Home ürünleri arasında bulunamadı.",
    };
  }

  return {
  title: `${product.title} | Melita Home`,
  description:
    product.shortDesc ||
    `${product.title} hakkında bilgi almak için Konya Selçuklu’daki Melita Home mağazasıyla iletişime geçin.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `/urun/${product.id}`,
  },
  openGraph: {
    title: `${product.title} | Melita Home`,
    description: product.shortDesc,
    images: product.images?.length ? product.images : [],
    type: "website",
  },
};
}

export default async function ProductDetail({ params }) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const categoryLabel = categoryLabels[product.category] || "Melita Home";
  const priceText = formatPrice(product.price);
  const showPrice = hasValidPrice(product.price);

  const productLd = buildProductJsonLd({
    name: product.title,
    description: product.desc || product.shortDesc,
    images: product.images || [],
    price: showPrice ? product.price : undefined,
    url: `https://melitahome.com/urun/${product.id}`,
  });

  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Ana Sayfa", item: "https://melitahome.com" },
    { name: "Ürünler", item: "https://melitahome.com/urunler" },
    { name: product.title, item: `https://melitahome.com/urun/${product.id}` },
  ]);

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.breadcrumb}>
            <Link href="/">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler">Ürünler</Link>
            <span>/</span>
            <strong>{product.title}</strong>
          </div>

          <div className={styles.detailGrid}>
            <div className={styles.gallery}>
              <div className={styles.imageFrame}>
                <img
                  src={product.images?.[0]}
                  alt={product.alt || product.title}
                  className={styles.image}
                />
              </div>

              <div className={styles.galleryNote}>
                <span>Melita Home</span>
                <strong>Konya Selçuklu mağaza vitrini</strong>
              </div>
            </div>

            <div className={styles.content}>
              <span className={styles.category}>{categoryLabel}</span>

              <h1>{product.title}</h1>

              <p className={styles.shortDesc}>{product.shortDesc}</p>

              <div className={styles.priceBox}>
                <span>Ürün bilgisi</span>
                <strong className={showPrice ? styles.price : styles.priceMuted}>
                  {priceText}
                </strong>
                {!showPrice && (
                  <p>
                    Fiyat ve stok bilgisi için Melita Home mağazasıyla iletişime
                    geçebilirsiniz.
                  </p>
                )}
              </div>

              <div className={styles.actions}>
                <a className={styles.primaryButton} href="tel:+905541940433">
                  Bizi Arayın
                </a>

                <a
                  className={styles.secondaryButton}
                  href="https://www.instagram.com/melitahomee/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram’da İncele
                </a>
              </div>

              <div className={styles.infoGrid}>
                <div>
                  <span>Konum</span>
                  <strong>Selçuklu / Konya</strong>
                </div>

                <div>
                  <span>Mağaza</span>
                  <strong>Melita Home</strong>
                </div>

                <div>
                  <span>İletişim</span>
                  <strong>+90 554 194 04 33</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.descriptionSection}>
        <div className={styles.wrap}>
          <div className={styles.descriptionGrid}>
            <div>
              <span className={styles.eyebrow}>Ürün açıklaması</span>
              <h2>{product.title} hakkında</h2>
            </div>

            <div className={styles.descriptionText}>
              <p>{product.desc || product.shortDesc}</p>

              <p>
                Bu ürün hakkında güncel fiyat, stok ve mağaza bilgisi almak için
                Melita Home ile iletişime geçebilirsiniz. Melita Home, Konya Selçuklu’da
                züccaciye, çeyizlik ürünler, ev tekstili, dekorasyon ve ev ürünleri
                alanında hizmet verir.
              </p>

              <div className={styles.descriptionActions}>
                <Link href="/urunler" className={styles.textLink}>
                  Diğer ürünleri incele →
                </Link>

                <Link href="/iletisim" className={styles.textLink}>
                  Mağaza bilgileri →
                </Link>
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
              <h2>Ürün hakkında detaylı bilgi almak ister misiniz?</h2>
              <p>
                Fiyat, stok, benzer ürün ve mağaza ziyareti için Melita Home’u
                arayabilirsiniz.
              </p>
            </div>

            <a className={styles.primaryButton} href="tel:+905541940433">
              Bizi Arayın
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}