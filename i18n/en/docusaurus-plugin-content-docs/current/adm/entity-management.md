---
sidebar_position: 4
title: Entity Management
---

# Entity Management

**Entity Management** configures the catalog of entities in Drixal ERP: details, statuses, types, and attributes used across modules.

## What Entity Management Does for Your Business

- Presents a **CAT → entity** tree so you can find the entity you need
- Maintains bilingual names, descriptions, and codes for each entity
- Defines **Status** and **Types** values with colors when needed
- Defines **Attributes** (including monitoring trend flags) tied to database field names and data types

**Path:** Sidebar ← Administration ← Entity Management  
**Page:** `/Entities/ADM/Entity`

## Screen layout

- **Left:** CAT → entity tree
- **Right:** detail panel for the selected entity

## Tabs

| Tab | Purpose |
|---|---|
| **Details** | Entity identity and description |
| **Status** | Status values (EN/AR name, descriptions, Color) |
| **Types** | Type values (same pattern as Status) |
| **Attributes** | Attribute definitions (Name, Description, Monitoring `isMonitorTrend`) |

### Details fields

| Field | Required | Use |
|---|---|---|
| Name (`name`) | Yes | Display name |
| Arabic name (`nameAr`) | Yes | Arabic display name |
| Description | No | Explanation |
| abbrv / code | No | Short code |

### Status and Types

| Field | Required | Use |
|---|---|---|
| Name (EN) | Yes | English label |
| nameAr | Yes | Arabic label |
| Descriptions | No | Extra text |
| Color | No | Display color (Status) |

### Attributes

| Field | Required | Use |
|---|---|---|
| Name / nameAr | Yes | Attribute labels |
| Description | No | Explanation |
| dbFieldName | Yes | Database field name |
| dataType | Yes | `string` \| `number` \| `boolean` \| `date` \| `datetime` \| `text` \| `json` |
| isMonitorTrend | No | Monitoring trend flag |

## Permissions

Create, edit, delete, and view actions are gated by permissions. If a control is missing, check the signed-in user’s Application Role claims.

## Usage

1. Open Entity Management
2. Select a category, then an entity from the tree
3. Review or edit **Details**
4. Maintain **Status** and **Types** lists as needed
5. Add or edit **Attributes** with `dbFieldName` and `dataType` filled in

## Best Practices

:::tip[Set dbFieldName and dataType together]
An attribute is incomplete without both `dbFieldName` and `dataType`. Fill them before relying on the attribute in forms or monitoring.
:::

:::warning[Permissions control what you can change]
Missing create/edit/delete controls usually mean the role lacks the matching claim—not that the screen is broken.
:::

## Related Sections

- [Administration introduction](/docs/adm/introduction)
- [Monitoring](/docs/adm/monitoring)
- [Application Roles](/docs/adm/application-role)
- [Glossary](/docs/adm/glossary)
