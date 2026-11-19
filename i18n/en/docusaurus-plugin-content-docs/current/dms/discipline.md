---
sidebar_position: 7
title: Disciplines
---

# Disciplines

A **discipline** is a technical or operational domain in DMS linked to a responsible user (`DisciplineUsr`) and optionally marked **technical (`isTechnical`)** for multi-discipline document selection. Employees are managed on the Employees tab or the standalone `DisciplineEmployee` route.

**Navigation:** Sidebar → Document Management → Disciplines  
**Pages:** `/Entities/DMS/Discipline` · `/Entities/DMS/Discipline/new` · `/Entities/DMS/Discipline/{id}`

**Discipline employee (standalone):** `/Entities/DMS/DisciplineEmployee` · `/new` · `/{id}`

## What this screen does

- Defines disciplines used by document types, DMS projects, and documents
- Links a default user for the discipline (`DisciplineUsr`)
- Marks technical disciplines via **Is Technical**
- Manages discipline employees (`DisciplineEmployee`: DisciplineId + DisciplineUsrId)

## Discipline list

### Columns

| Column | Meaning |
|---|---|
| **Name** | Discipline name |
| **DisciplineUsr** | Linked user |
| **Actions** | Row actions |

### Filters

| Filter | Use |
|---|---|
| **Name** | Search by name |
| **DisciplineUsrId** | User |

## Fields

| Field | Required? | Use |
|---|---|---|
| **name** | Yes | Name |
| **nameAr** | Yes | Arabic name |
| description / descriptionAr | No | Descriptions |
| DisciplineUsrId | No | User responsible for the discipline |
| **isTechnical (Is Technical)** | — | Toggle: technical discipline (required selection on multi-discipline documents) |
| **EntityTypeId / EntityStatusId** | Yes (in SaveDetails) | Entity type and status |

## Tabs

| Tab | Purpose |
|---|---|
| **Details** | Discipline identity, `isTechnical`, and DisciplineUsr |
| **Employees** | `DisciplineEmployee` sub-list (after save / when not new) |

### Discipline employee (DisciplineEmployee)

| Field | Required? | Use |
|---|---|---|
| **DisciplineId** | Yes | Discipline |
| **DisciplineUsrId** | Yes | Employee / user |
| IsActive | — | Active / inactive |

The standalone list also shows: DisciplineName, DisciplineUsrName, IsActive, CreateDate.

## How to use the screen

1. Create the discipline with name and `nameAr`
2. Set DisciplineUsr and enable **Is Technical** when it is technical
3. Save, then add employees from the Employees tab or `/Entities/DMS/DisciplineEmployee`
4. Link the discipline to a DMS project from the project Disciplines tab
5. On multi-discipline documents, select at least one technical discipline

## Best Practices

:::tip[Mark technical disciplines before Multi-Discipline types]
Multi-discipline documents require at least one technical discipline — enable `isTechnical` on the right disciplines.
:::

:::note[Two paths for discipline employees]
The discipline record’s Employees tab and the standalone `DisciplineEmployee` route manage the same DisciplineId + DisciplineUsrId link.
:::

:::warning[Project discipline is separate]
Linking a discipline to a user on a project uses `DMSProjectDiscipline` on the [DMS project](/docs/dms/dms-project), not the discipline list alone.
:::

## Related Sections

- [Document Management introduction](/docs/dms/introduction)
- [DMS project](/docs/dms/dms-project)
- [Document type](/docs/dms/document-type)
- [Documents](/docs/dms/document)
- [Glossary](/docs/dms/glossary)
