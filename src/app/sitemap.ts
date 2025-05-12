import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pilates-vitalia.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    }
  ];
}