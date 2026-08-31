import { episodes } from "../data/episodes";

export type Episode = (typeof episodes)[number];

export function episodePath(slug: string) {
  return `/episodios/${slug}`;
}

export function getEpisodeBySlug(slug: string | undefined) {
  return episodes.find((episode) => episode.slug === slug);
}
