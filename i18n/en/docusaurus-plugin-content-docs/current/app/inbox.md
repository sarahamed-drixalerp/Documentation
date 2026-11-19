---
sidebar_position: 7
title: Inbox
---

# Inbox

**My Inbox** lists pending tasks and approvals assigned to you: service-request decisions and document workflow reviews when they appear in your inbox.

**Path:** `/app/Inbox` (header link may show `/app/inbox`)

## What This Screen Does

- Loads pending work items assigned to you
- Supports search, filters, and table or card views
- Runs approve/reject-style actions for service requests via an action dialog
- Opens the DMS document workflow path when the source is `workflow-dms`
- Links to the SLA Matrix when you need reference timing rules

## Screen Sections

1. **Header** — title and count, **SLA Matrix** link, **Refresh**
2. **Filters** — search, status, service type
3. **View switcher** — table (default) or cards
4. **Task list** or empty/error state
5. **Details dialog** (for non-direct DMS flows)
6. **Action dialog** for an optional comment, then take action on service requests

## Filters and Columns

**Filters:** text search, status (multi), service type (multi).

**Table columns:**

| Column | Content |
|---|---|
| Request No | Request/item identifier |
| Task & Service | Title and category |
| SLA & Due Date | Due information when available |
| Status | Status badge |
| Available Actions | Action buttons (first 3 inline; rest under More) |

## Status Grouping in the UI

Rejected / Completed / Approved / In Progress / In Review and other values based on the status text from the system.

## How to Approve or Reject a Service Request

1. Open Inbox and locate the item
2. From the row, card, or details dialog choose an action (for example Approve or Reject)
3. In the action dialog you may add a comment (optional on this screen)
4. Confirm
5. The item is removed from the local list, then the list refreshes from the server

:::note[Button grouping]
Actions in the same family (multiple approve variants) are collapsed to one clear button. Reject/cancel-style actions use warning styling.
:::

## DMS Document Path

When an inbox item is a document workflow item:

1. Choosing an action or details navigates to the document URL with the workflow tab and work-item parameters
2. The small comment dialog is not used for DMS
3. If a final decision was already taken, a decision chip is shown instead of new action buttons

## View Details

- Service requests: dialog with summary, details, action buttons, and **Open Service Form** when ids are available
- DMS: go straight to document review instead of requiring an intermediate dialog

## Important Rules

| Rule | Detail |
|---|---|
| List source | Pending items from the server; filters are client-side for display |
| Comment | Not required in the current inbox action dialog |
| After action | Item is expected to leave the inbox after success |
| SLA Matrix | Link to `/Entities/SLA/SLAMatrix` for reference |

## Best Practices

:::tip[Clear Inbox before starting new requests]
Pending approvals block other people. Empty the inbox first, then continue your own work.
:::

:::warning[Explain rejects]
When rejecting, leave a clear comment so the submitter can correct and resubmit.
:::

## Related Sections

- [My Requests](/docs/app/my-requests)
- [Services](/docs/app/services)
- [Tasks](/docs/app/tasks)
