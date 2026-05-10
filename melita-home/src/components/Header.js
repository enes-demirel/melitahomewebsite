"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hizmetler", label: "Kategoriler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

const phoneHref = "tel:+905454250975";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topWrap}>
          <span>Konya Selçuklu’da züccaciye, çeyizlik ve ev tekstili ürünleri</span>

          <div className={styles.topLinks}>
            <a href="https://www.instagram.com/melitahomee/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <span>09:00 - 19:00</span>
          </div>
        </div>
      </div>

      <div className={styles.wrap}>
        <Link href="/" className={styles.brand} aria-label="Melita Home ana sayfa">
          <span className={styles.logoFrame}>
            <Image
              src="/melitahome-logo-v3.png"
              alt="Melita Home"
              width={190}
              height={62}
              priority
              className={styles.logo}
            />
          </span>

          <span className={styles.brandText}>
            <span className={styles.brandName}>Melita Home</span>
            <span className={styles.brandTag}>Züccaciye & Ev Ürünleri</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Ana menü">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${active ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <a className={styles.callButton} href={phoneHref}>
            Bizi Arayın
          </a>

          <button
            className={styles.burger}
            onClick={() => setOpen((value) => !value)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            type="button"
          >
            <span className={open ? styles.burgerOpen : ""} />
            <span className={open ? styles.burgerOpen : ""} />
            <span className={open ? styles.burgerOpen : ""} />
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobile}>
          <div className={styles.mobileInner}>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.mobileLink}>
                {item.label}
              </Link>
            ))}

            <a className={styles.mobileCall} href={phoneHref}>
              Bizi Arayın
            </a>

            <a
              className={styles.mobileInstagram}
              href="https://www.instagram.com/melitahomee/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram’da İnceleyin
            </a>
          </div>
        </div>
      )}
    </header>
  );
}