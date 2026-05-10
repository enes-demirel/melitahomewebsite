export const metadata = { title: "Admin" };

export default function Page(){
  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ padding: 18 }}>
          <div className="badge">Admin Panel</div>
          <h1 className="h1" style={{ marginTop: 12 }}>Ürün Yönetimi</h1>
          <p className="p">
            Bir sonraki adımda buraya tek şifreli giriş + ürün ekleme ekranını kuracağız.
            Eklenen ürünler otomatik SEO meta + schema + sitemap ile yayınlanacak.
          </p>
        </div>
      </div>
    </main>
  );
}
