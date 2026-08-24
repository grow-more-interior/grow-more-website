import type { MetadataRoute } from "next";
import { collections } from "./data/growmore";
import { siteConfig } from "./seo";

const staticRoutes = [
  ["", 1, "weekly"],
  ["about", 0.85, "monthly"],
  ["products", 0.95, "weekly"],
  ["projects", 0.9, "monthly"],
  ["gallery", 0.8, "monthly"],
  ["shop", 0.75, "weekly"],
  ["blog", 0.8, "weekly"],
  ["design-guides", 0.75, "monthly"],
  ["material-standards", 0.75, "monthly"],
  ["certifications", 0.7, "monthly"],
  ["dealers", 0.8, "monthly"],
  ["news", 0.65, "weekly"],
  ["careers", 0.55, "monthly"],
  ["dashain", 0.85, "weekly"],
  ["contact", 0.9, "monthly"],
  ["enquiry", 0.9, "monthly"],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = staticRoutes.map(([path, priority, changeFrequency]) => ({
    url: `${siteConfig.url}/${path}`.replace(/\/$/, "") || siteConfig.url,
    lastModified,
    changeFrequency,
    priority,
  }));

  const collectionPages = collections.map((collection) => ({
    url: `${siteConfig.url}/collection/${collection.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.78,
    images: [collection.image],
  }));

  return [...pages, ...collectionPages];
}
