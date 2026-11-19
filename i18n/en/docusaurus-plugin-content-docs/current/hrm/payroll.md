---
sidebar_position: 17
title: Payrolls
---

# Payrolls

A **payroll** is a period payroll run in Drixal ERP. The period gathers employees, calculates earnings and deductions, then is published and locked.

**Path:** Sidebar ← Human Resources ← Payrolls  
**Pages:** `/Entities/HRM/Payroll` · create `/Entities/HRM/Payroll/new` · record `/Entities/HRM/Payroll/{id}`

There is no separate 360 view; the record page is the workspace.

## What a payroll does for your business

- Defines the pay period: name, start date, end date
- Links employees to the run and calculates total earnings, deductions, and net payment
- Provides a clear lifecycle: Pending → Generated → Completed and locked
- Prevents edits after generate or publish so totals stay trustworthy

## Payroll list

### Default columns

- Name
- Start date
- End date
- Total earning (TotalEarning)
- Total deduction (TotalDeduction)
- Net payment (NetPayment)
- Status (colored tag)
- Row actions: Edit, Delete

### Statuses in the list

| Status | Meaning |
|---|---|
| **Pending** | Editable; assign employees then generate |
| **Generated** | Figures calculated; edit locked; publish available |
| **Completed** | Published and permanently locked |

### Filtering

You can filter by: name, status, start date, end date.

## Create a payroll

1. From **Payrolls**, select **Create New Payroll**
2. `/Entities/HRM/Payroll/new` opens
3. Enter name, start date, and end date
4. Set header data (type / status / confidentiality / description) as needed
5. Save the record
6. Go to the **Employees** tab and assign employees
7. Run **Generate**, then later **Publish** — details in [Payroll lifecycle](/docs/hrm/payroll-lifecycle)

### Required fields

| Field | Why it is required |
|---|---|
| **Name** | Identifies the pay period |
| **Start date** | Period start |
| **End date** | Period end |
| **Header data (type / status / confidentiality)** | Record governance in the header |

## Employees tab

After saving, assign employees from the **Employees** tab inside `/Entities/HRM/Payroll/{id}`. Without at least one employee, generate will not run.

Employee payrolls can also open from the Payroll tab on the [employee 360 view](/docs/hrm/employee-360).

## Lock after generate or complete

When the status is **Generated** or **Completed**, the form and attachments are locked for editing. Review employees and totals before generate.

:::danger[Edit locks after generate or complete]
Do not rely on a later edit. Correct assignment and salary items before selecting Generate.
:::

## Best Practices

:::tip[Close the period before starting the next month]
Finish generate and publish for a completed period before creating a new run for the same group so figures do not mix.
:::

:::tip[Review net payment before publish]
Publish locks the run as Completed. Any correction after publish needs an administrative policy outside direct edit.
:::

## Related Sections

- [Payroll lifecycle](/docs/hrm/payroll-lifecycle)
- [Employee salary items](/docs/hrm/employee-salary-items)
- [Employee overview](/docs/hrm/employee-overview)
