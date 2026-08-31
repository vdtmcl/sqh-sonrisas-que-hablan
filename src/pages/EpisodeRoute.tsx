import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import { EpisodePage } from "./EpisodePage";
import { getEpisodeBySlug } from "../lib/episodes";

export function EpisodeRoute() {
  const { slug } = useParams();
  const episode = getEpisodeBySlug(slug);

  return episode ? <EpisodePage episode={episode} /> : <NotFound />;
}
