---
sidebar_position: 8
title: Scope
---

# Scope

The Scope tab answers one question: **What did we commit to deliver to this customer, and what changed after signing?** It contains three related record types.

**Location:** 360 View ← **Scope**

## Sales Orders

A sales order is the detailed commercial commitment linked to the project: customer, agreement, date, value, budget, and planned profit percentage.

Use it when an agreement becomes a billable execution request in the financial system.

**What to track**

- Customer and agreement
- Sales order date
- Value, budget, and planned profit

:::tip[Link the sales order to the same project]
A sales order linked to the wrong project makes revenue-to-cost comparisons inaccurate.
:::

## Change Requests

A change request documents a scope modification after the original plan is approved. It can have no impact, zero cost, no schedule impact, or both cost and schedule impact.

| Common type | Meaning |
|---|---|
| No Impact | A clarification or correction that does not change the commitment |
| Zero Cost | A scope change without a financial claim |
| No Schedule Impact | A change that does not move the end date |
| Cost and Schedule Impact | Requires approval before execution |

The usual statuses are Draft, then Posted.

**How to use it**

1. Record the request as soon as it arises from the customer or site
2. Specify its type and date
3. If it has a financial or schedule impact, do not begin execution before approval
4. After approval, update the schedule, line items, and billing plan

:::warning[Do not execute before approving the change request]
A common cause of project losses is performing extra work as a courtesy and later discovering that it cannot be invoiced.
:::

## Deliverables

A deliverable is a tangible result accepted by the customer, such as a document, report, technical handover, or work package.

| Field | Description |
|---|---|
| Type | Technical / Document / Report, or your organization’s configured types |
| Status | Planned / In Progress / Completed |
| Line Item | Links the deliverable to a project line item |
| Work Item | Links it to a task or package in the schedule |
| Delivery Date | Expected delivery date |
| Approval Date | Date the customer accepted it |

**Deliverable statuses**

- Planned
- In Progress
- Completed

## Best Practices

:::tip[Close the scope loop every week]
Review open sales orders, pending change requests, and overdue deliverables in one short meeting. Do not leave a change request in Draft for weeks.
:::

## Related Sections

- [Project Line Items](/docs/pmo/line-items)
- [Schedule and Calendar](/docs/pmo/schedule)
- [Financials and Billing](/docs/pmo/financials)
