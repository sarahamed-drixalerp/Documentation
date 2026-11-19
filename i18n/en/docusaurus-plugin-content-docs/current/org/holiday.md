---
sidebar_position: 6
title: Holidays
---

# Holidays

A **Holiday** is an organization calendar entry with start and end dates, optional annual repeat, and confidentiality.

**Path:** Sidebar ← Organization ← … (route may be opened by URL when not in the nav group)  
**Page:** `/Entities/ORG/Holiday`

## What a Holiday does for your business

- Records holiday names and date ranges
- Marks holidays that repeat every year
- Ties the entry to entity type, status, and optional confidentiality
- Supports an Active toggle on the list

## List columns

| Column | Meaning |
|---|---|
| names | English / Arabic names |
| startDate | Start date |
| endDate | End date |
| descriptions | Description text |
| Active? | Active switch |
| Actions | Row actions |

## Fields

| Field | Required | Use |
|---|---|---|
| EntityTypeId | Yes | Entity type |
| EntityStatusId | Yes | Entity status |
| Name / nameAr | No in drawer yup | Display labels |
| Descriptions | No | Optional text |
| startDate | No | Range start |
| endDate | No | Range end |
| isRepeatedAnnually | No | Repeats every year |
| DataConfidentialityId | No | Confidentiality level |
| Active | — | List Active toggle |

## Usage

1. Open Holidays (`/Entities/ORG/Holiday`)
2. Create or edit a holiday
3. Set **EntityTypeId** and **EntityStatusId**
4. Enter start and end dates; set **isRepeatedAnnually** when it recurs each year
5. Optionally add names, descriptions, and DataConfidentialityId
6. Use the Active toggle as needed, then save

## Best Practices

:::tip[Prefer annual repeat for fixed public holidays]
For holidays that return every year, set `isRepeatedAnnually` instead of recreating the same range annually.
:::

:::warning[Type and status are required]
Create or edit fails validation without EntityTypeId and EntityStatusId.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Work shifts](/docs/hrm/work-shift)
- [Data Confidentiality](/docs/adm/data-confidentiality)
- [Glossary](/docs/org/glossary)
