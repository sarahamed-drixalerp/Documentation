---
sidebar_position: 6
title: My Requests
---

# My Requests

**My Requests** lists service requests you submitted (or that were submitted for you, based on system data), with status, priority, details, and a link back to the service form when available.

**Path:** `/app/MyRequests`

## What This Screen Does

- Loads your pending/personal requests list
- Summarizes counts in clickable KPI cards
- Supports search, filters, and table or card views
- Opens request details and can open the service form in a new tab

## Screen Sections

1. **Header** — title and count, **Refresh**, **New Request** (to the service catalogue)
2. **KPI cards** — Total / Under Review / Approved·Done / In Progress
3. **Filters** — search, status, service type
4. **View switcher** — table (default) or cards
5. **Request list** or empty/error state
6. **Details dialog**

## KPIs

| Card | What it groups |
|---|---|
| Total Requests | All loaded requests |
| Under Review | In Review + Submitted + Planned |
| Approved / Done | Approved + Completed + Settled |
| In Progress | In Progress |

Clicking a card toggles a quick filter for that bucket.

## Filters

| Filter | Use |
|---|---|
| Search | Request number, service name, summary, category |
| Status | Multi-select from statuses present in results |
| Service Type | Multi-select from results and the service code catalogue |

## Table Columns

- Request No
- Service (with icon/category)
- Date
- Priority
- Status
- Actions: **View Details**

Card view also shows current stage plus submitted/updated dates.

## Common Status Buckets

The UI shows the service-provided status label and groups for filtering roughly into:

Draft · In Review · Submitted · Planned · In Progress · Approved · Completed · Settled · Rejected · Cancelled

## View Details

1. Click **View Details**
2. Review the header (service, category, date, status)
3. Review **Submitted Details** (request number, service, status, dates, description, comment when present)
4. If service code and record id exist, click **Open Service Form** to open it in a new tab
5. Close when finished

:::note[Workflow section in the dialog]
“Workflow Progress” appears only when timeline steps are available. The current view builds core details from request data; live approval actions for reviewers are in [Inbox](/docs/app/inbox).
:::

## Quick Actions

1. **New Request** → [Services](/docs/app/services)
2. **Refresh** → reload the list
3. **Reset Filters** when filters leave the list empty

## Important Rules

| Rule | Detail |
|---|---|
| No approvals here | Tracking and open-form only; take actions in Inbox |
| Priority styling | Urgent / High / Normal / Low affect badge color when matched |
| Open form | Requires both `serviceCode` and `objectId` |

## Best Practices

:::tip[Use KPI cards for daily follow-up]
Check Under Review for items waiting on a decision, and In Progress for items already moving.
:::

## Related Sections

- [Services](/docs/app/services)
- [Inbox](/docs/app/inbox)
- [Incidents](/docs/app/incidents)
