export const env = {
  gtmId: import.meta.env.VITE_GTM_ID || "",
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || "",
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  turnstileSiteKey: import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY || "",
  cloudinaryCloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || ""
};
