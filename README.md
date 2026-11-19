# توثيق Drixal ERP / Drixal ERP Docs

Modern bilingual docs site (Arabic default + English) linked from the Aspire header **Help** button.

## Run locally

### Important for Aspire Help button

The frontend opens **English** docs as `/en/docs/...` when the app locale is English.

- `npm start` / `npm run start:ar` → **Arabic only**. Paths like `/en/docs/...` will **404**.
- For Help to work in both languages (and for the locale switcher), use:

```bash
npm run serve:i18n
```

That builds Arabic + English and serves **http://127.0.0.1:3001**.

If you already ran `npm run build`, you can use `npm run serve` alone.

### Arabic only (fast hot reload — no `/en` routes)

```bash
npm start
```

### English only (dev — English at `/`, not `/en`)

```bash
npm run start:en
```

| Locale | Home | Example Help URL |
|---|---|---|
| العربية | `/` | `/docs/app/inbox` |
| English | `/en/` | `/en/docs/app/inbox` |

## Design

- Light SaaS documentation shell (card layout, soft sidebar active state, TOC “On this page”)
- Drixal logo in `static/img/`
- Local search in the navbar
- Locale dropdown: العربية ↔ English

## Help from Aspire-Frontend

Set `DOCS_BASE_URL=http://localhost:3001` (default). Mapping lives in `Aspire-Frontend/utils/helpDocsMap.ts`.

When the user clicks **Help** in the app header, the current route maps to a docs path (entity → page, else module, else getting-started) and opens in a new tab with the active locale (`ar` default, `en` → `/en/...`).

## Authoring a new entity help page (PMO style)

1. Write Arabic under `docs/{module}/{entity-kebab}.md` (overview, list, create, lifecycle, tips, related links).
2. Mirror English under `i18n/en/docusaurus-plugin-content-docs/current/{module}/{entity-kebab}.md`.
3. Register the page in `sidebars.ts`.
4. Add `'MODULE/Entity': 'docs/...'` in `Aspire-Frontend/utils/helpDocsMap.ts`.
5. Add screenshots under `static/img/{module}/` — see `static/img/SCREENSHOTS.md`.

Template quality bar: `docs/pmo/project-overview.md` (+ English twin).
