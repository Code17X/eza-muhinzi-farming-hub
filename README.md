# Eza Muhinzi Farming Hub

Eza Muhinzi is a digital farming hub designed to help farmers access practical information and useful tools for stronger harvests. It is being built for Rwanda's farming community, with Kinyarwanda as the primary language and English available throughout the app.

**Mu Kinyarwanda:** Eza Muhinzi ni urubuga rw'ikoranabuhanga rugamije gufasha abahinzi kubona amakuru n'ibikoresho bifatika bibafasha kongera umusaruro. Ruri kubakwa hagamijwe abahinzi bo mu Rwanda, mu Cyongereza no mu Kinyarwanda.

## Technology

- TanStack Start with React and TypeScript
- Tailwind CSS v4 and shadcn/ui components
- TanStack Router and TanStack Query
- Vite and Nitro for development and server rendering
- Bun for package management and scripts

Phase 1 includes bilingual UI, Supabase Auth, login and signup, and a protected application shell. AI integrations, marketplace features, and the broader data layer are outside the current phase. Authentication uses the Supabase Auth HTTP API with the public URL and anon key.

## Run locally

Install [Bun](https://bun.sh/) and then run:

```sh
bun install
bun run dev
```

Vite prints the local development URL when the server is ready. Use `bun run build` to create a production build.

## Environment variables

Copy `.env.example` to `.env.local` and fill in only values needed for your local work. Never commit real credentials. `VITE_` values are included in client bundles and must be public values only. Keep AI provider keys server-side.

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL (public configuration) |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/publishable key; protect data with RLS |
| `OPENAI_API_KEY` | Server-side OpenAI credential |
| `GROK_API_KEY` | Server-side Grok credential |
| `VITE_APP_URL` | Public app URL; defaults to local development URL |

See [SECURITY.md](SECURITY.md) before adding integrations or endpoints.

## Contributing

Keep changes focused, use TypeScript, and follow the existing component and routing conventions. Do not introduce product features outside the agreed phase. Before opening a change, run the relevant checks (at minimum `bun run build` for application changes) and document any checks that could not run.

This repository is connected to Lovable. Commits pushed to the connected branch sync to the Lovable editor; avoid rewriting published history. Local commits do not publish or push automatically.
