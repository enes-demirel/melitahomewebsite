export function buildLocalBusinessJsonLd({ name, address, telephone, sameAs }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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

export function buildProductJsonLd({ name, description, images, price, currency = "TRY", brand = "Melita Home" }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: images,
    brand: { "@type": "Brand", name: brand },
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      price: String(price),
      availability: "https://schema.org/InStock",
      url: undefined,
    },
  };
}

export function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  };
}
