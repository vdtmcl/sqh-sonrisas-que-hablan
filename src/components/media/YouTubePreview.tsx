import { Play } from "lucide-react";
import { youtubeThumbnail } from "../../lib/youtube";

type Props = {
  url: string;
  eyebrow?: string;
  title: string;
  large?: boolean;
};

export function YouTubePreview({ url, eyebrow = "YouTube", title, large = false }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`group relative block aspect-video overflow-hidden bg-ri-ink text-white shadow-editorial ${large ? "rounded-[1.25rem]" : "rounded-t-[1.5rem]"}`}
      aria-label={`Ver ${title} en YouTube`}
    >
      <img
        src={youtubeThumbnail(url)}
        alt=""
        loading={large ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={large ? "high" : "auto"}
        className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
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
    </a>
  );
}
