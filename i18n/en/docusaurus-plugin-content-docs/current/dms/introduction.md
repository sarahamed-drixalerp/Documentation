---
sidebar_position: 1
title: Document Management introduction
---

# Document Management introduction

The **Document Management (DMS)** module in Drixal ERP controls project documents: owner, project, discipline, document type, attachments, and multi-stage review workflow — plus **Upload Only** when review is not required.

Without this module, files stay scattered across email and folders. Inside Drixal, a document becomes a connected record linked to a DMS project, document type, contractor, and a review path with a current reviewer and stage progress.

## What the module does for your business

- Unifies the working language: Owner → DMS project → Discipline → Document type → Document
- Gives operations one screen for upload, review, and approve or reject
- Lets management track status, compliance, and overdue tasks from the dashboard
- Supports the contractor / external-user portal with defined permission levels

## Recommended setup order

This order is not a built-in wizard; foreign keys and usage imply it:

```text
DMS project owner (DMSProjectOwner)
  └── DMS project (DMSProject)
        ├── Project disciplines (DMSProjectDiscipline)
        └── …
Discipline + employees (DisciplineEmployee)
Document type (DocumentType) + workflow stages
  └── Document
Contractor · External user (ExternalUser)
```

| Step | Record | Purpose |
|---|---|---|
| 1 | **DMS project owner** | Owner party before linking projects |
| 2 | **DMS project** | Project and team (PM, area manager, document controller, QS) |
| 3 | **Discipline** | Technical disciplines and employee links |
| 4 | **Document type** | Prefixes, files, behaviour (upload only / multi / single), and workflow stages |
| 5 | **Document** | Day-to-day record: attachments and review, or upload only |
| — | **Contractor / external user** | Portal access and create / admin permissions |

You can open a document directly from the list once type and project exist. Contractor and owner are optional on some screens but matter for reports and the portal.

## Where to find it in the system

From the side menu, choose **Document Management**, then:

- [DMS dashboard](/docs/dms/dashboard)
- [Documents](/docs/dms/document) ← the daily working focus
- [Document types](/docs/dms/document-type)
- [Disciplines](/docs/dms/discipline)
- [DMS project owners](/docs/dms/dms-project-owner)
- [DMS projects](/docs/dms/dms-project)
- [Contractors](/docs/dms/contractor)
- [External users](/docs/dms/external-user)

DMS Action (lookup) and Discipline Employee appear as entity pages when needed; see [DMS Action](/docs/dms/dms-action) and [Discipline](/docs/dms/discipline).

## Contractor and external-user portal

In **Aspire-Contractor**, contractors and external users reach documents according to **permission level**:

| Level | Meaning |
|---|---|
| **View Only** | Read documents and statuses |
| **Add New Document** | View and submit new documents |
| **Admin** | Manage users, projects, and documents within the contractor scope |

Replacement documents can use `?LinkedDocumentId=` with type, contractor, and project locked from the prior document.

## Who uses this section

| Role | Daily use |
|---|---|
| Document controller / DMS admin | Types, projects, follow-up, dashboard |
| Project manager / area manager | Stage review and workflow progress |
| Contractor / external user | Upload, submit, and reopen on reject (by permission) |
| Management | Dashboard metrics, weekly compliance, overdue SLA |

## How this Document Management guide is organized

1. Understand setup order and the dashboard
2. Define owner, project, and discipline
3. Configure document type and workflow
4. Create documents and the Draft → Submit → Approved/Rejected lifecycle
5. Contractors and external users
6. Lookups, actions, and glossary

## Best Practices

:::tip[Set up reference data before piling up documents]
Create owner, project, discipline, and document type first, then add documents. Doing the reverse slows filters and workflow.
:::

:::warning[Behaviour drives the path]
A document type with **Upload Only** behaviour has no workflow tab and no submit-for-review action. Confirm behaviour before rolling the type out to teams.
:::

:::note[Help from the header]
Select **Help** in the app header while on a DMS page to open the matching guide.
:::

## Related Sections

- [DMS dashboard](/docs/dms/dashboard)
- [Documents](/docs/dms/document)
- [Document type](/docs/dms/document-type)
- [DMS project](/docs/dms/dms-project)
- [Glossary](/docs/dms/glossary)
