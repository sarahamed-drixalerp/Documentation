---
sidebar_position: 13
title: Glossary
---

# Glossary

Short definitions as they appear in Drixal ERP Organization. English system names are shown in parentheses.

| Term | Definition |
|---|---|
| Organization (ORG) | Module for structure (departments, teams, branches), sites, assets/IT, holidays, objectives, and org lookups |
| Department | Org-tree node; levels include Department, Section, and Unit |
| Section / Unit | Child levels under a department in the tree |
| Team | Cross-functional group with lead (`ownerUsrId`) and members |
| Team Member (TeamMember) | Membership link on the team record; no standalone Organization page |
| Branch | Branch record; Active toggle **persists** on edit |
| Objective | Organization goal with type, status, optional owner and confidentiality |
| Holiday | Calendar entry with dates, optional annual repeat, and confidentiality |
| Location | Site under a branch with optional parent location; Active is **toast-only** |
| Asset | Trackable asset (serial, values, owner); Active is **toast-only** |
| IT System (ITSystem) | Asset-like system record plus optional SupplierId; Active is **toast-only** |
| Currency | FX rate, timestamp, and base-currency flag; also documented under Administration |
| Tax Rate (TaxRate) | Lookup with taxValue_prc, labelOnInvoice, and isDefault |
| Service Priority (ServicePriority) | Lookup with names, descriptions, and color |
| EntityType / EntityStatus | Type and status lookups used on many Organization records |
| Data Confidentiality | Shared confidentiality lookup; documented under Administration |
| Country | Shared country lookup; documented under Administration |
| Work Shift | Weekly hours schedule; documented under HRM |
| Line Item (LineItem) | Not documented as an Organization page; see Project Line Items in PMO |
| CostCenter / ProfitCenter | Optional finance links on Department |
| Insights / Activities / Attachments / Logs | Record side panels on Department and Team Id pages |

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Departments](/docs/org/department)
- [Teams](/docs/org/team)
- [Branches](/docs/org/branch)
- [Currencies (ADM)](/docs/adm/currency)
- [Project Line Items](/docs/pmo/line-items)
