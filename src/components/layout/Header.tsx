import { navigation } from "../../data/navigation";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ri-ink">
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center">
          <img src="/sqh-logo-crop.png" alt="SQH Podcast" className="h-20 w-auto md:h-24" />
        </a>
        <div className="hidden items-center gap-6 text-sm font-bold text-white/75 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contacto" className="hidden rounded-full bg-ri-red px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 lg:inline-flex">
          Quiero participar
        </a>
        <a href="#contacto" className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white lg:hidden">
          Contacto
        </a>
      </nav>
    </header>
  );
}
