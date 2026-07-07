import { Link } from "react-router-dom";
import { episodes } from "../data/episodes";
import { Button } from "../components/ui/Button";

export function Preview() {
  return (
    <main className="min-h-screen bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="text-sm font-bold text-ri-blue">Volver al sitio</Link>
        <h1 className="mt-8 font-serif text-7xl leading-none">Preview visual</h1>
        <p className="mt-5 max-w-2xl text-xl text-ri-ink/70">Ruta simple para revisar tipografía, botones, colores, capítulos y tono editorial sin recorrer toda la one page.</p>
        <div className="mt-10 flex gap-3">
          <Button href="/">Primario</Button>
          <Button href="/" variant="secondary">Secundario</Button>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {episodes.map((episode) => (
            <article key={episode.number} className="rounded-3xl border border-ri-ink/10 p-6">
              <p className="font-black text-ri-red">Capítulo {episode.number}</p>
              <h2 className="mt-2 text-2xl font-black">{episode.title}</h2>
              <p className="mt-2 text-ri-ink/60">{episode.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
