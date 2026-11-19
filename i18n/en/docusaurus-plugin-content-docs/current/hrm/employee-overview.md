---
sidebar_position: 2
title: Employee overview
---

# Employee overview

An **employee** is the core Human Resources record in Drixal ERP. Everyone who works for the organization and needs a job assignment, department, salary, attendance, and leave is managed as an employee.

An employee is more than a name and status. It is the central record for salary items, payroll runs, evaluations, dependants, qualifications, attendance, leave, expenses, business trips, and loans.

## What an employee does for your business

- Defines identity: bilingual names, nationality, gender, marital status
- Links hiring to department, job, grade, branch, and direct manager
- Consolidates compensation KPIs: basic, net pay, total cost, overtime, pending loans
- Provides formal lifecycle actions: terminate, change department, change job, change salary

## Two types of employee pages

| Page | When to use it |
|---|---|
| **Standard view** `/Entities/HRM/Employee/{id}` | Create a new employee or focus on master data, hiring, and address |
| **360 view** `/Entities/HRM/Employee/360/{id}` | Daily operations: salary items, payrolls, attendance, leave, loans, evaluations |

You can switch between the two views at the top of the page without losing the record.

## Simplified lifecycle

1. Create the employee and link type, status, and bilingual names
2. Fill general, system, hiring, and address information
3. Open the 360 view and add salary items, dependants, and qualifications as needed
4. Daily operations: attendance, leave, expenses, business trips, loans, evaluations
5. Assign to payroll runs for calculation and publish
6. Terminate or change department/job/salary when the formal situation changes

## Where to go after this page

| Topic | Guide |
|---|---|
| List, search, and filter | [Employee list](/docs/hrm/employee-list) |
| Creation and required fields | [Create a new employee](/docs/hrm/create-employee) |
| Form field details | [Employee details and fields](/docs/hrm/employee-details) |
| Tabs and sidebar | [Employee 360 view](/docs/hrm/employee-360) |
| Formal actions | [Employee actions](/docs/hrm/employee-actions) |

## Best Practices

:::tip[Name the employee as it appears on identity documents]
Use English and Arabic names in the correct order (first / middle / last). The display name is composed automatically from first and last name.
:::

:::warning[Do not delete an employee with attendance, payroll, or loans]
Use [Terminate](/docs/hrm/employee-actions) when employment ends formally, and keep the reason in the dialog.
:::

## Related Sections

- [Employee list](/docs/hrm/employee-list)
- [Create a new employee](/docs/hrm/create-employee)
- [Employee 360 view](/docs/hrm/employee-360)
- [Employee actions](/docs/hrm/employee-actions)
