import { Menu } from "lucide-react";
import { navigation } from "../../data/navigation";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ri-ink/10 bg-white/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 font-black">
          <img src="/sqh-logo.png" alt="SQH Podcast" className="h-8 w-auto rounded bg-ri-ink p-1" />
          <span>SQH</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-bold text-ri-ink/70 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ri-blue">
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contacto" className="hidden rounded-full bg-ri-red px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 lg:inline-flex">
          Proponer invitado
        </a>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-ri-ink/10 lg:hidden" aria-label="Abrir menú">
          <Menu size={18} />
        </button>
      </nav>
    </header>
  );
}
