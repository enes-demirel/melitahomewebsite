import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import styles from "./urunler.module.css";

export const metadata = {
  title: "Konya Züccaciye ve Ev Ürünleri | Melita Home Ürünler",
  description:
    "Melita Home ürünleri: Konya Selçuklu’da züccaciye, çeyizlik ürünler, ev tekstili, dekorasyon, nevresim, pike, yorgan, tabak takımları, çatal bıçak setleri ve küçük ev aletleri.",
};

const categories = [
  {
    key: "all",
    label: "Tümü",
    href: "/urunler",
    title: "Tüm Ürünler",
  },
  {
    key: "zuccaciye",
    label: "Züccaciye",
    href: "/urunler?cat=zuccaciye",
    title: "Züccaciye Ürünleri",
  },
  {
    key: "ev-tekstili",
    label: "Ev Tekstili",
    href: "/urunler?cat=ev-tekstili",
    title: "Ev Tekstili Ürünleri",
  },
  {
    key: "dekorasyon",
    label: "Dekorasyon",
    href: "/urunler?cat=dekorasyon",
    title: "Dekorasyon Ürünleri",
  },
];

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const activeCategory = params?.cat || "all";

  const list =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const currentCategory =
    categories.find((category) => category.key === activeCategory) || categories[0];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrow}>Melita Home Ürünleri</span>

              <h1 className={styles.h1}>
                Konya’da züccaciye, çeyizlik ve ev ürünleri.
              </h1>

              <p className={styles.lead}>
                Melita Home’da züccaciye, çeyizlik ürünler, ev tekstili, dekorasyon,
                nevresim, pike, yorgan, tabak takımları, çatal bıçak setleri ve küçük ev
                aletleri gibi ürün gruplarını inceleyebilirsiniz.
              </p>
            </div>

            <div className={styles.infoCard}>
              <strong>Fiyat ve stok bilgisi için mağazayla iletişime geçin.</strong>
              <span>
                Ürün fiyatı girilmişse kart üzerinde görünür. Fiyat girilmemiş ürünlerde
                detaylı bilgi için Melita Home’u arayabilirsiniz.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.filterSection}>
        <div className={styles.wrap}>
          <div className={styles.filters}>
            {categories.map((category) => (
              <Link
                key={category.key}
                href={category.href}
                className={`${styles.filter} ${
                  activeCategory === category.key ? styles.activeFilter : ""
                }`}
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <h2>{currentCategory.title}</h2>
              <p>
                Konya Selçuklu’daki Melita Home mağazasında öne çıkan ürün gruplarını
                inceleyin.
              </p>
            </div>

            <span className={styles.count}>{list.length} ürün</span>
          </div>

          {list.length > 0 ? (
            <div className={styles.grid}>
              {list.map((product) => (
                <ProductCard key={product.id} p={product} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              Bu kategoride henüz ürün bulunmuyor. Ürün bilgisi için Melita Home ile
              iletişime geçebilirsiniz.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}