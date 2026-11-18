export function trackEvent(event: string, properties: Record<string, unknown> = {}) {
  const target = window as Window & { dataLayer?: Record<string, unknown>[] };
  target.dataLayer = target.dataLayer || [];
  target.dataLayer.push({ event, ...properties });
}
