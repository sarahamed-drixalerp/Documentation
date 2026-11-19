---
sidebar_position: 2
title: Tasks
---

# Tasks

**My Tasks** is a personal kanban board of your work items by status. From here you create tasks, stories, bugs, notes, calls, meetings, and visits, then update status by drag-and-drop or in the detail dialog.

**Path:** `/app/Tasks`

## What This Screen Does

- Shows Work Items in columns by status
- Summarizes total count, in-progress count, and completed count
- Filters by name, type, assignee, and start/end dates
- Opens quick create or edit through dedicated dialogs

## Screen Sections

1. **Header** — title, item count, In-Progress / Completed pills, Refresh, Add Task menu
2. **Filters** — search, type, assignee, dates
3. **Kanban columns** — one lane per work status (statuses whose name contains “concern” are excluded)
4. **Dialogs** — activity create, Story/Bug, or card editor for existing items

## Filters

| Filter | Use |
|---|---|
| **Search** | Work item name |
| **Type** | Multi-select of entity types |
| **Assigned to** | Multi-select of users |
| **Start / end date** | Date range |

Changing any filter reloads the board immediately.

## Task Card

Each card typically shows:

- Type badge and item code/number
- Priority, name, and progress %
- Due or start date (with overdue cue when applicable)
- Assignees or “Unassigned”
- Comment and attachment counts when present

## Create a New Item

1. Click **Add Task**
2. Choose a type:
   - **Task** (default)
   - **Story**
   - **Bug**
   - **Note**
   - **Call**
   - **Meeting**
   - **Visit**
3. Complete the dialog fields and save

### Task / Note / Call / Meeting / Visit

The activity dialog usually requires: name, type, priority, assignee, and status. Default status when creating from this page: **Assigned**. Due date must be on or after the start date.

### Story or Bug

A separate dialog requires: name, status, assignee, and end date. Description is optional. Default status prefers Planned / Open / Assigned / New when available.

## Edit an Existing Item

1. Click the card
2. **Story or Bug** opens the Story/Bug dialog
3. Other types open the card editor
4. Update fields or add a comment/attachment, then save

In the editor: name, type, status, assignee, and start/end dates are required. Timed types (call, meeting, visit, note) also require time. Description max length is 1000 characters. Progress is 0–100.

## Change Status by Dragging

Drag a card to another status column. The system saves the new status; on failure the card returns to its previous lane.

## Important Rules

| Rule | Detail |
|---|---|
| Complete below 100% | Saving as completed with progress under 100% is blocked with a warning |
| Approval tasks | If the server indicates an approval task, use [Inbox](/docs/app/inbox) |
| Type while editing | Existing personal items keep type locked in the editor |
| Comments | Add comment up to 500 characters (Ctrl+Enter supported) |

## Best Practices

:::tip[Keep status aligned with real progress]
Do not move a card to Completed before progress is 100% when that field is in use.
:::

:::note[Refresh when in doubt]
Use **Refresh** after team activity or when the board may be stale.
:::

## Related Sections

- [Calendar](/docs/app/calendar)
- [Timesheet](/docs/app/timesheet)
- [Inbox](/docs/app/inbox)
