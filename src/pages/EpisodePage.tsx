import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { YouTubeAutoplay } from "../components/media/YouTubeAutoplay";
import { SEOHead } from "../components/seo/SEOHead";
import { articles } from "../data/articles";
import { relatedEpisodes } from "../data/articleRelations";
import { episodes } from "../data/episodes";
import type { Episode } from "../lib/episodes";
import { episodePath } from "../lib/episodes";
import { episodeSeo } from "../lib/seo";

const inlineLinks: Record<string, { phrase: string; slug: string }[]> = {
  "periodontitis-y-encias": [{ phrase: "implantes dentales", slug: "dientes-fijos-en-48-horas" }],
  "regeneracion-osea-guiada": [{ phrase: "implantes dentales", slug: "dientes-fijos-en-48-horas" }, { phrase: "derivados por ortodoncia", slug: "ortodoncia-en-adultos" }],
  "blanqueamiento-y-salud-dental": [{ phrase: "gingivitis, periodontitis", slug: "periodontitis-y-encias" }],
  "dientes-fijos-en-48-horas": [{ phrase: "injertos óseos", slug: "regeneracion-osea-guiada" }, { phrase: "escáneres intraorales digitales", slug: "proveedores-de-excelencia" }],
  "kinesiologia-y-odontologia": [{ phrase: "la oclusión y la ATM", slug: "ortodoncia-en-adultos" }],
  "ortodoncia-en-adultos": [{ phrase: "implantes dentales", slug: "dientes-fijos-en-48-horas" }, { phrase: "encías y hueso periodontal sanos", slug: "periodontitis-y-encias" }],
  "proveedores-de-excelencia": [{ phrase: "biomateriales de regeneración ósea", slug: "regeneracion-osea-guiada" }, { phrase: "escáneres intraorales", slug: "dientes-fijos-en-48-horas" }]
};

export function EpisodePage({ episode }: { episode: Episode }) {
  const article = articles[episode.slug];
  const pendingLinks = [...(inlineLinks[episode.slug] ?? [])];
  function linkText(text: string) {
    const pieces: React.ReactNode[] = [];
    let cursor = 0;
    while (cursor < text.length) {
      const matches = pendingLinks.map((entry) => ({ entry, pos: text.toLocaleLowerCase("es").indexOf(entry.phrase.toLocaleLowerCase("es"), cursor) })).filter((item) => item.pos >= 0).sort((a, b) => a.pos - b.pos);
      if (!matches.length) break;
      const { entry, pos } = matches[0];
      pieces.push(text.slice(cursor, pos), <a key={pos} href={episodePath(entry.slug)} className="font-semibold text-ri-blue underline decoration-ri-blue/40 underline-offset-4 hover:decoration-ri-blue">{text.slice(pos, pos + entry.phrase.length)}</a>);
      cursor = pos + entry.phrase.length;
      pendingLinks.splice(pendingLinks.indexOf(entry), 1);
    }
    pieces.push(text.slice(cursor));
    return pieces;
  }
  const related = (relatedEpisodes[episode.slug] ?? []).flatMap((slug) => {
    const match = episodes.find((item) => item.slug === slug);
    return match ? [match] : [];
  });
  return (
    <main className="overflow-hidden bg-white">
      <SEOHead seo={episodeSeo(episode)} />
      <Header />
      <article className="mx-auto max-w-[92rem] px-5 pb-20 pt-36 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-6xl"><YouTubeAutoplay url={episode.embed} title={episode.title} /></div>
        <div className="mx-auto mt-12 max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-ri-blue">Temporada {episode.season} · Capítulo {episode.number}</p>
          <h1 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{article?.title ?? episode.title}</h1>
          {article && <p className="mt-5 text-sm leading-6 text-ri-ink/70">Fuente: entrevista de SQH Podcast · Conduce Dr. Max Lizana{episode.guest ? ` · ${episode.guest}` : ""}</p>}
          {article ? (
            <div className="mt-8 text-lg leading-8 text-ri-ink/80">
              {article.blocks.map((block, index) => {
                if (block.type === "heading") return <h2 key={index} className="mt-12 font-serif text-3xl leading-tight text-ri-ink md:text-4xl">{block.text}</h2>;
                if (block.type === "question") return <h3 key={index} className="mt-7 text-xl font-black text-ri-ink">{block.text}</h3>;
                if (block.type === "list") {
                  const numbered = /^\d+\.\s/.test(block.text);
                  const previous = article.blocks[index - 1];
                  if (previous?.type === "list" && /^\d+\.\s/.test(previous.text) === numbered) return null;
                  const items: string[] = [];
                  for (let i = index; i < article.blocks.length; i++) {
                    const item = article.blocks[i];
                    if (item.type !== "list" || /^\d+\.\s/.test(item.text) !== numbered) break;
                    items.push(item.text);
                  }
                  const children = items.map((item, i) => <li key={i} className="pl-1">{linkText(numbered ? item.replace(/^\d+\.\s*/, "") : item)}</li>);
                  return numbered ? <ol key={index} className="mt-5 list-decimal space-y-3 pl-7">{children}</ol> : <ul key={index} className="mt-5 list-disc space-y-3 pl-7">{children}</ul>;
                }
                if (block.type === "table") return <div key={index} className="my-8 overflow-x-auto"><table className="w-full min-w-[36rem] border-collapse text-left text-base leading-7"><thead><tr>{block.rows[0].map((cell, i) => <th key={i} scope="col" className="border border-ri-ink/15 bg-ri-mist p-3">{cell}</th>)}</tr></thead><tbody>{block.rows.slice(1).map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j} className="border border-ri-ink/15 p-3 align-top">{cell}</td>)}</tr>)}</tbody></table></div>;
                return <p key={index} className="mt-5">{linkText(block.text)}</p>;
              })}
            </div>
          ) : <><p className="mt-6 text-xl font-bold text-ri-blue">{episode.subtitle}</p><p className="mt-8 text-lg leading-8 text-ri-ink/70">{episode.description}</p></>}
          {article && <div className="mt-12"><a href="#contacto" className="inline-flex rounded-full bg-[linear-gradient(90deg,#FF5F66,#174EFF)] px-6 py-4 text-base font-black text-white shadow-editorial transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ri-blue">¿Quieres participar en este podcast?</a></div>}
          {related.length > 0 && <section className="mt-16 border-t border-ri-ink/10 pt-10" aria-labelledby="related-episodes">
            <h2 id="related-episodes" className="font-serif text-3xl text-ri-ink md:text-4xl">También te puede interesar</h2>
            <p className="mt-3 text-ri-ink/70">Continúa explorando temas relacionados en SQH.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">{related.map((item) => <a key={item.slug} href={episodePath(item.slug)} className="rounded-2xl border border-ri-ink/10 bg-ri-mist p-5 transition hover:-translate-y-1 hover:shadow-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-ri-blue">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-ri-blue">Temporada {item.season} · Capítulo {item.number}</span>
              <span className="mt-2 block text-lg font-black leading-snug text-ri-ink">{item.title}</span>
              <span className="mt-2 block text-sm leading-6 text-ri-ink/70">{item.subtitle}</span>
              <span className="mt-4 block text-sm font-bold text-ri-blue">Leer la nota →</span>
            </a>)}</div>
          </section>}
        </div>
      </article>
      <Footer />
    </main>
  );
}
