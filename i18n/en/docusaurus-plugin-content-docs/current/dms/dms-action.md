---
sidebar_position: 10
title: DMS actions
---

# DMS actions

A **DMS action (DMSAction)** is a bilingual name lookup for actions used in document-type review paths. The screen is list + drawer only — no standalone `{id}` record page in the frontend.

**Navigation:** Opened as entity `/Entities/DMS/DMSAction` (may not appear in the main DMS sidebar)  
**Page:** `/Entities/DMS/DMSAction` (list and create/edit drawer)

## What this screen does

- Stores the action name in English and Arabic
- Supports description, code, and active state
- Feeds action options in the document-type stage designer

## List

### Columns

| Column | Meaning |
|---|---|
| **English Name** | English name |
| **Arabic Name** | Arabic name |
| **English / Arabic Description** | Descriptions |
| **Active?** | Active switch |
| **Actions** | Row actions |

### Filters

| Filter | Use |
|---|---|
| **Name** | Search by name |

## Drawer fields

| Field | Required? | Use |
|---|---|---|
| **name** | Yes | English name |
| **nameAr** | Yes | Arabic name |
| description / descriptionAr | No | Descriptions |
| code | No | Action code |

Create and edit are via the list drawer only.

## How to use the screen

1. Open the DMSAction list
2. Create an action with name and `nameAr`
3. Add description and code when needed and keep the record active
4. Use actions when designing [document type](/docs/dms/document-type) stages

## Best Practices

:::tip[Keep bilingual names consistent]
Name and `nameAr` appear in review paths; keep wording aligned across Code-A… and custom actions.
:::

:::note[Not a day-to-day operations screen]
Action setup is configuration work. Daily work happens on documents and workflow.
:::

## Related Sections

- [Document type](/docs/dms/document-type)
- [Documents](/docs/dms/document)
- [Document Management introduction](/docs/dms/introduction)
- [Glossary](/docs/dms/glossary)
