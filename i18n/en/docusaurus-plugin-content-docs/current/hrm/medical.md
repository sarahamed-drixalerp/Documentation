---
sidebar_position: 29
title: Medical insurance
---

# Medical insurance

**Medical insurance (Medical)** defines a medical policy or coverage that can be linked to the employee, with an optional supplier and dates.

**Path:** Sidebar ← Human Resources ← Medical insurance  
**Pages:** `/Entities/HRM/Medical` · `/Entities/HRM/Medical/new` · `/Entities/HRM/Medical/{id}`

## What this screen does

- Creates insurance records with bilingual names
- Links to a supplier and start/end dates
- Supports tree view with grouping by supplier

## Primary fields

| Field | Meaning |
|---|---|
| **Name (name)** | Coverage / policy name |
| **Arabic name (nameAr)** | Arabic display |
| **Supplier (supplierId)** | Insurance party or provider |
| **Start date (startDate)** | Coverage start |
| **End date (endDate)** | Coverage end |

Type and status in the header are required as record governance.

## List and tree

- **List / cards:** for daily work
- **Tree:** group by supplier (`Supplier`) and other available grouping fields

You can also filter the list by supplier.

## Best Practices

:::tip[Update coverage dates before linking employees]
Expired or empty dates weaken clarity on who is under active coverage.
:::

## Related Sections

- [Employee details and fields](/docs/hrm/employee-details)
- [Create a new employee](/docs/hrm/create-employee)
