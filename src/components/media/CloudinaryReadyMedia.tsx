import { ResponsiveImage } from "./ResponsiveImage";

type Props = {
  asset: { src: string; alt: string; cloudinaryPublicId?: string };
  className?: string;
  priority?: boolean;
};

export function CloudinaryReadyMedia({ asset, className, priority }: Props) {
  return (
    <ResponsiveImage
      src={asset.src}
      alt={asset.alt}
      cloudinaryPublicId={asset.cloudinaryPublicId}
      priority={priority}
      className={className}
    />
  );
}
