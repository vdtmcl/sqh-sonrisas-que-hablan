import { navigation } from "../../data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-ri-ink/10 bg-ri-ink px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.9fr_0.8fr_1.1fr] lg:items-start">
        <div>
          <img src="/sqh-logo-crop.png" alt="SQH Podcast" className="h-28 w-auto md:h-36" />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-ri-red">SQH Podcast</p>
          <p className="mt-5 max-w-sm text-white/70">
            Conversaciones sobre salud y tecnología aplicada, conducidas por Max Lizana desde Viña del Mar.
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
    </footer>
  );
}
