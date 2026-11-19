---
sidebar_position: 8
title: Assets
---

# Assets

An **Asset** is a trackable organization asset: type, status, owner, serial, purchase date, and values.

**Path:** Sidebar ← Organization ← … (route may be opened by URL when not in the nav group)  
**Page:** `/Entities/ORG/Asset`

## What an Asset does for your business

- Registers bilingual asset names and descriptions
- Requires entity type and status
- Tracks serial, purchase date, purchase value, and current value
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
| EntityTypeId | Yes | Entity type |
| EntityStatusId | Yes | Entity status |
| Name (`name`) | Yes on SaveDetails | Display name |
| Arabic name (`nameAr`) | Yes on SaveDetails | Arabic display name |
| Descriptions | No | Optional text |
| OwnerUsrId | No | Asset owner |
| serial | No | Serial number |
| purchaseDate | No | Purchase date |
| purchaseValue_val | No (≥0) | Purchase value |
| currentValue_val | No (≥0) | Current value |

:::warning[Active is toast-only]
On Asset, the Active control shows a UI toast stub only. It does **not** persist like Branch Active.
:::

:::note[Values must be non-negative]
`purchaseValue_val` and `currentValue_val` must be ≥ 0 when provided.
:::

## Usage

1. Open Assets (`/Entities/ORG/Asset`)
2. Create or edit an asset
3. Set **EntityTypeId** and **EntityStatusId**
4. Fill **name** and **nameAr** on SaveDetails
5. Optionally add owner, serial, purchase date, and values (≥ 0)
6. Do not rely on the Active toast as a persisted Active flag

## Best Practices

:::tip[Keep serial and values together]
When the asset is capitalized or tracked for audit, fill serial, purchaseDate, and both value fields in one pass.
:::

:::warning[Type and status are required]
Assets without EntityTypeId or EntityStatusId fail validation.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [IT Systems](/docs/org/it-system)
- [Locations](/docs/org/location)
- [Glossary](/docs/org/glossary)
