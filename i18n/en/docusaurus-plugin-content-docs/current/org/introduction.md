---
sidebar_position: 1
title: Organization introduction
---

# Organization introduction

The **Organization** module in Drixal ERP holds the operating structure of the business: departments, teams, branches, objectives, holidays, locations, assets and IT systems, plus shared values such as currency, tax rate, and service priority.

Without this module, hierarchy and shared org data stay informal—scattered lists, unclear reporting lines, and lookups that drift between teams. Inside Drixal, Organization keeps structure and reference data tied to the same operating model.

:::note[Line items are documented in PMO]
`ORG/LineItem` has no standalone Organization list page. Commercial line-item UI lives in project and procurement flows. See [Project Line Items](/docs/pmo/line-items).
:::

## What the module does for your business

- Builds the org tree: **Department → Section → Unit**
- Manages **Teams** and their members
- Maintains **Branches**, **Objectives**, and **Holidays**
- Tracks **Locations**, **Assets**, and **IT Systems**
- Holds Organization-side lookups: **Currency**, **Tax Rate**, and **Service Priority**
- Points to shared lookups documented elsewhere: [Country](/docs/adm/country), [Data Confidentiality](/docs/adm/data-confidentiality), [Work shifts](/docs/hrm/work-shift)

## Hierarchy

```text
Organization
  ├── Department (Section / Unit)
  ├── Team
  │     └── Team Members
  ├── Branch
  ├── Objective
  ├── Holiday
  ├── Location
  ├── Asset / IT System
  └── Lookups (Currency, Tax Rate, Service Priority)
```

| Level | Purpose |
|---|---|
| **Department** | Org tree nodes (department / section / unit), manager, finance links |
| **Team** | Cross-functional team with lead and members |
| **Branch** | Branch records with owner and Active flag that persists |
| **Objective** | Org goals with type, status, and optional owner |
| **Holiday** | Holiday dates, annual repeat, confidentiality |
| **Location** | Sites under a branch, with optional parent location |
| **Asset / IT System** | Trackable items; IT System adds supplier |
| **Lookups** | Currency, tax rate, service priority used across the platform |

## Where to find it in the system

**Path:** Sidebar ← Organization ← …

From the side menu choose **Organization**, then (when shown):

- **Objective**
- **Department**
- **Branch**
- **Team**

Other Organization routes exist by URL even when they do not appear in that nav group (for example Holiday, Location, Asset, IT System, Currency, Tax Rate, Service Priority).

## Who uses this section

| Role | Daily use |
|---|---|
| Org / HR administrator | Departments, teams, branches, holidays |
| Operations lead | Locations, assets, IT systems |
| Finance steward | Currency, tax rates |
| Service / SLA steward | Service priorities |
| Project / delivery teams | Objectives and structure used across modules |

## How the Organization guide is organized

1. [Departments](/docs/org/department) — tree, list, structure, employees, record page
2. [Teams](/docs/org/team) — cards/list, lead, team members
3. [Branches](/docs/org/branch) — list, owner, Active persistence
4. [Objectives](/docs/org/objective) — goals with type and status
5. [Holidays](/docs/org/holiday) — dates and annual repeat
6. [Locations](/docs/org/location) — branch and parent hierarchy
7. [Assets](/docs/org/asset) — serial, values, owner
8. [IT Systems](/docs/org/it-system) — asset-like plus supplier
9. [Currencies](/docs/org/currency) — FX and base currency (also see [ADM Currencies](/docs/adm/currency))
10. [Tax Rates](/docs/org/tax-rate) — percentage, invoice label, default
11. [Service Priorities](/docs/org/service-priority) — names, descriptions, color
12. [Glossary](/docs/org/glossary)

Shared lookups without dedicated Organization docs pages: [Country](/docs/adm/country), [Data Confidentiality](/docs/adm/data-confidentiality), [Work shifts](/docs/hrm/work-shift). Line items: [Project Line Items](/docs/pmo/line-items).

## Best Practices

:::tip[Build the department tree before teams]
Create the Department → Section → Unit structure first, then attach teams and people. A team without a clear org context is harder to govern.
:::

:::warning[Know which Active switches persist]
On **Branch**, Active persists. On **Location**, **Asset**, and **IT System**, the Active control is toast-only and does not persist like Branch. Operate accordingly.
:::

:::note[No LineItem page under Organization]
Do not expect an Organization Line Item list. Use project line items in PMO (and related module UIs) instead.
:::

## Related Sections

- [Departments](/docs/org/department)
- [Teams](/docs/org/team)
- [Branches](/docs/org/branch)
- [Currencies (ADM)](/docs/adm/currency)
- [Work shifts](/docs/hrm/work-shift)
- [Project Line Items](/docs/pmo/line-items)
- [Glossary](/docs/org/glossary)
