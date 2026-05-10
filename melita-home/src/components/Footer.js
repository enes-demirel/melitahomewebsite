import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const categories = [
  { href: "/urunler?cat=zuccaciye", label: "Züccaciye" },
  { href: "/urunler?cat=ev-tekstili", label: "Ev Tekstili" },
  { href: "/urunler?cat=dekorasyon", label: "Dekorasyon" },
  { href: "/urunler", label: "Çeyizlik Ürünler" },
];

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Kategoriler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logoLink} aria-label="Melita Home ana sayfa">
            <Image
              src="/melitahome-logo-v3.png"
              alt="Melita Home"
              width={210}
              height={70}
              className={styles.logo}
            />
          </Link>

          <p className={styles.desc}>
            Melita Home, Konya Selçuklu’da züccaciye, çeyizlik ürünler, ev tekstili,
            küçük ev aletleri ve dekoratif ev ürünleri sunan yerel mağazadır.
          </p>

          <div className={styles.badges}>
            <span>Konya Züccaciye</span>
            <span>Çeyizlik Ürünler</span>
            <span>Ev Tekstili</span>
          </div>
        </div>

        <div className={styles.col}>
          <h2 className={styles.title}>Sayfalar</h2>
          <nav className={styles.list} aria-label="Footer sayfa bağlantıları">
            {links.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.col}>
          <h2 className={styles.title}>Kategoriler</h2>
          <nav className={styles.list} aria-label="Footer kategori bağlantıları">
            {categories.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.contactCol}>
          <h2 className={styles.title}>İletişim</h2>

          <div className={styles.contactList}>
            <a href="tel:+905454250975">+90 545 425 09 75</a>

            <a
              href="https://www.instagram.com/melitahomee/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram: @melitahomee
            </a>

            <a
              href="https://share.google/QAFSwfGNnTcdO9VJk"
              target="_blank"
              rel="noreferrer"
            >
              Kosova, Seher Sk. No:3/A, Selçuklu / Konya
            </a>

            <span>Her gün 09:00 - 19:00</span>
          </div>

          <a className={styles.callButton} href="tel:+905454250975">
            Bizi Arayın
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomWrap}>
          <span>© {year} Melita Home. Tüm hakları saklıdır.</span>
          <span>Konya züccaciye, çeyizlik ve ev ürünleri mağazası.</span>
        </div>
      </div>
    </footer>
  );
}