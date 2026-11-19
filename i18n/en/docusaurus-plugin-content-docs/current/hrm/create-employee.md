---
sidebar_position: 4
title: Create a new employee
---

# Create a new employee

Creating an employee turns a hiring decision into a record that payroll, attendance, and leave can link to. After you save it, the employee number appears, and you can open the 360 view to add related items.

## How to create an employee

1. From **Employees**, select the create (+) button
2. The Standard View opens at `/Entities/HRM/Employee/new`
3. Complete the required fields in the header and bilingual names
4. Add general, system, hiring, and address information if already known
5. Select **Save Changes**
6. After saving, go to the [360 view](/docs/hrm/employee-360) to continue with related items

:::tip[Review the work email before the first save]
Application user and work email lock after creation. Correct them before the first save.
:::

## Required fields

The employee cannot be saved without these fields:

| Field | Why it is required |
|---|---|
| **First / middle / last name (English)** | Operational identity and search |
| **First / middle / last name (Arabic)** | Arabic UI and local reports |
| **Type (EntityTypeId)** | Record classification |
| **Status (EntityStatusId)** | Starting point in the lifecycle |

The **display name** is composed automatically from first and last name; it is not typed as a separate field on the main form.

## Form sections at creation

| Section | Fields |
|---|---|
| **General information** | Birth date, personal email, mobile, nationality, marital status, gender, blood group |
| **System information** | Application user (AppUsr), work email (locked after creation) |
| **Hiring information** | Start/end and join/exit dates, direct manager, work shift, grade, job, branch, department, medical insurance, resume source, currency, working hours |
| **Address** | Country, city, state, street, zip code (as shown in the interface) |

Full field details are in [Employee details and fields](/docs/hrm/employee-details).

## Validations on save

| Validation | Result |
|---|---|
| End date earlier than start date | Rejected or the invalid date is cleared |
| Exit date earlier than join date | Edit rejected |
| Invalid email format | Field validation error |
| Type or status left blank | “This field is required” appears |

## Common creation errors

- Missing Arabic or English names in all three parts
- Leaving type or status blank
- Entering an end date before the start date
- Entering an exit date before the join date
- Entering an incomplete email format then trying to save

## Immediately after saving

1. Review the number in the header
2. Go to `/Entities/HRM/Employee/360/{id}`
3. Add [salary items](/docs/hrm/employee-salary-items) if applicable
4. Add [dependants](/docs/hrm/employee-dependants) and [qualifications](/docs/hrm/employee-qualifications) as needed
5. Later assign the employee to a [payroll run](/docs/hrm/payroll)

## Best Practices

:::tip[Create the employee before attendance or payroll]
Attendance or a payroll run without an approved employee record loses the cost and reporting link.
:::

:::warning[Do not use one record for two people]
Each person needs a separate employee record, even when the department or salary is similar.
:::

## Related Sections

- [Employee details and fields](/docs/hrm/employee-details)
- [Employee 360 view](/docs/hrm/employee-360)
- [Employee actions](/docs/hrm/employee-actions)
