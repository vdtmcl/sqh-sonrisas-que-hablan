import { articles } from "../data/articles";
import { episodeVideoDates } from "../data/articleRelations";
import type { Episode } from "./episodes";
import { episodePath } from "./episodes";
import { episodeThumbnails, media } from "../data/media";
import { youtubeId, youtubeThumbnail } from "./youtube";

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
  "SQH es un podcast de odontología, salud oral y tecnología aplicada. Conducido por el Dr. Max Lizana en Viña del Mar, Chile, reúne a especialistas.";

export const homeSeo: PageSeo = {
  title: "SQH Podcast | Odontología, salud oral y tecnología aplicada",
  description: homeDescription,
  canonical: `${siteUrl}/`,
  robots: "index,follow",
  ogType: "website",
  image: "https://sqh.cl/social-share.jpg",
  imageAlt: "Logo SQH Podcast centrado sobre fondo negro",
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
        about: [
          { "@type": "Thing", name: "Odontología" },
          { "@type": "Thing", name: "Salud oral" },
          { "@type": "Thing", name: "Implantología" },
          { "@type": "Thing", name: "Tecnología aplicada a la salud" }
        ],
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
        image: new URL(media.max.src, siteUrl).href,
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
  const image = new URL(episodeThumbnails[id] || youtubeThumbnail(episode.embed), siteUrl).href;
  const canonical = `${siteUrl}${episodePath(episode.slug)}`;
  const article = articles[episode.slug];
  const description = article?.description ?? episodeDescription(episode);
  const videoDate = episodeVideoDates[episode.slug];

  return {
    title: article?.metaTitle ?? `SQH | Temporada ${episode.season}, capítulo ${Number(episode.number)}: ${episode.title}`,
    description,
    canonical,
    robots: "index,follow",
    ogType: "article",
    image,
    imageAlt: `SQH, temporada ${episode.season}, capítulo ${episode.number}: ${episode.title}`,
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        ...(article ? [{
          "@type": "Article",
          "@id": `${canonical}#article`,
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          headline: article.title,
          description,
          image,
          inLanguage: "es-CL",
          publisher: { "@type": "Organization", name: "SQH | Sonrisas que Hablan", url: siteUrl },
          about: { "@id": `${canonical}#episode` }
        }] : []),
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
          uploadDate: videoDate
        }
      ]
    }
  };
}

export const blogSeo: PageSeo = {
  title: "Blog SQH | Entrevistas de odontología y salud oral",
  description:
    "Notas de SQH Podcast sobre odontología, salud oral, implantología y tecnología aplicada, basadas en conversaciones con especialistas de distintas áreas.",
  canonical: `${siteUrl}/blog`,
  robots: "index,follow",
  ogType: "website",
  image: "https://sqh.cl/social-share.jpg",
  imageAlt: "SQH Podcast, Sonrisas que Hablan",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/blog#collection`,
    url: `${siteUrl}/blog`,
    name: "Blog SQH | Entrevistas de odontología y salud oral",
    description:
      "Notas de SQH Podcast sobre odontología, salud oral, implantología y tecnología aplicada, basadas en conversaciones con especialistas de distintas áreas.",
    inLanguage: "es-CL",
    about: [
      { "@type": "Thing", name: "Odontología" },
      { "@type": "Thing", name: "Salud oral" },
      { "@type": "Thing", name: "Implantología" },
      { "@type": "Thing", name: "Tecnología aplicada a la salud" }
    ],
    isPartOf: { "@id": `${siteUrl}/#website` }
  }
};

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
    <meta data-seo-managed="true" name="twitter:card" content="summary" />
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
