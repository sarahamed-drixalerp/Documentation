# توثيق Drixal ERP / Drixal ERP Docs

Modern bilingual docs site (Arabic default + English) linked from the Aspire header **Help** button.

## Run locally

### Arabic only (fast hot reload)

```bash
npm start
```

### English only

```bash
npm run start:en
```

### Both languages (required for locale switch in the navbar)

`npm start` serves Arabic only. To switch العربية ↔ English:

```bash
npm run serve:i18n
```

Opens **http://127.0.0.1:3001**

| Locale | Home | PMO |
|---|---|---|
| العربية | `/` | `/docs/pmo/introduction` |
| English | `/en/` | `/en/docs/pmo/introduction` |

## Design

- Light SaaS documentation shell (card layout, soft sidebar active state, TOC “On this page”)
- Drixal logo in `static/img/`
- Local search in the navbar
- Locale dropdown: العربية ↔ English

## Help from Aspire-Frontend

Set `DOCS_BASE_URL=http://localhost:3001` (default). Mapping lives in `Aspire-Frontend/utils/helpDocsMap.ts`.
