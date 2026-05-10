import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://melitahome.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Melita Home | Konya Züccaciye, Çeyizlik ve Ev Ürünleri",
    template: "%s | Melita Home",
  },
  description:
    "Melita Home, Konya Selçuklu’da züccaciye, çeyizlik ürünler, ev tekstili, küçük ev aletleri ve dekoratif ev ürünleri sunan yerel mağazadır.",
  keywords: [
    "Konya züccaciye",
    "Selçuklu züccaciye",
    "Konya çeyizci",
    "Konya ev ürünleri",
    "Konya tekstil",
    "Konya ev tekstili",
    "çeyizlik ürünler Konya",
    "Melita Home",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Melita Home",
    title: "Melita Home | Konya Züccaciye, Çeyizlik ve Ev Ürünleri",
    description:
      "Konya Selçuklu’da züccaciye, çeyizlik ürünler, ev tekstili, küçük ev aletleri ve dekoratif ev ürünleri.",
    images: [
      {
        url: "/melitahome-logo-v3.png",
        width: 1200,
        height: 630,
        alt: "Melita Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melita Home | Konya Züccaciye, Çeyizlik ve Ev Ürünleri",
    description:
      "Konya Selçuklu’da züccaciye, çeyizlik ürünler, ev tekstili ve ev ürünleri.",
    images: ["/melitahome-logo-v3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/melitahome-logo-v3.png",
    shortcut: "/melitahome-logo-v3.png",
    apple: "/melitahome-logo-v3.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff8ef",
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