---
sidebar_position: 3
title: Documents
---

# Documents

A **document** is the project document-control record in Drixal ERP: metadata, attachments, and a multi-stage review workflow — or **Upload Only** with no workflow.

**Navigation:** Sidebar → Document Management → Documents  
**Pages:** `/Entities/DMS/Document` · `/Entities/DMS/Document/new` · `/Entities/DMS/Document/{id}`  
Useful queries: `?tab=workflow` · `?tab=logs` · `?attachmentsTab=supporting` · `?LinkedDocumentId=`

The record page is the workspace (details & attachments, workflow, logs).

## What this screen does

- Links the file to a DMS project, document type, and contractor when needed
- Manages the main attachment and supporting files
- Runs a review workflow with a current reviewer and stage progress
- Supports migrated documents, Upload Only mode, and linked prior documents (LinkedDocument)

## Document list

Views: **list** and **cards**.

### Columns

| Column | Meaning |
|---|---|
| **Document Title (name)** | `name` with **Migrated** / **Upload Only** badges and document type as subtitle |
| **Current reviewer** | Who is pending action |
| **Contractor** | Linked contractor |
| **DMS project (dmsProject)** | Project |
| **Workflow progress** | Stage progress |
| **Actions** | Workflow step, download latest, delete |

### Filters

| Filter | Use |
|---|---|
| **Name** | Search by name |
| **Contractor** | Contractor |
| **DMSProject** | DMS project |
| **DocumentType** | Document type |
| **Source** | All · Migrated · NewSystem |
| **Workflow kind** | All · UploadOnly · WithWorkflow |
| **Pending On** | Pending on user (`PendingOnUsrIds`) |

## Create a document

**Page:** `/Entities/DMS/Document/new`

### Required fields

| Field | Notes |
|---|---|
| **Document type (DocumentType)** | Drives rules: files, extensions, disciplines, workflow or upload only |
| **Code / name** | Optional **Prefix** from the type’s prefixes |
| **DMS project (DMSProject)** | Project link |
| **EntityType / EntityStatus** | Entity type and status on the form |
| **Data confidentiality (DataConfidentiality)** | Confidentiality classification when shown on the form |

For a **multi-discipline** type, select **at least one technical discipline** (`isTechnical`).

### Optional fields

| Field | Notes |
|---|---|
| **Contractor** | Contractor link |
| **nameAr** | Arabic name |
| **description / descriptionAr** | Descriptions |
| **LinkedDocument** | Prior document via query; locks type, prefix, contractor, project, and disciplines |

## Record tabs

| Tab | Purpose |
|---|---|
| **Details & Attachments** | Identity + main attachment (`Document`) and supporting files (`DocumentSupporting`) |
| **Workflow** | Review stages; **hidden** for Upload Only and unsent new records |
| **Logs** | Change trail |

## Lifecycle and workflow

| Mode | Behavior |
|---|---|
| **Draft / Pending** | Editable; **Submit Document** needs ≥1 attachment, then locks for review (unless Upload Only) |
| **Stage change** | Change status → save / **Submit & Next**; **comment required** to advance |
| **Send Letter to Owner** | Workflow dialog option sent with the work-item payload |
| **Approved** | Banners for Approved / Approved with Comments / Code-A / Code-B and matching Arabic statuses |
| **Rejected** | Banners for Rejected / Code-C / Code-D; contractor can **Reopen as Draft** |
| **Upload Only** | No workflow and no submit for review; permanent badge; header often read-only after create |
| **Migrated** | Badge when `oldKey` / `OldKey` is set |
| **LinkedDocument** | Copies/locks type, contractor, and project from the prior document |

### Submit steps (with workflow)

1. Create the document as a draft with type, project, and code
2. Upload at least one main attachment
3. If required, select technical disciplines for a multi-discipline type
4. Select **Submit Document**
5. On the Workflow tab, change status with a comment on **Submit & Next**
6. Use **Send Letter to Owner** when needed
7. On reject (contractor portal), **Reopen as Draft**, correct, and resubmit

## Common mistakes

- Submit without an attachment
- Missing disciplines for multi-discipline types
- Skipping the comment on Submit & Next
- Trying to edit the header after leaving draft (non-draft / Upload Only → partly read-only)

## Best Practices

:::tip[Upload the file before submit]
Submit rejects the path without a file. Prepare the final version first.
:::

:::warning[Comment is required to advance stages]
Do not skip the comment on “Submit & Next” so the review trail stays complete.
:::

:::danger[Upload Only skips review]
If the type is Upload Only, the Workflow tab does not appear and the document is not sent for review. Choose the correct type before create.
:::

:::note[Linked document locks fields]
With `LinkedDocumentId`, type, prefix, contractor, project, and disciplines lock with a copy banner.
:::

## Related Sections

- [Document Management introduction](/docs/dms/introduction)
- [DMS dashboard](/docs/dms/dashboard)
- [Document type](/docs/dms/document-type)
- [DMS project](/docs/dms/dms-project)
- [Contractor](/docs/dms/contractor)
- [Glossary](/docs/dms/glossary)
