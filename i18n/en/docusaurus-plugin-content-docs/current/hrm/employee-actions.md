---
sidebar_position: 16
title: Employee actions
---

# Employee actions

Formal actions change the employee’s situation in a way that can be traced, unlike editing fields manually without context. The buttons appear in the header of the Standard View and the 360 view.

**Paths:**  
`/Entities/HRM/Employee/{id}` · `/Entities/HRM/Employee/360/{id}`

## Terminate

Ends the employee’s service formally.

| Condition | Detail |
|---|---|
| Termination reason | Required |
| Repeat | A previously terminated employee cannot be terminated again |

**When to use it**

- Formal departure
- Approved contractual termination
- Operational close of the record while keeping history

:::danger[Termination is an administrative decision]
Write a clear reason. The saved reason will appear in audit. Do not delete the record instead of terminating if payroll, attendance, or loans exist.
:::

## Change Department

Moves the employee to a new department.

| Condition | Detail |
|---|---|
| New department | Required |
| Constraints | New department ≠ current department |

Review the direct manager and job after the move if the structure actually changed.

## Change Job

Updates the employee’s job title.

| Condition | Detail |
|---|---|
| New job | Required |
| Constraints | New job ≠ current job |

## Change Salary

Updates the employee’s basic salary.

| Condition | Detail |
|---|---|
| New basic salary (basic_val) | Required and must be ≥ 0 |
| Comparison | Shows a comparison to the current salary in the dialog |

:::warning[Change salary with the action, not by guessing]
Use the Change Salary action so context is saved. After the change, review [salary items](/docs/hrm/employee-salary-items) before the next payroll run.
:::

## Saving ordinary edits

To edit form fields (names, hiring, address…), use **Save Changes** from the Standard View or the Details tab. The actions above are reserved for formal lifecycle changes.

## Best Practices

:::tip[Run the action from the header, not by editing a badge alone]
The action enforces required fields (such as termination reason) and blocks illogical values (department/job matching the current one).
:::

:::note[Permissions may hide buttons]
If a given action does not appear, your permission is likely read-only or the record status does not allow the action.
:::

## Related Sections

- [Employee overview](/docs/hrm/employee-overview)
- [Employee details and fields](/docs/hrm/employee-details)
- [Employee 360 view](/docs/hrm/employee-360)
