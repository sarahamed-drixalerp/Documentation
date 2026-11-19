---
sidebar_position: 11
title: Glossary
---

# Glossary

Short definitions as they appear in Drixal ERP Document Management. English system names are shown in parentheses where useful.

| Term | Definition |
|---|---|
| Document Management (DMS) | Module for project document control: types, attachments, workflow, dashboard, contractor portal |
| DMS dashboard (Dashboard) | Metrics, charts, weekly compliance, and overdue SLA tasks with no CRUD |
| Document | Control record: metadata, attachments, review or upload only |
| Document type (DocumentType) | Prefix, file, behaviour, and workflow-stage rules |
| documentBehaviour | 0 Upload Only · 1 Multi-discipline · 2 Single discipline |
| Upload Only | No workflow and no submit for review |
| DMS project (DMSProject) | Project container with project code, role team, and disciplines |
| DMS project owner (DMSProjectOwner) | Reference owner party for projects |
| Project discipline (DMSProjectDiscipline) | DisciplineId + DisciplineUsrId link on the project |
| Discipline | Technical/operational domain with DisciplineUsr and isTechnical |
| Discipline employee (DisciplineEmployee) | Discipline–user link; tab or standalone route |
| Contractor | External party with account manager and assigned projects |
| External user (ExternalUser) | Portal account: View Only / Add New Document / Admin |
| DMS action (DMSAction) | Bilingual lookup for review-stage actions |
| Draft / Submit | Initial state then submit requiring ≥1 attachment |
| Approved / Rejected | Path end; contractor Reopen as Draft on reject |
| Submit & Next | Advance a stage with a required comment |
| Send Letter to Owner | Option in the workflow dialog |
| Migrated | Document with legacy `oldKey` |
| LinkedDocument | Copies/locks type, contractor, and project from a prior document |
| Supporting attachment (DocumentSupporting) | Supporting files beside the main attachment |
| Data confidentiality (DataConfidentiality) | Confidentiality classification on the document form when shown |
| SLA | Stage time limits; overdue items appear on the Overdue dashboard tab |

## Related Sections

- [Document Management introduction](/docs/dms/introduction)
- [Documents](/docs/dms/document)
- [Document type](/docs/dms/document-type)
- [DMS dashboard](/docs/dms/dashboard)
