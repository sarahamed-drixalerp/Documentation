---
sidebar_position: 5
title: Project Details and Fields
---

# Project Details and Fields

The details form is the core of the project’s master data. It appears in full in the Standard View and under the **Details** tab in the 360 View. Its fields are organized into three collapsible sections.

## 1) General Information

The data everyone uses to identify the project.

| Field | Description |
|---|---|
| Name | Operational name in English |
| Arabic Name | Appears in the Arabic interface and reports |
| Account Manager | Commercial owner of the customer relationship |
| Project Manager | Operational owner; this field is required |
| Customer | Beneficiary organization |
| Team Size | Planned or current team size |
| Start Date / End Date | Project duration; both are required, and the end date cannot precede the start date |
| Calculated Value | Project value in the selected currency |
| Currency | Project currency. Amounts are displayed in the record’s currency |
| Description / Arabic Description | Work context, up to 10,000 characters |

In the 360 View, a description character counter helps you remain within the limit.

## 2) Project Governance

These fields connect the project to its administrative and contractual framework.

| Field | Description |
|---|---|
| Agreement | Contract or framework agreement with the customer |
| Program | Parent program, if applicable |
| Portfolio | Investment or strategic portfolio |
| PMO Auditor | Person who oversees compliance with PMO procedures |

:::tip[Complete governance fields during the first week]
Management reporting by portfolio or program is less effective when these fields remain empty on major projects.
:::

## 3) Project Settings

These settings control time entry, progress, and remaining cost.

| Field | Description |
|---|---|
| Hour Increment | Smallest unit for logging time; default is 1 hour |
| Maximum Regular Hours | Daily regular-hours limit; default is 8 |
| Maximum Overtime Hours | Daily overtime limit; default is 4 |
| Completion Percentage | Project progress, updated during execution |
| Estimate to Complete | Estimated remaining cost through closure |

These settings affect timesheets, hour approvals, and cost indicators. Do not change them after time entry begins unless the project manager has made a clear decision to do so.

## Header Fields Outside the Form

At the top of the page, without scrolling into the form, you can access:

- **Image / Avatar**
- Direct **Title Editing**
- Project **Activation / Deactivation**
- **Confidentiality Level**
- **Status** and **Type**
- Action buttons: Terminate, Pause, Resume, Complete, and Approve Timesheet

## How to Save

1. Edit the required fields
2. Select **Save Changes** to store the updated draft
3. Select **Post** to apply the displayed update while keeping the record editable

If a validation error appears, the screen moves to the first incomplete field. Complete it, then save again.

## Best Practices

:::tip[Write the description for a new team member]
In short lines, state the project objective, work location, and what is out of scope. Do not simply repeat the project name.
:::

:::warning[Currency is not only for display]
Amounts are stored in the project currency. Changing the currency later makes budget-to-invoice comparisons unreliable. Set it correctly from day one.
:::

## Related Sections

- [Create a New Project](/docs/pmo/create-project)
- [Project Actions](/docs/pmo/project-actions)
- [Timesheet Approval](/docs/pmo/timesheet)
