import type { ReactElement } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Home } from "./pages/Home";
import { EpisodePage } from "./pages/EpisodePage";
import { NotFound } from "./pages/NotFound";
import { Preview } from "./pages/Preview";
import { getEpisodeBySlug } from "./lib/episodes";
import { episodeSeo, homeSeo, notFoundSeo, previewSeo, seoMarkup } from "./lib/seo";

export function renderPath(pathname: string) {
  const episodeMatch = pathname.match(/^\/episodios\/([^/]+)\/?$/);
  const episode = episodeMatch ? getEpisodeBySlug(decodeURIComponent(episodeMatch[1])) : undefined;

  if (pathname === "/") {
    return render(<Home />, homeSeo, pathname);
  }

  if (episode) {
    return render(<EpisodePage episode={episode} />, episodeSeo(episode), pathname);
  }

  if (pathname === "/preview") {
    return render(<Preview />, previewSeo, pathname);
  }

  return render(<NotFound />, notFoundSeo, pathname);
}

function render(element: ReactElement, seo: typeof homeSeo, pathname: string) {
  return {
    body: renderToString(<StaticRouter location={pathname}>{element}</StaticRouter>),
    seoMarkup: seoMarkup(seo)
  };
}
