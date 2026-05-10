export function buildLocalBusinessJsonLd({ name, address, telephone, sameAs }) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: "Selçuklu",
      addressRegion: "Konya",
      addressCountry: "TR",
      postalCode: "42250",
    },
    telephone: telephone || undefined,
    sameAs: Array.isArray(sameAs) && sameAs.length ? sameAs : undefined,
  };
}

export function buildProductJsonLd({
  name,
  description,
  images,
  price,
  currency = "TRY",
  brand = "Melita Home",
  url,
}) {
  const numericPrice = Number(price);
  const hasPrice = Number.isFinite(numericPrice) && numericPrice > 0;

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: images,
    brand: { "@type": "Brand", name: brand },
  };

  if (hasPrice) {
    product.offers = {
      "@type": "Offer",
      priceCurrency: currency,
      price: String(numericPrice),
      availability: "https://schema.org/InStock",
      url,
    };
  }

  return product;
}

export function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}