import { MapPin } from "lucide-react";
import { env } from "../../lib/env";
import { media } from "../../data/media";
import { CloudinaryReadyMedia } from "../media/CloudinaryReadyMedia";

export function MapSection() {
  return (
    <section id="territorio" className="section bg-ri-mist">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-blue">Viña del Mar / salud / tecnología</p>
          <h2 className="mt-5 font-serif text-5xl leading-none md:text-7xl">Desde Viña del Mar hacia una conversación de alto nivel</h2>
          <p className="mt-6 text-lg text-ri-ink/70">
            SQH no nace desde la periferia de la conversación sanitaria. Nace en un territorio que ha consolidado
            capacidades clínicas, académicas y tecnológicas relevantes para la salud contemporánea.
          </p>
          <p className="mt-6 border-l-4 border-ri-red pl-5 text-2xl font-bold">
            SQH nace en Viña del Mar, pero conversa con los grandes temas de la salud contemporánea.
          </p>
        </div>
        <div className="reveal grid gap-4">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-ri-ink/10 bg-white shadow-editorial">
            {env.googleMapsApiKey ? (
              <iframe
                title="Mapa de Viña del Mar"
                loading="lazy"
                className="h-full min-h-[420px] w-full"
                src={`https://www.google.com/maps/embed/v1/place?key=${env.googleMapsApiKey}&q=Viña+del+Mar,Chile`}
              />
            ) : (
              <>
                <CloudinaryReadyMedia asset={media.city} className="h-[420px] w-full object-cover opacity-80" />
                <div className="absolute inset-0 editorial-grid" />
                <div className="absolute left-8 top-8 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-editorial">
                  Google Maps lazy placeholder
                </div>
                <div className="absolute bottom-8 left-8 flex items-center gap-3 rounded-full bg-ri-ink px-5 py-3 text-white">
                  <MapPin size={18} /> Viña del Mar, Chile
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
