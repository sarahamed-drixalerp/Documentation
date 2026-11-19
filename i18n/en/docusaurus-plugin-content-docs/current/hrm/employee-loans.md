---
sidebar_position: 14
title: Employee loans
---

# Employee loans

The loans tab shows and manages employee loan records linked to the 360 record. Pending loan totals also appear among the employee list indicators.

**Location:** 360 view ← **Loans**  
**Parent record:** `/Entities/HRM/Employee/360/{id}`

## What this tab does

- Opens the list of loan child records linked to this employee
- Lets you review and manage loans from the employee context
- Supports follow-up of pending loans that appear in list aggregates (`PendingLoans_val`)

This tab is the management interface for loan records belonging to the employee. Use it to review loans linked to the current record and manage those records from here.

## How to review an employee’s loans

1. Open `/Entities/HRM/Employee/360/{id}`
2. Go to the **Loans** tab
3. Review the records shown
4. Add, edit, or manage records according to your permissions from inside the tab

## Best Practices

:::tip[Review loans before payroll calculation]
Pending loans affect the cost and net picture in list indicators. Review them before closing a pay period.
:::

:::warning[Do not delete an employee with open loans]
Close or settle the loan first, or use [Terminate](/docs/hrm/employee-actions) per policy without erasing historical records.
:::

## Related Sections

- [Employee 360 view](/docs/hrm/employee-360)
- [Employee salary items](/docs/hrm/employee-salary-items)
- [Payrolls](/docs/hrm/payroll)
