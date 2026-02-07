export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

type GtagCommand = "config" | "event" | "js" | "set";

declare global {
  interface Window {
    gtag?: (...args: [GtagCommand, ...unknown[]]) => void;
  }
}

export function trackPageView(url: string) {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === "undefined") return;
  window.gtag?.("config", GA_MEASUREMENT_ID, { page_path: url });
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, params ?? {});
}
