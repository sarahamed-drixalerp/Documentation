---
sidebar_position: 5
title: Objectives
---

# Objectives

An **Objective** is an organization goal record with type, status, optional owner, and optional confidentiality.

**Path:** Sidebar ← Organization ← Objective  
**Page:** `/Entities/ORG/Objective`

## What an Objective does for your business

- Captures bilingual goal names and descriptions
- Requires entity type and status
- Optionally assigns an owner and data confidentiality level

## List columns

| Column | Meaning |
|---|---|
| names | English / Arabic names |
| ownerUsr | Owner user |
| descriptions | Description text |
| Active? | Active switch |
| Actions | Row actions |

## Fields

| Field | Required | Use |
|---|---|---|
| EntityTypeId | Yes | Entity type |
| EntityStatusId | Yes | Entity status |
| Name (`name`) | Yes on SaveDetails | Display name |
| Arabic name (`nameAr`) | Yes on SaveDetails | Arabic display name |
| Descriptions | No | Optional text |
| OwnerUsrId | No | Objective owner |
| DataConfidentialityId | No | Confidentiality level |

Drawer schemas require type and status; **SaveDetails** also requires `name` and `nameAr`.

## Usage

1. Open Objectives from Organization
2. Create or edit an objective in the drawer
3. Set **EntityTypeId** and **EntityStatusId**
4. Fill **name** and **nameAr** on SaveDetails
5. Optionally set owner, descriptions, and DataConfidentialityId
6. Save

## Best Practices

:::tip[Always set type and status]
Objectives without type or status are incomplete for filters and related workflows.
:::

:::note[Confidentiality is optional]
Use DataConfidentialityId when the goal should follow NCA classification; otherwise leave it empty.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Teams](/docs/org/team)
- [Data Confidentiality](/docs/adm/data-confidentiality)
- [Glossary](/docs/org/glossary)
