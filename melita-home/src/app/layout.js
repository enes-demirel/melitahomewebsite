import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Melita Home | Selçuklu Konya Ev Ürünleri",
    template: "%s | Melita Home",
  },
  description:
    "Melita Home: Selçuklu/Konya’da züccaciye, ev tekstili ve dekorasyon ürünleri. Minimal ve kurumsal vitrin deneyimi.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={poppins.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}