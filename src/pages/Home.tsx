import { AudioLines, BrainCircuit, Map, Mic2, Network, Radio, Stethoscope, Youtube } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { CloudinaryReadyMedia } from "../components/media/CloudinaryReadyMedia";
import { VideoFrame } from "../components/media/VideoFrame";
import { ContactForm } from "../components/forms/ContactForm";
import { ScrollMotion } from "../components/motion/ScrollMotion";
import { MapSection } from "../components/sections/MapSection";
import { media } from "../data/media";
import { siteContent } from "../data/content";
import { episodes } from "../data/episodes";

export function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <ScrollMotion />
      <Header />
      <Hero />
      <PodcastIntro />
      <Format />
      <Season />
      <Max />
      <RedImplantologia />
      <MapSection />
      <Invitation />
      <Networks />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-20">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#FF5F66,#174EFF)]" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-10">
        <div className="relative z-10 reveal">
          <img src="/sqh-logo.png" alt="SQH Podcast" className="h-14 w-auto rounded-xl bg-ri-ink p-2 md:h-16" />
          <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-ri-blue md:text-sm">{siteContent.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-sans text-[clamp(2.8rem,5.8vw,5.6rem)] font-black leading-[0.92] tracking-[-0.04em]">
            SQH <span className="text-ri-red">|</span><br /> Sonrisas que Hablan
          </h1>
          <p className="mt-5 max-w-xl text-xl font-bold leading-snug text-ri-ink/85 md:text-2xl">{siteContent.hero.lead}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="#temporada">Ver temporada 1</Button>
            <Button href="#contacto" variant="secondary">Proponer invitado</Button>
          </div>
          <p className="mt-4 max-w-md text-sm text-ri-ink/50">{siteContent.hero.microcopy}</p>
        </div>
        <div className="hero-media reveal relative w-full self-center">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full border border-ri-red/40" />
          <div className="absolute -right-5 -top-5 z-20 h-32 w-44 rounded-[1.25rem] border border-ri-ink/10 bg-white/80 p-3 shadow-editorial backdrop-blur">
            <div className="audio-line h-full rounded-2xl opacity-70" />
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-ri-ink/10 bg-ri-ink p-3 shadow-editorial">
            <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-black">
              <CloudinaryReadyMedia asset={media.hero} priority className="h-full w-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white md:bottom-8 md:left-8 md:right-8">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-white/65">Video 16:9</p>
                  <p className="mt-2 max-w-sm text-xl font-black md:text-2xl">Espacio reservado para tráiler o capítulo destacado.</p>
                </div>
                <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-black text-ri-ink md:inline-flex">Pronto</span>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-xs font-bold uppercase tracking-[0.16em] text-ri-ink/55">
            <span className="border-t border-ri-red pt-3">Salud</span>
            <span className="border-t border-ri-blue pt-3">Tecnología</span>
            <span className="border-t border-ri-ink pt-3">Conversación</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PodcastIntro() {
  return (
    <section id="podcast" className="section">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-red">El podcast</p>
          <h2 className="mt-5 font-serif text-5xl leading-none md:text-7xl">Una conversación donde la salud se mira desde más de una especialidad</h2>
        </div>
        <div className="reveal space-y-5 text-lg leading-8 text-ri-ink/70">
          <p>
            SQH reúne a profesionales, especialistas y líderes del ecosistema sanitario para conversar con profundidad
            sobre los cambios que están transformando la salud: experiencia del paciente, innovación clínica,
            tecnología digital y colaboración entre disciplinas.
          </p>
          <p className="border-l-4 border-ri-blue pl-5 text-base font-bold uppercase tracking-[0.1em] text-ri-ink/70">
            Conduce: Max Lizana, cirujano dentista, especialista en Implantología Oral y fundador/director clínico de
            Red Implantología.
          </p>
          <blockquote className="border-l-4 border-ri-red pl-6 font-serif text-3xl leading-tight text-ri-ink md:text-4xl">
            Más que hablar de dientes, SQH usa la salud oral como punto de entrada para conversar sobre bienestar,
            función, tecnología y calidad de vida.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Format() {
  const icons = [Stethoscope, BrainCircuit, Mic2, Map];
  return (
    <section className="section bg-ri-ink text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-red">El formato</p>
          <h2 className="mt-5 font-serif text-6xl leading-none md:text-8xl">Qué propone SQH</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Conversaciones que conectan especialidades, tecnología aplicada y experiencia clínica sin perder mirada humana.</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
          {siteContent.proposal.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <article key={title} className="reveal min-h-72 bg-ri-ink p-8 transition hover:bg-white hover:text-ri-ink">
                <Icon className="text-ri-red" size={30} />
                <h3 className="mt-10 text-3xl font-black">{title}</h3>
                <p className="mt-5 text-base leading-7 opacity-70">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Season() {
  return (
    <section id="temporada" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-blue">Temporada inaugural</p>
            <h2 className="mt-5 font-serif text-6xl leading-none md:text-8xl">Temporada 1</h2>
          </div>
          <p className="text-xl font-bold leading-snug text-ri-ink/75 md:text-2xl">
            Seis conversaciones para abrir el punto de partida interdisciplinario de SQH: cuerpo, salud oral,
            tecnología, estética, cirugía y criterio clínico.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {episodes.map((episode) => (
            <article key={episode.number} className="reveal overflow-hidden rounded-[1.75rem] border border-ri-ink/10 bg-white shadow-editorial">
              <VideoFrame eyebrow={`Capitulo ${episode.number}`} label={episode.title} />
              <div className="p-6 md:p-8">
                <p className="font-black text-ri-red">Capítulo {episode.number}</p>
                <h3 className="mt-2 text-2xl font-black leading-tight">{episode.title}</h3>
                <p className="mt-3 text-sm font-bold text-ri-blue">{episode.subtitle}</p>
                <details className="group mt-6">
                  <summary className="inline-flex cursor-pointer list-none rounded-full border border-ri-ink/15 px-5 py-3 text-sm font-black transition hover:-translate-y-1 hover:border-ri-blue hover:text-ri-blue">
                    <span className="group-open:hidden">Ver mas</span>
                    <span className="hidden group-open:inline">Ver menos</span>
                  </summary>
                  <div className="pt-5">
                    <p className="text-ri-ink/65">{episode.description}</p>
                    <p className="mt-5 border-l-2 border-ri-red pl-4 font-bold">{episode.idea}</p>
                    <p className="mt-4 text-sm text-ri-ink/55">{episode.guest}</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-ri-ink/40">{episode.embed}</p>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Max() {
  return (
    <section id="max" className="section">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="reveal relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-editorial">
            <CloudinaryReadyMedia asset={media.max} className="h-[620px] w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 right-8 max-w-sm rounded-[2rem] bg-ri-blue p-6 text-white shadow-editorial">
            La tecnología puede cambiar la forma de tratar, pero el criterio clínico sigue siendo el centro.
          </div>
        </div>
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-red">Conduce</p>
          <h2 className="mt-5 font-serif text-6xl leading-none md:text-8xl">Max Lizana</h2>
          <p className="mt-6 text-2xl font-bold text-ri-ink/75">Trayectoria clínica, experiencia digital y mirada interdisciplinaria.</p>
          <div className="mt-6 space-y-5 text-lg leading-8 text-ri-ink/70">
            <p>Max Lizana conduce SQH desde la práctica clínica real: implantología, rehabilitación oral y tecnología aplicada a casos complejos.</p>
            <p>Su rol es ordenar la conversación, conectar criterios y abrir preguntas útiles para profesionales y audiencias interesadas en salud.</p>
          </div>
          <ul className="mt-8 grid gap-3">
            {siteContent.maxCredentials.map((credential) => (
              <li key={credential} className="flex gap-3 border-t border-ri-ink/10 pt-3 text-sm font-bold text-ri-ink/70">
                <span className="text-ri-blue">+</span>{credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function RedImplantologia() {
  return (
    <section className="section border-y border-ri-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-blue">Respaldo profesional</p>
          <h2 className="mt-5 font-serif text-5xl leading-none md:text-7xl">Un podcast respaldado por experiencia clínica real</h2>
          <p className="mt-6 text-xl leading-9 text-ri-ink/70">Red Implantología entrega contexto profesional: trabajo multidisciplinario, tecnología aplicada y experiencia clínica desde Viña del Mar.</p>
          <p className="mt-5 text-lg leading-8 text-ri-ink/65">SQH toma ese respaldo y lo transforma en contenido editorial, no en una vitrina comercial.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Equipo multidisciplinario", "Tecnología aplicada", "Trayectoria regional"].map((item) => (
              <div key={item} className="border-l-2 border-ri-red pl-4 font-black">{item}</div>
            ))}
          </div>
        </div>
        <div className="reveal overflow-hidden rounded-[2rem] shadow-editorial">
          <CloudinaryReadyMedia asset={media.clinic} className="h-full min-h-[460px] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Invitation() {
  return (
    <section id="invitados" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-red">Invitación a profesionales</p>
          <h2 className="mt-5 font-serif text-6xl leading-none md:text-8xl">Una invitación a conversar con profundidad</h2>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-ri-ink/70">Un espacio para especialistas, centros médicos, investigadores, docentes y líderes clínicos que quieran conversar con profundidad.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["Visibilidad con contexto", "Diálogo entre pares", "Plataforma editorial", "Puente entre salud y audiencia"].map((item, index) => (
            <div key={item} className="reveal min-h-56 border-t border-ri-ink pt-5">
              <span className="text-sm font-black text-ri-blue">0{index + 1}</span>
              <h3 className="mt-4 text-2xl font-black">{item}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#contacto">Proponer invitado</Button>
          <Button href="#contacto" variant="secondary">Solicitar información del formato</Button>
        </div>
      </div>
    </section>
  );
}

function Networks() {
  return (
    <section id="redes" className="section bg-ri-mist">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-blue">Contenido audiovisual</p>
            <h2 className="mt-5 font-serif text-6xl leading-none md:text-8xl">Capítulos, clips y apariciones</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ri-ink/70">Episodios completos, clips breves y piezas seleccionadas para extender las ideas fuera del estudio.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <VideoFrame eyebrow="YouTube" label="Capítulos completos en formato audiovisual." />
          <VideoFrame eyebrow="Instagram" label="Clips, reels y momentos destacados." />
          <VideoFrame eyebrow="Medios" label="Apariciones públicas y piezas de prensa." />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-red">Contacto</p>
          <h2 className="mt-5 font-serif text-6xl leading-none md:text-8xl">Salud, tecnología y conversaciones que importan</h2>
          <p className="mt-6 text-xl leading-9 text-ri-ink/70">Propón invitados, coordina participaciones o solicita información sobre el formato SQH.</p>
          <div className="mt-8 flex gap-4 text-ri-blue">
            <Radio /><Network /><Youtube /><AudioLines />
          </div>
        </div>
        <div className="reveal rounded-[2rem] border border-ri-ink/10 bg-ri-mist p-5 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
