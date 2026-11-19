---
sidebar_position: 28
title: Work shifts
---

# Work shifts

A **work shift (Work Shift)** defines the weekly hours schedule for a given time zone, and is linked to the employee at assignment.

**Page:** `/Entities/HRM/WorkShift` · record `/Entities/HRM/WorkShift/{id}`

## What this screen does

- Creates a shift with bilingual names and time zone
- Sets from/to for each day from Sunday to Saturday

## Primary fields

| Field | Meaning |
|---|---|
| **Name (name)** | Shift name |
| **Arabic name (nameAr)** | Arabic display |
| **Time zone (timeZoneId)** | Timing reference for the shift |

### Day times

Each day has two fields:

| Day | From | To |
|---|---|---|
| Sunday | `sun_From` | `sun_To` |
| Monday | `mon_From` | `mon_To` |
| Tuesday | `tue_From` | `tue_To` |
| Wednesday | `wed_From` | `wed_To` |
| Thursday | `thr_From` | `thr_To` |
| Friday | `fri_From` | `fri_To` |
| Saturday | `sat_From` | `sat_To` |

Type and status are part of the record header like other HRM entities.

## Best Practices

:::tip[Match the time zone to the work location]
A shift without a correct timeZoneId confuses attendance interpretation across branches.
:::

:::note[Rest days]
Leave from/to empty or follow your organization policy for non-working days; do not invent hours that are not in the interface.
:::

## Related Sections

- [Employee attendance](/docs/hrm/employee-attendance)
- [Create a new employee](/docs/hrm/create-employee)
- [Fingerprint settings](/docs/hrm/settings)
