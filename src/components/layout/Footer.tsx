import { navigation } from "../../data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-ri-ink/10 bg-ri-ink px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <img src="/sqh-logo.png" alt="SQH Podcast" className="h-16 w-auto" />
          <p className="mt-5 max-w-md text-white/70">
            SQH | Sonrisas que Hablan es un podcast de conversación profesional sobre salud y tecnología aplicada,
            conducido por Max Lizana desde Viña del Mar.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-4 text-sm font-bold">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-white/70 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#redes" className="text-white/70 hover:text-white">YouTube</a>
            <a href="#redes" className="text-white/70 hover:text-white">Instagram</a>
          </div>
          <p className="mt-8 text-sm text-white/55">
            Los contenidos de SQH tienen fines informativos y de conversación profesional. No reemplazan una evaluación
            clínica individual ni constituyen indicación médica u odontológica personalizada.
          </p>
          <p className="mt-5 text-sm text-white/45">© SQH | Sonrisas que Hablan. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
