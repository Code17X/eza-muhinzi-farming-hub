# Security baseline

- Never commit secrets, access tokens, private keys, or real environment files. Use `.env.example` for variable names and empty/default development values.
- Values prefixed with `VITE_` are public and may be bundled into browser code. Keep OpenAI, Grok, Supabase service-role, and all other privileged credentials server-side only.
- Enforce authorization and least privilege in server handlers. For Supabase, enable and test Row Level Security (RLS) on every exposed table; never rely on client-side checks alone.
- Rate limit AI endpoints before exposing them, and validate request size, input shape, and user authorization. Apply usage limits and monitor costs.
- Keep dependencies updated and review security advisories before upgrades. Remove packages that are no longer needed.
- Use HTTPS and security headers in deployed environments, including a restrictive Content Security Policy, `X-Content-Type-Options`, frame protection, a suitable `Referrer-Policy`, and HSTS when HTTPS is enforced.
- Do not log secrets or sensitive user data. Report suspected credential exposure promptly and rotate affected credentials.

## Reporting

Do not publish an exploitable vulnerability with credentials or personal data. Contact the project maintainers privately with reproduction details and impact.
