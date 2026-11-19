---
sidebar_position: 3
title: Employee list
---

# Employee list

The employee list is your daily starting point. Use it to search, filter, compare pay, create an employee, or open a record for editing or the 360 workspace.

**Path:** Sidebar ← Human Resources ← Employees  
**Page:** `/Entities/HRM/Employee`

## What this screen does

- Shows every employee your permissions allow you to see
- Summarizes basic salary, net pay, total cost, overtime, and pending loans
- Offers three views: list, cards, and grouped tree
- Opens create, edit, 360 view, or delete (subject to permissions)

## Views

Three view icons appear at the top of the page:

| View | When to use it |
|---|---|
| **List** | Daily work, sorting, columns, quick actions |
| **Cards** | A quick management glance with job, department, and net pay |
| **Tree** | Group by type, status, grade, branch, job, department, or country |

### List view

Default columns:

- Name
- Job
- Department
- Country
- Net pay (NetPay)
- Start date
- End date
- Row actions: Edit, 360 View, Delete

Select an employee name to open the Standard View.

### Card view

Each card shows a quick summary of the employee (such as job, department, and net pay) for management review without opening the record.

### Tree view

Select **Group By**, then choose one of these fields:

- Type (EntityType)
- Status (EntityStatus)
- Grade
- Branch
- Job
- Department
- Country

Selecting a group displays analytics for that group. Selecting an individual employee displays their indicators.

## Filtering and search

You can filter by:

- Name
- Type (EntityType)
- Status (EntityStatus)
- Grade
- Branch
- Job
- Department
- Country

Combine filters to narrow the list, for example: Status = Active + Department = Human Resources.

## Indicators above the list

The screen displays totals for these fields across the current results:

- Basic salary (Basic_val)
- Net pay (NetPay_val)
- Total cost (TotalCost_val)
- Overtime (OverTime_val)
- Pending loans (PendingLoans_val)

These figures change with the filters. They summarize what you currently see, not necessarily the entire organization.

## List actions

1. **Create New Employee** — the create (+) button opens `/Entities/HRM/Employee/new`
2. **Edit** — the pencil icon opens the Standard View `/Entities/HRM/Employee/{id}`
3. **360 View** — opens the operations workspace `/Entities/HRM/Employee/360/{id}`
4. **Delete** — requires confirmation and cannot be undone

:::danger[Delete only incorrect draft records]
Do not delete an employee who has attendance, payroll runs, or loans. Use [Terminate](/docs/hrm/employee-actions) if employment has ended formally.
:::

## Best Practices

:::tip[Use List View for daily work]
Use the list for operations, cards for management meetings, and the tree to review a specific department, branch, or grade.
:::

:::note[Columns are customizable]
You can show or hide table columns according to your role. Keep the Status or Department column in your daily view if you rely on them for filtering.
:::

## Related Sections

- [Create a new employee](/docs/hrm/create-employee)
- [Employee 360 view](/docs/hrm/employee-360)
- [Employee actions](/docs/hrm/employee-actions)
