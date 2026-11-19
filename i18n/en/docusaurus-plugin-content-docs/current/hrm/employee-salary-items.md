---
sidebar_position: 7
title: Employee salary items
---

# Employee salary items

The salary items tab links the employee to compensation elements: earnings and deductions that later appear in payroll calculation and reports.

**Location:** 360 view ← **SalaryItems**  
**Parent record:** `/Entities/HRM/Employee/360/{id}`

## What this tab does

- Shows salary items linked to the employee
- Adds a new item or edits earning and deduction values
- Clarifies each item’s effect on the compensation structure before it enters a payroll run

## List columns

| Column | Description |
|---|---|
| Salary item name (salaryItemName) | Displayed item name |
| Earning (earning_val) | Earning value |
| Deduction (deduction_val) | Deduction value |

## Fields when adding or editing

| Field | Description |
|---|---|
| Salary item (SalaryItemId) | Select the item from master data |
| Earning (earning_val) | Value ≥ 0 |
| Deduction (deduction_val) | Value ≥ 0 |

## How to add a salary item

1. Open the employee 360 view
2. Go to the **SalaryItems** tab
3. Add a new record
4. Select **SalaryItemId**
5. Enter `earning_val` and/or `deduction_val` so neither value is below zero
6. Save the child record

:::warning[Do not enter negative values]
Earning and deduction must be ≥ 0. Correct the sign before saving.
:::

## Best Practices

:::tip[Review items before the first payroll calculation]
Any missing or incorrect item flows into total earnings, deductions, and net payment after calculation.
:::

:::note[The item is linked to the employee, not only to the payroll]
Items here are part of the employee’s compensation structure. The payroll run consumes that structure at calculation time.
:::

## Related Sections

- [Employee 360 view](/docs/hrm/employee-360)
- [Payrolls](/docs/hrm/payroll)
- [Payroll lifecycle](/docs/hrm/payroll-lifecycle)
