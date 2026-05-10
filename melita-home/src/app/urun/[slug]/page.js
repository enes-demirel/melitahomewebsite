import products from "@/data/products.json";
import { buildBreadcrumbJsonLd, buildProductJsonLd } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const p = products.find(x => x.id === params.slug);
  if (!p) return { title: "Ürün bulunamadı" };

  return {
    title: p.title,
    description: p.shortDesc,
    alternates: { canonical: `/urun/${p.id}` },
    openGraph: {
      title: p.title,
      description: p.shortDesc,
      images: p.images?.length ? p.images : [],
      type: "website",
    },
  };
}

export default function ProductDetail({ params }) {
  const p = products.find(x => x.id === params.slug);
  if (!p) {
    return (
      <main className="section">
        <div className="container">
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Ürün bulunamadı</div>
            <p className="p">Bu ürün yayından kaldırılmış olabilir.</p>
          </div>
        </div>
      </main>
    );
  }

  const productLd = buildProductJsonLd({
    name: p.title,
    description: p.desc || p.shortDesc,
    images: p.images || [],
    price: p.price,
  });

  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Ana Sayfa", item: "/" },
    { name: "Ürünler", item: "/urunler" },
    { name: p.title, item: `/urun/${p.id}` },
  ]);

  return (
    <main className="section">
      <div className="container">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <div className="card" style={{ padding: 18 }}>
          <div className="badge" style={{ marginBottom: 12 }}>
            {p.category === "zuccaciye" ? "Züccaciye" : p.category === "ev-tekstili" ? "Ev Tekstili" : "Dekorasyon"}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 18, alignItems: "start" }}>
            <div className="card" style={{ overflow: "hidden" }}>
              <div style={{
                height: 420,
                background: `url("${p.images?.[0]}") center/cover no-repeat`,
              }} />
            </div>

            <div>
              <h1 className="h1" style={{ marginTop: 0 }}>{p.title}</h1>
              <div style={{ fontWeight: 900, fontSize: 22, marginBottom: 10 }}>
                {Number(p.price).toLocaleString("tr-TR")} ₺
              </div>
              <p className="p">{p.shortDesc}</p>

              <div style={{ marginTop: 16 }}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Açıklama</div>
                <p className="p" style={{ whiteSpace: "pre-line" }}>{p.desc}</p>
              </div>

              <div style={{ marginTop: 16 }} className="badge">
                Selçuklu / Konya • Melita Home
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
