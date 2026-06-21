import { useEffect } from "react";

/** Lightweight per-page SEO: sets <title> and meta description. */
export default function Seo({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
  return null;
}
