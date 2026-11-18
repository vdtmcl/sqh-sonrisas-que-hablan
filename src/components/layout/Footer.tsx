import { navigation } from "../../data/navigation";
import { mediaAssets } from "../../data/media";
import { ContactForm } from "../forms/ContactForm";

export function Footer() {
  return (
    <footer>
      <section id="contacto" className="section scroll-mt-24 bg-white text-ri-ink" aria-labelledby="contact-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-red">Contacto</p>
            <h2 id="contact-heading" className="mt-5 font-serif text-5xl leading-tight md:text-6xl">Salud, tecnología y conversaciones que importan</h2>
            <p className="mt-6 text-xl leading-9 text-ri-ink/70">Propón invitados, coordina participaciones o solicita información sobre el formato SQH.</p>
          </div>
          <div className="min-w-0 rounded-[2rem] border border-ri-ink/10 bg-ri-mist p-5 md:p-8"><ContactForm /></div>
        </div>
      </section>
      <div className="border-t border-ri-ink/10 bg-ri-ink px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.9fr_0.8fr_1.1fr] lg:items-start">
        <div>
          <img src={mediaAssets.logo} alt="SQH Podcast" className="h-28 w-auto md:h-36" loading="eager" />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-ri-red">SQH Podcast</p>
          <p className="mt-5 max-w-sm text-white/70">
            Conversaciones sobre salud y tecnología aplicada, conducidas por el{" "}
            <a href="/#max" className="font-black bg-[linear-gradient(90deg,#FF5F66,#174EFF)] bg-clip-text text-transparent transition hover:opacity-75">
              Dr. Max Lizana
            </a>{" "}
            desde Viña del Mar.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-4 text-sm font-bold">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-white/70 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-white/55">
            Los contenidos de SQH tienen fines informativos y de conversación profesional. No reemplazan una evaluación
            clínica individual ni constituyen indicación médica u odontológica personalizada.
          </p>
          <p className="mt-5 text-sm text-white/45">© SQH | Sonrisas que Hablan. Todos los derechos reservados.</p>
        </div>
      </div>
      </div>
    </footer>
  );
}
