import type { Episode } from "./episodes";
import { episodePath } from "./episodes";
import { cloudinaryThumbnails, media } from "../data/media";
import { youtubeId } from "./youtube";

export type PageSeo = {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogType: "website" | "article";
  image: string;
  imageAlt: string;
  structuredData: Record<string, unknown>;
};

const siteUrl = "https://sqh.cl";
const siteName = "SQH | Sonrisas que Hablan";
const hostUrl = `${siteUrl}/#max`;

const homeDescription =
  "SQH es un podcast conducido por Max Lizana, implantólogo y fundador de Red Implantología en Viña del Mar. Conversaciones de alto nivel sobre salud, tecnología aplicada, criterio clínico y colaboración interdisciplinaria.";

export const homeSeo: PageSeo = {
  title: "SQH | Sonrisas que Hablan — Podcast sobre salud y tecnología",
  description: homeDescription,
  canonical: `${siteUrl}/`,
  robots: "index,follow",
  ogType: "website",
  image: "https://res.cloudinary.com/l9grsc6p/image/upload/v1788135804/og-sqh-podcast.png",
  imageAlt: "Logo SQH Podcast",
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteName,
        inLanguage: "es-CL",
        description: homeDescription
      },
      {
        "@type": "PodcastSeries",
        "@id": `${siteUrl}/#podcast`,
        url: `${siteUrl}/#podcast`,
        name: "SQH | Sonrisas que Hablan",
        description: homeDescription,
        inLanguage: "es-CL",
        creator: { "@id": hostUrl },
        image: `${siteUrl}/og-sqh-podcast.png`
      },
      {
        "@type": "Person",
        "@id": hostUrl,
        name: "Dr. Max Lizana",
        jobTitle: "Cirujano dentista",
        description: "Especialista en Implantología Oral, fundador y director clínico de Red Implantología.",
        url: `${siteUrl}/#max`,
        image: media.max.src,
        affiliation: {
          "@type": "Organization",
          name: "Red Implantología",
          url: "https://redimplantologia.cl"
        }
      }
    ]
  }
};

function episodeDescription(episode: Episode) {
  return `${episode.subtitle} ${episode.description}`.replace(/\s+/g, " ").trim().slice(0, 158).replace(/[\s,;:.!?-]+$/, "") + ".";
}

export function episodeSeo(episode: Episode): PageSeo {
  const id = youtubeId(episode.embed);
  const image = cloudinaryThumbnails[id] || media.videoPoster.src;
  const canonical = `${siteUrl}${episodePath(episode.slug)}`;
  const description = episodeDescription(episode);

  return {
    title: `SQH | Capítulo ${episode.number}: ${episode.title}`,
    description,
    canonical,
    robots: "index,follow",
    ogType: "article",
    image,
    imageAlt: `SQH, capítulo ${episode.number}: ${episode.title}`,
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "PodcastEpisode",
          "@id": `${canonical}#episode`,
          url: canonical,
          name: episode.title,
          description: episode.description,
          episodeNumber: Number(episode.number),
          partOfSeries: { "@id": `${siteUrl}/#podcast` },
          author: { "@id": hostUrl },
          associatedMedia: { "@id": `${canonical}#video` }
        },
        {
          "@type": "VideoObject",
          "@id": `${canonical}#video`,
          name: episode.title,
          description: episode.description,
          thumbnailUrl: image,
          embedUrl: `https://www.youtube.com/embed/${id}`,
          uploadDate: undefined
        }
      ]
    }
  };
}

export const previewSeo: PageSeo = {
  title: "Vista previa | SQH",
  description: "Vista previa técnica de componentes de SQH.",
  canonical: `${siteUrl}/preview`,
  robots: "noindex,nofollow",
  ogType: "website",
  image: homeSeo.image,
  imageAlt: homeSeo.imageAlt,
  structuredData: {}
};

export const notFoundSeo: PageSeo = {
  title: "Página no encontrada | SQH",
  description: "La página solicitada no existe en SQH.",
  canonical: `${siteUrl}/`,
  robots: "noindex,follow",
  ogType: "website",
  image: homeSeo.image,
  imageAlt: homeSeo.imageAlt,
  structuredData: {}
};

export function seoMarkup(seo: PageSeo) {
  const jsonLd = Object.keys(seo.structuredData).length
    ? `\n    <script data-seo-managed="true" type="application/ld+json">${JSON.stringify(seo.structuredData)}</script>`
    : "";

  return `<!-- SEO_HEAD_START -->
    <title>${escapeHtml(seo.title)}</title>
    <meta data-seo-managed="true" name="description" content="${escapeHtml(seo.description)}" />
    <meta data-seo-managed="true" name="author" content="Dr. Max Lizana" />
    <meta data-seo-managed="true" name="robots" content="${seo.robots}" />
    <link data-seo-managed="true" rel="canonical" href="${seo.canonical}" />
    <meta data-seo-managed="true" property="og:title" content="${escapeHtml(seo.title)}" />
    <meta data-seo-managed="true" property="og:description" content="${escapeHtml(seo.description)}" />
    <meta data-seo-managed="true" property="og:type" content="${seo.ogType}" />
    <meta data-seo-managed="true" property="og:site_name" content="${siteName}" />
    <meta data-seo-managed="true" property="og:locale" content="es_CL" />
    <meta data-seo-managed="true" property="og:url" content="${seo.canonical}" />
    <meta data-seo-managed="true" property="og:image" content="${seo.image}" />
    <meta data-seo-managed="true" property="og:image:alt" content="${escapeHtml(seo.imageAlt)}" />
    <meta data-seo-managed="true" name="twitter:card" content="summary_large_image" />
    <meta data-seo-managed="true" name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta data-seo-managed="true" name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta data-seo-managed="true" name="twitter:image" content="${seo.image}" />
    <meta data-seo-managed="true" name="twitter:image:alt" content="${escapeHtml(seo.imageAlt)}" />${jsonLd}
    <!-- SEO_HEAD_END -->`;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[character];
  });
}
