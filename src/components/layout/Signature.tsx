export function Signature() {
  return (
    <div className="bg-[#292929] px-3 py-3 text-center text-white">
      <a
        href="https://www.vdtm.cl/"
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="inline-flex max-w-full items-center justify-center gap-1.5 whitespace-nowrap text-[clamp(10px,3.2vw,14px)] no-underline transition-transform duration-[180ms] hover:scale-[1.035] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none"
      >
        <span>Web creada con ❤️ y 🤖 por</span>
        <img
          src="/images/vdtm-logo.png"
          alt="VDTM.cl"
          width="2170"
          height="725"
          loading="lazy"
          decoding="async"
          className="h-[1.5em] w-auto object-contain"
        />
      </a>
    </div>
  );
}
