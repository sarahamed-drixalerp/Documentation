---
sidebar_position: 5
title: DMS projects
---

# DMS projects

A **DMS project (DMSProject)** is the document-control container for an operational project: name, project code, contract, owner, contractor, and role team (project manager, area manager, document controller, quantity surveyor), plus project disciplines.

**Navigation:** Sidebar → Document Management → DMS projects  
**Pages:** `/Entities/DMS/DMSProject` · `/Entities/DMS/DMSProject/new` · `/Entities/DMS/DMSProject/{id}`  
Tab query: `?tab=disciplines`

## What this screen does

- Defines the document project used in document lists and the dashboard
- Links owner, contractor, and DMS role users
- Links project disciplines to users via `DMSProjectDiscipline`
- Feeds document and dashboard filters

## Project list

### Columns

| Column | Meaning |
|---|---|
| **Name** | Project name |
| **ContractNo** | Contract number |
| **ProjectCode** | Project code |
| **DMSProjectOwnerId** | Owner |
| **ContractorId** | Contractor |
| **Actions** | Row actions |

### Filters

| Filter | Use |
|---|---|
| **Name** | Search by name |
| **DMSProjectOwnerId** | Owner |
| **ContractorId** | Contractor |

## Fields

| Field | Required? | Use |
|---|---|---|
| **name** | Yes | Name |
| **nameAr** | Yes | Arabic name |
| **projectCode** | Yes | Project code |
| contractNo | No | Contract number |
| startDate / endDate | No | Project dates |
| description / descriptionAr | No | Descriptions |
| **ContractorId** | No | Contractor |
| **DMSProjectOwnerId** | No | DMS project owner |
| ProjectManagerUsrId | No | Project manager |
| AreaManagerUsrId | No | Area manager |
| DocumentControllerUsrId | No | Document controller |
| QuantitySurveyorUsrId | No | Quantity surveyor |
| **EntityTypeId / EntityStatusId** | Yes (in SaveDetails) | Entity type and status |

## Tabs

| Tab | Purpose |
|---|---|
| **General** | Identity, contract, owner, contractor, team roles |
| **Disciplines** | Project disciplines (`DMSProjectDiscipline`) |

:::note[Disciplines tab after save]
The Disciplines tab is disabled until the project record is saved.
:::

### Project discipline (DMSProjectDiscipline)

| Field | Required? | Use |
|---|---|---|
| **DisciplineId** | Yes | Discipline |
| **DisciplineUsrId** | Yes | User linked to the discipline on the project |
| IsActive | — | Active / inactive |

## How to use the screen

1. Create a [DMS project owner](/docs/dms/dms-project-owner) and contractor when needed
2. Create the DMS project with name, `nameAr`, and `projectCode`
3. Assign owner, contractor, and team roles
4. Save, then open the Disciplines tab to link disciplines and users
5. Use the project when creating documents and in dashboard filters

## Best Practices

:::tip[Fix the project code early]
`projectCode` is required and appears in lists; standardize coding before piling up documents.
:::

:::warning[Team roles feed the path]
Project manager, area manager, document controller, and QS are used in project and review context — assign them before submitting workflow documents.
:::

## Related Sections

- [Document Management introduction](/docs/dms/introduction)
- [DMS project owner](/docs/dms/dms-project-owner)
- [Discipline](/docs/dms/discipline)
- [Documents](/docs/dms/document)
- [DMS dashboard](/docs/dms/dashboard)
- [Glossary](/docs/dms/glossary)
