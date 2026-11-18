import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { YouTubeAutoplay } from "../components/media/YouTubeAutoplay";
import { SEOHead } from "../components/seo/SEOHead";
import { articles } from "../data/articles";
import type { Episode } from "../lib/episodes";
import { episodeSeo } from "../lib/seo";

export function EpisodePage({ episode }: { episode: Episode }) {
  const article = articles[episode.slug];
  return (
    <main className="overflow-hidden bg-white">
      <SEOHead seo={episodeSeo(episode)} />
      <Header />
      <article className="mx-auto max-w-[92rem] px-5 pb-20 pt-36 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-6xl"><YouTubeAutoplay url={episode.embed} title={episode.title} /></div>
        <div className="mx-auto mt-12 max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-ri-blue">Temporada {episode.season} · Capítulo {episode.number}</p>
          <h1 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{article?.title ?? episode.title}</h1>
          {article ? (
            <div className="mt-8 text-lg leading-8 text-ri-ink/80">
              {article.blocks.map((block, index) => {
                if (block.type === "heading") return <h2 key={index} className="mt-12 font-serif text-3xl leading-tight text-ri-ink md:text-4xl">{block.text}</h2>;
                if (block.type === "question") return <h3 key={index} className="mt-7 text-xl font-black text-ri-ink">{block.text}</h3>;
                if (block.type === "list") return <p key={index} className="mt-4 border-l-2 border-ri-blue pl-4">{block.text}</p>;
                if (block.type === "table") return <div key={index} className="my-8 overflow-x-auto"><table className="w-full min-w-[36rem] border-collapse text-left text-base leading-7"><thead><tr>{block.rows[0].map((cell, i) => <th key={i} scope="col" className="border border-ri-ink/15 bg-ri-mist p-3">{cell}</th>)}</tr></thead><tbody>{block.rows.slice(1).map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j} className="border border-ri-ink/15 p-3 align-top">{cell}</td>)}</tr>)}</tbody></table></div>;
                return <p key={index} className="mt-5">{block.text}</p>;
              })}
            </div>
          ) : <><p className="mt-6 text-xl font-bold text-ri-blue">{episode.subtitle}</p><p className="mt-8 text-lg leading-8 text-ri-ink/70">{episode.description}</p></>}
        </div>
      </article>
      <Footer />
    </main>
  );
}
