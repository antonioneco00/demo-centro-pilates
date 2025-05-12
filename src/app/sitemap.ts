import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pilatesvitalia.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    }
  ];
}