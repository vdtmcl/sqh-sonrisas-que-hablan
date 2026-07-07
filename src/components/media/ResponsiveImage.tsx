import { cloudinaryImage } from "../../lib/cloudinary";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  cloudinaryPublicId?: string;
};

export function ResponsiveImage({ src, alt, className = "", priority = false, cloudinaryPublicId }: Props) {
  const imageSrc = cloudinaryImage(cloudinaryPublicId || src, priority ? 1800 : 1200);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
