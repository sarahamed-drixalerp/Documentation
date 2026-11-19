---
sidebar_position: 3
title: Workflows
---

# Workflows

The sidebar **Workflows** item points to `/Entities/APP/Workflow` for designing approval flows tied to services.

![Workflows](/img/srv/workflows.svg)

## Current Portal Status

:::danger[Workflow UI is not available]
There is no working APP Workflow page. An orphan shell at `/Entities/ADM/Workflow` references missing components. Do not rely on this screen for design today.
:::

## What Relates to Workflows

| Topic | Page / guide |
|---|---|
| Task allocation for workflow activities | [Task Allocation](/docs/srv/task-allocation) — `/Entities/PMO/TaskAllocation` |
| Service request after save | Workflow and Approvals tabs on submit (may be empty until a flow is linked) |
| Inbox | [Inbox](/docs/app/inbox) for approval tasks when available |

At the data layer, Workflow supports name, version, design (VueFlow), and status — without an editor UI here.

## Best Practices

:::tip[Prepare task allocation and SLA priorities]
While the workflow editor is unavailable, complete [Task Allocation](/docs/srv/task-allocation) and the [SLA Matrix](/docs/sla/sla-matrix) so references are ready when the UI ships.
:::

## Related

- [Task Allocation](/docs/srv/task-allocation)
- [Service Catalogue (Admin)](/docs/srv/service-catalogue)
- [Services Catalogue introduction](/docs/srv/introduction)
