---
sidebar_position: 31
title: Cost items
---

# Cost items

A **cost item (Cost Item)** is an entry in the employer cost catalog, managed with the same logic as a [salary item](/docs/hrm/salary-item) with cost-specific value fields.

**Access:**  
- CostItem entity  
- And via **[Payroll items](/docs/hrm/payroll-items)** ← **CostItems** tab on `/Entities/HRM/PayrollItems`

## What a cost item does

- Defines a cost linked to operations (for example employer contributions per your organization setup)
- Sets a fixed value or percentage according to type
- Supports permanence and customizability flags as with salary items

## Required fields

| Field | Why it is required |
|---|---|
| **Name (name)** | Item identity |
| **Type (entityType)** | Determines whether the value is fixed, percentage, or calculated |

### Value by type

| Type | Field |
|---|---|
| Fixed / value | **cI_val** |
| Percentage | **cI_prc** |
| Calculated | Shown as calculated in the UI |

### Common flags

| Field | Meaning |
|---|---|
| **isPermanent** | Permanent item |
| **isCanBeCustomized** | Customizable when used |

## Best Practices

:::tip[Keep the cost catalog separate from earnings]
Use SalaryItems for employee net pay and CostItems for employer cost so payroll reports stay clear.
:::

## Related Sections

- [Payroll items (hub)](/docs/hrm/payroll-items)
- [Salary items](/docs/hrm/salary-item)
- [Payrolls](/docs/hrm/payroll)
