---
sidebar_position: 8
title: Data Confidentiality
---

# Data Confidentiality

**Data Confidentiality** is a lookup used with roles and records for NCA classification in Drixal ERP.

**Path:** Sidebar ← Administration ← Data Confidentiality  
**Page:** `/Entities/ADM/DataConfidentiality`

## What this screen does

- Maintains confidentiality labels (name / nameAr and descriptions)
- Supports role permission ceilings and record classification aligned with NCA levels

## Fields

| Field | Use |
|---|---|
| Name / nameAr | Display labels |
| Descriptions | Optional text |

## How it connects to roles

Application Role permissions use NCA levels:

| Level | Label |
|---|---|
| 1 | Public |
| 2 | Internal |
| 3 | Confidential |
| 4 | Top Secret |

Keep Data Confidentiality values aligned with those levels when configuring [Application Roles](/docs/adm/application-role).

## Usage

1. Open Data Confidentiality
2. Create or edit a value
3. Fill name / nameAr and descriptions
4. Use the values when setting role permissions and record sensitivity

## Best Practices

:::tip[Keep labels stable]
Changing confidentiality labels after roles are assigned can confuse operators. Prefer clear, stable names that match NCA wording.
:::

## Related Sections

- [Administration introduction](/docs/adm/introduction)
- [Application Roles](/docs/adm/application-role)
- [Glossary](/docs/adm/glossary)
