---
sidebar_position: 3
title: Teams
---

# Teams

A **Team** is a cross-functional group with a lead and members. Team members are managed on the team record; there is no standalone Team Member page.

**Path:** Sidebar ← Organization ← Team  
**Pages:** `/Entities/ORG/Team` · `/Entities/ORG/Team/new` · `/Entities/ORG/Team/{id}`

## What a Team does for your business

- Groups people for delivery, support, or operations work
- Names a team lead (`ownerUsrId`)
- Maintains member membership on the **TeamMembers** tab
- Exposes Insights, Activities, Attachments, and Logs on the record page

## Views

| View | Default? | Purpose |
|---|---|---|
| **Cards** | Yes | Card overview of teams |
| **List** | No | Table with filters |
| **Record (Id)** | — | Details and members |

### List columns

| Column | Meaning |
|---|---|
| Name | Team name |
| Actions | Row actions |

### List filters

| Filter | Use |
|---|---|
| Search | Name search |
| EntityTypeId | Filter by type |
| EntityStatusId | Filter by status |

## Create and edit fields

| Field | Required | Use |
|---|---|---|
| Name (`name`) | Yes (SaveDetails / Id) | Display name |
| Arabic name (`nameAr`) | Yes (SaveDetails / Id) | Arabic display name |
| EntityTypeId | Yes | Entity type |
| EntityStatusId | Yes | Entity status |
| ownerUsrId | No | Team lead |
| Descriptions | No | Optional text |
| isActive | Header | Active flag on the record |
| DataConfidentialityId | Header | Confidentiality level |

Drawer Save schemas require type and status; names are enforced on SaveDetails / Id.

## Record tabs

| Tab | Purpose |
|---|---|
| **Details** | Team identity, lead, descriptions |
| **TeamMembers** | Members list and membership actions |

Side panels: **Activities**, **Attachments**, **Logs**, **Insights**.

## Team members (embedded)

Team members are edited only from the team record. There is no `/Entities/ORG/TeamMember` docs page or list route.

### Member list columns

| Column | Meaning |
|---|---|
| memberUsrName | Member display name |
| Actions | Edit / remove |

### Member filters

| Filter | Use |
|---|---|
| Search (MemberUsrName) | Find a member |
| EntityType / EntityStatus | Type and status filters |
| TeamId | Hidden; locked from the parent team |

### Member fields and rules

| Field | Required | Use |
|---|---|---|
| members[] | Yes on add (≥1) | Multi-select users to add |
| memberUsrId | Yes on edit | Single member user |
| Team | Locked | Taken from the parent team page |

:::warning[Already on the team]
Users who are already members are blocked from being added again.
:::

### Member actions

| Action | Meaning |
|---|---|
| Add | Opens multi-select for one or more users |
| Edit | Changes `memberUsrId` for a row |
| Delete | Removes the membership |

## Team actions

| Action | Meaning |
|---|---|
| Create | Opens `/Entities/ORG/Team/new` |
| Edit | Drawer or record edit |
| Delete | Removes the team |
| Open Id | Opens `/Entities/ORG/Team/{id}` |

## Usage

1. Open Teams from Organization
2. Create a team (navigates to `/new`) or open an existing `{id}`
3. Fill **name**, **nameAr**, **EntityTypeId**, and **EntityStatusId**
4. Optionally set the lead (`ownerUsrId`), descriptions, Active, and DataConfidentialityId
5. Save, then open the **TeamMembers** tab
6. Add members with multi-select; edit or remove as needed
7. Review Insights / Activities / Attachments / Logs from the record chrome

## Best Practices

:::tip[Set type and status before inviting members]
Required type and status keep the team usable in filters and related modules.
:::

:::note[Members stay on the team page]
Do not look for a separate Team Member menu item. Membership is always under the team record.
:::

:::warning[Lead is optional but useful]
`ownerUsrId` is optional in the schema, but assigning a lead clarifies accountability.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Departments](/docs/org/department)
- [Data Confidentiality](/docs/adm/data-confidentiality)
- [Glossary](/docs/org/glossary)
