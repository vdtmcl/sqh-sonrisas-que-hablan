import { Play } from "lucide-react";
import { media } from "../../data/media";
import { ResponsiveImage } from "./ResponsiveImage";

type Props = {
  label: string;
  eyebrow?: string;
};

export function VideoFrame({ label, eyebrow = "Placeholder audiovisual" }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-ri-ink/10 bg-ri-ink text-white shadow-editorial">
      <ResponsiveImage
        src={media.videoPoster.src}
        alt={media.videoPoster.alt}
        cloudinaryPublicId={media.videoPoster.cloudinaryPublicId}
        className="h-full min-h-[260px] w-full object-cover opacity-70 transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">{eyebrow}</p>
          <p className="mt-2 max-w-sm text-xl font-bold">{label}</p>
        </div>
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-ri-ink transition group-hover:bg-ri-red group-hover:text-white">
          <Play fill="currentColor" size={20} />
        </span>
      </div>
    </div>
  );
}
