import { useEffect } from "react";
import type { PageSeo } from "../../lib/seo";

type Props = { seo: PageSeo };

export function SEOHead({ seo }: Props) {
  useEffect(() => {
    document.title = seo.title;

    const managed = document.head.querySelectorAll("[data-seo-managed]");
    managed.forEach((element) => element.remove());

    const addMeta = (attributes: Record<string, string>) => {
      const element = document.createElement("meta");
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
      element.dataset.seoManaged = "true";
      document.head.appendChild(element);
    };

    const addLink = (rel: string, href: string) => {
      const element = document.createElement("link");
      element.rel = rel;
      element.href = href;
      element.dataset.seoManaged = "true";
      document.head.appendChild(element);
    };

    addMeta({ name: "description", content: seo.description });
    addMeta({ name: "author", content: "Dr. Max Lizana" });
    addMeta({ name: "robots", content: seo.robots });
    addLink("canonical", seo.canonical);
    addMeta({ property: "og:title", content: seo.title });
    addMeta({ property: "og:description", content: seo.description });
    addMeta({ property: "og:type", content: seo.ogType });
    addMeta({ property: "og:url", content: seo.canonical });
    addMeta({ property: "og:image", content: seo.image });
    addMeta({ property: "og:image:alt", content: seo.imageAlt });
    addMeta({ name: "twitter:title", content: seo.title });
    addMeta({ name: "twitter:description", content: seo.description });
    addMeta({ name: "twitter:image", content: seo.image });
    addMeta({ name: "twitter:image:alt", content: seo.imageAlt });

    if (Object.keys(seo.structuredData).length) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoManaged = "true";
      script.textContent = JSON.stringify(seo.structuredData);
      document.head.appendChild(script);
    }
  }, [seo]);

  return null;
}
