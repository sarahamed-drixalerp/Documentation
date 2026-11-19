---
sidebar_position: 30
title: Salary items
---

# Salary items

A **salary item (Salary Item)** is an entry in the earnings/deductions catalog used when assigning employee salary items and running payrolls.

**Access:**  
- Directly via the SalaryItem entity  
- And via the **[Payroll items](/docs/hrm/payroll-items)** hub ← **SalaryItems** tab on `/Entities/HRM/PayrollItems`

## What a salary item does

- Defines the item name and type (EntityType)
- Sets a fixed value or percentage according to the item type
- Determines whether it is permanent (`isPermanent`) and customizable on the employee (`isCanBeCustomized`)

## Required fields

| Field | Why it is required |
|---|---|
| **Name (name)** | Catalog identity for the item |
| **Type (entityType)** | Determines item behavior (fixed / percentage / calculated by type) |

### Value by type

| Type (approximate by type name) | Field used |
|---|---|
| Fixed / value | **sI_val** (value) |
| Percentage | **sI_prc** (percentage %) |
| Calculated | Shown as calculated without a manual value entry in the UI |

### Common flags

| Field | Meaning |
|---|---|
| **isPermanent** | Permanent item |
| **isCanBeCustomized** | Can be customized when assigned to the employee |

## Best Practices

:::tip[Build the catalog before assigning employee items]
Assign items to the employee from [Employee salary items](/docs/hrm/employee-salary-items) after the catalog is stable here.
:::

:::warning[Match the value to the item type]
Do not leave sI_val empty for a fixed item, and do not mix percentage with a fixed value.
:::

## Related Sections

- [Payroll items (hub)](/docs/hrm/payroll-items)
- [Cost items](/docs/hrm/cost-item)
- [Employee salary items](/docs/hrm/employee-salary-items)
- [Payrolls](/docs/hrm/payroll)
