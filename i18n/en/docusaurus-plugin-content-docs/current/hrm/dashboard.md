---
sidebar_position: 38
title: Human Resources dashboard
---

# Human Resources dashboard

The **Human Resources dashboard (HRM Dashboard)** is an operational workforce summary: headcount, saudization, department and salary distribution, attendance trend, and contract timelines.

**Path:** Sidebar ← Human Resources ← Human Resources dashboard  
**Page:** `/Entities/HRM/Dashboard`

## Summary indicators (KPIs)

| Indicator | Meaning |
|---|---|
| **Total Employees** | Total employees in the loaded data |
| **Departments** | Number of departments shown in the distribution |
| **Avg Salary** | Average salary |
| **Active Contracts** | Active contracts per dashboard logic |

## Cards and charts

| Card | Content |
|---|---|
| **Saudization** | Saudi / non-Saudi distribution and the displayed compliance rate |
| **Employees vs Departments** | Headcount distribution by department |
| **Employees vs Salaries** | Highest salaries ranked descending |
| **Workforce Attendance Trend** | Attendance hours trend across days |
| **Employee Contract Timelines** | Timeline / Gantt of contract dates from start to end |

## Quick actions

| Action | Destination / function |
|---|---|
| **Attendance Clock** | Attendance clock `/app/Attendance` |
| **Directory** | Employee directory `/Entities/HRM/Employee` |
| **Refresh** | Reload dashboard data |

## Best Practices

:::tip[Refresh the dashboard before a management meeting]
Select Refresh so headcounts and charts reflect the latest employee data.
:::

:::note[The summary reflects loaded data]
Indicators depend on what the dashboard API returns for your permissions; they are not necessarily a locked accounting report.
:::

## Related Sections

- [Organizational chart](/docs/hrm/org-chart)
- [Employee list](/docs/hrm/employee-list)
- [Employee attendance](/docs/hrm/employee-attendance)
