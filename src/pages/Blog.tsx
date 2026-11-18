import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { YouTubePreview } from "../components/media/YouTubePreview";
import { SEOHead } from "../components/seo/SEOHead";
import { episodes } from "../data/episodes";
import { episodeThumbnails } from "../data/media";
import { blogSeo } from "../lib/seo";
import { episodePath } from "../lib/episodes";
import { youtubeId, youtubeThumbnail } from "../lib/youtube";

export function Blog() {
  const seasonEpisodes = [...episodes].sort(
    (first, second) =>
      Number(second.season) - Number(first.season) || Number(second.number) - Number(first.number)
  );

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <SEOHead seo={blogSeo} />
      <Header />
      <section className="relative pb-20 pt-36 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#FF5F66,#174EFF)]" />
        <div className="mx-auto max-w-[92rem] px-5 lg:px-10">
          <div className="reveal max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-ri-blue md:text-sm">
              Entrevistas y notas
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-none md:text-7xl">Blog de SQH</h1>
            <p className="mt-5 max-w-3xl text-base font-bold leading-7 text-ri-ink/70 md:text-xl md:leading-8">
              Cada entrada reúne la entrevista en video y los contenidos escritos de su episodio. Las notas se irán ampliando con el desarrollo editorial de cada conversación.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {seasonEpisodes.map((episode) => {
              const thumbnail = episodeThumbnails[youtubeId(episode.embed)] || youtubeThumbnail(episode.embed);

              return (
                <article
                  key={episode.slug}
                  className="reveal overflow-hidden rounded-[1.5rem] border border-ri-ink/10 bg-white shadow-editorial"
                >
                  <YouTubePreview
                    url={episode.embed}
                    title={episode.title}
                    thumbnailUrl={thumbnail}
                    href={episodePath(episode.slug)}
                  />
                  <div className="p-5 md:p-6">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-ri-blue">
                      Temporada {episode.season} · Capítulo {episode.number}
                    </p>
                    <h2 className="mt-3 text-xl font-black leading-tight md:text-2xl">{episode.title}</h2>
                    <p className="mt-3 text-sm font-bold leading-6 text-ri-ink/65">{episode.subtitle}</p>
                    <p className="mt-5 inline-flex rounded-full bg-ri-mist px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-ri-ink/55">
                      Nota en preparación
                    </p>
                    <a
                      href={episodePath(episode.slug)}
                      className="mt-5 inline-flex rounded-full bg-[linear-gradient(90deg,#FF5F66,#174EFF)] px-5 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(11,13,18,0.16)] transition hover:-translate-y-1 hover:opacity-90 focus-visible:ring-4 focus-visible:ring-ri-blue/20"
                    >
                      Abrir blog
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
