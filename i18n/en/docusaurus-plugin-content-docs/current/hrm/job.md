---
sidebar_position: 26
title: Jobs
---

# Jobs

A **job (Job)** is the job-title definition in the organization, later linked to the employee and to the job post when hiring.

**Path:** Sidebar ← Human Resources ← Jobs  
**Pages:** `/Entities/HRM/Job` · `/Entities/HRM/Job/new` · `/Entities/HRM/Job/{id}`

## What this screen does

- Creates and edits job titles in both languages
- Optionally links to a department and grade
- Filters the list by department and grade

## Required fields

| Field | Why it is required |
|---|---|
| **Name (name)** | English / operational title |
| **Arabic name (nameAr)** | Arabic display and reports |

### Optional

| Field | Note |
|---|---|
| **Department (departmentId)** | Organizational unit for the job |
| **Grade (gradeId)** | Optional link to [Grade](/docs/hrm/grade) |

Type and status in the header are part of record governance like other HRM entities.

## Filtering in the list

You can filter by:

- Department
- Grade

## Best Practices

:::tip[Stabilize jobs before job posts]
A job post requires `jobId`; create the title here first. See [Job post](/docs/hrm/job-post).
:::

:::tip[Link the grade when the career ladder is clear]
Linking gradeId helps compensation and structure reports without being required.
:::

## Related Sections

- [Grades](/docs/hrm/grade)
- [Job post](/docs/hrm/job-post)
- [Employee list](/docs/hrm/employee-list)
