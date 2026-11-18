# Deployment and marketing handoff

## Lead delivery (required)
Set the server-only variables in `.env.example`. The webhook receives a JSON POST with `lead_id`, `name`, `phone`, `email`, `message`, `space`, `form_id`, and `received_at`, using a Bearer token and an Idempotency-Key. It must save the lead to your CRM/sheet or deliver the notification before returning 2xx. Deduplicate using lead_id. A timeout can mean delivery happened without confirmation; investigate provider logs before resubmitting. No personal data is logged by this endpoint.

Configure Upstash Redis REST for the shared atomic limit (five attempts per IP and email per ten minutes). IP identity assumes Vercel's trusted x-real-ip header; configure the trusted proxy header before using another host. Missing configuration fails closed with an explicit call option; no conversion fires. Verify both forms reach the actual team inbox/CRM in production, and test rejected, slow and failed provider responses.

## GTM container GTM-5NQWM67T (required before ads)
The website now uses GTM only. The former standalone GA4 configuration is removed. Until the container is published with a GA4 tag, analytics page views will pause.

1. Create the GA4 Google tag for G-ETR1TXZHTG. Configure SPA page views once using enhanced measurement history changes; avoid a second history trigger if enabled there.
2. Obtain the real AW-ID and conversion labels from Google Ads. Add the Google Ads Google tag and Conversion Linker. These identifiers were not supplied and are not invented in code.
3. Create a custom event trigger for generate_lead. Send a GA4 generate_lead event and a Google Ads lead conversion. Map form_id and lead_id; use lead_id for the Ads transaction ID. Do not trigger conversions on thank-you page views: refreshes/direct visits must not count.
4. Add GA4 contact events for phone_click, whatsapp_click and email_click. These are interactions, not confirmed leads. Event payloads omit raw destination addresses and phone numbers.
5. Verify built-in consent checks on Google tags and configure any third-party tags to require the appropriate consent. Defaults remain denied before GTM loads. The cookie popup and preference storage have been removed; no website control grants optional consent. Previous stored consent is cleared. Test denied consent and client navigation in Tag Assistant.
6. Enhanced conversions are not enabled. Before enabling, confirm disclosure and permission for sending hashed customer identifiers to Google, normalize email/phone per Google's requirements, and gate user-provided data on ad_user_data consent. Never add raw enquiry data to ordinary analytics events.
7. Publish the container and test DebugView and Google Ads diagnostics. Verify exactly one conversion per successful submission, none on validation/delivery failure, and no duplicate GA4 page views.

## Business and release checks
Review privacy/terms wording and actual provider retention/access settings with the business. Confirm all locations against the Google Business Profile; the contradictory Pokhara label was changed to Rupandehi based on its existing address, not independently verified. Unsupported ISO/IIID and award claims were removed; restore only with evidence. Confirm any remaining testimonials, personnel, project and satisfaction claims before advertising.

Expired /dashain redirects to /enquiry and has no navigation/sitemap listing. Canonicals use www by default; remove or update any deployment environment override for NEXT_PUBLIC_SITE_URL. Resubmit /sitemap.xml to the www or Domain Search Console property after deploying. Confirm unknown URLs have no canonical.

Service landing pages are available at /services/modular-kitchen, /services/home-interior and /services/office-fit-out. Add verified service-specific completed projects and reviews before advertising; current images are explicitly labelled inspiration. Re-test mobile Core Web Vitals after deployment; source optimizations alone do not establish an INP result.
