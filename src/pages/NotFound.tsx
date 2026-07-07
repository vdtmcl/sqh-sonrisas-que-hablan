import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-5 text-center">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.3em] text-ri-red">404</p>
        <h1 className="mt-4 font-serif text-6xl">Página no encontrada</h1>
        <Link className="mt-8 inline-flex rounded-full bg-ri-ink px-6 py-3 font-bold text-white" to="/">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
