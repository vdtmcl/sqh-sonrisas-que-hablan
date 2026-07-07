import { AudioLines, BrainCircuit, ChevronDown, Map, Mic2, Network, Radio, Stethoscope } from "lucide-react";
import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { CloudinaryReadyMedia } from "../components/media/CloudinaryReadyMedia";
import { YouTubePreview } from "../components/media/YouTubePreview";
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
      <PodcastFaq />
      <Season />
      <Max />
      <RedImplantologia />
      <MapSection />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-32">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#FF5F66,#174EFF)]" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[92rem] items-center gap-12 px-5 py-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-10">
        <div className="relative z-10 reveal">
          <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-ri-blue md:text-sm">{siteContent.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-sans text-[clamp(3.2rem,5.6vw,6rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            SQH Podcast
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-snug text-ri-ink/85 md:text-2xl">
            Conversaciones sobre salud, y tecnología aplicada,{" "}
            <a
              href="#max"
              className="font-black bg-[linear-gradient(90deg,#FF5F66,#174EFF)] bg-clip-text text-transparent transition hover:opacity-75"
            >
              conducidas por Max Lizana
            </a>{" "}
            desde Viña del Mar.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="#temporada">Ver temporada 1</Button>
            <Button href="#contacto" variant="secondary">Quiero participar</Button>
          </div>
          <p className="mt-4 max-w-md text-sm text-ri-ink/50">{siteContent.hero.microcopy}</p>
        </div>
        <div className="reveal relative w-full self-center">
          <YouTubePreview
            url={episodes[0].embed}
            title="Kinesiología & Odontología"
            eyebrow="Capítulo destacado"
            poster="/hero-podcast-cover.jpg"
            large
          />
        </div>
      </div>
    </section>
  );
}

function PodcastFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      title: "¿Qué es SQH?",
      body: "Un podcast editorial sobre salud, tecnología aplicada y conversaciones profesionales conducido por Max Lizana desde Viña del Mar. SQH propone una mirada amplia: conversar con especialistas, ordenar criterio clínico y acercar temas complejos a una audiencia que busca entender mejor cómo cambia la salud."
    },
    {
      title: "¿Qué mirada propone?",
      body: "Mirar la salud desde más de una especialidad: criterio clínico, experiencia del paciente, colaboración y tecnología con propósito. La conversación no se queda en una técnica aislada; cruza diagnóstico, bienestar, decisiones profesionales, expectativas reales y el impacto humano de cada tratamiento."
    },
    {
      title: "¿Por qué salud oral?",
      body: "Porque la salud oral es un vínculo concreto con otras áreas de la salud: postura, inflamación, estética, función, rehabilitación y calidad de vida. Desde la boca se abren conversaciones con kinesiología, periodoncia, cirugía, tecnología digital y bienestar integral del paciente."
    },
    {
      title: "¿Dónde converge la conversación?",
      body: "En el bienestar y la salud del paciente: mejores decisiones clínicas, experiencia profesional y uso responsable de tecnología. SQH busca mostrar cómo la expertiz, la planificación y la colaboración interdisciplinaria permiten llegar a tratamientos más coherentes, seguros y comprensibles."
    },
    {
      title: "¿Qué lugar ocupa la tecnología?",
      body: "La tecnología importa cuando mejora diagnóstico, planificación, precisión y seguimiento. No como promesa vacía, sino como criterio aplicado. En SQH se habla de innovación desde su utilidad real: cuándo ayuda, cuándo exige prudencia y cómo mejora la experiencia clínica."
    },
    {
      title: "¿Cuál es el respaldo profesional?",
      body: "SQH nace desde el ecosistema de Red Implantología, pero su foco es editorial: conversaciones útiles, no promoción clínica. Ese respaldo permite hablar desde la experiencia real de casos, equipos y tecnología, manteniendo al podcast como protagonista del relato."
    }
  ];

  return (
    <section id="podcast" className="section bg-ri-ink text-white">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-red">El podcast / El formato</p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-none md:text-6xl">Una conversación profesional, interdisciplinaria y directa.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            SQH reúne a profesionales y especialistas para conversar sobre salud, tecnología aplicada, experiencia del paciente y colaboración entre disciplinas.
          </p>
        </div>
        <div className="reveal grid gap-2">
          {faqs.map((item, index) => {
            const icons = [Stethoscope, BrainCircuit, Mic2, Map, Network, AudioLines];
            const Icon = icons[index];
            const isOpen = openIndex === index;
            return (
              <div
                key={item.title}
                className={`rounded-2xl border transition duration-300 ${
                  isOpen
                    ? "border-white bg-white text-ri-ink"
                    : "border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left"
                >
                  <span className="flex items-center gap-3 text-base font-black md:text-lg">
                    <Icon className="text-ri-red" size={20} /> {item.title}
                  </span>
                  <ChevronDown className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`} size={18} />
                </button>
                {isOpen ? <p className="px-4 pb-5 text-base leading-7 opacity-75 md:text-lg md:leading-8">{item.body}</p> : null}
              </div>
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
      <div className="mx-auto max-w-[92rem] px-5 lg:px-10">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-ri-blue md:text-sm">Temporada inaugural</p>
          <h2 className="mt-4 font-serif text-4xl leading-none md:text-6xl">Temporada 1</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-bold leading-7 text-ri-ink/70 md:text-xl md:leading-8">
            Seis conversaciones para abrir el punto de partida interdisciplinario de SQH: cuerpo, salud oral,
            tecnología, estética, cirugía y criterio clínico.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {episodes.map((episode) => (
            <article key={episode.number} className="reveal overflow-hidden rounded-[1.5rem] border border-ri-ink/10 bg-white shadow-editorial transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(11,13,18,0.16)]">
              <YouTubePreview url={episode.embed} eyebrow={`Capítulo ${episode.number}`} title={episode.title} />
              <div className="p-4 md:p-5">
                <p className="font-black text-ri-red">Capítulo {episode.number}</p>
                <h3 className="mt-2 text-lg font-black leading-tight md:text-xl">{episode.title}</h3>
                <p className="mt-3 text-sm font-bold text-ri-blue">{episode.subtitle}</p>
                <details className="group mt-4 rounded-2xl border border-ri-ink/10 transition duration-300 hover:border-ri-blue/40">
                  <summary className="flex w-full cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3 text-sm font-black transition hover:text-ri-blue">
                    <span className="group-open:hidden">Ver más</span>
                    <span className="hidden group-open:inline">Ver menos</span>
                    <ChevronDown className="shrink-0 transition group-open:rotate-180" size={16} />
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="text-sm leading-6 text-ri-ink/65">{episode.description}</p>
                    <p className="mt-4 border-l-2 border-ri-red pl-4 text-sm font-bold">{episode.idea}</p>
                    <p className="mt-3 text-sm text-ri-ink/55">{episode.guest}</p>
                    <a
                      href={episode.embed}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex rounded-full bg-ri-ink px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-ri-blue"
                    >
                      Abrir en YouTube
                    </a>
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

function Contact() {
  return (
    <section id="contacto" className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-red">Contacto</p>
          <h2 className="mt-5 font-serif text-6xl leading-none md:text-8xl">Salud, tecnología y conversaciones que importan</h2>
          <p className="mt-6 text-xl leading-9 text-ri-ink/70">Propón invitados, coordina participaciones o solicita información sobre el formato SQH.</p>
          <div className="mt-8 flex gap-4 text-ri-blue">
            <Radio /><Network /><Mic2 /><AudioLines />
          </div>
        </div>
        <div className="reveal rounded-[2rem] border border-ri-ink/10 bg-ri-mist p-5 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
