import Link from "next/link";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import styles from "./home.module.css";

export const metadata = {
  title: "Melita Home | Selçuklu Konya Züccaciye, Ev Tekstili ve Dekorasyon",
  description:
    "Melita Home: Selçuklu/Konya’da züccaciye, ev tekstili ve dekorasyon ürünleri. Minimal ve kurumsal vitrin deneyimi.",
};

export default function Page() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            {/* LEFT COLUMN (desktop) */}
            <div className={styles.heroLeft}>
              <div className={styles.heroTopline}>
                <span className={styles.kicker}>Melita Home</span>
                <span className={styles.sep}>/</span>
                <span className={styles.kickerMuted}>
                  Züccaciye • Ev Tekstili • Dekorasyon
                </span>
              </div>

              <h1 className={styles.h1}>
                Eviniz için <span className={styles.accent}>doğru parçaları</span>{" "}
                seçin.
              </h1>

              <p className={styles.lead}>
                Günlük kullanım ve özel günler için seçili ürünler. Sade, kurumsal,
                net bir vitrin deneyimi.
              </p>

              {/* FOTO: Mobilde CTA’dan önce görünsün, Desktop’ta sağ kolona yerleşsin */}
              <div className={styles.heroPhoto}>
                <div
                  className={styles.shopImage}
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80")',
                  }}
                  role="img"
                  aria-label="Melita Home mağaza görseli"
                />
                <div className={styles.shopCaption}>
                  <span className={styles.shopCapStrong}>Melita Home</span>
                  <span className={styles.shopCapMuted}>Selçuklu / Konya</span>
                </div>
              </div>

              <div className={styles.ctaRow}>
                <Link className={styles.cta} href="/urunler">
                  Ürünleri Gör <span className={styles.arrow}>→</span>
                </Link>
                <Link className={styles.ctaMuted} href="/iletisim">
                  İletişim <span className={styles.arrowMuted}>→</span>
                </Link>
              </div>

              <div className={styles.microRow} aria-label="Öne çıkan özellikler">
                <span className={styles.microItem}>Seçili ürün vitrini</span>
                <span className={styles.microDot}>•</span>
                <span className={styles.microItem}>Kurumsal sunum</span>
                <span className={styles.microDot}>•</span>
                <span className={styles.microItem}>Mağazadan teslim</span>
              </div>

              <div className={styles.catsBlock}>
                <div className={styles.catsTitle}>Kategoriler</div>
                <div className={styles.cats}>
                  <Link href="/urunler?cat=zuccaciye" className={styles.catLink}>
                    <span className={styles.catName}>Züccaciye</span>
                    <span className={styles.catMeta}>Sofra & mutfak</span>
                  </Link>

                  <Link href="/urunler?cat=ev-tekstili" className={styles.catLink}>
                    <span className={styles.catName}>Ev Tekstili</span>
                    <span className={styles.catMeta}>Konfor & kumaş</span>
                  </Link>

                  <Link href="/urunler?cat=dekorasyon" className={styles.catLink}>
                    <span className={styles.catName}>Dekorasyon</span>
                    <span className={styles.catMeta}>Minimal detaylar</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (desktop only spacing column) */}
            <div className={styles.heroRight} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.sectionTitle}>Seçili ürünler</div>
              <div className={styles.sectionSub}>Vitrin seçkisi</div>
            </div>

            <Link className={styles.textLink} href="/urunler">
              Tüm ürünler <span className={styles.arrow}>→</span>
            </Link>
          </div>

          <div className={styles.grid3}>
            {featured.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          <div className={styles.rule} />
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.twoCol}>
            <div>
              <div className={styles.aboutTitle}>Kısa Hakkımızda</div>
              <p className={styles.aboutText}>
                Melita Home, Selçuklu/Konya’da züccaciye, ev tekstili ve dekorasyon
                ürünlerinde modern ve seçici bir vitrin sunar. Günlük kullanım ve
                özel günler için doğru parçaları, abartısız bir sunumla bir araya getirir.
              </p>

              <div className={styles.aboutLinks}>
                <Link className={styles.textLink} href="/hakkimizda">
                  Hakkımızda <span className={styles.arrow}>→</span>
                </Link>
                <Link className={styles.textLink} href="/urunler">
                  Ürünler <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </div>

            <div className={styles.principles}>
              <div className={styles.prTitle}>Yaklaşım</div>
              <ul className={styles.prList}>
                <li>Net kategoriler, hızlı gezinme</li>
                <li>Seçili ürünlerle güçlü vitrin</li>
                <li>Sade dil, kurumsal görünüm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.contactHead}>İletişim</div>

          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>Adres</div>
              <div className={styles.contactValue}>
                Kosova, Seher Sk. No:3/A, 42250 Selçuklu / Konya
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>Telefon</div>
              <div className={styles.contactValue}>—</div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>Instagram</div>
              <div className={styles.contactValue}>—</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className={styles.mapSection} aria-label="Harita">
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