import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

interface PageMetadataInput {
  /** Judul pendek halaman. Template di layout menambahkan nama situs. */
  title: string;
  description: string;
  /** Path halaman, misalnya "/products". Dipakai untuk canonical dan og:url. */
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
}

const defaultImage = {
  url: "/images/hero-1.png",
  width: 1148,
  height: 770,
  alt: "Pekerja bengkel Sinar Berkah memotong plat besi",
};

/**
 * Metadata halaman dengan canonical dan Open Graph sendiri.
 * Next.js tidak menggabungkan `openGraph` dari layout, jadi tiap halaman harus mengisinya lengkap.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      images: [image],
    },
  };
}

/** Mengubah path lokal menjadi URL absolut. URL yang sudah absolut dibiarkan. */
export function absoluteUrl(src: string): string {
  return new URL(src, siteConfig.url).toString();
}
