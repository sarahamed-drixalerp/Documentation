---
sidebar_position: 5
title: Countries
---

# Countries

A **Country** is a lookup value used across Drixal ERP forms and filters.

**Path:** Sidebar ← Administration ← Countries  
**Page:** `/Entities/ADM/Country`

## What this screen does

- Lists countries with English/Arabic name and description
- Lets you create, edit, and delete country records
- Persists the **Active** switch through edit (`editCountry`)

## List and drawer fields

| Field | Use |
|---|---|
| Name / nameAr | Display labels |
| Description / descriptionAr | Optional text |
| abbrv | Short code |
| Active | Whether the value is available (persists on save) |

## Usage

1. Open the countries list
2. Create a country or open the drawer to edit
3. Fill name / nameAr (and optional description fields and abbrv)
4. Set **Active** when the value should remain available
5. Save — the Active switch persists via edit

## Best Practices

:::tip[Keep Active accurate]
Deactivate countries you no longer want on forms instead of deleting historical values that records already reference.
:::

## Related Sections

- [Administration introduction](/docs/adm/introduction)
- [Nationalities](/docs/adm/nationality)
- [Currencies](/docs/adm/currency)
- [Glossary](/docs/adm/glossary)
