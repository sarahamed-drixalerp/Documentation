---
sidebar_position: 6
title: Nationalities
---

# Nationalities

A **Nationality** is a lookup value used across Drixal ERP forms (for example personal profiles). It follows the same pattern as Country.

**Path:** Sidebar ← Administration ← Nationalities *(when shown)*  
**Page:** `/Entities/ADM/Nationality`

:::note[Sidebar may hide this item]
Nationality may not appear in the Administration sidebar. The route `/Entities/ADM/Nationality` still works when you open it directly.
:::

## What this screen does

- Lists nationalities with English/Arabic name and description
- Lets you create, edit, and delete nationality records
- Persists the **Active** switch through edit (same behavior as Country)

## List and drawer fields

| Field | Use |
|---|---|
| Name / nameAr | Display labels |
| Description / descriptionAr | Optional text |
| abbrv | Short code |
| Active | Whether the value is available (persists on save) |

## Usage

1. Open `/Entities/ADM/Nationality`
2. Create a nationality or open the drawer to edit
3. Fill name / nameAr (and optional description fields and abbrv)
4. Set **Active** when the value should remain available
5. Save — the Active switch persists via edit

## Best Practices

:::tip[Treat like Country]
Use the same naming and Active conventions as [Countries](/docs/adm/country) so lookups stay consistent across modules.
:::

## Related Sections

- [Administration introduction](/docs/adm/introduction)
- [Countries](/docs/adm/country)
- [Glossary](/docs/adm/glossary)
