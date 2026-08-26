import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { publicGeoPaths } from "@/lib/geo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicGeoPaths.map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/contact"
          ? 0.85
          : path.startsWith("/services/")
            ? 0.75
            : path.startsWith("/work/")
              ? 0.7
              : 0.55,
  }));
}
