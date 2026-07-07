import { VideoFrame } from "./VideoFrame";

export function EpisodeMedia({ episodeNumber }: { episodeNumber: string }) {
  return <VideoFrame eyebrow={`Capítulo ${episodeNumber}`} label="Embed preparado para YouTube, Reel o clip Cloudinary." />;
}
