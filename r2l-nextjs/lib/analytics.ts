// Simple analytics event tracking wrapper
// Replace the console.log with your actual analytics SDK (PostHog, Plausible, GA4, etc.)

type EventName =
  | "view_landing"
  | "click_apply"
  | "click_see_included"
  | "submit_application"
  | "pricing_click";

interface EventProps {
  [key: string]: string | number | boolean | undefined;
}

export function track(event: EventName, props?: EventProps): void {
  if (typeof window === "undefined") return;

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[R2L Analytics] ${event}`, props ?? {});
  }

  // ── PostHog (uncomment to enable) ──
  // if (typeof window.posthog !== 'undefined') {
  //   window.posthog.capture(event, props);
  // }

  // ── Google Analytics 4 (uncomment to enable) ──
  // if (typeof window.gtag !== 'undefined') {
  //   window.gtag('event', event, props);
  // }

  // ── Plausible (uncomment to enable) ──
  // if (typeof window.plausible !== 'undefined') {
  //   window.plausible(event, { props });
  // }
}

export function trackViewLanding(): void {
  track("view_landing");
}
