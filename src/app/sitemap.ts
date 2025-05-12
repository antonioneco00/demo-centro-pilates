import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pilates-vitalia.vercel.app";

  return [
    {
      url: `${baseUrl}`,
      lastModified: "2025-05-12",
    },
  ];
}
