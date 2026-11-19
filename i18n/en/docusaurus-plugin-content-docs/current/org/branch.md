---
sidebar_position: 4
title: Branches
---

# Branches

A **Branch** is an organization branch record: names, descriptions, optional owner, and an Active flag that persists.

**Path:** Sidebar ← Organization ← Branch  
**Page:** `/Entities/ORG/Branch`

## What a Branch does for your business

- Maintains bilingual branch names and descriptions
- Optionally assigns an owner user
- Lets you activate or deactivate a branch with a switch that **persists** on edit

## List columns

| Column | Meaning |
|---|---|
| name | English name |
| nameAr | Arabic name |
| ownerUsr | Owner user |
| descriptions | Description text |
| Active? | Active switch |
| Actions | Row actions |

### Filters

Search only (by name).

## Fields

| Field | Required | Use |
|---|---|---|
| Name (`name`) | Yes on SaveDetails | Display name |
| Arabic name (`nameAr`) | Yes on SaveDetails | Arabic display name |
| Descriptions | No | Optional text |
| OwnerUsrId | No | Branch owner |
| Active | — | Persists via edit |

Drawer yup treats names and owner as optional; **SaveDetails** requires `name` and `nameAr`.

:::tip[Active persists on Branch]
Unlike Location, Asset, and IT System, the Branch Active toggle is saved through edit. Use it as the lasting availability flag.
:::

## Usage

1. Open Branches from Organization
2. Create a branch or open the drawer to edit
3. Fill **name** and **nameAr** (required on SaveDetails)
4. Optionally set owner and descriptions
5. Set **Active** when the branch should remain available — the value persists
6. Save or confirm delete when removing a record

## Best Practices

:::tip[Prefer deactivate over delete]
Turn Active off for branches you no longer use instead of deleting records that locations or history may still reference.
:::

:::note[Owner is optional]
OwnerUsrId clarifies accountability but is not required by SaveDetails.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Locations](/docs/org/location)
- [Departments](/docs/org/department)
- [Glossary](/docs/org/glossary)
