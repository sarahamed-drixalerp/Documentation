---
sidebar_position: 4
title: Timesheet
---

# Timesheet

The **Timesheet** page is where you log weekly hours and progress against projects and tasks. Changes autosave; approving hours is done by the project manager, not on this page.

**Path:** `/app/Timesheet`

## What This Screen Does

- Shows a tree: project → line item → work item that can log hours
- Summarizes this week’s hours, daily average, days logged, and overall progress
- Lets you edit hours and progress on non-approved days
- Autosaves shortly after you stop typing

## Top Stats

| Stat | Meaning |
|---|---|
| This week hours | Total hours visible in the current week |
| Daily average | Average hours across days with entries |
| Days logged | Days with hours &gt; 0 out of 7 |
| Progress | Overall progress percentage shown |

## Week Toolbar

- Previous / next week arrows
- Date picker to jump to a week containing that day
- Visible date range
- Save state (saving / saved)
- Search by name within the tree
- **This week** button

The week starts on **Sunday**. Visually marked weekend days: Friday and Saturday.

## Table Columns

| Column | Behavior |
|---|---|
| Projects | Expandable tree with icon by node type |
| Progress | Editable % when the row can log hours; otherwise a read-only bar |
| Week days | Hours input (0.5 step, `h` suffix) for loggable rows |
| Total | Row total for the week |

Expand a project or line item to lazy-load children as needed.

## Day Statuses

| Status | Meaning |
|---|---|
| Pending | Editable and waiting for approval |
| Approved | Locked; cannot edit here |
| Rejected | Rejection reason in the tooltip; correcting hours resubmits on save |
| Reviewed | Review completed for that day |

The legend under the table covers: Today, Weekend, Pending, Approved, Rejected.

## How to Log Hours

1. Open the target week
2. Expand project → line item until you reach a loggable work item
3. Enter hours for the day (or adjust progress %)
4. Wait for autosave (about 0.6 seconds after the last change)
5. Check the day status chip and tooltips

## Important Rules

| Rule | Detail |
|---|---|
| Who can log | Only rows with `canLogHours` |
| Approved days | Input disabled; edits are not sent |
| Daily cap across tasks | Combined hours for a day cannot exceed 24; excess is clamped |
| Progress | 0–100; if every day on the row is approved, progress is treated as locked for the week |
| Save | Batched to the server; on error a toast appears and the tree reloads |
| Approval | Done from the project screen by the manager, not from the personal timesheet |

## Best Practices

:::tip[Log daily instead of once at week end]
Daily entry reduces errors and makes manager approval easier.
:::

:::warning[Approved days are locked]
After approval you cannot edit that day here. If hours were rejected, correct them and save to resubmit.
:::

## Related Sections

- [Tasks](/docs/app/tasks)
- [Attendance](/docs/app/attendance)
- [Project timesheet approval](/docs/pmo/timesheet)
