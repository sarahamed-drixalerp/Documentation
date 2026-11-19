---
sidebar_position: 8
title: Employee dependants
---

# Employee dependants

The dependants tab records individuals linked to the employee for HR purposes (such as insurance or family records) inside the employee record itself.

**Location:** 360 view ← **Dependants**  
**Parent record:** `/Entities/HRM/Employee/360/{id}`

## What this tab does

- Manages dependant records belonging to the employee
- Saves bilingual names, type, status, and relation
- Documents birth date and gender when needed

## Required fields

| Field | Description |
|---|---|
| Name (name) | Dependant English name |
| Arabic name (nameAr) | Arabic name |
| Type (type) | Dependant record classification |
| Status (status) | Record status |

## Additional fields

| Field | Description |
|---|---|
| Relation (RelationId) | Kinship or relationship to the employee |
| First / middle / last name | Name detail when those fields are present |
| Birth date (birthDay) | Dependant date of birth |
| Gender (GenderId) | Dependant gender |

## How to add a dependant

1. Open the employee 360 view
2. Go to the **Dependants** tab
3. Add a new record
4. Fill `name`, `nameAr`, `type`, and `status`
5. Select relation, gender, and birth date when available
6. Save the child record

## Best Practices

:::tip[Match names to official documents]
Use names as they appear on identity or passport so they do not conflict with insurance or formal requests.
:::

:::warning[Do not leave type or status blank]
Without type and status the record will not save. Complete required fields before leaving the dialog.
:::

## Related Sections

- [Employee 360 view](/docs/hrm/employee-360)
- [Employee qualifications](/docs/hrm/employee-qualifications)
- [Employee details and fields](/docs/hrm/employee-details)
