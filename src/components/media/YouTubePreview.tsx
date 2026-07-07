import { Play } from "lucide-react";
import { useState } from "react";
import { youtubeEmbedUrl, youtubeThumbnail } from "../../lib/youtube";

type Props = {
  url: string;
  eyebrow?: string;
  title: string;
  large?: boolean;
  poster?: string;
};

export function YouTubePreview({ url, eyebrow = "YouTube", title, large = false, poster }: Props) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = `${youtubeEmbedUrl(url)}?autoplay=1&rel=0&modestbranding=1`;
  const imageSrc = poster ?? youtubeThumbnail(url);

  if (playing) {
    return (
      <div className={`aspect-video overflow-hidden bg-ri-ink shadow-editorial ${large ? "rounded-[1.25rem]" : "rounded-t-[1.5rem]"}`}>
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

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative block aspect-video w-full overflow-hidden bg-ri-ink text-left text-white shadow-editorial outline-none transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(11,13,18,0.2)] focus-visible:ring-4 focus-visible:ring-ri-blue/30 ${large ? "rounded-[1.25rem]" : "rounded-t-[1.5rem]"}`}
      aria-label={`Reproducir ${title}`}
    >
      <img
        src={imageSrc}
        alt=""
        loading={large ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={large ? "high" : "auto"}
        className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.28em] text-white/70">{eyebrow}</p>
          <p className="mt-2 max-w-sm text-lg font-black leading-tight md:text-xl">{title}</p>
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-ri-ink transition group-hover:bg-ri-red group-hover:text-white">
          <Play fill="currentColor" size={18} />
        </span>
      </div>
    </button>
  );
}
