import { MapPin } from "lucide-react";
import { env } from "../../lib/env";
import { media } from "../../data/media";
import { CloudinaryReadyMedia } from "../media/CloudinaryReadyMedia";

export function MapSection() {
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
            {env.googleMapsApiKey ? (
              <iframe
                title="Mapa de Red Implantología en Viña del Mar"
                loading="lazy"
                className="h-full min-h-[360px] w-full"
                src={`https://www.google.com/maps/embed/v1/place?key=${env.googleMapsApiKey}&q=Red+Implantologia,Viña+del+Mar,Chile&zoom=13`}
              />
            ) : (
              <>
                <CloudinaryReadyMedia asset={media.city} className="h-[360px] w-full object-cover opacity-80" />
                <div className="absolute inset-0 editorial-grid" />
                <div className="absolute left-8 top-8 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-editorial">
                  Google Maps: Red Implantología
                </div>
                <div className="absolute bottom-8 left-8 flex items-center gap-3 rounded-full bg-ri-ink px-5 py-3 text-white">
                  <MapPin size={18} /> Red Implantología, Viña del Mar
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
