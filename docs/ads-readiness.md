# Deployment and marketing handoff

## Lead delivery
The shared enquiry form (contact, enquiry and service pages) submits directly from the browser to `https://api.web3forms.com/submit` using the supplied Web3Forms access key. Web3Forms access keys are designed for public client-side integration. All existing contact/project fields are included. The form prevents duplicate clicks, displays provider/network errors, and sends visitors to `/thank-you` only after Web3Forms confirms success. A unique local lead ID is used for the success event; raw contact details are not sent to analytics.

The old `/api/lead` webhook/Redis route remains unused by the website form. Its environment variables are only needed if that legacy endpoint is used again. Confirm the supplied key's recipient inbox is verified in Web3Forms and test delivery from the deployed site. Direct WhatsApp contact remains available.

## GTM container GTM-5NQWM67T (required before ads)
The website uses the standard GTM bootstrap in the document head, after consent defaults, with the noscript fallback first in the body. It does not wait for React hydration. The website uses GTM only. The former standalone GA4 configuration is removed. The public container endpoint returned HTTP 200 on 19 November 2026, but its published configuration had no measurement tags or GA4/Ads IDs. Until the container is published with a GA4 tag, analytics page views will pause. Website code cannot publish tags inside the GTM account.

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
