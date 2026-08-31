import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { YouTubeAutoplay } from "../components/media/YouTubeAutoplay";
import { SEOHead } from "../components/seo/SEOHead";
import type { Episode } from "../lib/episodes";
import { episodeSeo } from "../lib/seo";

type Props = {
  episode: Episode;
};

export function EpisodePage({ episode }: Props) {
  return (
    <main className="overflow-hidden bg-white">
      <SEOHead seo={episodeSeo(episode)} />
      <Header />
      <article className="mx-auto max-w-[92rem] px-5 pb-20 pt-36 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <YouTubeAutoplay url={episode.embed} title={episode.title} />
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-ri-blue">Temporada 1 · Capítulo {episode.number}</p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] md:text-7xl">{episode.title}</h1>
            <p className="mt-6 max-w-4xl text-xl font-bold leading-8 text-ri-blue md:text-2xl">{episode.subtitle}</p>
            <section className="mt-10" aria-labelledby="episode-description">
              <h2 id="episode-description" className="font-serif text-3xl leading-none md:text-4xl">Sobre este capítulo</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-ri-ink/70">{episode.description}</p>
            </section>
          </div>
          <aside className="rounded-[2rem] bg-ri-mist p-6 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-ri-red">La idea central</p>
            <p className="mt-4 text-xl font-bold leading-8 text-ri-ink">{episode.idea}</p>
            <div className="mt-8 border-t border-ri-ink/10 pt-6">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-ri-blue">Participa en la conversación</p>
              <p className="mt-3 text-base leading-7 text-ri-ink/70">{episode.guest}</p>
              <a
                href={episode.embed}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-ri-ink px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-ri-blue"
              >
                Abrir en YouTube
              </a>
            </div>
          </aside>
        </div>
      </article>
      <Footer />
    </main>
  );
}
