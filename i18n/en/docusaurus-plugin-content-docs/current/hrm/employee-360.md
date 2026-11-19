---
sidebar_position: 6
title: Employee 360 view
---

# Employee 360 view

The 360 view is the employee’s operations room. Instead of moving among separate screens, HR and payroll work from one record that holds details, salary items, payrolls, evaluations, attendance, leave, and related compensation.

**Path:** From the employee list select 360 View, or switch from the Standard View to the 360 View.  
**Page:** `/Entities/HRM/Employee/360/{id}`

## What the 360 view provides

- A fixed header with name, number, status, type, and actions
- Tabs for every work area linked to the employee
- A sidebar for quick activity create and for viewing activities, attachments, and logs
- Direct movement from master data to related records without losing context

## Tabs

| Tab | What you will find | Guide |
|---|---|---|
| **Details** | General, system, hiring, and address information | [Employee details](/docs/hrm/employee-details) |
| **SalaryItems** | Earnings and deduction items on the employee | [Employee salary items](/docs/hrm/employee-salary-items) |
| **Payroll** | Payroll runs linked to the employee | [Payrolls](/docs/hrm/payroll) |
| **Evaluations** | Performance evaluations linked to the employee | [Evaluations tab](/docs/hrm/employee-evaluations-tab) |
| **Dependants** | Family members or dependants | [Dependants](/docs/hrm/employee-dependants) |
| **Qualifications** | Qualifications and certificates | [Qualifications](/docs/hrm/employee-qualifications) |
| **Attendance** | Attendance records linked to the employee | [Employee attendance](/docs/hrm/employee-attendance) |
| **Vacations** | Leave records linked to the employee | [Employee leave](/docs/hrm/employee-leave) |
| **Expenses** | Employee expenses | [Employee expenses](/docs/hrm/employee-expenses) |
| **Business Trips** | Business trips | [Employee business trips](/docs/hrm/employee-business-trips) |
| **Loans** | Employee loans | [Employee loans](/docs/hrm/employee-loans) |

## Sidebar

### Quick create

| Button | Use |
|---|---|
| Note | Document a quick fact or decision |
| Call | Log a call linked to the employee |
| Task | A follow-up task for an HR team member |
| Meeting | A meeting linked to the employee |
| Visit | A site or office visit linked to the record |

### Context panels

- **Activities** — daily movement on the record
- **Attachments** — employee files
- **Logs** — audit trail of who changed what

## Standard View vs. 360 View

| | Standard | 360 |
|---|---|---|
| Path | `/Entities/HRM/Employee/{id}` | `/Entities/HRM/Employee/360/{id}` |
| Creation | Yes | After the record exists |
| Focus | Master data | Full operations |
| Tabs | No | Yes |
| Formal actions | Yes | Yes |

## Best Practices

:::tip[Make 360 the default screen after creation]
After saving the employee, manage related items from 360. Use the Standard View only for quick field reviews.
:::

:::note[Wide tab bars scroll horizontally]
If the **Loans** or **Business Trips** tab does not appear on a small screen, scroll the tab bar.
:::

## Related Sections

- [Employee salary items](/docs/hrm/employee-salary-items)
- [Employee actions](/docs/hrm/employee-actions)
- [Payrolls](/docs/hrm/payroll)
