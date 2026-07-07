import { lazy, Suspense } from "react";
import { AudioLines, BrainCircuit, Map, Mic2, Network, Radio, Stethoscope, Youtube } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { CloudinaryReadyMedia } from "../components/media/CloudinaryReadyMedia";
import { EpisodeMedia } from "../components/media/EpisodeMedia";
import { VideoFrame } from "../components/media/VideoFrame";
import { ContactForm } from "../components/forms/ContactForm";
import { ScrollMotion } from "../components/motion/ScrollMotion";
import { MapSection } from "../components/sections/MapSection";
import { media } from "../data/media";
import { siteContent } from "../data/content";
import { episodes } from "../data/episodes";

const ConversationField = lazy(() => import("../components/three/ConversationField").then((module) => ({ default: module.ConversationField })));

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
    <section id="inicio" className="relative min-h-screen pt-24">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#FF5F66,#174EFF)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
        <div className="relative z-10 reveal">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-ri-blue">{siteContent.hero.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-serif text-[clamp(4rem,11vw,9.5rem)] leading-[0.84]">
            SQH <span className="text-ri-red">|</span><br /> Sonrisas que Hablan
          </h1>
          <p className="mt-8 max-w-2xl text-2xl font-bold leading-snug text-ri-ink/85">{siteContent.hero.lead}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ri-ink/65">{siteContent.hero.body}</p>
          <p className="mt-6 max-w-xl border-l-4 border-ri-blue pl-5 text-sm font-bold uppercase tracking-[0.12em] text-ri-ink/70">
            {siteContent.hero.signature}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#temporada">Ver temporada 1</Button>
            <Button href="#contacto" variant="secondary">Proponer invitado</Button>
          </div>
          <p className="mt-5 text-sm text-ri-ink/50">{siteContent.hero.microcopy}</p>
        </div>
        <div className="hero-media reveal relative min-h-[560px]">
          <div className="absolute left-0 top-10 h-52 w-52 rounded-full border border-ri-red/40" />
          <div className="absolute right-0 top-0 z-20 h-64 w-72 rounded-[2rem] border border-white/50 bg-white/80 p-4 shadow-editorial backdrop-blur">
            <div className="audio-line h-full rounded-[1.5rem] opacity-70" />
          </div>
          <div className="absolute bottom-10 left-0 z-10 h-[460px] w-[78%] overflow-hidden rounded-[2.4rem] shadow-editorial">
            <CloudinaryReadyMedia asset={media.hero} priority className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 z-20 h-[340px] w-[62%] overflow-hidden rounded-[2rem] border-[10px] border-white bg-ri-mist shadow-editorial">
            <Suspense fallback={<div className="h-full w-full editorial-grid" />}>
              <ConversationField />
            </Suspense>
            <div className="absolute inset-0 editorial-grid opacity-30 lg:hidden" />
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
        <div className="reveal space-y-6 text-xl leading-9 text-ri-ink/70">
          <p>SQH nace como un espacio editorial para abrir conversaciones entre profesionales de la salud que trabajan desde especialidades distintas, pero comparten una pregunta: cómo mejorar la vida de las personas con mejores decisiones clínicas, mejores tecnologías y una comprensión más integral del paciente.</p>
          <p>El podcast propone un diálogo serio, cercano y argumentado entre experiencia, evidencia, tecnología aplicada y mirada humana. No se trata de simplificar la salud, sino de traducir su complejidad con criterio profesional.</p>
          <blockquote className="border-l-4 border-ri-blue pl-6 font-serif text-4xl leading-tight text-ri-ink">
            Más que hablar de dientes, SQH usa la salud oral como punto de entrada para conversar sobre bienestar, función, autoestima, tecnología y calidad de vida.
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
          <p className="mt-6 text-xl leading-8 text-white/70">Una plataforma diseñada para conectar ideas, especialidades y trayectorias. Cada capítulo parte de un tema clínico concreto y lo expande hacia preguntas mayores sobre salud, innovación y experiencia de paciente.</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
          {siteContent.proposal.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <article key={title} className="reveal min-h-72 bg-ri-ink p-8 transition hover:bg-white hover:text-ri-ink">
                <Icon className="text-ri-red" size={30} />
                <h3 className="mt-10 text-3xl font-black">{title}</h3>
                <p className="mt-5 text-lg leading-8 opacity-70">{text}</p>
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
    <section id="temporada" className="season-pin section min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-blue">Temporada inaugural</p>
            <h2 className="mt-5 font-serif text-6xl leading-none md:text-8xl">Temporada 1</h2>
          </div>
          <p className="text-2xl font-bold leading-snug text-ri-ink/75">
            La primera temporada abre conversaciones sobre dolor, postura, ortodoncia en adultos, estética basada en evidencia,
            salud periodontal, cirugía avanzada y promesas clínicas que hoy requieren más criterio que marketing.
          </p>
        </div>
        <div className="season-track mt-14 flex w-[2100px] gap-6 pb-8">
          {episodes.map((episode, index) => (
            <article key={episode.number} className={`reveal grid w-[330px] shrink-0 content-between rounded-[2rem] border border-ri-ink/10 bg-white p-5 shadow-editorial ${index % 2 ? "mt-16" : ""}`}>
              <EpisodeMedia episodeNumber={episode.number} />
              <div className="mt-6">
                <p className="font-black text-ri-red">Capítulo {episode.number}</p>
                <h3 className="mt-2 text-2xl font-black leading-tight">{episode.title}</h3>
                <p className="mt-3 text-sm font-bold text-ri-blue">{episode.subtitle}</p>
                <p className="mt-4 text-ri-ink/65">{episode.description}</p>
                <p className="mt-5 border-l-2 border-ri-red pl-4 font-bold">{episode.idea}</p>
                <p className="mt-4 text-sm text-ri-ink/55">{episode.guest}</p>
                <Button href="#redes" variant="quiet" className="mt-5 px-0">Ver capítulo</Button>
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
          <p className="mt-6 text-2xl font-bold text-ri-ink/75">Una voz clínica con trayectoria, experiencia digital y mirada interdisciplinaria.</p>
          <div className="mt-6 space-y-5 text-lg leading-8 text-ri-ink/70">
            <p>Max Lizana es cirujano dentista de la Universidad de Valparaíso, especialista en Implantología Oral de la Universidad de Chile, miembro de la Sociedad de Implantología Oral de Chile y fundador/director clínico de Red Implantología en Viña del Mar.</p>
            <p>En SQH, Max conduce conversaciones con especialistas y líderes de la salud desde una posición concreta: la de un profesional que ha visto cómo la tecnología transforma la práctica clínica, y cómo la experiencia, el criterio y la mirada humana siguen siendo irremplazables.</p>
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
          <p className="mt-6 text-xl leading-9 text-ri-ink/70">SQH nace desde el ecosistema profesional de Red Implantología, una clínica especializada en Viña del Mar con foco en implantología, rehabilitación oral, trabajo multidisciplinario y tecnología aplicada.</p>
          <p className="mt-5 text-lg leading-8 text-ri-ink/65">Ese entorno permite que el podcast no sea solo una conversación conceptual, sino una extensión editorial de una práctica clínica activa donde planificación, innovación y colaboración forman parte del trabajo cotidiano.</p>
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
          <p className="mt-6 text-xl leading-9 text-ri-ink/70">SQH convoca a especialistas, centros médicos, investigadores, docentes, líderes clínicos y equipos de comunicaciones que quieran aportar una mirada seria sobre el futuro de la salud.</p>
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
          <p className="max-w-xl text-lg leading-8 text-ri-ink/70">La conversación continúa más allá del estudio: episodios completos, reels, clips destacados y piezas diseñadas para ampliar el alcance de las ideas.</p>
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
          <p className="mt-6 text-xl leading-9 text-ri-ink/70">Para proponer invitados, coordinar participaciones o solicitar información sobre el formato SQH, completa el formulario.</p>
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
