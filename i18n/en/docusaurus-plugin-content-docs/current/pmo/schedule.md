---
sidebar_position: 9
title: Schedule and Calendar
---

# Schedule and Calendar

The schedule is the visual execution plan: what work will be done, in what order, by whom, and when it starts and ends. In Drixal, it has two views within the project:

- **Calendar** for days, meetings, and milestones
- **Schedule** for the Gantt chart and work breakdown structure

**Location:** 360 View ← **Calendar** or **Schedule**

You can also manage work items from the project’s related records.

## What the Schedule Does for Your Business

- Converts project scope into assignable packages and tasks
- Shows delays against the baseline
- Links hours and actual cost to individual tasks instead of treating the project as one block
- Feeds schedule performance indicators such as SPI

## Work Breakdown Structure

A work item can have one of these types:

| Type | Role |
|---|---|
| Project Workstream | Major stream, such as design, procurement, or installation |
| Work Package | Group of tasks under a workstream |
| Activity | Execution step within a package |
| Task | Daily work assigned to a person |
| Call / Meeting / Visit / Note | Quick events created from the sidebar |
| Workflow | Item linked to an approval workflow |

Each item has planning properties:

- WBS code, such as 1.2.3
- Parent item and sibling order
- Predecessors and successors (dependencies)
- Assignment to a user or group, such as a role, team, or department
- Planned effort, cost, and duration
- Planned, baseline, and actual dates
- Task size, priority, and complexity
- Whether it is a milestone, a leaf item, and eligible for time entry

## Work Item Statuses

| Status | Meaning |
|---|---|
| Planned | Not started |
| In Progress | Work is underway |
| At Risk | Requires attention even if it is not yet late or is only partially delayed |
| Delayed | Has exceeded the plan |
| Completed | Closed |

## How to Build the Schedule

1. Open the **Schedule** tab
2. Create workstreams first, followed by packages and tasks
3. Assign each task to a person or group
4. Set dates and dependencies by dragging items in the Gantt chart when needed
5. Set the baseline after customer approval so you retain a comparison reference
6. Update actual progress at least weekly

Quick Create in the sidebar—Task, Meeting, Visit, and similar actions—creates a work item linked to the project without leaving the 360 View.

## Calendar

The Calendar View is useful for:

- Customer meetings
- Site visits
- Single-date milestones
- Reviewing the upcoming work week with the team

## Best Practices

:::tip[Do not make everything a task]
If the schedule becomes hundreds of small tasks without packages, it becomes difficult to read and manage. Use three to four levels as a practical maximum.
:::

:::warning[The baseline is not decorative]
If you move dates every week without retaining the baseline, the schedule indicator loses its meaning. Change the baseline only after formal approval, usually through a change request.
:::

:::note[Hours are logged only against eligible tasks]
Enable **Accepts Timesheet** only for execution tasks, not for the parent workstream.
:::

## Related Sections

- [Phases and Milestones](/docs/pmo/time-phases)
- [Stakeholders](/docs/pmo/stakeholders)
- [Timesheet Approval](/docs/pmo/timesheet)
- [Analytics and KPIs](/docs/pmo/insights)
