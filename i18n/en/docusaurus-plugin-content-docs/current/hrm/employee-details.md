---
sidebar_position: 5
title: Employee details and fields
---

# Employee details and fields

The details form is the heart of the master data. It appears in full on the Standard View at `/Entities/HRM/Employee/{id}`, and in the **Details** tab inside the 360 view. Fields are grouped into collapsible sections.

## Header fields

From the top of the page, without scrolling into the form:

| Field | Description |
|---|---|
| **Active** | Whether the record is enabled for daily operations |
| **DataConfidentiality** | Who can view the record |
| **EntityStatus** | Lifecycle status — required |
| **EntityType** | Employee classification — required |

## 1) Names and display identity

| Field | Description |
|---|---|
| First / middle / last name (English) | English name parts — required |
| First / middle / last name (Arabic) | Arabic name parts — required |
| Display name | Composed automatically from first and last name |

## 2) General information

| Field | Description |
|---|---|
| Birth date (birthDate) | Employee date of birth |
| Personal email (personalEmail) | Non-operational email; must be valid if entered |
| Mobile (mobile) | Personal contact number |
| Nationality | Employee nationality |
| Marital | Marital status |
| Gender | Employee gender |
| BloodGroup | Blood group when needed for medical purposes |

## 3) System information

| Field | Description |
|---|---|
| Application user (AppUsr) | Link to a system user account — locked after creation |
| Work email (workEmail) | Operational email — locked after creation |

:::note[After the first save]
Application user and work email become read-only. Any later correction needs an administrative path outside direct edit on the form.
:::

## 4) Hiring information

| Field | Description |
|---|---|
| Start / end date | Visible assignment period; end cannot precede start |
| Join / exit date | Actual join and exit dates; exit cannot precede join |
| DirectManager | Direct operational supervisor |
| WorkShift | Work shift |
| Grade | Job grade |
| Job | Job title |
| Branch | Work branch |
| Department | Organizational department |
| MedicalInsurance | Medical insurance link or data |
| ResumeSource | How the candidate/employee was sourced |
| Currency | Compensation currency |
| Working hours | Approved working hours for the record |

## 5) Address

Records the residence or approved contact address (country, city, state, street, zip code as shown in the interface).

## Form validations

1. End date ≥ start date
2. Exit date ≥ join date
3. Email format is valid when filled
4. Type and status are required in the header

If a validation error appears, complete the missing field and save again.

## How to save

1. Edit the required fields
2. Select **Save Changes**
3. For operational follow-up, open `/Entities/HRM/Employee/360/{id}`

## Best Practices

:::tip[Fill department, job, and manager from the first week]
Structure reports and payroll runs weaken if hiring fields stay empty after the actual assignment.
:::

:::warning[Currency is not for display only]
Salary and cost amounts are read in the record currency. Set it early so payroll comparisons do not mix.
:::

## Related Sections

- [Create a new employee](/docs/hrm/create-employee)
- [Employee 360 view](/docs/hrm/employee-360)
- [Employee actions](/docs/hrm/employee-actions)
