import type { ImgHTMLAttributes } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  cloudinaryPublicId?: string;
};

export function ResponsiveImage({ src, alt, className = "", priority = false }: Props) {
  const imageSrc = src;
  const priorityAttribute = { fetchpriority: priority ? "high" : "auto" } as unknown as ImgHTMLAttributes<HTMLImageElement>;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...priorityAttribute}
    />
  );
}
