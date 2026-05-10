import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export const metadata = {
  title: "Ürünler",
  description: "Melita Home ürünleri: Züccaciye, ev tekstili ve dekorasyon kategorilerinde seçili ürünler.",
};

export default function ProductsPage({ searchParams }) {
  const cat = searchParams?.cat;
  const list = cat ? products.filter(p => p.category === cat) : products;

  return (
    <main className="section">
      <div className="container">
        <div className="badge">Melita Home • Ürünler</div>
        <h1 className="h1" style={{ marginTop: 12 }}>Ürünler</h1>
        <p className="p">
          Selçuklu/Konya’da züccaciye, ev tekstili ve dekorasyon ürünleri. Kategoriye göre filtreleyebilirsiniz.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
          <a className="btn" href="/urunler">Tümü</a>
          <a className="btn" href="/urunler?cat=zuccaciye">Züccaciye</a>
          <a className="btn" href="/urunler?cat=ev-tekstili">Ev Tekstili</a>
          <a className="btn" href="/urunler?cat=dekorasyon">Dekorasyon</a>
        </div>

        <div style={{ marginTop: 18 }} className="grid-3">
          {list.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </main>
  );
}
