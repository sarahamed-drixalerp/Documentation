---
sidebar_position: 4
title: Document types
---

# Document types

A **document type (DocumentType)** defines document rules in DMS: name, prefixes, allowed file types, size and count limits, versioning, and path behaviour — Upload Only, or a single- or multi-discipline workflow.

**Navigation:** Sidebar → Document Management → Document types  
**Pages:** `/Entities/DMS/DocumentType` · `/Entities/DMS/DocumentType/new` · `/Entities/DMS/DocumentType/{id}`  
Tab query: `?tab=workflow` or `?tab=disciplines` opens the stage designer

## What this screen does

- Sets prefixes, allowed file types, and limits per document class
- Chooses **documentBehaviour**, which controls whether workflow exists
- Designs discipline stages, actions, and SLA (unless Upload Only)
- Feeds the document list and submit / attachment rules

## Document type list

### Columns

| Column | Meaning |
|---|---|
| **Name** | Type name |
| **Code** | Code |
| **Document Prefixes** | Prefixes |
| **Max Allowed Attachments** | Attachment count limit |
| **Allowed File Types** | Allowed extensions |
| **Upload Only** | Yes / No |
| **Actions** | Row actions |

### Filters

| Filter | Use |
|---|---|
| **Name** | Search by name |

## Fields

| Field | Required? | Use |
|---|---|---|
| **name** | Yes | Display name |
| nameAr | No | Arabic name |
| code | No | Optional code |
| **prefixes (Document Prefixes)** | Yes | Code prefixes when creating a document |
| **fileTypes (Allowed File Types)** | Yes | Allowed extensions |
| **documentBehaviour** | Yes | Path behaviour (see table below) |
| maxFilesCount (`Max Allowed Attachments`) | No | Max attachment count |
| maxSize (`Max File Size (MB)`) | No | Max size in MB |
| isAllowVersioning (`Allow Versioning`) | No | Allow versioning |
| description | No | Description |
| **EntityTypeId / EntityStatusId** | Yes (in SaveDetails) | Entity type and status |

### documentBehaviour

| Value | UI label | Meaning |
|---|---|---|
| **0** | Upload Only (No Workflow) | Upload only — no workflow |
| **1** | Multi-Discipline (Submit Only) | Multi-discipline — submit for review |
| **2** | Single Discipline (Take Action) | Single discipline — take action (default on create) |

## Tabs

| Tab | Purpose |
|---|---|
| **Details** | Identity, prefixes, files, limits, behaviour |
| **Workflow / Disciplines** | `DocumentTypeDiscipline` stage designer (sequence, SLA, actions) |

:::warning[Workflow tab hidden for Upload Only]
If behaviour is **Upload Only (0)**, the Workflow/Disciplines tab is hidden and no review stages are built for this type.
:::

On the designer, system sequences are locked: `0`, `10`, `20`, `70`, `90`, `99`. Creating a non–Upload Only type seeds an initial path (for example contractor, document controller, area manager, project manager) with actions such as In-Progress / Submitted and Code-A…Code-D per backend setup.

## How to use the screen

1. Create the document type with name, prefixes, and file types
2. Choose the right **documentBehaviour** for the process
3. Set max size/count and versioning if needed
4. Save, then open the Workflow tab (unless Upload Only) to configure disciplines and stages
5. Use the type when creating documents

## Best Practices

:::tip[Lock behaviour before rolling out the type]
Set behaviour early. Existing documents follow the type’s rules; Upload Only never enters review.
:::

:::note[Prefix appears when creating a document]
Type prefixes feed the optional Prefix field on the document screen with Code/Name.
:::

:::warning[Type disciplines ≠ project disciplines]
The type stage designer defines the review path. Project discipline assignment is on the [DMS project](/docs/dms/dms-project).
:::

## Related Sections

- [Document Management introduction](/docs/dms/introduction)
- [Documents](/docs/dms/document)
- [Discipline](/docs/dms/discipline)
- [DMS Action](/docs/dms/dms-action)
- [Glossary](/docs/dms/glossary)
