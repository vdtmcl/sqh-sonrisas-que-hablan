import { navigation } from "../../data/navigation";
import { mediaAssets } from "../../data/media";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ri-ink">
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between px-5 py-4 lg:px-8">
        <a href="/#inicio" className="flex items-center">
          <img src={mediaAssets.logo} alt="SQH Podcast" className="h-14 w-auto sm:h-16 md:h-24" />
        </a>
        <div className="hidden items-center gap-6 text-sm font-bold text-white/75 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <a href="/#contacto" className="hidden rounded-full bg-ri-red px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 lg:inline-flex">
          Quiero participar
        </a>
        <div className="flex items-center gap-3 text-xs font-bold text-white sm:gap-4 sm:text-sm lg:hidden">
          <a href="/blog" className="transition hover:text-ri-red">Blog</a>
          <a href="/#contacto" className="rounded-full border border-white/20 px-3 py-2 font-bold text-white">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
