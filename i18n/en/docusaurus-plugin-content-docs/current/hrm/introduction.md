---
sidebar_position: 1
title: Human Resources introduction
---

# Human Resources introduction

The Human Resources module in Drixal ERP is the operations hub for people across the organization. It brings employees, payroll, hiring, evaluation, master data, and the organizational structure into one space, then links every employee to a live record: assignment, attendance, leave, compensation, and loans.

Without this module, people data stays scattered: a contract in email, a salary in a file, attendance on a device, and leave in spreadsheets. Inside Drixal, an employee becomes a live record connected to department, job, grade, payroll runs, and operating cost.

## What the module does for your business

- Unifies the working language: Employee → Assignment → Salary → Attendance and leave
- Gives HR one screen for net pay, cost, loans, and evaluation
- Lets leadership see the structure and workforce instead of asking each department separately
- Links operations to finance through payroll runs, salary items, and compensation

## Hierarchy

```text
Organization / branches
  └── Departments, jobs, and grades
        └── Employee
              ├── Salary items and compensation
              ├── Attendance and leave
              ├── Evaluations, dependants, and qualifications
              └── Payroll runs, loans, expenses, and business trips
```

| Level | Purpose |
|---|---|
| **Branch / department / job / grade** | Organizational frame for assignment and reporting |
| **Employee** | Day-to-day execution unit: identity, assignment, pay, attendance |
| **Payroll** | Run a pay period for a group of employees, then calculate and publish |
| **Related tabs** | Child records linked to the employee (items, dependants, loans…) |

You can open an employee record directly from the list. Linking department, job, and direct manager is optional at creation, but important for management reporting and payroll runs.

## Where to find it in the system

From the side menu choose **Human Resources**, then:

- Dashboard
- **Employees** ← the focus of this guide
- Payrolls
- Recruitment / hirings
- Evaluation
- Organizational structure
- Master data (types, statuses, grades, salary items…)
- Settings

## Who uses this section

| Role | Daily use |
|---|---|
| HR manager | Governance, assignment, termination, policies |
| Payroll specialist | Salary items, payroll runs, calculate and publish |
| Department manager | Team follow-up, attendance, evaluations |
| Recruitment | Resume sources and candidates through conversion to employee |
| Employee (personal app) | Personal attendance and leave via the attendance app when enabled |

## How the Human Resources guide is organized

1. Understand the employee, types, statuses, and lifecycle
2. Work with the list (search, filter, create)
3. Fill details, hiring, and address
4. Use the 360 view and every related tab
5. Formal actions: terminate, change department/job/salary
6. Payroll runs and the calculate-and-publish lifecycle

## Best Practices

:::tip[Do not start payroll before the employee record]
Create the employee first with the required fields, then add salary items and assign them to a payroll run. Any calculation without an approved employee record loses the cost and reporting link.
:::

:::warning[Permissions show or hide data]
Some users see the employee as read-only, and some financial fields may be hidden. If you see “Restricted information”, that is a permissions setting—not a defect.
:::

## Related Sections

- [Employee overview](/docs/hrm/employee-overview)
- [Employee list](/docs/hrm/employee-list)
- [Create a new employee](/docs/hrm/create-employee)
- [Payrolls](/docs/hrm/payroll)
