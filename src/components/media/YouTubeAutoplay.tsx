import { youtubeEmbedUrl } from "../../lib/youtube";

type Props = {
  url: string;
  title: string;
};

export function YouTubeAutoplay({ url, title }: Props) {
  const embedUrl = `${youtubeEmbedUrl(url)}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`;

  return (
    <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-ri-ink shadow-editorial">
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
