---
sidebar_position: 9
title: IT Systems
---

# IT Systems

An **IT System** is an asset-like inventory record for systems, with an optional supplier.

**Path:** Sidebar ← Organization ← … (route may be opened by URL when not in the nav group)  
**Page:** `/Entities/ORG/ITSystem`

## What an IT System does for your business

- Registers bilingual system names and descriptions
- Requires entity type and status
- Tracks serial, purchase date, and values like Asset
- Optionally links a **SupplierId** and owner

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
| EntityTypeId | Yes | Entity type |
| EntityStatusId | Yes | Entity status |
| Name (`name`) | Yes on SaveDetails | Display name |
| Arabic name (`nameAr`) | Yes on SaveDetails | Arabic display name |
| Descriptions | No | Optional text |
| OwnerUsrId | No | System owner |
| serial | No | Serial number |
| purchaseDate | No | Purchase date |
| purchaseValue_val | No | Purchase value |
| currentValue_val | No | Current value |
| SupplierId | No | Supplier link (IT System–specific) |

:::warning[Active is toast-only]
On IT System, the Active control shows a UI toast stub only. It does **not** persist like Branch Active.
:::

## Usage

1. Open IT Systems (`/Entities/ORG/ITSystem`)
2. Create or edit a system
3. Set **EntityTypeId** and **EntityStatusId**
4. Fill **name** and **nameAr** on SaveDetails
5. Optionally add owner, serial, dates, values, and **SupplierId**
6. Do not rely on the Active toast as a persisted Active flag

## Best Practices

:::tip[Use SupplierId for vendor-backed systems]
When a vendor supports the system, set SupplierId so procurement and support trails stay clear.
:::

:::note[Same pattern as Asset]
IT System follows the Asset field pattern and adds SupplierId. Keep serial and values consistent with asset practice.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Assets](/docs/org/asset)
- [Locations](/docs/org/location)
- [Glossary](/docs/org/glossary)
