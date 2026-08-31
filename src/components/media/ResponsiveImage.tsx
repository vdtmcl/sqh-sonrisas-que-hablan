import { cloudinaryImage } from "../../lib/cloudinary";
import { env } from "../../lib/env";
import type { ImgHTMLAttributes } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  cloudinaryPublicId?: string;
};

export function ResponsiveImage({ src, alt, className = "", priority = false, cloudinaryPublicId }: Props) {
  const source = env.cloudinaryCloudName && cloudinaryPublicId ? cloudinaryPublicId : src;
  const imageSrc = cloudinaryImage(source, priority ? 1800 : 1200);
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
