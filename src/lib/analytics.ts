import { env } from "./env";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initAnalytics() {
  if (env.gtmId && !document.querySelector(`[data-gtm="${env.gtmId}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.gtm = env.gtmId;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${env.gtmId}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  }

  if (env.gaMeasurementId && !document.querySelector(`[data-ga="${env.gaMeasurementId}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.ga = env.gaMeasurementId;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${env.gaMeasurementId}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("js", new Date());
    window.gtag("config", env.gaMeasurementId);
  }
}

export function trackPageView(path: string) {
  window.dataLayer?.push({ event: "page_view", page_path: path });
  window.gtag?.("config", env.gaMeasurementId, { page_path: path });
}
