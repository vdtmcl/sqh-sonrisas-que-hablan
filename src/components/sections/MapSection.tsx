import { env } from "../../lib/env";

export function MapSection() {
  const mapSrc = env.googleMapsApiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${env.googleMapsApiKey}&q=Red+Implantologia,Viña+del+Mar,Chile&zoom=13`
    : "https://www.google.com/maps?q=Red%20Implantologia%20Vi%C3%B1a%20del%20Mar%20Chile&z=13&output=embed";

  return (
    <section id="territorio" className="section bg-ri-mist">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-blue">Punto de encuentro / Viña del Mar</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-6xl">Red Implantología, frente a una conversación con territorio</h2>
          <p className="mt-5 text-base leading-7 text-ri-ink/70 md:text-lg">
            El punto de encuentro de SQH se sitúa en Red Implantología, Viña del Mar: un contexto clínico regional
            conectado con tecnología, salud y conversación profesional.
          </p>
          <p className="mt-5 border-l-4 border-ri-red pl-5 text-xl font-bold">
            Desde Viña del Mar, mirando hacia una conversación país.
          </p>
        </div>
        <div className="reveal grid gap-4">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-ri-ink/10 bg-white shadow-editorial transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(11,13,18,0.15)]">
            <iframe
              title="Mapa de Red Implantología en Viña del Mar"
              loading="lazy"
              className="h-full min-h-[360px] w-full"
              src={mapSrc}
            />
            <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-black shadow-editorial">
              Red Implantología · Viña del Mar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
