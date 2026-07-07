export function youtubeId(url: string) {
  const shortMatch = url.match(/youtu\.be\/([^?&/]+)/);
  if (shortMatch) return shortMatch[1];

  const watchMatch = url.match(/[?&]v=([^?&/]+)/);
  return watchMatch?.[1] || "";
}

export function youtubeThumbnail(url: string) {
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

export function youtubeEmbedUrl(url: string) {
  const id = youtubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : url;
}
