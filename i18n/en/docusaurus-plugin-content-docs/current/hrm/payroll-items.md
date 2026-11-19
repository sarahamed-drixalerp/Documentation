---
sidebar_position: 32
title: Payroll items
---

# Payroll items

**Payroll items (Payroll Items)** are not a standalone CRUD entity. They are a **hub** that gathers two tabs to manage the salary and cost catalogs in one place.

**Page:** `/Entities/HRM/PayrollItems`

## What the hub does

- Shows a **SalaryItems** tab to list and create [salary items](/docs/hrm/salary-item)
- Shows a **CostItems** tab to list and create [cost items](/docs/hrm/cost-item)
- Provides a create button that follows the active tab

## Tabs only

| Tab | Actual entity |
|---|---|
| **SalaryItems** | SalaryItem |
| **CostItems** | CostItem |

:::note[Not a record by itself]
There is no “PayrollItems” save form. Every create/edit/delete happens on SalaryItem or CostItem inside the tab.
:::

## How to use it

1. Open `/Entities/HRM/PayrollItems`
2. Choose the SalaryItems or CostItems tab
3. Select create new item from the button in the tab bar
4. Manage the embedded list as in the original entity screens

After the catalog is stable, assign salary items to employees from [Employee salary items](/docs/hrm/employee-salary-items), then run [Payroll](/docs/hrm/payroll).

## Best Practices

:::tip[Start from the hub when setting up payroll]
Use the hub to prepare both catalogs together before the first payroll run.
:::

## Related Sections

- [Salary items](/docs/hrm/salary-item)
- [Cost items](/docs/hrm/cost-item)
- [Employee salary items](/docs/hrm/employee-salary-items)
- [Payroll lifecycle](/docs/hrm/payroll-lifecycle)
