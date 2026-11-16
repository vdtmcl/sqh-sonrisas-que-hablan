import { env } from "./env";

export function cloudinaryVideo(publicId: string) {
  if (!env.cloudinaryCloudName || publicId.startsWith("http")) return publicId;
  return `https://res.cloudinary.com/${env.cloudinaryCloudName}/video/upload/f_auto,q_auto/${publicId}`;
}
