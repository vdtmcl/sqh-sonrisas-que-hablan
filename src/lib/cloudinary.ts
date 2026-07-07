import { env } from "./env";

export function cloudinaryImage(publicId: string, width = 1600) {
  if (!env.cloudinaryCloudName || publicId.startsWith("http")) return publicId;
  return `https://res.cloudinary.com/${env.cloudinaryCloudName}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}

export function cloudinaryVideo(publicId: string) {
  if (!env.cloudinaryCloudName || publicId.startsWith("http")) return publicId;
  return `https://res.cloudinary.com/${env.cloudinaryCloudName}/video/upload/f_auto,q_auto/${publicId}`;
}
