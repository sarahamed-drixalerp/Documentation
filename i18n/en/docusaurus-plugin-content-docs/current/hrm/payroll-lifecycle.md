---
sidebar_position: 18
title: Payroll lifecycle
---

# Payroll lifecycle

The payroll lifecycle explains how the record moves from an editable draft to calculated figures, then to a completed and locked period.

**Record:** `/Entities/HRM/Payroll/{id}`

## Stages at a glance

| Stage | Status | What happens |
|---|---|---|
| 1. Setup | Pending | Create the payroll and assign employees |
| 2. Generate | Generated | Calculate earnings, deductions, and totals |
| 3. Publish | Completed | Complete the period and lock edits |

## Before generate

1. Create the payroll with name, start date, and end date
2. Save the record
3. Open the **Employees** tab and assign at least one employee
4. Review [salary items](/docs/hrm/employee-salary-items) for the relevant employees if needed

:::warning[Cannot generate without employees]
Generate requires at least one employee. If the count is zero, generate will not complete.
:::

## Generate stages

When you run **Generate**, the system follows these logical stages:

1. Read **salary items** linked to the employees
2. Aggregate **earnings**
3. Aggregate **deductions**
4. Calculate **totals**: total earning, total deduction, net payment

After a successful generate, the status becomes **Generated** and edits on the payroll are locked.

## Publish

Running **Publish** moves the payroll to **Completed** and locks edits permanently while keeping the calculated totals.

| After publish | Result |
|---|---|
| Status | Completed |
| Edit | Locked |
| Totals | Retained for display and reports |

:::danger[Publish closes the period]
Do not publish before reviewing net payment and employee assignment. Correction after Completed is not done by direct edit on the locked payroll.
:::

## Lock in Generated and Completed

In both **Generated** and **Completed**:

- The form is locked for editing
- Attachments are locked for editing
- Display remains available for review and audit

## Common warnings

- Trying to generate with no employees assigned
- Editing employee salary items after Generated without an approved re-run path
- Creating an overlapping run for the same group before closing the previous period
- Ignoring interface alerts on save, generate, or publish

## Best Practices

:::tip[Freeze the employee list before selecting Generate]
Any add or remove after Generated will not happen from the locked form. Review the list twice.
:::

:::tip[Separate generate and publish in time when needed]
Generate first, review totals with management, then publish. Do not combine the two steps if your organization requires an intermediate approval.
:::

:::note[The employee sees their payrolls from 360]
Linked payrolls can open from the Payroll tab on the [employee 360 view](/docs/hrm/employee-360).
:::

## Related Sections

- [Payrolls](/docs/hrm/payroll)
- [Employee salary items](/docs/hrm/employee-salary-items)
- [Employee list](/docs/hrm/employee-list)
