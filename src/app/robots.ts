import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /_next/ no se bloquea: ahí viven el CSS, el JS y las imágenes optimizadas (/_next/image)
      // que Google necesita para renderizar las páginas e indexar las imágenes.
      disallow: ["/api/"],
    },
    sitemap: "https://drad10.com/sitemap.xml",
  };
}
