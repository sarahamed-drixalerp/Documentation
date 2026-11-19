---
sidebar_position: 2
title: Project Overview
---

# Project Overview

A **project** is the execution record in Drixal ERP. Every contractual commitment or internal initiative that requires start and end dates, an accountable manager, a customer, a scope, a team, and a cost is managed as a project.

A project is more than a name and status. It is the central record that connects sales orders, change requests, deliverables, the Gantt chart, invoices, risks, delivery proofs, and meeting minutes.

## What a Project Does for Your Business

- Defines the work: name, customer, manager, duration, value, type, and status
- Connects execution to the contract through the agreement, program, and portfolio
- Consolidates financial and operational progress into automatically calculated indicators
- Provides formal lifecycle actions: activate, pause, resume, complete, and terminate

## Two Types of Project Pages

| Page | When to use it |
|---|---|
| **Standard View** `/Entities/PMO/Project/{id}` | Create a new project or focus on core data, governance, and settings |
| **360 View** `/Entities/PMO/Project/360/{id}` | Manage daily operations across all tabs, the schedule, team, financials, and quick actions |

You can switch between the two views at the top of the page without losing the record.

## Project Types

Set the project type using the **Type** field in the project header:

| Type | Typical use |
|---|---|
| Simple Project | Limited scope, small team, and short duration |
| Mega Project | High value, long duration, or multiple locations |
| Multidisciplinary Project | Multiple technical disciplines or workstreams |

You can add other types in the system settings according to your organization’s policy.

## Project Statuses

| Status | Operational meaning |
|---|---|
| **Active** | Work is in progress; hours can be logged and progress updated |
| **Paused** | Work is temporarily stopped for a recorded reason and can be resumed |
| **Support** | The project is in the post-implementation support phase |
| **Completed** | Successfully closed through the completion action |
| **Terminated** | Closed without completion through the termination action, with a reason |

Status is not merely informational. Reports, timesheet approvals, and the availability of certain actions depend on it.

## Simplified Lifecycle

1. Create the project and assign the customer, manager, and dates
2. Complete the governance fields (agreement, program, portfolio, and PMO auditor)
3. Add line items, scope, schedule, and stakeholders
4. Run daily execution: tasks, hours, risks, and meeting minutes
5. Invoice through the billing plan and delivery proofs
6. Complete or terminate the project and record lessons learned

## Best Practices

:::tip[Use the project name your customer knows]
Enter a clear English name in the Name field and the Arabic name in its dedicated field. The serial number is generated automatically.
:::

:::warning[Use lifecycle actions instead of changing status manually]
To pause, complete, or terminate a project, use the buttons in the project header. This preserves the context and history instead of changing only the status badge.
:::

## Related Sections

- [Project List](/docs/pmo/project-list)
- [Create a New Project](/docs/pmo/create-project)
- [360 Workspace](/docs/pmo/workspace-360)
- [Project Actions](/docs/pmo/project-actions)
