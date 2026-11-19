---
sidebar_position: 3
title: Calendar
---

# Calendar

The **Calendar** shows your tasks and vacations on one month grid. Filter by type, move between months, and open day or event details.

**Path:** `/app/calendar`  
(The legacy path `/app/calender` redirects to the current calendar.)

## What This Screen Does

- Combines Work Items (tasks) and HR vacation requests in one month
- Distinguishes tasks from vacations via legend chips
- Opens task details for editing; vacation details are view-only

## Screen Sections

1. **Header** — title, “My tasks and vacations”, legend, filter buttons (All / Task / Vacation)
2. **Month bar** — previous, month label, next, **This month**, loading indicator
3. **Day grid** — 7×6 (Sunday through Saturday)
4. **Day dialog** — all items for that day
5. **Task dialog** — shared task card editor
6. **Vacation dialog** — read-only details with Close

## Reading the Grid

- Each cell shows the day number and up to 3 event chips, then `+N` if more exist
- Days outside the current month are muted; today is highlighted
- Task chips and vacation chips follow the legend

## Filter and Navigate

1. Choose **All**, **Task**, or **Vacation**
2. Move months with the arrows or click **This month**
3. Click a day to open its item list
4. Click an event (from the grid or day list) to open details

## Vacation Details (View Only)

| Field | Meaning |
|---|---|
| Person | Requested-for user name and photo when available |
| Status | Request status with color when provided |
| From / To | Vacation period |
| Duration | Number of days |
| Backup | Backup employee when present |
| Request No | Request number when present |
| Note | Description (ignored when it is only a request-number style value) |

## Task Details

Opens the same task editor used on [Tasks](/docs/app/tasks). After save, calendar events reload.

## Important Rules

| Rule | Detail |
|---|---|
| Data load | Up to 500 tasks and 500 vacations per load |
| Scope | If items assigned to you exist, the list is narrowed to those; otherwise the API result is kept |
| Missing dates | Items without a parseable start date are omitted |
| No create here | Calendar does not create events; create from Tasks or service requests |

## Best Practices

:::tip[Filter vacations before planning a busy week]
Switch to **Vacation**, review coverage, then return to **All**.
:::

:::note[Vacation is read-only here]
Edit vacation requests from the service/request flow, not from the calendar dialog.
:::

## Related Sections

- [Tasks](/docs/app/tasks)
- [Services](/docs/app/services)
- [My Requests](/docs/app/my-requests)
