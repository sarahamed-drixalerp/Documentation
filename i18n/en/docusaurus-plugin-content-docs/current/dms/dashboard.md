---
sidebar_position: 2
title: Document Management dashboard
---

# Document Management dashboard

The **Document Management (DMS) Dashboard** is an analytical summary of document status, workflow kind, weekly compliance, and overdue SLA actions. The screen is for reading, export, and navigation — not for creating, editing, or deleting documents.

**Navigation:** Sidebar → Document Management → DMS dashboard  
**Page:** `/Entities/DMS/Dashboard`  
Tab queries: `?tab=metrics` · `?tab=compliance` · `?tab=overdue` (default `metrics`)

## Filters

| Filter | Meaning |
|---|---|
| **Project** | One project or **All Projects** (from the dashboard projects list) |
| **Date Range** | Shown on **Metrics Overview** only: This Month · Quarter · Year to Date · All Time |

Changing a filter reloads the active tab’s data.

## Dashboard tabs

| Tab | Id | Content |
|---|---|---|
| **Metrics Overview** | `metrics` | Charts for document status, workflow kind, and distributions |
| **Weekly Compliance Report** | `compliance` | Weekly KPIs, employee table, and CSV export |
| **Overdue Pending SLA Actions** | `overdue` | Overdue SLA tasks, count badge, and CSV export |

## Metrics Overview

Data comes from the DMS dashboard API with `projectId` and date range.

| Chart | Content |
|---|---|
| **Document Status** (donut) | Completed · In Progress · Draft · Rejected |
| **Document Workflow Type** (donut) | Upload Only · Workflow |
| **Documents Count vs Contractors** (bars) | Document count per contractor |
| **Documents Count vs Document Type** (bars) | Document count per document type |

## Weekly Compliance Report

The **Weekly Compliance Report** tab uses the `this_week` preset and shows compliance KPIs plus an employee table.

| Action | Function |
|---|---|
| **Export CSV** | Export the weekly compliance report |

## Overdue Pending SLA Actions

The **Overdue Pending SLA Actions** tab lists overdue pending tasks. The badge shows `totalOverdueTasks` from the overdue-SLA report.

| Action | Function |
|---|---|
| **Refresh** | Reload overdue tasks |
| **Export CSV** | Export the overdue task list |

## How to use the dashboard

1. Open the DMS dashboard from Document Management
2. Choose a project (or All Projects)
3. On Metrics Overview, set the date range
4. Review the charts, then open Compliance or Overdue as needed
5. Export CSV for compliance or overdue tasks before meetings

## Best Practices

:::tip[Refresh overdue before a follow-up meeting]
Select Refresh on the Overdue tab and apply the right project filter so the badge and table reflect the latest tasks.
:::

:::note[Metrics reflect your permissions]
Figures are calculated from dashboard data available to your permissions; they are not a sealed accounting report outside DMS.
:::

:::warning[No CRUD on the dashboard]
Create and edit documents from the document, type, and project screens — not from dashboard cards.
:::

## Related Sections

- [Document Management introduction](/docs/dms/introduction)
- [Documents](/docs/dms/document)
- [DMS project](/docs/dms/dms-project)
- [Glossary](/docs/dms/glossary)
