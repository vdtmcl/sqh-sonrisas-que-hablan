import { Play } from "lucide-react";
import { useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { youtubeEmbedUrl, youtubeThumbnail } from "../../lib/youtube";

type Props = {
  url: string;
  title: string;
  large?: boolean;
  poster?: string;
  thumbnailUrl?: string;
  href?: string;
};

export function YouTubePreview({ url, title, large = false, poster, thumbnailUrl, href }: Props) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = `${youtubeEmbedUrl(url)}?autoplay=1&rel=0&modestbranding=1`;
  const imageSrc = poster ?? thumbnailUrl ?? youtubeThumbnail(url);
  const priorityAttribute = { fetchpriority: large ? "high" : "auto" } as unknown as ImgHTMLAttributes<HTMLImageElement>;

  if (playing) {
    return (
      <div className={`aspect-video overflow-hidden bg-ri-ink ${large ? "rounded-[1.25rem]" : "rounded-t-[1.5rem] shadow-editorial"}`}>
        <iframe
          title={title}
          src={embedUrl}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  const className = `group relative block aspect-video w-full overflow-hidden bg-ri-ink text-left text-white outline-none focus-visible:ring-4 focus-visible:ring-ri-blue/30 ${
    large
      ? "rounded-[1.25rem]"
      : "rounded-t-[1.5rem] shadow-editorial transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(11,13,18,0.2)]"
  }`;

  const content = (
    <>
      <img
        src={imageSrc}
        alt=""
        loading={large ? "eager" : "lazy"}
        decoding="async"
        {...priorityAttribute}
        className={`h-full w-full object-cover ${large ? "" : "transition duration-700 group-hover:scale-105"}`}
      />
      {large ? (
        <span className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ri-ink opacity-70">
          <Play fill="currentColor" size={38} />
        </span>
      ) : (
        <span className="absolute bottom-4 right-4 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-ri-ink transition group-hover:bg-ri-red group-hover:text-white">
          <Play fill="currentColor" size={18} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className} aria-label={`Abrir capítulo: ${title}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={className}
      aria-label={`Reproducir ${title}`}
    >
      {content}
    </button>
  );
}
