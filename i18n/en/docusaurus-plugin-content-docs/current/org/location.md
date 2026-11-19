---
sidebar_position: 7
title: Locations
---

# Locations

A **Location** is a site under a branch, with an optional parent location for hierarchy.

**Path:** Sidebar ← Organization ← … (route may be opened by URL when not in the nav group)  
**Page:** `/Entities/ORG/Location`

## What a Location does for your business

- Names sites in English and Arabic
- Links a location to a **Branch** and optional **Parent** location
- Optionally assigns an owner

## List columns

| Column | Meaning |
|---|---|
| names | English / Arabic names |
| descriptions | Description text |
| Active? | Active switch (toast-only) |
| Actions | Row actions |

## Fields

| Field | Required | Use |
|---|---|---|
| Name (`name`) | Yes on SaveDetails | Display name |
| Arabic name (`nameAr`) | Yes on SaveDetails | Arabic display name |
| Descriptions | No | Optional text |
| OwnerUsrId | No | Owner user |
| BranchId | No | Parent branch |
| ParentId | No | Parent location |

Drawer Save yup treats fields as optional; **SaveDetails** requires `name` and `nameAr`.

:::warning[Active is toast-only]
On Location, the Active control shows a UI toast stub only. It does **not** persist like Branch Active. Do not treat it as a lasting availability flag.
:::

## Hierarchy

- **BranchId** places the location under a branch
- **ParentId** nests the location under another location

## Usage

1. Open Locations (`/Entities/ORG/Location`)
2. Create or edit a location
3. Fill **name** and **nameAr** on SaveDetails
4. Set **BranchId** and, if needed, **ParentId** for nesting
5. Optionally set owner and descriptions
6. Do not rely on the Active toast as a persisted Active flag

## Best Practices

:::tip[Create the branch first]
Set BranchId so locations stay tied to the correct branch.
:::

:::danger[Do not trust Active on Location]
Unlike Branch, Location Active does not persist. Use other fields and process to mark sites out of use if needed.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Branches](/docs/org/branch)
- [Assets](/docs/org/asset)
- [Glossary](/docs/org/glossary)
