---
sidebar_position: 2
title: Departments
---

# Departments

A **Department** is a node in the organization hierarchy. Nodes are typed as Department, Section, or Unit and form a tree used across the platform.

**Path:** Sidebar ← Organization ← Department  
**Pages:** `/Entities/ORG/Department` · `/Entities/ORG/Department/{id}`

## What a Department does for your business

- Models the org chart as Department → Section → Unit
- Assigns a manager and optional cost / profit centers
- Shows child structure and linked employees on the tree and record screens
- Supports Insights, Activities, Attachments, and Logs on the record page

## Views

| View | Default? | Purpose |
|---|---|---|
| **Tree** | Yes | Hierarchy with level chips (department / section / unit) |
| **List** | No | Flat table with filters |
| **Record (Id)** | — | Full details for one node |

### List columns

| Column | Meaning |
|---|---|
| Name | Node name |
| Manager | Manager user |
| EntityType | Department / Section / Unit (and related type) |
| Parent | Parent node |
| Actions | Row actions |

### List filters

| Filter | Use |
|---|---|
| Name | Search by name |
| EntityTypeId | Filter by type |
| EntityStatusId | Filter by status |
| ParentId | Filter by parent |

## Tree form fields

Primary create/edit UX is the tree form.

| Field | Required | Use |
|---|---|---|
| Name (`name`) | Yes | Display name |
| Arabic name (`nameAr`) | No | Arabic display name |
| Descriptions | No | Optional text |
| ManagerUsrId | No | Manager user |
| ParentId | No | Parent node (empty for top-level) |
| EntityTypeId | No on tree form* | Entity type |
| EntityStatusId | No on tree form* | Entity status |
| CostCenterId | No | Cost center link |
| ProfitCenterId | No | Profit center link |

\*On **SaveDetails**, `EntityTypeId` and `EntityStatusId` are required.

## Tree tabs

| Tab | Purpose |
|---|---|
| **Details** | Identity and links for the selected node |
| **Structure** | Child nodes |
| **Employees** | Employees linked to this node |

## Record page (Id)

**Page:** `/Entities/ORG/Department/{id}`

| Area | Purpose |
|---|---|
| **Details** | Node fields |
| **Activities** | Activity stream |
| **Attachments** | Files |
| **Logs** | Change history |
| **Insights** | Insights panel |

## Actions

| Action | Meaning |
|---|---|
| Create top-level | Adds a root department |
| Add child | Adds a section or unit under the selected parent |
| Edit | Updates the selected node |
| Delete | Removes a node **only if it has no children** |

:::danger[Cannot delete with children]
If the node has children, delete is blocked and the UI shows a toast. Remove or re-parent children first.
:::

## Usage

1. Open Departments from Organization
2. Prefer the **Tree** view for hierarchy work
3. Create a top-level department, or select a parent and add a child
4. Fill **Name**; add Arabic name, manager, type, status, and finance links as needed
5. On SaveDetails flows, ensure **EntityTypeId** and **EntityStatusId** are set
6. Use **Structure** and **Employees** tabs on the tree; open `{id}` for Activities, Attachments, Logs, and Insights
7. Switch to **List** when you need filters by type, status, or parent

## Best Practices

:::tip[Name the level clearly]
Use EntityType so Department, Section, and Unit stay distinct in the tree and list.
:::

:::warning[Plan deletes from the leaves]
Delete leaf nodes first. A parent with children cannot be deleted.
:::

:::note[Finance links are optional]
CostCenterId and ProfitCenterId are optional; fill them only when your finance model uses them.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Teams](/docs/org/team)
- [Branches](/docs/org/branch)
- [Locations](/docs/org/location)
- [Glossary](/docs/org/glossary)
