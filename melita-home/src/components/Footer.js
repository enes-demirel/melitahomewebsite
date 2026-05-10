import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.left}>
          <div className={styles.brand}>
            <span className={styles.dot} />
            <span>Melita Home</span>
          </div>
          <div className={styles.copy}>
            © {new Date().getFullYear()} Melita Home. Tüm hakları saklıdır.
          </div>
        </div>

        <div className={styles.right}>
          <Link href="/iletisim" className={styles.link}>İletişim</Link>
          <a className={styles.link} href="#" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
}