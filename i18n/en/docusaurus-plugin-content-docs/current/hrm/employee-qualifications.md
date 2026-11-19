---
sidebar_position: 9
title: Employee qualifications
---

# Employee qualifications

The qualifications tab documents academic or professional certificates and qualifications linked to the employee inside the 360 record.

**Location:** 360 view ← **Qualifications**  
**Parent record:** `/Entities/HRM/Employee/360/{id}`

## What this tab does

- Manages qualification records belonging to the employee
- Saves bilingual names, type, and status
- Documents acquire date, university, college, and description

## Required fields

| Field | Description |
|---|---|
| Name (name) | Qualification name in English |
| Arabic name (nameAr) | Qualification name in Arabic |
| Type (type) | Qualification classification |
| Status (status) | Record status |

## Additional fields

| Field | Description |
|---|---|
| Acquire date (acquireOn) | When the qualification was acquired |
| University (univercity) | University name as shown in the interface |
| College (college) | College or academic department |
| Description (descriptions) | Additional details about the qualification |

:::note[Field spelling univercity]
The field name in the interface is `univercity` as defined in the system.
:::

## How to add a qualification

1. Open the employee 360 view
2. Go to the **Qualifications** tab
3. Add a new record
4. Fill `name`, `nameAr`, `type`, and `status`
5. Enter acquire date, university, college, and description as needed
6. Save the child record

## Best Practices

:::tip[Link the qualification to a clear acquire date]
The acquire date helps later verification and competency reports without returning to paper files.
:::

:::warning[Both language names are required]
Do not rely on one language only. Arabic and English interfaces and reports read both fields together.
:::

## Related Sections

- [Employee 360 view](/docs/hrm/employee-360)
- [Employee dependants](/docs/hrm/employee-dependants)
- [Evaluations tab](/docs/hrm/employee-evaluations-tab)
