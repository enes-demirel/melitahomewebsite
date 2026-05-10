"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Link href="/" className={styles.brand} aria-label="Melita Home">
          <span className={styles.dot} />
          <span>Melita Home</span>
        </Link>

        <nav className={styles.nav} aria-label="Ana menü">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className={styles.link}>
              {i.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className={styles.mobileLink}>
              {i.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}